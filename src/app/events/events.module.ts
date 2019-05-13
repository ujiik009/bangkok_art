import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import { TranslateModule } from '@ngx-translate/core'; // add this
import {LimitWordPipe} from '../limit-word.pipe'

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [EventsPage,LimitWordPipe]
})
export class EventsPageModule {}
