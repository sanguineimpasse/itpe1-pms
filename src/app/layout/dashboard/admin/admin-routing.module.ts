import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path:'accounts/management/patient',
    loadChildren: () => import('../../account-management/list-patient/list-patient.module').then(mod=>mod.ListPatientModule)
  },
  {
    path:'accounts/management/doctor',
    loadChildren: () => import('../../account-management/list-doctor/list-doctor.module').then(mod=>mod.ListDoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
