import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionsComponent } from './prescriptions.component';
import { PrescriptionsRoutingModule } from './prescriptions-routing.module';

@NgModule({
  declarations: [
    PrescriptionsComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule
  ]
})
export class PrescriptionsModule { }
