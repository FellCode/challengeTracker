import { Injectable } from '@angular/core';
import { Game } from '../model/game';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gamesChanged = new Subject<Game[]>();
  private games: Game[] = [];

  constructor() { }

  setGames(games: Game[]){
    this.games = games;
    this.gamesChanged.next(this.games.slice());
  }

  getGames(){
    return this.games.slice();
  }

  addGame(game: Game){
    this.games.push(game);
    this.gamesChanged.next(this.games.slice());
  }

  updateGame(index: number, newGame: Game){
    this.games[index] = newGame;
    this.gamesChanged.next(this.games.slice());
  }

  deleteGame(index: number) {
    this.gamesChanged.next(this.games.slice());
  }
}
