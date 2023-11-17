import { Component, OnInit } from '@angular/core';
import { patient_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  tableData = patient_list_data;

  ngOnInit(): void {
      console.log(this.tableData);
  }
}
