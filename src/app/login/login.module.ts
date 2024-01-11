import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { BackButtonModule } from '../components/back-button/back-button.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    LoginRoutingModule,
    FormsModule,
    BackButtonModule
  ]
})
export class LoginModule { }
