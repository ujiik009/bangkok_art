import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss'],
})
export class ReadmoreComponent implements OnInit {
  @Input() detail: string;
  shot_detail:string
  more:boolean = false
  constructor() { }

  ngOnInit() {
    if(this.detail.length > 100 ){
      this.shot_detail = this.detail.substring(0, 100).concat("...")
      this.more = true
    }else{
      
      this.shot_detail = this.detail
      
    }
  }

  showMore(){
    this.shot_detail = this.detail
    this.more = false
  }



}
