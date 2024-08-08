import { Component, OnInit, Signal, inject } from '@angular/core';
import { Game } from '../../model/game';
import { GamesService } from '../../services/games.service';
import { GamesStore } from 'src/app/store/games.store';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  #gameStore = inject(GamesStore)
  activeGame: Signal<Game | undefined> = this.#gameStore.activeGame

  ngOnInit(): void {
    console.log(this.activeGame())
  }

}
