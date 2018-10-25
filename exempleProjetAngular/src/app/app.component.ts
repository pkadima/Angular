import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDhMziCR8LUB4mAuF5puGcXpQQjD_kaHqs",
      authDomain: "pkadima-posts.firebaseapp.com",
      databaseURL: "https://pkadima-posts.firebaseio.com",
      projectId: "pkadima-posts",
      storageBucket: "",
      messagingSenderId: "1062537425556"
    };
    firebase.initializeApp(config);

  }

}