import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list-item',
  templateUrl: './dashboard-list-item.component.html',
  styleUrls: ['./dashboard-list-item.component.scss']
})
export class DashboardListItemComponent implements OnInit {
  @Input() userName: string = '';
  @Input() accountType: string = '';
  @Input() dateCreated: string = '';

  isPatient: boolean = false;
  isDoctor: boolean = false;

  ngOnInit(): void {
    this.isPatient = false;
    this.isDoctor = false;

    switch(this.accountType){
      case 'patient': {
        this.isPatient = true;
        break;
      }
      case "doctor": {
        this.isDoctor = true;
        break;
      }
      default: {
        console.log('[dashboard-list-item](Error)ACCOUNT TYPE NOT FOUND');
      }
    }
  }
}
