import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedComponentModule } from './components/shared-component.module';
import { LayoutComponent } from './layout.component';
import { DoctorAppointmentsComponent } from './accounts-management/doctor-appointments/doctor-appointments.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DoctorAppointmentsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }
