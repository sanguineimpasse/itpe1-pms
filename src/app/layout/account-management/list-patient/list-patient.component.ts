import { Component, OnInit } from '@angular/core';
import { user_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  tableData = user_list_data.filter(user => user.accountType === 'patient');

  ngOnInit(): void {
      console.log("these are the test input data:");
      console.log(this.tableData);
  }
}
