import { NgModule } from '@angular/core';
import { ListPatientRoutingModule } from './list-patient-routing.module';
import { ListPatientComponent } from './list-patient.component';
import { CommonModule } from '@angular/common';
import { TableListModule } from 'src/app/components/table-list/table-list.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';



@NgModule({
  declarations: [
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    ListPatientRoutingModule,
    TableListModule,
    BackButtonModule
  ]
})
export class ListPatientModule { }
