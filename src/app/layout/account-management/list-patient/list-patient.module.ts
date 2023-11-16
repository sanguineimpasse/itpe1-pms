import { NgModule } from '@angular/core';
import { ListPatientRoutingModule } from './list-patient-routing.module';
import { ListPatientComponent } from './list-patient.component';



@NgModule({
  declarations: [
    ListPatientComponent
  ],
  imports: [
    ListPatientRoutingModule
  ]
})
export class ListPatientModule { }
