import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountsComponent } from './list-accounts.component';


const routes: Routes = [
  {
    path:'',
    component:ListAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ListAccountsRoutingModule { }
