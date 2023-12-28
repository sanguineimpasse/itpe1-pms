import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent{
  constructor(private location: Location) {}

  //replace with an actual query when db is finished
  currentAccount = current_account_credentials.accountType;

  goBack(){
    this.location.back();
  }
}
