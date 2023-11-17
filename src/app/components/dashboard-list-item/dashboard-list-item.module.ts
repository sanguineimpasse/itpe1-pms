import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListItemComponent } from './dashboard-list-item.component';


@NgModule({
  declarations: [
    DashboardListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardListItemComponent
  ]
})
export class DashboardListItemModule { }
