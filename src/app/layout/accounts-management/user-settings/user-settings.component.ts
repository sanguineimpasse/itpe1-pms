import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  boolChangePass: boolean = false;
  IsTextBoxDisabled:boolean = true;
  constructor(private location: Location) {}
  
  goBack(){
    this.location.back();
  }
  changePass(){
    this.boolChangePass=true;
    this.IsTextBoxDisabled=false;
  }
}
