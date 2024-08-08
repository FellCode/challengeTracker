import { Component, OnInit,Output, EventEmitter, inject, OnDestroy } from '@angular/core';
import { Platform } from '../../model/platform';
import { Genre } from '../../model/genre';
import { Filter } from '../../model/filter';
import { FormBuilder, FormGroup } from '@angular/forms';

import { GamesStore } from 'src/app/store/games.store';
import { patchState } from '@ngrx/signals';
import {Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnDestroy{
  #gamesStore = inject(GamesStore);
  private destroy$ = new Subject<void>();
  filterForm: FormGroup;


  constructor(private fb: FormBuilder){
    this.filterForm = this.fb.group({
      name: [''],
      platform: [null],
      genre: [null],
      finished: [null]
    });

    this.filterForm.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((filterValues: Filter) => {
      patchState(this.#gamesStore, {filter: filterValues});
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  getPlatformItems() : String[] {
    return Object.keys(Platform);
  }
  
  getGenreItems() : String[] {
    return Object.keys(Genre);
  }
  
  resetFilter(){
    this.filterForm.reset();
  }
}
