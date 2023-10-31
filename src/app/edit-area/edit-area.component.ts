import { Component, Input } from '@angular/core';
import { Game } from '../model/game';
import { Genre } from '../model/genre';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent {
  @Input()
  game!: Game;

  getMenuItems() : String[] {
    return Object.keys(Genre);
  }
}
