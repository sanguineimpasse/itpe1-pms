import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./layout/layout.module').then(mod=>mod.LayoutModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(mod=>mod.LoginModule)
  },
  {
    path:'register',
    loadChildren: () => import('./registration/registration.module').then(mod=>mod.RegistrationModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('./not-found/not-found.module').then(mod=>mod.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
