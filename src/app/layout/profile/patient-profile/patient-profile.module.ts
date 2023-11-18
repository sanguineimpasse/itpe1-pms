import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile.component';
import { PatientRoutingModule } from '../../dashboard/patient/patient-routing.module';
import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';



@NgModule({
  declarations: [
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    PatientProfileRoutingModule,
    BackButtonModule
  ]
})
export class PatientProfileModule { }
