import { NgModule } from '@angular/core';
import { ScreenComponent } from './screen/screen.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutRoutingModule } from '../layout-routing.module';
import { SidenavDoctorComponent } from './sidenav-doctor/sidenav-doctor.component';



@NgModule({
  declarations: [
    ScreenComponent,
    SidenavComponent,
    TopnavComponent,
    SidenavDoctorComponent   
  ],
  imports: [
    RouterModule,
    LayoutRoutingModule
  ],
  exports:[
    ScreenComponent,
    SidenavComponent,
    TopnavComponent,
    SidenavDoctorComponent
  ]
})
export class SharedComponentModule { }
