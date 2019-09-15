import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-one-day-trip-detail',
  templateUrl: './one-day-trip-detail.page.html',
  styleUrls: ['./one-day-trip-detail.page.scss'],
})
export class OneDayTripDetailPage implements OnInit {
  data: any
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private location:Location) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.detail;
      }
    });
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
