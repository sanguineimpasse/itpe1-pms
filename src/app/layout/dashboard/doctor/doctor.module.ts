import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
