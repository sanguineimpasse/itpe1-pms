import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListItemComponent } from './dashboard-list-item.component';
import { NavRoutingModule } from 'src/app/layout/nav-routing.module';

@NgModule({
  declarations: [
    DashboardListItemComponent,
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ],
  exports:[
    DashboardListItemComponent
  ]
})
export class DashboardListItemModule { }
