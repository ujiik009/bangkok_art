import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; // 1

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  language: string = this.translateService.currentLang; // 2 
  constructor(private translateService:TranslateService) { }
  
  ngOnInit() {
  }

}
