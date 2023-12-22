import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountsRoutingModule } from './list-accounts-routing.module';
import { ListAccountsComponent } from './list-accounts.component';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';




@NgModule({
  declarations: [
    ListAccountsComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule,
    ListAccountsRoutingModule,
    BackButtonModule
  ]
})
export class ListAccountsModule { }
