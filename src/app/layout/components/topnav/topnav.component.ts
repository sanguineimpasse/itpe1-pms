import { Component, OnInit } from '@angular/core';
import { current_account_credentials } from 'src/data/currentaccount';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit{
  constructor(private router: Router, public authService: AuthService ){}

  accountLoggedIn = current_account_credentials.accountType;
  accountName= `${current_account_credentials.lastName}, ${current_account_credentials.firstName}`

  isAdmin: boolean = false;
  isPatient: boolean = false;
  isDoctor: boolean = false;

  ngOnInit(): void {
    switch(this.accountLoggedIn){
      case 'admin':{
        this.isAdmin = true;
        break;
      }
      case 'patient': {
        this.isPatient = true;
        break;
      }
      case "doctor": {
        this.isDoctor = true;
        break;
      }
      default: {
        console.log('[topnav](Error)ACCOUNT TYPE NOT FOUND');
      }
    }
  }

  styleDisplay:string = '';
  hideDropdown:boolean = true;
  showDropdown(){
    if(this.hideDropdown===true){
      this.hideDropdown = false;
      this.styleDisplay = 'flex';
    }
    else if(this.hideDropdown===false){
      this.hideDropdown = true;
      this.styleDisplay = 'none';
    }
  }

  logOut(){
    this.authService.logout();
  }
}
