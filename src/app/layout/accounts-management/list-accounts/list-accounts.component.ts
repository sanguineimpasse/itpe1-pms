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
    idName: string = '';
    currentMethod: string = '';
    userList = user_list_data.filter(user => user.accountType === this.id);
    byWhom:string = '';
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        })
        switch(this.id){
            case 'doctor':{
                this.titleService.setTitle('Doctor Accounts');
                this.setUser(this.id);
                this.idName = 'Doctor';
                break;
            }
            case 'patient':{
                this.titleService.setTitle('Patient Accounts');
                this.setUser(this.id);
                this.idName = 'Patient';
                break;
            }
            case 'prescriptions':{
                this.titleService.setTitle('Prescriptions');
                break;
            }
            default:{
                this.router.navigate(['notfound']);
            }
        }
        switch(this.currentAccount){
          case 'admin':{
            this.byWhom = 'by-admin';
            break;
          }
          case 'doctor':{
            this.byWhom = 'by-doctor';
            break;
          }
          case 'patient':{

            break;
          }
          default:{
            console.log('unknown user type');
          }
        }
    }

    changeMethod(method:string){
      this.currentMethod = method;
    }

    //change the display on the tables based on the id
    setUser(id:string){
      this.userList = user_list_data.filter(user => user.accountType === id);
    }

    goPrescriptions(){
        const method = 'view';
        const type = 'prescriptions';
        this.router.navigate(['modify',method,type], { relativeTo: this.route });
    }
}
