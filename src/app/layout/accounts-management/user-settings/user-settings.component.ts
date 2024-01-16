import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CrudService } from 'src/app/services/crud/crud.service';
import { TokenService } from 'src/app/services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  constructor(private location: Location, private router : Router, private crudService : CrudService, private tokenService : TokenService) {}
  currentEmail = this.tokenService.getEmail();
  
  userData = 
  {
    email:'',
    password:'',
    confPass:''
  };

  saveChanges(email:string, password:string, confPass:string){
    console.log(`email: '${email}'\npassword: '${password}'\nconfPass: '${confPass}'`)
    const emptyRegex = /^\s*$/;
    const emailCheck:boolean = emptyRegex.test(email);
    const passwordCheck:boolean = emptyRegex.test(password);
    if(emailCheck&&passwordCheck) return console.log('no edit needed');

    if(!passwordCheck){
      if(password.length <= 8) return console.error('Password must be longer than 8 characters');
    } 
    
    if(password !== confPass){
      return console.error('Passwords do not match');
    }

    var condition:string = '';
    if(!emailCheck&&!passwordCheck){
      condition = 'keep-none';
    }
    else if(!emailCheck){
      condition = 'keep-pass';
    }
    else if(!passwordCheck){
      condition = 'keep-email';
    }

    console.log(`email: '${email}'\npassword: '${password}'\nconfPass: '${confPass}'\ncondition: '${condition}'`)
    const token = localStorage.getItem('sessiontoken');
    if(!!token){
      const prevEmail = this.tokenService.getEmail();
      this.crudService.saveUserAccountInfo(token, prevEmail, email, password, condition).subscribe((res) => {
        if(res.message==='success'){
          this.router.navigate(['/dashboard']);
          console.log(res.message);
        }
        else{
          console.error(JSON.stringify(res))
        }
      });
    } 
    else{
      return console.error('invalid token');
    }
  }
  
  goBack(){
    this.location.back();
  }
}
