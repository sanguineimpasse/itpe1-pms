import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDoctorComponent } from './account-management/list-doctor/list-doctor.component';
import { ListPatientComponent } from './account-management/list-patient/list-patient.component';

const routes: Routes = [
  {
    path:'profile/patient',
    loadChildren: () => import('./profile/patient-profile/patient-profile.module').then(mod=>mod.PatientProfileModule)
  },
  {
    path:'accounts/management/patient',
    component: ListPatientComponent,
    children:[
      {
        path:'edit',
        loadChildren: () => import('./account-management/edit/edit-patient/edit-patient.module').then(mod=>mod.EditPatientModule)
      },
      {
        path:'add',
        loadChildren: () => import('./account-management/add/add-patient/add-patient.module').then(mod=>mod.AddPatientModule)
      }
    ]
  },
  {
    path:'accounts/management/doctor',
    component: ListDoctorComponent,
    children:[
      {
        path:'edit',
        loadChildren: () => import('./account-management/edit/edit-doctor/edit-doctor.module').then(mod=>mod.EditDoctorModule)
      },
      {
        path:'add',
        loadChildren: () => import('./account-management/add/add-doctor/add-doctor.module').then(mod=>mod.AddDoctorModule)
      }
    ]
  },
  //ADD ACCOUNT PAGES
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NavRoutingModule { }
