import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  constructor(private gamesService : GamesService){}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
  

}
