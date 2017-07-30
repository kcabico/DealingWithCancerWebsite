import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component:
  // },
  {
    path: 'register',
    component: RegisterNewUserComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
