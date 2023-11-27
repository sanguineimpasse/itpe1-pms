import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedComponentModule } from './component/shared-component.module';
import { AddDoctorComponent } from './account-management/add/add-doctor/add-doctor.component';
import { AddPatientComponent } from './account-management/add/add-patient/add-patient.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }
