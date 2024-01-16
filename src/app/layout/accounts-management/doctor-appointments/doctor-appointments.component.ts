import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { current_account_credentials } from 'src/data/currentaccount';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent{
  constructor(private location: Location, private tokenService : TokenService) {}

  //replace with an actual query when db is finished
  currentAccount = this.tokenService.getRole();

  goBack(){
    this.location.back();
  }
}
