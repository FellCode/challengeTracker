import { Injectable } from '@angular/core';
import { GamesService } from './games.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Game } from '../model/game';
import { DataStorageService} from './data-storage.service'

@Injectable({
  providedIn: 'root'
})
export class GamesResolverService implements Resolve<Game[]>{

  constructor(private dataStorageService: DataStorageService, private gamesService : GamesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const games = this.gamesService.getGames();
    if(games.length === 0){
      return this.dataStorageService.fetchGames();
    } else {
      return games;
    }
  }

}
