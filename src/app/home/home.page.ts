import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public afFirestore: AngularFirestore) { }

  addMovies() {
  }

}
