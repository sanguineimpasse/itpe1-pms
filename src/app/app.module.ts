import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenSizeModule } from './components/debug/screen-size/screen-size.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ScreenSizeModule,
    HttpClientModule,
  ],
  providers: [ 
    JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS } 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
