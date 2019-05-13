import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from "firebase"
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: "",
    password: "",
  }
  mata_data = {

  }
  loading: any

  constructor(public loadingController: LoadingController, private router: Router, private AuthenticationService: AuthenticationService, private storage: Storage) { }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    })
  }

  goSignUp() {
    this.router.navigateByUrl("/sign-up")
  }

  login() {
    // alert(JSON.stringify(this.user))
    this.loading.present()
    this.AuthenticationService.loginUser(this.user).then(async res => {

      // console.log(res.user.uid);
      let meteData = await this.getMeta(res.user.uid)
      let meta = meteData.val()

      try {
        Object.assign(meta, { uid: res.user.uid })
        this.storage.set("meta", meta).then(() => {
          this.loadingController.dismiss().then(() => {
            this.router.navigateByUrl("/tabs")
          })

        }).catch((error) => {
          this.loadingController.dismiss()
          console.log("dsd");

          alert(error)
        })
      } catch (error) {
        this.loadingController.dismiss().then(() => {
          this.router.navigateByUrl("/tabs")
        })
      }


    }).catch(error => {
      console.log("dsds");
      this.loadingController.dismiss()
      alert(error)
    })
  }

  getMeta(uid) {
    let ref = firebase.database().ref("users/" + uid)

    return ref.once("value")
  }



}
