import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';
import { Title } from '@angular/platform-browser';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit{
    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {}
    currentAccount: string = current_account_credentials.accountType;
    id: string = '?';
    userList = user_list_data.filter(user => user.accountType === this.id);
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        })
        switch(this.id){
            case 'doctor':{
                this.titleService.setTitle('Doctor Accounts');
                this.setUser(this.id);
                break;
            }
            case 'patient':{
                this.titleService.setTitle('Patient Accounts');
                this.setUser(this.id);
                break;
            }
            case 'prescriptions':{
                this.titleService.setTitle('Prescriptions');
                break;
            }
            case 'patients':{
                
                break;
            }
            default:{
                this.router.navigate(['notfound']);
            }
        }
    }

    setUser(id:string){
      this.userList = user_list_data.filter(user => user.accountType === id);
    }
    
    goAdd(type:string){
        switch(type){
            case 'doctor':{
                const method = 'add';
                const type = 'doctor';
                this.router.navigate(['modify',method,type], { relativeTo: this.route });
                break;
            }
            case 'patient':{
                const method = 'add';
                const type = 'patient';
                this.router.navigate(['modify',method,type], { relativeTo: this.route });
                break;
            }
        }
    }

    goPrescriptions(){
        const method = 'view';
        const type = 'prescriptions';
        this.router.navigate(['modify',method,type], { relativeTo: this.route });
    }
}
