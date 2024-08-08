import { Component, OnInit, ChangeDetectorRef, WritableSignal, signal, inject, Signal, computed} from '@angular/core';
import { Game } from 'src/app/model/game';
import { Filter } from '../../model/filter';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GamesStore } from 'src/app/store/games.store';

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
  private readonly store = inject(GamesStore)
  games: Signal<Game[]> = this.store.filteredGames
  filteredGames : Game[] = []
  first: WritableSignal<number> = signal(0)
  rows: WritableSignal<number> = signal(10)
  filter?: Filter;
  pageContent: Signal<Game[]> = computed(() => this.games().slice(this.first(),this.first() + this.rows()))

  constructor(){}


  ngOnInit(): void {
    this.games().sort((a, b) => a.name.localeCompare(b.name));
    //this.$pageContent = of(this.games().slice(this.first,this.rows))
    //this.filteredGames = this.games();
  }
  
/*    updateFilter(event? : Filter){
    this.filter = event;
    this.first = 0;
    this.updatePageContent();
  }
 */
/*   applyFilter(): Game[]{
    if(!this.filter){
      return this.games();
    }

    return this.filteredGames = this.games().filter((item) => {
      return (
        (this.filter!.platform === null || item.platform === this.filter!.platform) &&
        (this.filter!.genre === null || item.genre === this.filter!.genre) &&
        (this.filter!.finished === null || (item.finishedDate != undefined) === this.filter!.finished) &&
        ((this.filter!.name === "" || this.filter!.name == undefined) || item.name.toLowerCase().includes(this.filter!.name.toLowerCase()))
      )
    })
  } */

  onPageChange(event: PageEvent) {
      this.first.set(event.first ?? 0);
      this.rows.set(event.rows ?? 10);
  }
}
