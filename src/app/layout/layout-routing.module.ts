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
        redirectTo: 'dashboard/user'
      },
      {
        path: 'dashboard/user',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)
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
        path: 'profile',
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
