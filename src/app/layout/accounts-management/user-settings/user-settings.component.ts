import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  constructor(private location: Location) {}
  
  goBack(){
    this.location.back();
  }
}
