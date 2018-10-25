import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC5ILSVbvEjCRWpvHg_xHtYTEVSejiXeB0",
      authDomain: "pkadima-bibliotheque.firebaseapp.com",
      databaseURL: "https://pkadima-bibliotheque.firebaseio.com",
      projectId: "pkadima-bibliotheque",
      storageBucket: "pkadima-bibliotheque.appspot.com",
      messagingSenderId: "675538919659"
    };
    firebase.initializeApp(config);
  }
}
