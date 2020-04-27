import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as data from '../assets/data.json';
import { HttpClient } from '@angular/common/http';
// import * as data from "data.json";

@Component({
  selector: 'app-root',
  template: `<ul>
      <li *ngFor="let product of products">
      {{product.name}}
      </li>
  </ul>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Angular Example';

  products: any = (data as any).default;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private httpClient: HttpClient
  ) {
    this.initializeApp();
  }
  ngOnInit(){
    console.log(data);
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
