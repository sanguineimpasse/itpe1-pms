import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/token/token.service';
import { CrudService } from '../services/crud/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router, private AuthService: AuthService, private tokenService : TokenService, private crudService : CrudService) {}

    goRegister() {
      this.router.navigate(['/register']);
    }

    login = 
    {
      email:'',
      password:''
    }

    glbEmail ='';
    glbPass = '';

    alertClass = 'hide';
    onSubmit(email:string, password:string){
      //console.log(`email: ${email}, password: ${password}`)
      this.glbEmail = email;
      this.glbPass = password;
      this.crudService.checkForSecret(email).subscribe((res) => {
        console.log(res.message)
        if(res.message==='yes'){
          this.showAuthWindow = true;
          return;
        }
        else{
          this.proceedLogin(email,password);
        }
      });

    }

    proceedLogin(email:string, password:string){
      this.AuthService.login(email, password).subscribe((res) => {
        if(res.status==='success') this.router.navigate(['/dashboard']);
        else if(!res.messsage){
          this.alertClass = 'alert + alert-danger + vstack + p-3 + gap-2 + my-1';
        } 
        
      });
    }

    data = {
      token: ''
    }

    showAuthWindow: boolean = false;
    verifyToken(token:string){
      console.log(token);
      console.log('email: \'' +this.glbEmail + '\'');
      this.crudService.verifyTwoFactorAuthViaEmail(token, this.glbEmail).subscribe((res) => {
        console.log(res);
        if(res.message==='token-valid'){
          this.proceedLogin(this.glbEmail,this.glbPass);
        }
        else{
          alert('The code you entered is incorrect.');
        }
        
      });
    }
}
