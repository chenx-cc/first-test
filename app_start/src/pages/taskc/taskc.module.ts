import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskcPage } from './taskc';

@NgModule({
  declarations: [
    TaskcPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskcPage),
  ],
})
export class TaskcPageModule {}
