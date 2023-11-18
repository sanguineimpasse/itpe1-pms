import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedComponentModule } from '../../component/shared-component.module';



@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
