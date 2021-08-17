import { Injectable } from '@angular/core';
import firebase from 'firebase/app'
import 'firebase/firestore'
import * as M from 'materialize-css';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private authService:AuthService) { }

  saveQuote(quote:string){
    firebase.firestore().collection('quotes').add({
      text:quote,
      by:this.authService.getUid()
    }).then((data)=>{
      M.toast({html: 'Quote Added',classes:"green"})
    }).catch(err=>{
      M.toast({html: 'Error creating quote',classes:"red"})
    })
  }

  getAllQuotes(){
    return firebase.firestore().collection('quotes').get()
  }
  
}
