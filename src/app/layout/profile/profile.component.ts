import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  patient = {
    name: 'Hahalol',
    profilePicture: 'wews.jpg',
    dateOfBirth: 'January 1, 2023',
    gender: 'Male',
    address: '123 haha, lol'
    
  };

}
