import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      loadChildren: () => import('./layout/layout.module').then(mod=>mod.LayoutModule)
    },
    {
      path:'login',
      title:'Login',
      loadChildren: () => import('./login/login.module').then(mod=>mod.LoginModule)
    },
    {
      path:'register',
      title:'Register',
      loadChildren: () => import('./registration/registration.module').then(mod=>mod.RegistrationModule)
    },
    {
      path:'welcome',
      title:'Welcome',
      loadChildren: () => import('./visitor-home/visitor-home.module').then(mod=>mod.VisitorHomeModule)
    },
    {
      path:'nopage',
      title:'Page Not Found',
      loadChildren: () => import('./not-found/not-found.module').then(mod=>mod.NotFoundModule)
    },
    { 
      path: '**', 
      redirectTo:'nopage',
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
