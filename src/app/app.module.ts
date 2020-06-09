import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

///////////////////////FIREBASE///////////////////////
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBqSxb6Q4y1--L11JIrkMOBa6ts22pSQDI",
  authDomain: "movizz-7a9b3.firebaseapp.com",
  databaseURL: "https://movizz-7a9b3.firebaseio.com",
  projectId: "movizz-7a9b3",
  storageBucket: "movizz-7a9b3.appspot.com",
  messagingSenderId: "550149167679",
  appId: "1:550149167679:web:9bf1a5f067c9f1406f368a",
  measurementId: "G-R6MZXL37RF"
};

//////////////////////////////////////////////////////

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

