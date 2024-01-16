import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { layoutGuard, loggedOutGuard } from './guards/auth.guard';

const routes: Routes = [
    {
      path:'',
      canActivate:[layoutGuard],
      loadChildren: () => import('./layout/layout.module').then(mod=>mod.LayoutModule),
    },
    {
      path:'login',
      title:'Login',
      canActivate:[loggedOutGuard],
      loadChildren: () => import('./login/login.module').then(mod=>mod.LoginModule)
    },
    {
      path:'register',
      title:'Register',
      canActivate:[loggedOutGuard],
      loadChildren: () => import('./registration/registration.module').then(mod=>mod.RegistrationModule)
    },
    {
      path:'welcome',
      title:'Welcome',
      canActivate:[loggedOutGuard],
      loadChildren: () => import('./visitor-home/visitor-home.module').then(mod=>mod.VisitorHomeModule)
    },
    { 
      path: '**', 
      title:'Page Not Found',
      loadChildren: () => import('./not-found/not-found.module').then(mod=>mod.NotFoundModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
