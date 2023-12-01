import { Component, OnInit } from '@angular/core';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit{
  accountLoggedIn = current_account_credentials.accountType;

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

}
