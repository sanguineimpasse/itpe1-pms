import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';
import { Title } from '@angular/platform-browser';
import { user_list_data } from 'src/data/testlistdata';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit{
    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title, private tokenService : TokenService) {}
    
    currentAccount: string = this.tokenService.getRole();
    id: string = '?';
    idName: string = '';
    currentMethod: string = '';
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
                this.idName = 'Doctor';
                break;
            }
            case 'patient':{
                this.titleService.setTitle('Patient Accounts');
                this.setUser(this.id);
                this.idName = 'Patient';
                break;
            }
            default:{
                this.router.navigate(['notfound']);
            }
        }
    }

    changeMethod(method:string){
      this.currentMethod = method;
    }

    //change the display on the tables based on the id
    setUser(id:string){
      //replace the dummy variable with an actual query from the DB when the backend is finished
      this.userList = user_list_data.filter(user => user.accountType === id);
    }

    goBack(){
      this.router.navigate(['/dashboard']);
    }

    deleteID:string = '';
    setDelete(id:string){
      this.deleteID = id;
      console.log('deleteID: ' + this.deleteID);
    }

    deleteUser(){
      console.log('user to be deleted(id): ' + this.deleteID);
    }
}
