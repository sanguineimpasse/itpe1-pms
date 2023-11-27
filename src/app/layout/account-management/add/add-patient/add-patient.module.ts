import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientRoutingModule } from './add-patient-routing.module';
import { AddPatientComponent } from './add-patient.component';



@NgModule({
  declarations: [
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    AddPatientRoutingModule
  ]
})
export class AddPatientModule { }
