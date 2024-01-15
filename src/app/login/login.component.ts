import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router, private AuthService: AuthService) {}

    goRegister() {
      this.router.navigate(['/register']);
    }

    login = 
    {
      email:'',
      password:''
    }

    alertClass = 'hide';
    onSubmit(email:string, password:string){
      //console.log(`email: ${email}, password: ${password}`)
      this.AuthService.login(email, password).subscribe((res) => {
        // console.log('res is:' + typeof res)
        //console.log('status: ' + JSON.stringify(res.status));
        // console.log('token: ' + JSON.stringify(res.token));
        if(res.status==='success') this.router.navigate(['/dashboard']);
        else if(!res.messsage){
          //console.log(!res.message);
          this.alertClass = 'alert + alert-danger + vstack + p-3 + gap-2 + my-1';
        } 
        
      });

    }
}
