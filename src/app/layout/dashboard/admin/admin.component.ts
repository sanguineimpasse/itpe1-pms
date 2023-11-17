import { Component } from '@angular/core';
import { doctor_list_data, patient_list_data, user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  userListData = user_list_data;

  patientCount = patient_list_data.length;
  doctorCount = doctor_list_data.length;
   
  patients= this.patientCount;
  recentPatients='3';
  doctors=this.doctorCount;
}
