import { NgModule } from '@angular/core';
import { ScreenComponent } from './screen/screen.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { LayoutRoutingModule } from '../layout-routing.module';
import { BackButtonComponent } from '../../components/back-button/back-button.component';



@NgModule({
  declarations: [
    ScreenComponent,
    SidenavComponent,
    TopnavComponent,
  ],
  imports: [
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
