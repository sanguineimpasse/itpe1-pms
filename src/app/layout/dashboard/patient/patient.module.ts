import { NgModule } from '@angular/core';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    PatientRoutingModule
  ]
})
export class PatientModule { }
