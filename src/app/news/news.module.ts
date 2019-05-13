import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'; // add this
import { IonicModule } from '@ionic/angular';
import {LimitWordPipe} from '../limit-word.pipe'


import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild() // add this
  ],
  declarations: [NewsPage,LimitWordPipe]
})
export class NewsPageModule {}
