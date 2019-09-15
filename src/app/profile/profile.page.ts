import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Location } from "@angular/common";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import * as firebase from 'firebase'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private storage: Storage, 
    private location: Location, 
    private imagePicker: ImagePicker, 
    private router:Router
    ) { }
  meta: {
    email: "",
    phone: "",
    avatar: "",
    uid: ""
  }
  pathImg: string
  event_count = 0
  favorite_count = 0
  save_count = 0
  checkin_count = 0


  ngOnInit() {
    console.log("ProfilePage");
  }




  async ionViewWillEnter() {
    
    this.getFavorite()
    this.getCheckIn()
    this.getEvent()

  }


  back() {
    this.router.navigateByUrl("")
  }

  getFavorite() {
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      this.favorite_count = keys.filter((key) => {
        return new RegExp("favorite-").test(key)
      }).length
    })

  }

  getCheckIn() {
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      this.checkin_count = keys.filter((key) => {
        return new RegExp("check-in-").test(key)
      }).length
    })
  }

  getEvent() {
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      this.event_count = keys.filter((key) => {
        return new RegExp("event-").test(key)
      }).length
    })
  }


  your_event() {
    this.router.navigateByUrl("your-event")
  }

  your_favorite() {
    this.router.navigateByUrl("your-favorite")
  }

  your_check_in(){
    this.router.navigateByUrl("your-checkin")
  }

}
