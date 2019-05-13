import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-your-checkin',
  templateUrl: './your-checkin.page.html',
  styleUrls: ['./your-checkin.page.scss'],
})
export class YourCheckinPage implements OnInit {

  constructor(private location: Location, private storage: Storage) { }
  checkinList = []
  ngOnInit() {
  }

  back() {
    this.location.back()
  }

  ionViewWillEnter() {
    this.getData()
  }

  delete(id) {
    this.storage.remove(id).then(() => {
      this.checkinList = []
      setTimeout(() => {
        this.getData()
      }, 500);
    })
      .catch((err) => {

      })
    this.getData()
  }


  getData() {
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      keys.filter((key) => {
        return new RegExp("check-in-").test(key)
      }).map(async (key) => {
        var data = await this.storage.get(key)
        data.id = key

        setTimeout(() => {
          this.checkinList.push(data)
        }, 1);
      })
    })
  }
}




// check-in-