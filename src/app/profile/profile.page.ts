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


  async selectFile() {
  
    let options: ImagePickerOptions = {
      //here Quality of images, defaults to 100  
      quality: 100,
      //here Width of an Image  
      width: 600,
      //here Height of an Image  
      height: 600,
      /** Output type, defaults to 0 (FILE_URI). 

      * FILE_URI :0 (number) it returns a actual path for an image 

      */
      //DATA_URI: 1(number) it returns a base64 data  
      //for an image  
      outputType: 1
      //here Maximum image count for selection, defaults to 15.  
      //maximumImagesCount: 15(1 - 15) numbers  
      //while setting a number 15 we can load 15 images in one selection.  
    };
    this.imagePicker.getPictures(options).then((results) => {

      if (results.length > 0) {
        // it mean have image
        let base64 = 'data:image/jpeg;base64,' + results[0]
        firebase.storage().ref("avatar/" + this.meta.uid + ".jpg").putString(base64, 'data_url')
          .then(() => {
            this.pathImg = base64
            alert("Change Photo Profile Completed!!")
          })
          .catch((err) => {
            alert(err)
          })
      }
      // for (var i = 0; i < results.length; i++) {
      //     // console.log('Image URI: ' + results[i]);
      //     alert('Image URI: ' + results[i])
      // }
    }, (err) => { alert('Image URI: Error ' + err) });
  }



  async ionViewWillEnter() {
    this.meta = await this.storage.get("meta")
    this.pathImg = this.meta.avatar + "&time=" + new Date().getTime()
    this.getFavorite()
    this.getCheckIn()
    this.getEvent()

  }


  back() {
    this.router.navigateByUrl("tabs/news")
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
