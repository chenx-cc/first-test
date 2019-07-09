import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelschedulePage } from './selschedule';

@NgModule({
  declarations: [
    SelschedulePage,
  ],
  imports: [
    IonicPageModule.forChild(SelschedulePage),
  ],
})
export class SelschedulePageModule {}
