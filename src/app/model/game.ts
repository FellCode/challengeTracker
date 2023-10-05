export class Game {
    public name: string;
    public notes: string;
    public genre: string;
    public platform: string;
    public rating: number;
    public startDate: Date;
    public finishedDate: Date;
    public done: boolean;

    constructor(name: string, notes: string, genre: string, platform: string, rating: number, startDate:Date, finishedDate:Date, done:boolean){
        this.name = name;
        this.notes = notes;
        this.genre = genre;
        this.platform = platform;
        this.rating = rating;
        this.startDate = startDate;
        this.finishedDate = finishedDate;
        this.done = done;
    }
}
