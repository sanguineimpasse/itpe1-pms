import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorRoutingModule } from './list-doctor-routing.module';
import { ListDoctorComponent } from './list-doctor.component';
import { SharedComponentModule } from '../../component/shared-component.module';



@NgModule({
  declarations: [
    ListDoctorComponent
  ],
  imports: [
    CommonModule,
    ListDoctorRoutingModule,
    SharedComponentModule
  ]
})
export class ListDoctorModule { }
