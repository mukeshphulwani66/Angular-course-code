import {Component} from '@angular/core'
import { User } from  'src/models/user';


@Component({
  selector:"app-root",
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})

export class AppComponent{
  phoneno = '33440020'
  title:string = 'header';
  show = true;
  users: Array<User> = [
    {name:"mukesh",age:20,salary:2000,status:"coder",imagePath:"assets/u1.jpg"},
    // {name:"suresh",age:40,salary:3000,status:"single",imagePath:"assets/u2.jpg"},
    // {name:"ramesh",age:30,salary:4000,status:"commited",imagePath:"assets/u3.png"},
  ]

  reveivedData(e:any){
    console.log(e)
  }
}