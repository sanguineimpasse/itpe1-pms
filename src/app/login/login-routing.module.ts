import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { QrloginComponent } from './qrlogin/qrlogin.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'qr',
    component: QrloginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
