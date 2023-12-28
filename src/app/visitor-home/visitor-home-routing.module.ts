import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisitorHomeComponent } from './visitor-home.component';

const routes: Routes = [
  {
    path:'',
    component: VisitorHomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class VisitorHomeRoutingModule { }
