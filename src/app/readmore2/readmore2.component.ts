import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-readmore2',
  templateUrl: './readmore2.component.html',
  styleUrls: ['./readmore2.component.scss'],
})
export class Readmore2Component implements OnInit {
  @Input() detail: string;
  shot_detail:string
  more:boolean = false
  constructor() { 

    
  }

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
