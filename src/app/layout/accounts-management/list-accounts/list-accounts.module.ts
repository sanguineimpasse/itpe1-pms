import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountsRoutingModule } from './list-accounts-routing.module';
import { ListAccountsComponent } from './list-accounts.component';
import { BackButtonModule } from 'src/app/components/back-button/back-button.module';


@NgModule({
  declarations: [
    ListAccountsComponent

  ],
  imports: [
    CommonModule,
    ListAccountsRoutingModule,
    BackButtonModule
  ]
})
export class ListAccountsModule { }
