import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor.component';

const routes: Routes = [
  {
    path:'',
    component: AddDoctorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AddDoctorRoutingModule { }
