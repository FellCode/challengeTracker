import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { GamesService } from './games.service';
import { Game } from '../model/game';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';

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
    .get<Game>(this.BASE_URL)
    .pipe(
      map(response => this.convertPlatformToEnum(response)),
      map(response => this.convertGenreToEnum(response)),
      tap(games => {
        this.gamesService.setGames(games);
        console.log(games);
      })
    );
  }

  updateGame(updatedGame: Game){
    this.http
      .put(
  `${this.BASE_URL}`,
        updatedGame
        )
    .subscribe(response => {
      console.log(response);
    });
  }

  uploadImage(id: number, file: File) {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('image', file);

    this.http.put(`${this.BASE_URL}/image/${id}`, formData)
  .subscribe(
    res => {
      console.log(res);
      },
    err => {
      console.error(err);
    }
    );
  }

  private convertPlatformToEnum(data: any): any {
    const enumPropertyName = 'platform';

    if (data && data[enumPropertyName] !== undefined) {
      data[enumPropertyName] = this.getEnumValueFromString(Platform, data[enumPropertyName]);
    }

    return data;
  }

  private convertGenreToEnum(data: any): any {
    const enumPropertyName = 'genre';

    if (data && data[enumPropertyName] !== undefined) {
      data[enumPropertyName] = this.getEnumValueFromString(Genre, data[enumPropertyName]);
    }
    console.log(data)
    return data;
  }

  private getEnumValueFromString(enumObject: any, stringValue: string): any {
    if (Object.values(enumObject).includes(stringValue as string)) {
      return stringValue as string;
    } else {
      return undefined;
    }
  }

  mapImageData(data: any): any {

  }
}
