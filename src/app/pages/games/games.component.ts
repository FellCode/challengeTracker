import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesService } from 'src/app/services/games.service';
import { Filter } from '../../model/filter';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  filteredGames : Game[] = []
  constructor(private gamesService : GamesService, private changeDetection: ChangeDetectorRef){}

  ngOnInit(): void {
    this.games = this.gamesService.getGames();
    this.filteredGames = this.games;
  }
  
  updateFilter(event : Filter){
    console.dir(`Filter: ${event}`)
    this.filteredGames = this.games.filter((item) => {
      return (
        (event.platform === null || item.platform === event.platform) &&
        (event.genre === null || item.genre === event.genre) &&
        (event.name === "" || item.name.toLowerCase().includes(event.name.toLowerCase()))
      )
    })
    this.changeDetection.detectChanges();
  }
}
