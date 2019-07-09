import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelstorePage } from './selstore';

@NgModule({
  declarations: [
    SelstorePage,
  ],
  imports: [
    IonicPageModule.forChild(SelstorePage),
  ],
})
export class SelstorePageModule {}
