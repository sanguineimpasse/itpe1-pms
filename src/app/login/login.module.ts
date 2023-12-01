import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { QrloginComponent } from './qrlogin/qrlogin.component';
import { BackButtonModule } from '../components/back-button/back-button.module';


@NgModule({
  declarations: [
    LoginComponent,
    QrloginComponent
  ],
  imports: [
    LoginRoutingModule,
    BackButtonModule
  ]
})
export class LoginModule { }
