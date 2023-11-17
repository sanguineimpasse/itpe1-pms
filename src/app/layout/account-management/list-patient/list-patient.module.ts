import { NgModule } from '@angular/core';
import { ListPatientRoutingModule } from './list-patient-routing.module';
import { ListPatientComponent } from './list-patient.component';
import { SharedComponentModule } from '../../component/shared-component.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    ListPatientRoutingModule,
    SharedComponentModule
  ]
})
export class ListPatientModule { }
