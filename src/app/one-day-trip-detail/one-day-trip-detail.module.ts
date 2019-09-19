import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Readmore2Component } from "../readmore2/readmore2.component"
import { OneDayTripDetailPage } from './one-day-trip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OneDayTripDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes),
    // ReadmoreComponent
  ],
  declarations: [OneDayTripDetailPage,Readmore2Component]
})
export class OneDayTripDetailPageModule {}
