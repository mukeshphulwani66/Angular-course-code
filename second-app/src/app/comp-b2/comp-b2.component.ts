import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-b2',
  templateUrl: './comp-b2.component.html',
  styleUrls: ['./comp-b2.component.css']
})
export class CompB2Component implements OnInit {

  constructor(private counterSev:CounterService) { }

  ngOnInit(): void {
  }
  showCounter(){
    return this.counterSev.getCounter()
  }

  upadateCounter(){
    this.counterSev.updateCounter()
  }
}
