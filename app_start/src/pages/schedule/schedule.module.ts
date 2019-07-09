import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    SchedulePage
  ],
  imports: [
    IonicPageModule.forChild(SchedulePage),
    DragulaModule
  ],
})
export class SchedulePageModule { }
