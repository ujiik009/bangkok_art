import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'news',
          children:
            [
              {
                path: '',
                loadChildren: '../news/news.module#NewsPageModule'
              }
            ]
        },
        {
          path: 'events',
          children:
            [
              {
                path: '',
                loadChildren: '../events/events.module#EventsPageModule'
              }
            ]
        },
        {
          path: 'place',
          children:
            [
              {
                path: '',
                loadChildren: '../place/place.module#PlacePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/news',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}
