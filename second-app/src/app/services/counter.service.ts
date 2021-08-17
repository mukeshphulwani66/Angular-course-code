import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0;
  constructor() { }

  getCounter(){
    return this.counter
  }

  updateCounter(){
    this.counter = this.counter + 1;
  }
}
