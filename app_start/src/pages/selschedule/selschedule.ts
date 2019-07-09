import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, ViewController, Events, AlertController } from 'ionic-angular';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { CognitoCommonProvider } from '../../providers/cognito-common/cognito-common';

/**
 * Generated class for the SelschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-selschedule',
    templateUrl: 'selschedule.html',
})
export class SelschedulePage {

    private aplUserId;
    private timeRun;
    private storeNo;
    private storeNm;
    private viewKbn;
    private selectedDate;
    private currentTimeSlotId;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private loadingCtrl: LoadingController,
        private viewCtrl: ViewController,
        private scheduleProvider: ApiScheduleServiceProvider,
        private events: Events,
        private alertCtrl: AlertController,
        public appCtrl: App,
        private cognito: CognitoCommonProvider) {
        this.aplUserId = this.navParams.data.aplUserId;
        this.timeRun = this.navParams.data.timeRun;
        this.storeNo = this.navParams.data.storeNo;
        this.storeNm = this.navParams.data.storeNm;
        this.viewKbn = this.navParams.data.viewKbn;
        this.selectedDate = this.navParams.data.selectedDate;
        this.currentTimeSlotId = this.navParams.data.currentTimeSlotId;
    }

    ionViewDidLoad() {
        let pop = document.querySelector('.popover-content')
        if (pop != undefined && pop != null) {
            pop['style']['margin-top'] = '35.5px';
        }
    }

    async selInfo(kbn, selectedText) {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        let date = new Date();
        let res;
        if (this.selectedDate == undefined) {
            this.selectedDate = UtilityService.formatDate(date);
        }
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());
        res = await this.scheduleProvider.getScheduleInit(
            this.storeNo, this.selectedDate, selTime, kbn);
            loading.dismiss().then(() => {
                this.viewCtrl.dismiss();
            });
            let params;

            if (kbn == '0' || kbn == '1') {
                //スゲジュール画面から遷移する場合
                if (this.viewKbn == '0' || this.viewKbn == '1') {
                    params = {
                        res: res, selectedText: selectedText, storeNo: this.storeNo,
                        storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                        selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                        dragFlg: true
                    };
                    this.events.publish('res:created', params);
                } else {
                    //カンバン画面から遷移する場合
                    params = {
                        res: res, selectedText: selectedText, storeNo: this.storeNo,
                        storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                        selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId
                    };
                    this.events.unsubscribe('res:created');
                    this.appCtrl.getRootNav().setRoot('SchedulePage', params);
                }
            }
            if (kbn == '2' || kbn == '3') {
                //カンバン画面から遷移する場合
                if (this.viewKbn == '2' || this.viewKbn == '3') {
                    params = {
                        res: res, selectedText: selectedText, storeNo: this.storeNo,
                        storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                        selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
                        dragFlg: true
                    };
                    this.events.publish('res:creat', params);
                } else {
                    //スゲジュール画面から遷移する場合
                    params = {
                        res: res, selectedText: selectedText, storeNo: this.storeNo,
                        storeNm: this.storeNm, viewKbn: kbn, aplUserId: this.aplUserId,
                        selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId
                    };
                    this.events.unsubscribe('res:creat');
                    this.appCtrl.getRootNav().setRoot('BoardPage', params);
                }
            }
    }

    goFeedback() {
        this.navCtrl.push('FeedbackPage',{
            storeNo: this.storeNo,
            storeNm: this.storeNm,
            aplUserId: this.aplUserId,
            selectedDate: this.selectedDate
        });
    }

    async logout() {
        this.cognito.logout();
        clearInterval(this.timeRun);
        this.viewCtrl.dismiss();
        this.events.unsubscribe("res:created");
        this.events.unsubscribe("res:creat");
        this.appCtrl.getRootNav().setRoot('LoginPage');
    }
}
