import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { GamesService } from './games.service';
import { Game } from '../model/game';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  BASE_URL : string = "http://localhost:8080/api/v1/games"

  constructor(private http: HttpClient, private gamesService: GamesService) { }

  storeGames(){
    const games = this.gamesService.getGames();
    this.http
      .post(
        this.BASE_URL,
        games
      )
    .subscribe(response => {
      console.log(response);
    });  
  }

  fetchGames(){
    return this.http
    .get<Game[]>(this.BASE_URL)
    .pipe(
      tap(games => {
        this.gamesService.setGames(games);
        console.log(games);
      })
    );
  }
}
