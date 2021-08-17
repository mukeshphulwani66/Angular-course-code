import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

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
