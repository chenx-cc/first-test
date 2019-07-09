import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { ApiManualServiceProvider } from '../../providers/api-service/api-manual-service';

/**
 * Generated class for the ManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-manual',
    templateUrl: 'manual.html',
})
export class ManualPage {

    private headerName;
    private manualList = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public service: ApiManualServiceProvider,
        public events: Events) {
    }

    ionViewDidLoad() {
        this.headerName = '留意点'
        this.manualList = this.navParams.get('manualList');
        for (let i = 0; i < this.manualList.length; i++) {
            this.manualList[i]['datetime'] = this.manualList[i]['datetime'].replace(/[-]/g, '/').replace('T', ' ').substr(0, 16);
        }
    }
    goBackPop() {
        this.navCtrl.pop();
    }
}
