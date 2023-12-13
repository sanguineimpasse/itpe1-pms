import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit{
    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {}
    currentAccount: string = current_account_credentials.accountType;
    id: string = '?';
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        })
        switch(this.id){
            case 'doctor':{
                this.titleService.setTitle('Doctor Accounts');
                break;
            }
            case 'patient':{
                this.titleService.setTitle('Patient Accounts');
                break;
            }
            default:{
                this.router.navigate(['notfound']);
            }
        }
    }
}
