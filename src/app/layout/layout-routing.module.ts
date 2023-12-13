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
