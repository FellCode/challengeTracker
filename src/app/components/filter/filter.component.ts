import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Platform } from '../../model/platform';
import { Genre } from '../../model/genre';
import { Filter } from '../../model/filter';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  
  constructor(private fb: FormBuilder){}
  
  filterForm!: FormGroup;
  @Output() filterChanged: EventEmitter<Filter> = new EventEmitter<Filter>();
  
  ngOnInit(){
    this.initForm();
    this.subscribeToFormChanges()
  }
  
  getPlatformItems() : String[] {
    return Object.keys(Platform);
  }
  
  getGenreItems() : String[] {
    return Object.keys(Genre);
  }
  
  initForm() {
    this.filterForm = this.fb.group({
      name: [""],
      platform: [null],
      genre: [null],
      finished: [null]
    });
  }

  subscribeToFormChanges() {
    this.filterForm.valueChanges.subscribe((filterValues: Filter) => {
      // Do something with the updated filter values
      console.dir(filterValues)
      this.filterChanged.emit(filterValues);
    });
  }
}
