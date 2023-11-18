import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedComponentModule } from './component/shared-component.module';
import { ListPatientComponent } from './account-management/list-patient/list-patient.component';
import { ListDoctorComponent } from './account-management/list-doctor/list-doctor.component';
import { DoctorProfileComponent } from './profile/doctor-profile/doctor-profile.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }
