import { Component, OnInit } from '@angular/core';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  userList = user_list_data.filter(user => user.accountType === 'patient'); //filter array to patient first

  ngOnInit(): void {
      console.log("these are the test input data:");
      console.log(this.userList);
  }
}
