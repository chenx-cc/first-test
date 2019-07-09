import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardPage } from './board';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    BoardPage
  ],
  imports: [
    IonicPageModule.forChild(BoardPage),
    DragulaModule
  ],
})
export class BoardPageModule {}
