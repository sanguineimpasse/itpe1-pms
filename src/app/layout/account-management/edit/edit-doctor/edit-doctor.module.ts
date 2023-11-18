import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDoctorComponent } from './edit-doctor.component';
import { EditDoctorRoutingModule } from './edit-doctor-routing.module';



@NgModule({
  declarations: [
    EditDoctorComponent
  ],
  imports: [
    CommonModule,
    EditDoctorRoutingModule
  ]
})
export class EditDoctorModule { }
