import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorRoutingModule } from './list-doctor-routing.module';
import { ListDoctorComponent } from './list-doctor.component';



@NgModule({
  declarations: [
    ListDoctorComponent
  ],
  imports: [ListDoctorRoutingModule]
})
export class ListDoctorModule { }
