import { Component,Input, OnInit, inject } from '@angular/core';
import { Game } from '../model/game';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit{
    ngOnInit(): void {
      this.game = this.getCurrentGame();
    }
    game : Game | undefined = undefined;
    gamesService : GamesService = inject(GamesService);


    getCurrentGame() : Game | undefined {
      const allGames : Game[] = this.gamesService.getGames();
      return allGames.find(game => game.startDate != null && game.finishedDate == null);
    }
}
