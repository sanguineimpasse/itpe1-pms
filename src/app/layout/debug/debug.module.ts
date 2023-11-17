import { NgModule } from '@angular/core';
import { DebugComponent } from './debug.component';
import { DebugRoutingModule } from './debug-routing.module';



@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    DebugRoutingModule
  ]
})
export class DebugModule { }
