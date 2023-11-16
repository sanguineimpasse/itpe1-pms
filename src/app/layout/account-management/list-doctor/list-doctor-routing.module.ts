import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorComponent } from './list-doctor.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ListDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDoctorRoutingModule { }
