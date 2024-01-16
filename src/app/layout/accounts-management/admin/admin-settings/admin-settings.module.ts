import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingsComponent } from './admin-settings.component';
import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminSettingsRoutingModule,
    FormsModule,
  ]
})
export class AdminSettingsModule { }
