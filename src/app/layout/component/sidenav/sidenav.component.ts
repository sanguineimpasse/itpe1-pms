import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit{
  accountLoggedIn: string = 'admin';//for now, we need to STRICTLY specify the account type in this variable

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

}
