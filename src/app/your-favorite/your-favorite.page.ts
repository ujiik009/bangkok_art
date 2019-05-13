import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-your-favorite',
  templateUrl: './your-favorite.page.html',
  styleUrls: ['./your-favorite.page.scss'],
})
export class YourFavoritePage implements OnInit {

  constructor(private location:Location,private storage:Storage) { }
  favorites=[]
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
      this.favorites = []
      setTimeout(() => {
        this.getData()
      }, 500);
    })
    .catch((err)=>{

    })
    this.getData()
  }


  getData(){
    this.storage.ready().then(async (results) => {
      let keys = await results.keys()
      keys.filter((key) => {
        return new RegExp("favorite-").test(key)
      }).map(async (key)=>{
        var data = await this.storage.get(key)
        data.id = key

        setTimeout(() => {
          this.favorites.push(data)
        }, 1);
      })
    })
  }

}
