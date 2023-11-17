import { NgModule } from '@angular/core';
import { ListPatientRoutingModule } from './list-patient-routing.module';
import { ListPatientComponent } from './list-patient.component';
import { SharedComponentModule } from '../../component/shared-component.module';



@NgModule({
  declarations: [
    ListPatientComponent
  ],
  imports: [
    ListPatientRoutingModule,
    SharedComponentModule
  ]
})
export class ListPatientModule { }
