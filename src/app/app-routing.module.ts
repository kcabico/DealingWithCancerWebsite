import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterNewUserComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
