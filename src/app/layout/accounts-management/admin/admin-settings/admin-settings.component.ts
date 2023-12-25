import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent {
  constructor(private location: Location) {}
  
  goBack(){
    this.location.back();
  }
}
