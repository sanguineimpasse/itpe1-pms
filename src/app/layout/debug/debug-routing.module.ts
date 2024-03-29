import { NgModule } from '@angular/core';
import { DebugComponent } from './debug.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: DebugComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DebugRoutingModule { }
