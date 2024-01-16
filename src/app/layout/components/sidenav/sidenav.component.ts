import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent{
  constructor(private tokenService:TokenService){}
  accountLoggedIn = this.tokenService.getRole();
}
