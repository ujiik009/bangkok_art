import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment"
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  data:any
  constructor(
    private route: ActivatedRoute,
    private router: Router ) { 
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.data = this.router.getCurrentNavigation().extras.state.detail;
        }
      });
    }

  ngOnInit() {
    console.log(this.data);
    
  }

  convDate(timeStamp){
    return moment(timeStamp).format("DD-MM-YYYY")
  }

}
