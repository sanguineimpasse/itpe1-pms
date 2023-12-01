import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  isDoctor: boolean = false;

  selectPatient(){
    this.isDoctor = false;
    this.changeForm();
  }
  selectDoctor(){
    this.isDoctor = true;
    this.changeForm();
  }

  changeForm(){
    const patientForm = this.el.nativeElement.querySelector('#patientForm');
    const doctorForm = this.el.nativeElement.querySelector('#doctorForm');
    if(this.isDoctor==true){
      this.renderer.setStyle(patientForm, 'display', 'none');
      this.renderer.setStyle(doctorForm, 'display', 'flex');
    }else if(this.isDoctor==false){
      this.renderer.setStyle(doctorForm, 'display', 'none');
      this.renderer.setStyle(patientForm, 'display', 'flex');
    }
  }
}
