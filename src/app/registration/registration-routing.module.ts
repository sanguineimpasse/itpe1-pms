import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path:'',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegistrationRoutingModule { }
