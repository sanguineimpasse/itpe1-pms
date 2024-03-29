import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
import { TokenService } from 'src/app/services/token/token.service';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private tokenService : TokenService,
    private crudService : CrudService
  ) {}
  currentUser = '';
  byWho:string = '';
  userType:string = '';
  userID:string = '';
  allowEdit:boolean = false;
  editMode:boolean = false;

  firstname = '';
  lastname = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentUser = this.tokenService.getRole();
      this.userType = params['userType'];
      this.userID = params['id'];
      
      console.log(
        'current user: ' + this.currentUser + '\n' +
        'Display type: '+ this.userType + '\n' +
        'With ID: '+ this.userID + '\n' 
      );
    })
    if(this.userID==='me'){
      this.userID = this.tokenService.getUserCode();
    }
    switch(this.userType){
      case 'doctor':{
          
        break;
      }
      case 'patient':{
        
        break;
      }
      default:{
        this.router.navigate(['/not-found']);
      }
    }

    if(this.currentUser==='admin'||this.userID==='me'){
      this.allowEdit = true;
      console.log('Edit allowed');
    }
    //add a check that checks if the user exists
    this.crudService.getUserProfile(this.userID).subscribe((res) => {
      if(res.message==='nonexistent') return this.router.navigate(['/dashboard']);
      const fullProfile = res;
      this.firstname = fullProfile.firstname;
      this.lastname = fullProfile.lastname;
      return;
    });

  }

  capitalize(x:string){
    switch(x){
      case 'doctor':{
        return 'Doctor';
      }
      case 'patient':{
        return 'Patient';
      }
    }
    return null;
  }

  btnEdit(){
    if(!this.editMode){

      this.editMode = true;
    }
    else if(this.editMode){
      
      this.editMode = false;
    }
  }
}
