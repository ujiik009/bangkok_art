import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // 1
import * as firebase from 'firebase'
import {HelperService} from '../helper.service'
import * as moment from 'moment'
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news=[]
  language: string = this.translateService.currentLang; // 2 
  constructor(private translateService:TranslateService,private helperService:HelperService,private router:Router) { }

  
  ngOnInit() {
  }

  fetchNews () {
    firebase.database().ref("news").once("value").then((snapshot)=>{
        this.news = this.helperService.snapshotToArray(snapshot.val())
    })
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.fetchNews()
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.detail.complete()
    }, 2000);
  }

  ionViewWillEnter() {
    this.fetchNews()
  }

  convDate(timeStamp){
    return moment(timeStamp).format("DD-MM-YYYY")
  }

  detail(detail){
    
    let navigationExtras: NavigationExtras = {
      state: {
        detail: detail
      }
    };
    this.router.navigate(['news-detail'], navigationExtras);
    
    
  }

}
