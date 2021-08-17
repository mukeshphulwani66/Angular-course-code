import { Component } from '@angular/core';
import firebase from 'firebase/app'
import { firebaseConfig } from './firebaseconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-app';
  ngOnInit(){
    firebase.initializeApp(firebaseConfig)
  }
}
