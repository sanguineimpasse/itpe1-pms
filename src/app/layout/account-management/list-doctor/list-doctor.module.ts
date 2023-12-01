import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDoctorRoutingModule } from './list-doctor-routing.module';
import { ListDoctorComponent } from './list-doctor.component';
import { TableListModule } from '../components/table-list/table-list.module'
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';



@NgModule({
  declarations: [
    ListDoctorComponent
  ],
  imports: [
    CommonModule,
    ListDoctorRoutingModule,
    TableListModule,
    BackButtonModule
  ]
})
export class ListDoctorModule { }
