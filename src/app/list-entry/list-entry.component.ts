import { Component, Input } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent {
  @Input()
  game!: Game;
}
