import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-image-slides',
  templateUrl: './image-slides.page.html',
  styleUrls: ['./image-slides.page.scss'],
})
export class ImageSlidesPage implements OnInit {
  data: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.detail;
        this.slideOpts.initialSlide = this.data.active
        
        
      }
    });
  }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
  

}
