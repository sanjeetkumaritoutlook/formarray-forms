import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
//https://www.pluralsight.com/guides/feature-modules-in-angular:-breaking-down-a-large-app
const routes:Routes = [
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }
