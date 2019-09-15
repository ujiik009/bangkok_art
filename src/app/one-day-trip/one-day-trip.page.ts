import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"
import {HelperService} from '../helper.service'
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-one-day-trip',
  templateUrl: './one-day-trip.page.html',
  styleUrls: ['./one-day-trip.page.scss'],
})
export class OneDayTripPage implements OnInit {

  trips = []
  constructor(private helperService : HelperService,private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.loadTrip()
  }

  loadTrip() {
    var ref = firebase.database().ref("one_day_trip")

    ref.once('value')
      .then(dataSnapshot => {
        this.trips = this.helperService.snapshotToArray(dataSnapshot.val()) 
      })
      .finally(()=>{
        ref = null
      })
  }

  detailTrip = (detail)=>{
    let navigationExtras: NavigationExtras = {
      state: {
        detail: detail
      }
    };

    this.router.navigate(['one-day-trip-detail'], navigationExtras);
    
  
  }

  
}
