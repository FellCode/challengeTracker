import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';
import { FormBuilder, FormGroup} from '@angular/forms';
import { DataStorageService } from 'src/app/services/data-storage.service';


@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent implements OnInit {
  @Input()
  game!: Game;

  @Output()
  toggleEdit = new EventEmitter<boolean>();

  editForm!: FormGroup;

  constructor(private fb: FormBuilder,private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.editForm = this.fb.group({
      name: this.game.name,
      genre: this.game.genre,
      platform: this.game.platform,
      startDate: this.game.startDate,
      finishedDate: this.game.finishedDate,
      notes: this.game.notes,
      rating: this.game.rating,
    });
  }

  getMenuItems() : String[] {
    return Object.keys(Genre);
  }

  getPlatformItems() : String[] {
    return Object.keys(Platform);
  }

  onSave(){
    this.updateGameFromForm()
    this.dataStorageService.updateGame(this.game)
    this.toggleEdit.emit(false);
  }

  onCancel(){
    this.toggleEdit.emit(false);
  }

//  onFileSelected(event: any) {
//    this.selectedFile = event.target.files[0];
//  }

//  uploadImage(){
//    this.dataStorageService.uploadImage(this.game.id,this.selectedFile)
//  }


  private updateGameFromForm(){
    this.game.name = this.editForm.value.name;
    this.game.genre = this.editForm.value.genre;
    this.game.platform = this.editForm.value.platform;
    this.game.startDate = this.editForm.value.startDate;
    this.game.finishedDate = this.editForm.value.finishedDate;
    this.game.notes = this.editForm.value.notes;
    this.game.rating = this.editForm.value.rating;
    console.dir(this.game)
  }
}
