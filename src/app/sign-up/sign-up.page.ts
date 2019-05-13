import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import * as firebase from 'firebase/app';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from "@ionic-native/file/ngx";
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  loading:any
   constructor(
    public loadingController: LoadingController,
    private location: Location, 
    private imagePicker: ImagePicker, 
    private router :Router,
    private file: File) {

      

      
     }

  email = ""
  displayName = ""
  phone = ""
  password = ""
  confirmPassword = ""

  pathImg = "assets/img/default.png"
  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    })
  }

  selectFile() {
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
        this.pathImg = 'data:image/jpeg;base64,' + results[0]
      }
      // for (var i = 0; i < results.length; i++) {
      //     // console.log('Image URI: ' + results[i]);
      //     alert('Image URI: ' + results[i])
      // }
    }, (err) => { alert('Image URI: Error ' + err) });
  }

  back() {
    this.location.back()
  }
  signUp() {

    this.loading.present()

    // setTimeout(() => {
    //   this.loadingController.dismiss()
    // }, 5000);
    if (this.password != "" && this.confirmPassword != "") {
      if (this.password.trim() == this.confirmPassword.trim()) {
        // create user firebase
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(async (response) => {
            let uid = response.user.uid
            // console.log(response.user.uid);
            var storageRef = firebase.storage().ref("avatar/" + uid + "jpg")
            storageRef.putString(this.pathImg, 'data_url').then(async (snapshot) => {
              
              
              var metaData = {
                avatar:await snapshot.ref.getDownloadURL(),
                display_name:this.displayName,
                email:this.email,
                phone:this.phone,
                password:this.password
              }

              firebase.database().ref("users/"+uid).set(metaData)
              .then(()=>{
                this.loadingController.dismiss().then(()=>{
                    this.router.navigate(["login"])
                })
              })
              .catch(()=>{
                this.loadingController.dismiss()
                alert("Error SignUp")
              })

            }).catch((err) => {
              this.loadingController.dismiss()
              alert(err)
            })

          })
          .catch(err => {
            this.loadingController.dismiss()
            alert(err)
          })
      } else {
        this.loadingController.dismiss()
        alert("Passwords do not match")
      }
    } else {
      this.loadingController.dismiss()
      alert("Please enter the password.")
    }
    // var firebaseRef = firebase.storage().ref("avatar/"+uid+"jpg")
    // firebaseRef.putString(this.pathImg, 'data_url').then((snapshot) =>{

    // }).catch((err)=>{
    //   alert(err)
    // })
  }

  


}
