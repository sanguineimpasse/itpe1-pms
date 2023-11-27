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
  },
  //EDIT ACCOUNT PAGES
  {
    path:'accounts/edit/doctor',
    loadChildren: () => import('./account-management/edit/edit-doctor/edit-doctor.module').then(mod=>mod.EditDoctorModule)
  },
  {
    path:'accounts/edit/patient',
    loadChildren: () => import('./account-management/edit/edit-patient/edit-patient.module').then(mod=>mod.EditPatientModule)
  },
  //ADD ACCOUNT PAGES
  {
    path:'accounts/add/doctor',
    loadChildren: () => import('./account-management/add/add-doctor/add-doctor.module').then(mod=>mod.AddDoctorModule)
  },
  {
    path:'accounts/add/patient',
    loadChildren: () => import('./account-management/add/add-patient/add-patient.module').then(mod=>mod.AddPatientModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NavRoutingModule { }
