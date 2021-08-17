import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allQuotes:any[] = []
  constructor(private dbService:DbService) { }

  ngOnInit(): void {
    this.dbService.getAllQuotes().then(docRef=>{
      this.allQuotes = docRef.docs.map(doc=>doc.data())
      console.log(this.allQuotes)
    })
  }

}
