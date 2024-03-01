import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Location } from '@angular/common';
import { CrudService } from 'src/app/services/crud/crud.service';
import { TokenService } from 'src/app/services/token/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  constructor(
    private location: Location, 
    private crudService : CrudService, 
    private tokenService : TokenService,
    private authService : AuthService,
    private router : Router
  ) {}

  currentEmail = this.tokenService.getEmail();
  
  userData = 
  {
    email:'',
    password:'',
    confPass:''
  };

  showSuccess:boolean = false;
  
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
          console.log(res.message);
          alert('Account settings changed. You need to log in again.');
          this.authService.logout();
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

  data = {
    token: ''
  };

  qrCode:string = '';
  show2FAButton:boolean = true;
  generateTwoFactor(){
    const userCode = this.tokenService.getUserCode();
    this.crudService.addTwoFactorAuth(userCode).subscribe((res) => {
      console.log(res);
      this.qrCode = res.qrCode;
      this.show2FAButton = false;
    });
  }

  disableSubmit:boolean = true;
  verifyToken(token:string){
    const userCode = this.tokenService.getUserCode();
    this.crudService.verifyFactorAuth(token, userCode).subscribe((res) => {
      console.log(res);
      if(res.message==='token-valid'){
        this.disableSubmit = false;
        alert('You have successfully enabled 2-factor authentication.');
        
      }
      
    });
  }
  
  goBack(){
    this.location.back();
  }

  goHome(){
    this.router.navigate(['/dashboard']);
  }

  ok(){
    this.authService.logout();
  }
}
