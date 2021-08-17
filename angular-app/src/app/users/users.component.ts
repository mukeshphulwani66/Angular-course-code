import { Component,Input,Output,EventEmitter,OnInit,OnChanges, SimpleChanges,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent 
//implements OnInit ,OnChanges ,OnDestroy
{
 @Input() name!:string;
 @Input() age!:number;
 @Input() status!:string;
 @Input() salary!:number;
 @Input() img!:string;
 @Input() title!:string;

 @Output() myevnt = new EventEmitter<string>();
 
 passData(){
   this.myevnt.emit("coders never quit")
 }


//  constructor(){
//    console.log('constructor',this.name)
//    // properties
//  }

//  listnerRef = setInterval(()=>{},1000);
 
//  ngOnInit(){
//   console.log('ngoninit',this.name)

//   this.listnerRef =  setInterval(()=>{
//     console.log('timer runing.....')
//   },2000)
//   // properties
//   // event listener register
//   // initial data fetch
//  }

//  ngOnChanges(value:SimpleChanges){
//    console.log('ngonchnages',value)
//  }

//  ngOnDestroy(){
//    console.log('component destroyed')
//    clearInterval(this.listnerRef)
//  }



}
