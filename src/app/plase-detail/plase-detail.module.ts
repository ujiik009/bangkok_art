import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaseDetailPage } from './plase-detail.page';
import { ReadmoreComponent } from "../readmore/readmore.component"
const routes: Routes = [
  {
    path: '',
    component: PlaseDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes),
    
  ],
  declarations: [PlaseDetailPage,ReadmoreComponent]
})
export class PlaseDetailPageModule { }
