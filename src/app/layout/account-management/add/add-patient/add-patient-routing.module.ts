import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient.component';

const routes: Routes = [
  {
    path:'',
    component: AddPatientComponent
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
export class AddPatientRoutingModule { }
