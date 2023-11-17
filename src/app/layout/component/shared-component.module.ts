import { NgModule } from '@angular/core';
import { ScreenComponent } from './screen/screen.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutRoutingModule } from '../layout-routing.module';
import { BackButtonComponent } from './back-button/back-button.component';
import { TableListComponent } from './table-list/table-list.component';



@NgModule({
  declarations: [
    ScreenComponent,
    SidenavComponent,
    TopnavComponent,
    BackButtonComponent,
    TableListComponent   
  ],
  imports: [
    RouterModule,
    LayoutRoutingModule
  ],
  exports:[
    ScreenComponent,
    SidenavComponent,
    TopnavComponent,
    BackButtonComponent,
    TableListComponent   
  ]
})
export class SharedComponentModule { }
