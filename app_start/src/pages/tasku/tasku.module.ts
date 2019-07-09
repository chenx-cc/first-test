import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskuPage } from './tasku';

@NgModule({
  declarations: [
    TaskuPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskuPage),
  ],
})
export class TaskuPageModule {}
