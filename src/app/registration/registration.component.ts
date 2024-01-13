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
  conditionText:string='You must fill up all the fields first before you can proceed.'
  generatedCode:string = '';
  onSubmit(formData:Object){
    this.submitForm(formData);
  }
  submitForm(formData:any){
    if(formData.password !== formData.confPass){
      this.changeAlertColor('danger');
      this.conditionText = 'Your passwords do not match.';
      return console.error(`Passwords did not match (${formData.password}!=${formData.confPass})`);
    } 
    if(formData.password.length <= 8){
      this.changeAlertColor('danger');
      this.conditionText = 'Please enter a password that has more than 8 characters.';
      return console.error('Password was less than 8 characters.');
    } 
    if(!this.isEmail(formData.email)){
      this.changeAlertColor('danger');
      this.conditionText = 'Please enter a valid email.';
      return console.error('Invalid Email');
    }
    if(formData.role === ''){
      this.changeAlertColor('danger');
      this.conditionText = 'Please choose an account type first.';
      return console.error('No account type chosen.');
    } 

    this.generatedCode =  this.generateUserCode(6);
    
    formData.userCode = this.generatedCode;
    console.log('(formData) The inputs were:\n' + JSON.stringify(formData));
    
    this.CrudService.createUser(formData).subscribe((res) => {
      if(res.message==='success'){
        console.log('Data sent successfully!');
        this.showSuccess = true;
      }
      else if(this.errorOutput(res)==='userCodeRepeat'){
        this.submitForm(formData);
      }
      else{
        //console.error(JSON.stringify(res));
        this.changeAlertColor('danger');
        this.conditionText = this.errorOutput(res);
      }
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
  showSuccess:boolean = false;

  //BEYOND THIS POINT: UTILITY FUNCTIONS 
  alertColor = 'alert + alert-info + vstack + p-3 + gap-2 + my-1'
  changeAlertColor(type:string){
    switch(type){
      case 'danger':{
        this.alertColor = 'alert + alert-danger + vstack + p-3 + gap-2 + my-1'
        break;
      }
      case 'info':{
        this.alertColor = 'alert + alert-info + vstack + p-3 + gap-2 + my-1'
        break;
      }
      default:{
        console.log('bruh');
      }
    }
  }

  testCode : string = '';
  toJSON:object = {};
  userCodeGen(){
    this.testCode = this.generateUserCode(6);
    this.toJSON = {userCode : this.testCode};
    console.log(this.toJSON);
    this.CrudService.checkUserCode(this.toJSON).subscribe((res) => {
      console.log(res.message);
      if(res.message==='already-exists'){
        console.log('User code already exists in the database. Regenerating...');
        this.userCodeGen();
      }
    });

    console.log('the final userCode was: ' + this.testCode);
    return this.testCode;
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

  output:boolean = false;
  isEmail(input: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.output = emailRegex.test(input);
    //console.log(`Email regex: ${this.output}`);
    return this.output;
  }

  errMSG:string = '';
  errorOutput(res:any):string{
    this.errMSG = JSON.stringify(res.err.errors[0].message);
    //return this.errMSG;
    console.error('Error: ' + this.errMSG);
    switch(this.errMSG){
      case '\"email must be unique\"':{
        return 'This email is already registered.';
      }
      case'\"userCode must be unique\"':{
        return 'userCodeRepeat';
      }
      default:{
        return 'Unknown error. (Error from server)';
      }
    }
  }

  //for the spinner functionality
  loading:boolean=true;
  onLoad(){
    this.loading = false;
  }
}
