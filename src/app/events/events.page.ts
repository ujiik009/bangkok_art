import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core'; // 1
import * as moment from 'moment'
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventList = []

  constructor(private storage:Storage,private translateService:TranslateService) { }

  language: string = this.translateService.currentLang; // 2 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("EventsPage ngOnInit");


  }
  ngOnDestroy(): void {
    console.log("EventsPage ngOnDestroy");
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  ionViewWillEnter() {
    this.loadEvent()
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.loadEvent()
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.detail.complete()
    }, 2000);
  }


  loadEvent() {
    var ref = firebase.database().ref("events")

    ref.once('value')
      .then(dataSnapshot => {
        this.eventList = this.snapshotToArray(dataSnapshot.val())
      })
      .finally(()=>{
        ref = null
      })
  }

  snapshotToArray = snapshot => {
    let returnArr = [];
    Object.keys(snapshot).forEach(key => {

      snapshot[key].id = key

      returnArr.push(snapshot[key])
    })

    return returnArr;
  };

  join_event(data) {
    this.storage.set("event-" + data.id, data)
      .then(async () => {
      alert("The event has been save successfully.")
      })
      .catch((error) => {
        console.log(error);

      })
  }

  displayDate(timestamp){
    return moment(timestamp).format("DD-MMM-YYYY")
  }

}
