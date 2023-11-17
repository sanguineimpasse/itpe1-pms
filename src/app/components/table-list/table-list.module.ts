import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';



@NgModule({
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableListComponent
  ]
})
export class TableListModule { }
