import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { LayoutModule } from './layout/layout.module';
import { ScreenSizeModule } from './components/debug/screen-size/screen-size.module';
import { NotFoundModule } from './not-found/not-found.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    RegistrationModule,
    LayoutModule,
    ScreenSizeModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
