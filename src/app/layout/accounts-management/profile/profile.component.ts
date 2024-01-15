import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { current_account_credentials } from 'src/data/currentaccount';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentUser = '';
  byWho:string = '';
  userType:string = '';
  userID:string = '';
  allowEdit:boolean = false;
  editMode:boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentUser = current_account_credentials.accountType;
      this.userType = params['userType'];
      this.userID = params['id'];
      console.log(
        'current user: ' + this.currentUser + '\n' +
        'Display type: '+ this.userType + '\n' +
        'With ID: '+ this.userID + '\n' 
        );
    })
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

    //run api and check if user exists

    if(this.currentUser==='admin'||this.userID==='me'){
      this.allowEdit = true;
      console.log('Edit allowed');
    }
    //add a check that checks if the user exists
    
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
