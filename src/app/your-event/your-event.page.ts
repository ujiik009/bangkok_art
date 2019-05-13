import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-your-event',
  templateUrl: './your-event.page.html',
  styleUrls: ['./your-event.page.scss'],
})
export class YourEventPage implements OnInit {
  events=[]
  constructor(private location:Location,private storage:Storage) { }

  ngOnInit() {
  }

  back(){
    this.location.back()
  }
  ionViewWillEnter() {
   this.getData()
  }

  delete(id){
    
    this.storage.remove(id).then(()=>{
      this.events = []
      setTimeout(() => {
        this.getData()
      }, 500);
    })
    .catch((err)=>{

    })
    // this.getData()
  }


  getData(){
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      keys.filter((key) => {
        return new RegExp("event-").test(key)
      }).map(async (key)=>{
        var data = await this.storage.get(key)
        data.id = key
        this.events.push(data)
        
      })
    })
  }

}
