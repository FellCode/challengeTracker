import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../model/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  gamesService : GamesService = inject(GamesService);
  activeGame : Game | undefined;

  ngOnInit(): void {
    this.activeGame = this.gamesService.getCurrentGame();
  }

}
