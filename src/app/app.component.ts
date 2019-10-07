import { Component } from '@angular/core';

import { Platform, Events, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core'; // add this
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  translations = {}

  counter = 0
  language: string

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, // add this
    private translateService: TranslateService,
    private events: Events,
    private navController: NavController,
    private router: Router
  ) {
    this.initializeApp();

    events.subscribe("updated", (date) => {
      console.log("update", date);
      this.counter++
    })
  }





  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang("en"); // add this
    this.language = "en"
    setTimeout(() => {
      this.translations = this.translateService.translations
    }, 100);

  }

  ionViewWillEnter() {
    console.log("app Component ionViewWillEnter");

  }


  changeLang(lang: string) {
    // alert("change lang")
    this.translate.use(lang)

    setTimeout(() => {
      this.language = this.translate.currentLang
    }, 100);

  }


  onChangeLang($event: any){
    this.changeLang($event.target.value)
  }

  profile() {
    this.navController.navigateRoot('/profile')
  }

  logout() {
    this.navController.navigateRoot('')
  }




}
