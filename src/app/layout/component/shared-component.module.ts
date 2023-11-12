import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutRoutingModule } from '../layout-routing.module';



@NgModule({
  declarations: [
    ScreenComponent,
    SidenavComponent,
    TopnavComponent   
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule
  ],
  exports:[
    ScreenComponent,
    SidenavComponent,
    TopnavComponent
  ]
})
export class SharedComponentModule { }
