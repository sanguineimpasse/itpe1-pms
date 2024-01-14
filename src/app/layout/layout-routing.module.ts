import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        title:'Dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)
      },
      {
        path:'accounts/:id',
        loadChildren: () => import('./accounts-management/list-accounts/list-accounts.module').then(mod=>mod.ListAccountsModule)
      },
      {
        path:'appointments',
        loadChildren: () => import('./accounts-management/doctor-appointments/doctor-appointments.module').then(mod=>mod.DoctorAppointmentsModule)
      },
      {
        path:'prescriptions',
        loadChildren: ()=> import('./accounts-management/prescriptions/prescriptions.module').then(mod=>mod.PrescriptionsModule)
      },
      {
        path:'profile/:userType/:id',
        title:'Profile',
        loadChildren: ()=> import('./accounts-management/profile/profile.module').then(mod=>mod.ProfileModule)
      },
      {
        path:'user-settings',
        title:'User Settings',
        loadChildren: ()=> import('./accounts-management/user-settings/user-settings.module').then(mod=>mod.UserSettingsModule)
      },
      {
        path:'settings/admin',
        title:'Admin Settings',
        loadChildren: () => import('./accounts-management/admin/admin-settings/admin-settings.module').then(mod=>mod.AdminSettingsModule)
      },
      {
        path:'settings',
        redirectTo:'settings/admin'
      },
      {
        path:'debug',
        title:'Debug :D',
        loadChildren: () => import('./debug/debug.module').then(mod=>mod.DebugModule)
      }
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
