import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditPatientComponent } from './edit-patient.component';

const routes: Routes = [
  {
    path:'',
    component: EditPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPatientRoutingModule { }
