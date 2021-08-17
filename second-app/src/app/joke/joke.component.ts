import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke:string = 'Loading Joke'; 
  constructor(private jokeService:JokeService) {
    
   }

  ngOnInit(): void {
     this.fetchJoke()
  }

  fetchJoke(){
    this.jokeService.getJoke().subscribe((data:any)=>{
       this.joke = data.value
     })
  }

  

}
