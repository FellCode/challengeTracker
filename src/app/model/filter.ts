import { Platform } from './platform';
import { Genre } from './genre';
export class Filter {
  genre: Genre | undefined
  platform : Platform | undefined
  finished : boolean | undefined
  name : string
  
  constructor(genre : Genre|undefined, platform: Platform|undefined, finished: boolean|undefined, name : string) {
    this.genre = genre
    this.platform = platform
    this.finished = finished;
    this.name = name;
    
  }
}
