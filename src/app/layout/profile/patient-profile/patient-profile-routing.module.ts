import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientProfileComponent } from './patient-profile.component';

const routes: Routes = [
  {
    path:'',
    component: PatientProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProfileRoutingModule { }
