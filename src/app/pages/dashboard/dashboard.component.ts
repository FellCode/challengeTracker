import { Component,inject, Signal } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesService } from 'src/app/services/games.service';
import { Genre } from '../../model/genre';
import { GamesStore } from 'src/app/store/games.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  #gameStore = inject(GamesStore)
  games: Signal<Game[]> = this.#gameStore.games;


  public getFinishedGames() : number {
    return this.games().reduce((n, game) => game.finishedDate != undefined ? n+1 : n, 0);
  }

  public getAverageRating() : number {
    return Object.values(this.games()).reduce((game, {rating}) => game + rating,0) / this.games().length;
  }

  public getFiveBestGames(): string[]{
    const allGames: Game[] = this.games()
    allGames.sort((a,b) => a.rating - b.rating)
    return allGames.slice(0,5).map(game => game.name);
  }

  public getFiveWorstGames(): string[]{
    const allGames: Game[] = this.games()
    allGames.sort((a,b) => b.rating - a.rating)
    return allGames.slice(0,5).map(game => game.name);
  }

  public getPlayTimeOverall(): number{
    const allGames: Game[] = this.games()
    return Object.values(allGames).reduce((game, {elapsedTimeInSeconds}) => game + elapsedTimeInSeconds,0)
  }

  public getFiveLongestGames(): string[]{
    const allGames: Game[] = this.games()
    allGames.sort((a,b) => a.elapsedTimeInSeconds - b.elapsedTimeInSeconds)
    return allGames.slice(0,5).map(game => game.name);
  }

  public getFiveShortestGames(): string[] {
    const allGames: Game[] = this.games()
    allGames.sort((a,b) => b.elapsedTimeInSeconds - a.elapsedTimeInSeconds)
    return allGames.slice(0,5).map(game => game.name);
  }

  public getAveragePlayTime() : number {
    const allGames: Game[] = this.games()
    return Object.values(allGames).reduce((game, {elapsedTimeInSeconds}) => game + elapsedTimeInSeconds,0) / allGames.length;

  }

  public getMostPopularGenre() : string {
    const allGames: Game[] = this.games()
    let counts = allGames.reduce((acc, item) => {
      let key = item.genre as keyof typeof Genre;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
      }, {} as Record<keyof typeof Genre, number>);

    let highestCountKey = Object.keys(counts).reduce((a, b) => counts[a as keyof typeof Genre] > counts[b as keyof typeof Genre] ? a : b);
    return Genre[highestCountKey as keyof typeof Genre];
  }

  //Häufigstens Genre

  //Durchschnittliche Bewertung

}
