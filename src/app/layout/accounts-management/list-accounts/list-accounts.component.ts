import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token/token.service';
import { CrudService } from 'src/app/services/crud/crud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit{
    constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private titleService: Title, 
      private tokenService : TokenService,
      private crudService : CrudService,
      public datePipe : DatePipe
    ) {}
    
    currentAccount: string = this.tokenService.getRole();
    id: string = '?';
    idName: string = '';
    currentMethod: string = '';

    userList = [{
      createdAt: "",
      email: ""​,​
      firstname: "",
      lastname: "",
      role: "",
      userCode: "",
      specialization:''
    }];

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
                this.crudService.getUserList('doctor').subscribe((res) => {
                  this.userList = res;
                  console.log(res);
                });
                break;
            }
            case 'patient':{
                this.titleService.setTitle('Patient Accounts');
                this.setUser(this.id);
                this.idName = 'Patient';
                this.crudService.getUserList('patient').subscribe((res) => {
                  this.userList = res;
                  console.log(res);
                });
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
