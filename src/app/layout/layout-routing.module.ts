import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch:'prefix'
      },
      {
        path:'dashboard',
        redirectTo: 'dashboard/admin'
      },
      {
        path: 'admin',
        redirectTo: 'dashboard/admin'
      },
      {
        path:'dashboard/admin',
        loadChildren: () => import('./dashboard/admin/admin.module').then(mod=>mod.AdminModule)
      },
      {
        path:'dashboard/doctor',
        loadChildren: () => import('./dashboard/doctor/doctor.module').then(mod=>mod.DoctorModule)
      },
      {
        path: 'dashboard/patient',
        loadChildren: () => import('./dashboard/patient/patient.module').then(mod=>mod.PatientModule)
      },
      {
        path: 'profile',
        redirectTo: 'profile/patient'
      },
      {
        path: 'profile/patient',
        loadChildren: () => import('./profile/profile.module').then(mod=>mod.ProfileModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
