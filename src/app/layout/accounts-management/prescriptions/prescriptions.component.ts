import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token/token.service';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})
export class PrescriptionsComponent implements OnInit{
  constructor(private titleService: Title, private tokenService : TokenService) {}
  currentAccount:string ='';
  ngOnInit(): void {
    //replace the dummy var with a proper db query when the backend is finished
    this.currentAccount = this.tokenService.getRole();
    if(this.currentAccount==='doctor'){
      this.titleService.setTitle('Prescriptions');
    }
    else if(this.currentAccount==='patient'){
      this.titleService.setTitle('My Prescriptions');
    }
  }
}
