import { Platform } from './platform';
import { Genre } from './genre';
export class Filter {
  genre: Genre | null
  platform : Platform | null
  finished : boolean | null
  name : string
  
  constructor(genre : Genre|null, platform: Platform|null, finished: boolean|null, name : string) {
    this.genre = genre
    this.platform = platform
    this.finished = finished;
    this.name = name;
    
  }
}
