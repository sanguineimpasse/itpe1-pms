import { Component, OnInit } from '@angular/core';
import { current_account_credentials } from 'src/data/currentaccount';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent{
  constructor(private authService: AuthService, private tokenService:TokenService){}

  accountLoggedIn:string = this.tokenService.getRole();
  accountName= `${current_account_credentials.lastName}, ${current_account_credentials.firstName}`
  accountFullName = this.tokenService.getName();

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
