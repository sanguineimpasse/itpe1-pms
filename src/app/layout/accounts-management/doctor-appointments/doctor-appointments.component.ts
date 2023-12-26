import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent {
  constructor(private location: Location) {}
  
  goBack(){
    this.location.back();
  }
}
