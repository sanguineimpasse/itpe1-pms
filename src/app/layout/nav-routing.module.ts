import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'profile/patient',
    loadChildren: () => import('./profile/patient-profile/patient-profile.module').then(mod=>mod.PatientProfileModule)
  },
  {
    path:'accounts/management/patient',
    loadChildren: () => import('./account-management/list-patient/list-patient.module').then(mod=>mod.ListPatientModule)
  },
  {
    path:'accounts/management/doctor',
    loadChildren: () => import('./account-management/list-doctor/list-doctor.module').then(mod=>mod.ListDoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NavRoutingModule { }
