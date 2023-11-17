import { Component, OnInit } from '@angular/core';
import { doctor_list_data } from 'src/data/testlistdata';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit{
  tableData = doctor_list_data;
  ngOnInit(): void {
    console.log("these are the test input data:");
    console.log(this.tableData);
  }
}
