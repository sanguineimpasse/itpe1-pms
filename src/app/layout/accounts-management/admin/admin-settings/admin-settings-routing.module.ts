import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminSettingsComponent } from './admin-settings.component';

const routes: Routes = [
  {
    path:'',
    component:AdminSettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminSettingsRoutingModule { }
