import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAppointmentsComponent } from './doctor-appointments.component';

const routes: Routes = [
    {
        path:'',
        component: DoctorAppointmentsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DoctorAppointmentsRoutingModule { }
