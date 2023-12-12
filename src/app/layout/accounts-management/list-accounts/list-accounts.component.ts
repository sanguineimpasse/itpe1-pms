import { Component } from '@angular/core';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent {
 currentAccount: string = current_account_credentials.accountType;
 
}
