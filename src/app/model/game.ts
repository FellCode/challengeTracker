import { Genre } from "./genre";
import { Platform } from "./platform";

export class Game {
    public id: number;
    public name: string;
    public notes: string;
    public genre: Genre;
    public platform: Platform;
    public rating: number;
    public startDate: Date;
    public finishedDate: Date;
    public done: boolean;
    public elapsedTimeInSeconds : number;

    constructor(id: number,name: string, notes: string, genre: Genre, platform: Platform, rating: number, startDate:Date, finishedDate:Date, done:boolean, elapsedTimeInSecodns: number){
        this.id = id;
        this.name = name;
        this.notes = notes;
        this.genre = genre;
        this.platform = platform;
        this.rating = rating;
        this.startDate = startDate;
        this.finishedDate = finishedDate;
        this.done = done;
        this.elapsedTimeInSeconds = elapsedTimeInSecodns;
    }
}
