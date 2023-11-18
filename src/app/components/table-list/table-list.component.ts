import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() userCode: string = '';
  @Input() userName: string = '';
  @Input() accountType: string = '';

  isDoctor: boolean = false;
  isPatient: boolean = false;

  ngOnInit(): void {
    console.log("[table-list] data inputter working :D")

    if(this.accountType=='doctor'){
      this.isDoctor = true;
    }else if(this.accountType=='patient'){
      this.isPatient = true;
    }
  }
}
