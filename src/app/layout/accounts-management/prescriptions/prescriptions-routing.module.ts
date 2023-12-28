import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionsComponent } from './prescriptions.component';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrescriptionsRoutingModule { }
