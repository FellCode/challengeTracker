import { signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Game } from "../model/game";
import { Genre } from "../model/genre";
import { Platform } from "../model/platform";
import { Filter } from "../model/filter";
import { computed } from "@angular/core";

type GamesState = {
    games: Game[];
    isLoading: boolean;
    filter:Filter | undefined;
  };
  
  const initialState: GamesState = {
    games: [
      {id: 1, name:"ABC1",notes:"",genre: Genre.ACTION,platform: Platform.GBA,rating: 5, startDate: new Date(Date.now() -1), finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 2, name:"BCD2",notes:"",genre: Genre.CARDGAME,platform: Platform.GBA,rating: 4, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 3, name:"EFG3",notes:"",genre: Genre.PLATFORMER,platform: Platform.GB,rating: 3, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 4, name:"HIJ4",notes:"",genre: Genre.PUZZLE,platform: Platform.N64,rating: 2, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 1, name:"ABC5",notes:"",genre: Genre.ACTION,platform: Platform.GBA,rating: 5, startDate: new Date(Date.now() -1), finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 2, name:"BCD6",notes:"",genre: Genre.CARDGAME,platform: Platform.GBA,rating: 4, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 3, name:"EFG7",notes:"",genre: Genre.PLATFORMER,platform: Platform.GB,rating: 3, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 4, name:"HIJ8",notes:"",genre: Genre.PUZZLE,platform: Platform.N64,rating: 2, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 1, name:"ABC9",notes:"",genre: Genre.ACTION,platform: Platform.GBA,rating: 5, startDate: new Date(Date.now() -1), finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 2, name:"BCD10",notes:"",genre: Genre.CARDGAME,platform: Platform.GBA,rating: 4, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 3, name:"EFG11",notes:"",genre: Genre.PLATFORMER,platform: Platform.GB,rating: 3, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 4, name:"HIJ12",notes:"",genre: Genre.PUZZLE,platform: Platform.N64,rating: 2, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 1, name:"ABC13",notes:"",genre: Genre.ACTION,platform: Platform.GBA,rating: 5, startDate: new Date(Date.now() -1), finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 2, name:"BCD14",notes:"",genre: Genre.CARDGAME,platform: Platform.GBA,rating: 4, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 3, name:"EFG15",notes:"",genre: Genre.PLATFORMER,platform: Platform.GB,rating: 3, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
      {id: 4, name:"HIJ16",notes:"",genre: Genre.PUZZLE,platform: Platform.N64,rating: 2, startDate: undefined, finishedDate: undefined, done: false, elapsedTimeInSeconds: 0},
    ],
    isLoading: false,
    filter: {
      platform: null,
      genre: null,
      finished: null,
      name: ""
    }
  };
  
  export const GamesStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({games,filter}) => ({
      activeGame: computed(() => games().find(game => game.startDate != null && game.finishedDate == null)),
      filteredGames: computed(() => {
        return games().filter((item) => {
          return (
            (filter()!.platform === null || item.platform === filter()!.platform) &&
            (filter()!.genre === null|| item.genre === filter()!.genre) &&
            (filter()!.finished === null || (item.finishedDate != undefined) === filter()!.finished) &&
            ((filter()!.name === "" || filter()!.name == undefined) || item.name.toLowerCase().includes(filter()!.name.toLowerCase()))
          )
        }).sort((a, b) => a.name.localeCompare(b.name))
      })
    }))
  )