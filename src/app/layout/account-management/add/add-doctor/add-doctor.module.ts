import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { AddDoctorComponent } from './add-doctor.component';



@NgModule({
  declarations: [
    AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AddDoctorRoutingModule
  ]
})
export class AddDoctorModule { }
