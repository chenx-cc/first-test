import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskrdPage } from './taskrd';

@NgModule({
  declarations: [
    TaskrdPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskrdPage),
  ],
})
export class TaskrdPageModule {}
