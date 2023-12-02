import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: 'dashboard/admin', //path will redirect to admin for now while testing :)
        pathMatch:'prefix'
      },
      //SHORTCUTS
      {
        path:'dashboard',
        redirectTo: 'dashboard/admin'
      },
      {
        path: 'admin',
        redirectTo: 'dashboard/admin'
      },
      //DASHBOARDS
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
        loadChildren: () => import('./profile/patient-profile/patient-profile.module').then(mod=>mod.PatientProfileModule)
      },
      //DEBUG
      {
        path: 'debug',
        loadChildren: () => import('./debug/debug.module').then(mod=>mod.DebugModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
