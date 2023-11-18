import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedComponentModule } from './component/shared-component.module';
import { EditDoctorComponent } from './account-management/edit/edit-doctor/edit-doctor.component';
import { EditPatientComponent } from './account-management/edit/edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    LayoutComponent,
    EditDoctorComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }
