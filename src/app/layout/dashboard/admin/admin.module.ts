import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { DashboardListItemModule } from 'src/app/components/dashboard-list-item/dashboard-list-item.module';
import { LayoutRoutingModule } from '../../layout-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardListItemModule
  ]
})
export class AdminModule { }
