import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedComponentModule } from './components/shared-component.module';
import { LayoutComponent } from './layout.component';
import { ListTableComponent } from './accounts-management/components/list-table/list-table.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }
