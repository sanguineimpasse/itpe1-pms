import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})
export class PrescriptionsComponent implements OnInit{
  constructor(private titleService: Title) {}
  currentAccount:string ='';
  ngOnInit(): void {
    //replace the dummy var with a proper db query when the backend is finished
    this.currentAccount = current_account_credentials.accountType;
    if(this.currentAccount==='doctor'){
      this.titleService.setTitle('Prescriptions');
    }
    else if(this.currentAccount==='patient'){
      this.titleService.setTitle('My Prescriptions');
    }
  }
}
