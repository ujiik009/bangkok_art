import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

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
    RouterModule.forChild(routes)
  ],
  declarations: [OneDayTripDetailPage]
})
export class OneDayTripDetailPageModule {}
