import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router, NavigationExtras } from '@angular/router';
import {HelperService} from '../helper.service'
import { TranslateService } from '@ngx-translate/core'; // 1
@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  language: string = this.translateService.currentLang; // 2 
  constructor(private translateService:TranslateService,private router: Router,private helperService : HelperService) { }

  placeList = []
  ngOnInit() {
  }


  ionViewWillEnter() {
    this.loadPlace()
  }

  loadPlace() {
    var ref = firebase.database().ref("place")

    ref.once('value')
      .then(dataSnapshot => {
        this.placeList = this.helperService.snapshotToArray(dataSnapshot.val()) 
      })
      .finally(()=>{
        ref = null
      })
  }

  

  placeDetail(objPlace){
    let navigationExtras: NavigationExtras = {
      state: {
        detail: objPlace
      }
    };
    this.router.navigate(['plase-detail'], navigationExtras);
    
    
  }

}
