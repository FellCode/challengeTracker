import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { DateConverterService } from 'src/app/services/date-converter.service';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent{
  @Input()
  game!: Game;
  editMode: boolean = false;

  constructor(private dataStorage: DataStorageService, private dateConverter: DateConverterService){}

  getImageURL(game : Game) : string {
    return `https://via.assets.so/game.png?id=${game.id}&q=95&w=300&h=200&fit=fill`
  }


  toggleEdit(event? : boolean){
    this.editMode = !this.editMode;
  }

  isCompletable() : boolean {
    return this.game.startDate != undefined && this.game.finishedDate == undefined;
  }

  openFinishDialog(){
    // let dialogRef = this.dialogService.open(ConfirmationDialogComponent, {
    //   data: {
    //     title: "Spiel beenden",
    //     message: "Wann hast du das Spiel beendet?"
    //   }
    // })

    // dialogRef.afterClosed().subscribe(result => {
    //   this.game.finishedDate = this.dateConverter.convertDateForDatabase(result);
    //   this.game.done = true;
    //   this.dataStorage.updateGame(this.game);
    // });
  }
}
