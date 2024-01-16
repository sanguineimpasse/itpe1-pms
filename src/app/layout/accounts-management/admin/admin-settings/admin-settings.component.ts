import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent {
  constructor(private location: Location, private tokenService : TokenService) {}
  currentEmail = this.tokenService.getEmail();

  userData = 
  {
    email:'',
    password:'',
    confPass:''
  }
  
  saveChanges(email:string, password:string, confPass:string){

  }
  goBack(){
    this.location.back();
  }
}
