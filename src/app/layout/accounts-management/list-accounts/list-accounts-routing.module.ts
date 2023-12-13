import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAccountsComponent } from './list-accounts.component';
import { InfoModalComponent } from '../components/info-modal/info-modal.component';

const routes: Routes = [
  {
    path:'',
    component:ListAccountsComponent,
    children:[
        {
            path:'modify/:method/:type',
            component:InfoModalComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ListAccountsRoutingModule { }
