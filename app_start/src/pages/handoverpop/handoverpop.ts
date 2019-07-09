import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HandoverpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-handoverpop',
  templateUrl: 'handoverpop.html',
})
export class HandoverpopPage {
  private getData: {};
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public appCtrl: App) {
    this.getData = this.navParams.data;
  }

  ionViewWillEnter() {
    let pop = document.querySelector('.popover-content')
    if (pop != undefined && pop != null) {
      pop['style'].top = '51px';
    }
  }

  goHandoverc() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('HandovercPage', {
      storeNo: this.getData['storeNo'],
      storeNm: this.getData['storeNm'],
      currentTimeSlotId: this.getData['currentTimeSlotId'],
      currentTimeSlotNm: this.getData['currentTimeSlotNm'],
      aplUserId: this.getData['aplUserId'],
      viewKbn: this.getData['viewKbn'],
      selectedText: this.getData['selectedText'],
      selectedDate: this.getData['selectedDate']
    });
  }

  goHandoverrd() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push('HandoverrdPage', {
      storeNo: this.getData['storeNo'],
      storeNm: this.getData['storeNm'],
      currentTimeSlotId: this.getData['currentTimeSlotId'],
      aplUserId: this.getData['aplUserId'],
      viewKbn: this.getData['viewKbn'],
      selectedText: this.getData['selectedText'],
      selectedDate: this.getData['selectedDate']
    });
  }

}
