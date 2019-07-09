import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { ApiSelstoreServiceProvider } from '../../providers/api-service/api-selstore-service';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ViewCommon } from '../../providers/view-common/ViewCommon';

/**
 * Generated class for the SelstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-selstore',
    templateUrl: 'selstore.html',
})
export class SelstorePage {

    private userId;
    private shopList = [];
    private storeNoChecked;
    private storeNmChecked;
    private registrationId: any;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private appCtrl: App,
        public service: ApiSelstoreServiceProvider,
        public push: Push,
        private scheduleProvider: ApiScheduleServiceProvider) {
        this.userId = this.navParams.get('aplUserId');
    }

    ionViewDidLoad() {
        this.selstore();
    }

    shopChecked(no, nm) {
        this.storeNoChecked = no;
        this.storeNmChecked = nm;
    }

    goBack() {
        this.navCtrl.setRoot('LoginPage');
    }

    async goHome() {
        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        let date = new Date();
        let selDate = UtilityService.formatDate(date);
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());

        let res = await this.scheduleProvider.getScheduleInit(
            this.storeNoChecked, selDate, selTime, '0');
        if (!res) {
            loading.dismiss();
            return;
        }
        let result = res.json();
        if (result['timeSlotInfoList'].length === 0) {
            loading.dismiss();
            ViewCommon.showAlert(this.alertCtrl, '本店の時間帯データはありません。');
            return;
        }

        this.navCtrl.setRoot('SchedulePage',
            {
                storeNo: this.storeNoChecked, storeNm: this.storeNmChecked,
                res: res, aplUserId: this.userId, viewKbn: '0', selectedText: 'カレンダー( 業務別 )',
                selectedDate: selDate
            });

        loading.dismiss();
    }

    async selstore() {
        let res = await this.service.selstore(this.userId);
        LoginPage.loginLoading.dismiss();
        if (res) {
            this.shopList = res.json()['storeList']
            if (this.shopList.length > 0) {
                this.storeNoChecked = this.shopList[0].storeNo;
                this.storeNmChecked = this.shopList[0].storeNm;
            } else {
                ViewCommon.showAlert(this.alertCtrl, 'このユーザーIDの店舗情報はありません。');
            }
        }
    }
}
