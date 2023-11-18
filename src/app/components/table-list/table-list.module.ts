import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { NavRoutingModule } from 'src/app/layout/nav-routing.module';



@NgModule({
  declarations: [
    TableListComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ],
  exports:[
    TableListComponent
  ]
})
export class TableListModule { }
