import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorHomeRoutingModule } from './visitor-home-routing.module';
import { VisitorHomeComponent } from './visitor-home.component';



@NgModule({
  declarations: [
    VisitorHomeComponent
  ],
  imports: [
    VisitorHomeRoutingModule
  ]
})
export class VisitorHomeModule { }
