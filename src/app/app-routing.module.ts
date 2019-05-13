import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'login', loadChildren: './login/login.module#LoginPageModule' 
  },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'plase-detail', loadChildren: './plase-detail/plase-detail.module#PlaseDetailPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'your-event', loadChildren: './your-event/your-event.module#YourEventPageModule' },
  { path: 'your-favorite', loadChildren: './your-favorite/your-favorite.module#YourFavoritePageModule' },
  { path: 'your-checkin', loadChildren: './your-checkin/your-checkin.module#YourCheckinPageModule' },
  { path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' },
  // { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  // { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  // { path: 'place', loadChildren: './place/place.module#PlacePageModule' },
  // { path: 'search', loadChildren: './search/search.module#SearchPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
