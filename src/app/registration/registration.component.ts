import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}
  
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
    const containerImage = this.el.nativeElement.querySelector('#containerImage');
    const doctorAttribution = this.el.nativeElement.querySelector('#doctorAttribution');
    const patientAttribution = this.el.nativeElement.querySelector('#patientAttribution');
    if(this.isDoctor==true){
      this.renderer.setStyle(patientForm, 'display', 'none');
      this.renderer.setStyle(doctorForm, 'display', 'flex');
      this.renderer.setStyle(doctorAttribution, 'display', 'flex');
      this.renderer.setStyle(patientAttribution, 'display', 'none');
      this.renderer.setStyle(containerImage, 'background-image', 'url(../../assets/images/ashkan-forouzani-l-NIPb-9Njg-unsplash.jpg)');
      this.renderer.setStyle(containerImage, 'background-position', 'cover');
    }else if(this.isDoctor==false){
      this.renderer.setStyle(doctorForm, 'display', 'none');
      this.renderer.setStyle(patientForm, 'display', 'flex');
      this.renderer.setStyle(doctorAttribution, 'display', 'none');
      this.renderer.setStyle(patientAttribution, 'display', 'flex');
      this.renderer.setStyle(containerImage, 'background-image', 'url(../../assets/images/cdc-uN8TV9Pw2ik-unsplash.jpg)');
      this.renderer.setStyle(containerImage, 'background-position', '40% 50%');
    }
  }

  goLogin(){
    this.router.navigate(['/login']);
  }
}
