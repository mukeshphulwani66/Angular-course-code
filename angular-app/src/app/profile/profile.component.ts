import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent  {
  mydate! :Date;
  name:string = "ramesh verma";
  age:number = 20;
  status:string = 'coder';
  salary:number = 20 
  
  isDisable:boolean = false;
  inputValue:string="ramesh";
  btnColor:string='btn red';
  
  fruits:string[] = ['banana','mango','grapes','apple'];
  constructor(){
    // setTimeout(()=>{
    //   this.isDisable = false;
    // },3000);
    const colors:string[]= ['red','pink','yellow','blue','black'];
    this.btnColor =  "btn "+ colors[Math.floor(Math.random() * 5)]


  }


  
  convertToINR(){
    alert(this.salary * 74);
  }

  getInput(e:any){
      this.inputValue=e.target.value
  }

}
