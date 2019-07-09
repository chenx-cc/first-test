import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { S3Util } from '../../providers/s3-common/s3.service';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { ApiHandoverServiceProvider } from '../../providers/api-service/api-handover-service';
/**
 * Generated class for the HandovercPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// navigator
declare var navigator: any; //★端末の機能チェック用

@IonicPage()
@Component({
    selector: 'page-handoverc',
    templateUrl: 'handoverc.html',
})
export class HandovercPage {

    private frameNm;
    private handoverDate;
    private handoverOpId;
    private handoverOp;
    private handoverTimeSoltId;
    private handoverTimeSolt;
    private handoverContent;
    private handoverPic;
    private imgPath;
    private minDateTime;
    private maxDateTime;
    private getData;
    private base64Image: string;

    private isShowWorkerFlg = true;
    private showWorkerList = [];
    private selectWorker = '';
    private workerId = '';
    private taskId;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        private camera: Camera,
        public keyboard: Keyboard,
        public s3Util: S3Util,
        public loadingCtrl: LoadingController,
        private appCtrl: App,
        private handoverProvider: ApiHandoverServiceProvider,
        public events: Events) {

    }

    ionViewDidLoad() {
        this.getData = this.navParams.data;
        this.frameNm = '引継作成'
        this.minDateTime = new Date().toISOString();
        this.maxDateTime = '2050-01-01'
        this.taskId = this.getData['taskId'];
        this.handoverOpId = this.getData['opId'];
        this.handoverOp = this.getData['opNm'];
        this.handoverTimeSoltId = this.getData['currentTimeSlotId'];
        this.handoverTimeSolt = this.getData['currentTimeSlotNm'];
        this.handoverPic = 'assets/imgs/noImage/NoImage.png';
        this.getWorker();
    }

    ionViewWillEnter() {
        this.keyboard.onKeyboardShow().subscribe(() => {
            document.body.classList.add('keyboard-is-open');
            let pageTaskC = document.getElementById('ion-taskc');

            if (pageTaskC != undefined && pageTaskC != null) {
                let sContent = pageTaskC.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 50px;');
                    }
                }
            }
        });

        this.keyboard.onKeyboardHide().subscribe(() => {
            document.body.classList.remove('keyboard-is-open');

            let pageMainPad = document.getElementById('mainPad');

            if (pageMainPad != undefined && pageMainPad != null) {
                let sContent = pageMainPad.getElementsByClassName('scroll-content');
                if (sContent.length > 0) {
                    if (sContent[0] != undefined && sContent[0] != null) {
                        sContent[0].setAttribute('style', 'padding-bottom: 0px;margin-top: 100px;');
                    }
                }
            }
        });
    }

    isShowWorker() {
        if (this.isShowWorkerFlg) {
            this.isShowWorkerFlg = false;
        } else {
            this.isShowWorkerFlg = true;
        }
    }

    selectedName(id, name) {
        this.selectWorker = name;
        this.workerId = id;
    }

    doNoCameraAlert() {
        let alert = this.alertCtrl.create({
            title: '警告',
            subTitle: 'このデバイスにはカメラがありません。',
            buttons: ['OK']
        });
        alert.present(alert);
    }

    takePicture() {
        if (navigator.camera === undefined) {
            // カメラがない
            this.doNoCameraAlert();
        }
        else {
            this.camera.getPicture({
                quality: 100, // 写真のクオリティを0~100で指定
                destinationType: this.camera.DestinationType.DATA_URL, // 戻り値のフォーマットの指定 DATA_URL or FILE_URI
                sourceType: this.camera.PictureSourceType.CAMERA, // ソースタイプ指定。 PHOTOLIBRARY or CAMERA or SAVEDPHOTOALBUM
                allowEdit: false, // 画像を選択する前の簡単な編集を許可
                encodingType: this.camera.EncodingType.PNG, // 画像ファイルのエンコードタイプ
                targetWidth: 600, // 画像スケールのためのピクセルでの横幅指定
                targetHeight: 600, // 画像スケールのためピクセルでの縦幅指定
                saveToPhotoAlbum: false // 写真撮影後に端末に画像を保存するかどうか
            }).then(imageData => {
                // base64Imageの更新
                this.base64Image = imageData;
                this.handoverPic = 'data:image/png;base64,' + imageData;
            }, error => {
                console.log("ERROR -> " + JSON.stringify(error));
            });
        }
    }

    uploads3() {
        console.log('start uploads3');
        let mythis = this;
        var callback = function (data, mythis) {
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        //S3upload
        this.s3Util.uploadToS3(callback, mythis);

    }

    async creHandover() {
        if (this.selectWorker == '') {
            let alert = this.alertCtrl.create({
                title: '入力者はご入力してください。',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        if (this.handoverDate == undefined || this.handoverDate == '') {
            let alert = this.alertCtrl.create({
                title: '引継日時はご入力してください。',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        if (this.base64Image != undefined) {
            if (this.taskId != undefined) {
                this.imgPath = 'handover/' + this.getData['aplUserId'] + '/'
                    + this.getData['storeNo'] + '/task/' + this.taskId + UtilityService.fmtSysDateTime(new Date()) + '.png';
            } else if (this.handoverTimeSoltId != undefined) {
                this.imgPath = 'handover/' + this.getData['aplUserId'] + '/'
                    + this.getData['storeNo'] + '/timeslot/' + this.handoverTimeSoltId + UtilityService.fmtSysDateTime(new Date()) + '.png';
            }
        }

        if ((this.handoverContent == undefined || this.handoverContent == '')
            && (this.imgPath == undefined || this.imgPath == '')) {
            let alert = this.alertCtrl.create({
                title: '引継内容や画像はいずれかご入力してください。',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        let selectedDate = this.navParams.data.selectedDate;
        let res = undefined;
        if (this.taskId != undefined) {
            res = await this.handoverProvider.creHandoverByTaskId(
                this.taskId, this.workerId, this.handoverContent, this.imgPath, this.handoverDate, selectedDate);
        } else if (this.handoverTimeSoltId != undefined) {
            res = await this.handoverProvider.creHandoverByTimesoltId(
                this.handoverTimeSoltId, this.workerId, this.handoverContent, this.imgPath, this.handoverDate, selectedDate);
        }

        loading.dismiss();

        if (!res) {
            return;
        }

        if (this.base64Image != undefined) {
            this.uploads3();
        }
        if (this.taskId != undefined) {
            if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                //スゲジュールのタスクの引継ぎ
                this.events.publish('res:created', { "TaskHasHandover": 1 });
            } else {
                //カンバンのタスクの引継ぎ
                this.events.publish('res:creat', { "TaskHasHandover": 1 });
            }
        } else {
            if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                //スゲジュールのシフトの引継ぎ
                this.events.publish('res:created', { "hasHandover": true });
            } else {
                //カンバンのシフトの引継ぎ
                this.events.publish('res:creat', { "hasHandover": true });
            }
        }

        this.appCtrl.getRootNav().pop(this.getData);
    }

    async getWorker() {
        let res = await this.handoverProvider.getWorker(this.getData['storeNo']);
        if (!res) {
            return;
        }
        let result = res.json();
        if (result['workerList'].length === 0) {
            ViewCommon.showAlert(this.alertCtrl, '担当できる従業員はいません。');
            return;
        }
        this.showWorkerList = result['workerList'];
    }

    //前画面へ遷移する
    goBackPop() {
        this.navParams.data['hasHandover'] = 5;
        this.navCtrl.pop();
    }

    changeDate(sdate) {
        this.handoverDate = sdate.substr(0, 19);
    }

    clearHandoverDate() {
        this.handoverDate = '';
    }

}
