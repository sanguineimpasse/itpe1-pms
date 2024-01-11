import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud/crud.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private router: Router, private CrudService: CrudService) {}

  goLogin(){
    this.router.navigate(['/login']);
  }

  //User Model
  user = 
  {
    role:'',
    userCode:'',
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confPass:''
  };

  //FORM SUBMISSION
  onSubmit(formData:Object){
    this.submitForm(formData);
  }
  generateUserCode(len:number):string{
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  submitForm(formData:any){
    if(formData.password !== formData.confPass) return console.error(`Passwords did not match (${formData.password}!=${formData.confPass})`);
    if(formData.role === '') return alert('Please choose your account type');
    if(formData.password.length <= 8) return alert('Please enter a password that has more than 8 characters');

    formData.userCode = this.generateUserCode(6);
    console.log('formData:\n' + JSON.stringify(formData));
    
    this.CrudService.createUser(formData).subscribe((response) => {
      
      console.log('Data sent successfully!');
    });
  }

  //VISUAL STUFF
  bgColor = {'background-color':'rgba(204, 214, 204, 0.669)'};
  formImage = {'background-image':'url(../../assets/images/cdc-uN8TV9Pw2ik-unsplash.jpg)'};
  attributionDoctor:boolean = false;
  toggleRole(input:string){
    this.bgColorChange(input);
  }
  bgColorChange(condition:string){
    if(condition==='patient'){
      this.bgColor = {'background-color':'rgba(204, 241, 214, 0.669)'};
      this.formImage = {'background-image':'url(../../assets/images/cdc-uN8TV9Pw2ik-unsplash.jpg)'};
      this.attributionDoctor = false;
    }
    else if(condition==='doctor'){
      this.bgColor = {'background-color':'rgba(182, 211, 238, 0.669)'};
      this.formImage = {'background-image':'url(../../assets/images/ashkan-forouzani-l-NIPb-9Njg-unsplash.jpg)'};
      this.attributionDoctor = true;
    }
  }
}
