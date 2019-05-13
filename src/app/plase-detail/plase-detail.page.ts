import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from "firebase"
import { HelperService } from '../helper.service'
import * as moment from "moment"
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-plase-detail',
  templateUrl: './plase-detail.page.html',
  styleUrls: ['./plase-detail.page.scss'],
})



export class PlaseDetailPage implements OnInit {

  options: LaunchNavigatorOptions = {
    start: 'London, ON'
  }

  check_in_color = "dark"

  been_in_color = "dark"

  favorite_color = "dark"


  message: string = ""
  data: any;
  meta: any = {}

  commentData: any = {
    user_comment: "",
    user_display: "",
    user_id: "",
    user_avatar: "",
    user_comment_time: new Date().getTime()
  }

  commentList = []


  firebaseRef: any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private launchNavigator: LaunchNavigator,
    private storage: Storage,
    private helperService: HelperService,
    private socialSharing: SocialSharing
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.detail;
      }
    });



  }



  async ngOnInit() {
    var meta = await this.storage.get("meta")
    this.meta = meta

    this.firebaseRef = firebase.database().ref("place/" + this.data.id + "/comments")

    this.firebaseRef.on('value', (snapShot) => {
      this.commentList = this.helperService.snapshotToArray(snapShot.val())
    })

  }

  ionViewWillEnter() {
    this.check_been_in()
    this.check_favorite()
  }


  check_been_in() {
    this.storage.get("check-in-" + this.data.id)
      .then((data) => {
        if (data != null) {
          this.check_in_color = "danger"
          this.been_in_color = "success"
        }
      })
      .catch(() => {
        alert("not have check-in")
      })
  }

  check_favorite() {
    this.storage.get("favorite-" + this.data.id)
      .then((data) => {
        if (data != null) {
          this.favorite_color = "danger"
        }
      })
      .catch(() => {
        alert("not have favorite")
      })
  }

  back() {
    this.location.back();
  }

  navigator(lat, lng) {
    let options: LaunchNavigatorOptions = {
      app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    try {
      this.launchNavigator.navigate([lat, lng], options)
        .then(
          success => {
            this.message = "DONE"
          },
          error => {
            this.message = error
          }
        ).catch(err => {
          this.message = err
        })
    } catch (error) {
      this.message = error
    }
  }

  post() {

    this.firebaseRef = firebase.database().ref("place/" + this.data.id + "/comments")

    this.commentData.user_id = this.meta.uid
    this.commentData.user_display = this.meta.display_name
    this.commentData.user_avatar = this.meta.avatar+"&time="+new Date().getTime()
    this.commentData.user_comment_time = new Date().getTime()

    this.firebaseRef.push(this.commentData, err => console.log(err ? 'error while pushing' : 'successful push')).then(() => {
      this.commentData.user_comment = ""
      alert("แสดงความเห็นเสร็จสิ้น")


    }).catch((error) => {
      alert("เกิดข้อผิดพลาด :" + error)
    })
  }


  convTime(timeStamp) {
    return moment(timeStamp).format("วันที่ DD MM YYYY, hh:mm a")
  }

  checkin(data) {

    this.storage.set("check-in-" + data.id, data)
      .then(async () => {
        this.check_been_in()
      })
      .catch((error) => {
        console.log(error);

      })
  }

  favorite(data) {
    this.storage.set("favorite-" + data.id, data).then(() => {
      this.check_favorite()
    })
  }

  async sharing(data) {
    this.socialSharing.shareViaFacebookWithPasteMessageHint(data.name,data.place_imgs[0],null,data.name)
    .catch((err)=>{
      alert(err)
    })
  }

  pathimgNocatch(path){
    
    return path 
    // return path+"&time="+new Date().getTime()
  }

}
