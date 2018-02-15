import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAMXWJloEeyjmeKkx8l9DzcjOozk1u4W_M",
      authDomain: "recipe-book-udemy-87029.firebaseapp.com"
    });
  }

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
