import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private router: Router, private CrudService: CrudService) {}

    goRegister() {
      this.router.navigate(['/register']);
    }

    login = 
    {
      email:'',
      password:''
    }

    onSubmit(formData:object){
      console.log(typeof formData)
      this.CrudService.login(formData).subscribe((res) => {
        if(res.valid){
          this.router.navigate(['/dashboard']);
        }
        console.log(JSON.stringify(res));
      });
    }
}
