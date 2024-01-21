import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateConverterService {

  constructor() { }
  
  public convertDateForDatabase(date: Date){
    return new Date( date.getTime() + Math.abs(date.getTimezoneOffset()*60000));
  }
}
