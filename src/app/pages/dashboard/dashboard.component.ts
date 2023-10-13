import { Component,inject } from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  gamesService : GamesService = inject(GamesService);


  public getFinishedGames() : number {
    return this.gamesService.getGames().reduce((n, game) => game.finishedDate != null ? n+1 : n, 0);
  }

  public getAverageRating() : number {
    const allGames: Game[] = this.gamesService.getGames();
    return Object.values(allGames).reduce((game, {rating}) => game + rating,0) / allGames.length;
  }


    //Gesamte Spielzeit

  //Durschnittliche Spielzeit

  //Häufigstens Genre

  //Durchschnittliche Bewertung

}
