import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit{
  constructor(private router: Router){}
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
        console.log('[sidenav](Error)ACCOUNT TYPE NOT FOUND');
      }
    }

  }

  goPrescriptions(){
    const id = 'prescriptions';
    this.router.navigate(['/accounts',id]);
  }
}
