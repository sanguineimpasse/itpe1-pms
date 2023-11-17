import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list-item',
  templateUrl: './dashboard-list-item.component.html',
  styleUrls: ['./dashboard-list-item.component.scss']
})
export class DashboardListItemComponent implements OnInit {
  @Input() userName: string = '';
  @Input() accountType: string = '';

  isPatient: boolean = false;
  isDoctor: boolean = false;

  ngOnInit(): void {
    console.log("[dashboard-list-item]ngOnInit loaded");
    this.isPatient = false;
    this.isDoctor = false;

    switch(this.accountType){
      case 'patient': {
        console.log("[dashboard-list-item]account type is PATIENT");
        this.isPatient = true;
        break;
      }
      case "doctor": {
        console.log("[dashboard-list-item]account type is DOCTOR");
        this.isDoctor = true;
        break;
      }
      default: {
        console.log('[dashboard-list-item](Error)ACCOUNT TYPE NOT FOUND');
      }
    }
  }
}
