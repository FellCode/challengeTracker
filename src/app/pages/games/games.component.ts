import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Game } from 'src/app/model/game';
import { GamesService } from 'src/app/services/games.service';
import { Filter } from '../../model/filter';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  filteredGames : Game[] = []
  first: number = 0;
  rows: number = 10;
  filter?: Filter;
  $pageContent!: Observable<Game[]>;
  constructor(private gamesService : GamesService, private changeDetection: ChangeDetectorRef){}


  ngOnInit(): void {
    this.games = this.gamesService.getGames();
    this.games.sort((a, b) => a.name.localeCompare(b.name));
    this.$pageContent = of(this.games.slice(this.first,this.rows))
    this.filteredGames = this.games;
  }
  
   updateFilter(event? : Filter){
    this.filter = event;
    this.first = 0;
    this.updatePageContent();
  }

  applyFilter(): Game[]{
    if(!this.filter){
      return this.games;
    }

    return this.filteredGames = this.games.filter((item) => {
      return (
        (this.filter!.platform === null || item.platform === this.filter!.platform) &&
        (this.filter!.genre === null || item.genre === this.filter!.genre) &&
        (this.filter!.finished === null || (item.finishedDate != undefined) === this.filter!.finished) &&
        ((this.filter!.name === "" || this.filter!.name == undefined) || item.name.toLowerCase().includes(this.filter!.name.toLowerCase()))
      )
    })
  }

  updatePageContent(): void {
    let filtered = this.applyFilter();
    this.$pageContent = of([...filtered.slice(this.first,this.first + this.rows)])
    this.changeDetection.detectChanges();
  }

  onPageChange(event: PageEvent) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
      this.updatePageContent();
  }
}
