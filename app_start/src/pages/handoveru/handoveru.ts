import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { S3Util } from '../../providers/s3-common/s3.service';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { ApiHandoverServiceProvider } from '../../providers/api-service/api-handover-service';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';

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
    selector: 'page-handoveru',
    templateUrl: 'handoveru.html',
})
export class HandoveruPage {

    private frameNm;
    private handoverId;
    private handoverWorker;
    private handoverDate;
    private handoverDateF;
    private handoverOpId;
    private handoverOp;
    private timeSlotId;
    private handoverTimeSolt;
    private handoverContents;
    private handoverPic;
    private handoverPicFlg;
    private imgPath;
    private minDateTime;
    private maxDateTime;
    private getData;
    private base64Image: string;
    private base64Data: string;

    private isShowWorkerFlg = true;
    private showWorkerList = [];
    private selectWorker = '';
    private workerId = '';
    private taskId;
    private goBackLoading;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        private appCtrl: App,
        private camera: Camera,
        public s3Util: S3Util,
        public loadingCtrl: LoadingController,
        private handoverProvider: ApiHandoverServiceProvider,
        private scheduleProvider: ApiScheduleServiceProvider,
        public events: Events) {
    }

    ionViewDidLoad() {
        this.getData = this.navParams.data;
        this.frameNm = '引継修正'

        this.minDateTime = new Date().toISOString();
        this.maxDateTime = '2050-01-01'

        this.taskId = this.getData['taskId'];
        this.handoverId = this.getData['handoverId'];
        this.handoverOpId = this.getData['handoverOpId'];
        this.handoverOp = this.getData['handoverOp'];
        this.timeSlotId = this.getData['timeSlotId'];
        this.handoverTimeSolt = this.getData['handoverTimeSolt'];
        this.workerId = this.getData['workerId'];
        this.handoverWorker = this.getData['handoverWorker'];
        this.handoverContents = this.getData['handoverContents'];

        this.handoverPicFlg = false;

        if (this.getData['handoverDate'] != undefined && this.getData['handoverDate'] != '') {
            this.handoverDate = this.getData['handoverDate'];
            this.handoverDateF = this.getData['handoverDate'];
        }

        this.imgPath = this.getData['imgPath'];
        this.selectWorker = this.handoverWorker;

        //getWorker
        this.getWorker();

        let mythis = this;
        let callback = function (data, mythis) {
            if (data != null) {

                let bin: string = '';
                for (let i = 0, l = data.Body.length; i < l; i++) {
                    bin += String.fromCharCode(data.Body[i]);
                }
                mythis.base64Data = btoa(bin);

                mythis.handoverPic = 'data:image/png;base64,' + mythis.base64Data;
                mythis.handoverPicFlg = true;
            }
            else {
                mythis.handoverPic = 'assets/imgs/noImage/NoImage.png';
                mythis.handoverPicFlg = true;
            }
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };

        let errcallback = function () {
            mythis.handoverPicFlg = true;
        };

        //S3検索
        if (this.imgPath != undefined && this.imgPath != null && this.imgPath != '') {
            this.s3Util.getObject(callback, errcallback, mythis);
        } else {
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = true;
        }
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

    uploads3(delFlg) {
        let mythis = this;
        var callback1 = function (data, mythis) {
        };
        var callback2 = function (data, mythis) {
            //スピナー削除
            if (mythis.loading != null) {
                mythis.loading.dismiss();
            }
        };
        if (delFlg) {
            this.s3Util.delObject(callback1, mythis);
        }
        //S3upload
        this.s3Util.uploadToS3(callback2, mythis);
    }

    async updHandover() {
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

        let delFlg = true;

        if (this.imgPath == undefined || this.imgPath == null || this.imgPath == '') {
            if (this.base64Image != undefined) {
                if (this.taskId != undefined) {
                    this.imgPath = 'handover/' + this.getData['aplUserId'] + '/'
                        + this.getData['storeNo'] + '/task/' + this.taskId + UtilityService.fmtSysDateTime(new Date()) + '.png';
                } else if (this.timeSlotId != undefined) {
                    this.imgPath = 'handover/' + this.getData['aplUserId'] + '/'
                        + this.getData['storeNo'] + '/timeslot/' + this.timeSlotId + UtilityService.fmtSysDateTime(new Date()) + '.png';
                }
                delFlg = false;
            }
        }

        if ((this.handoverContents == undefined || this.handoverContents == '')
            && (this.imgPath == undefined || this.imgPath == '')) {
            let alert = this.alertCtrl.create({
                title: '引継内容や画像はいずれかご入力してください。',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        this.goBackLoading = this.loadingCtrl.create({
            content: ''
        });

        this.goBackLoading.present();
        let lockHandoverInfo;
        lockHandoverInfo = ObjUti.getLockHandoverObject(this.getData);
        if (this.timeSlotId != null) {
            lockHandoverInfo['taskId'] = null;
        }
        let res = await this.handoverProvider.uptHandover(
            this.handoverId, this.workerId, this.handoverContents, this.imgPath, this.handoverDate, lockHandoverInfo);

        if (!res) {
            this.goBackLoading.dismiss();
            return;
        }
        if (this.base64Image != undefined) {
            if (this.base64Data != this.base64Image) {
                this.uploads3(delFlg);
            }
        }
        this.getData['workerId'] = this.workerId;
        this.getData['handoverWorker'] = this.selectWorker;
        this.getData['handoverContents'] = this.handoverContents;
        this.getData['handoverDate'] = this.handoverDate;
        this.getData['imgPath'] = this.imgPath;
        this.goBackLoading.dismiss();
        this.goBackPop();

    }
    goBackPop() {
        this.navCtrl.pop();
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
        this.showWorkerList = result['workerList']
    }

    changeDate(sdate) {
        this.handoverDate = sdate.substr(0, 19);
        this.handoverDateF = sdate;
    }

    clearHandoverDate() {
        this.handoverDate = '';
        this.handoverDateF = '';
    }

    //アラートが発生する時、再検索処理
    async selAlert() {
        let date = new Date();
        let loading = this.loadingCtrl.create({
            content: ''
        });
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());
        let res = await this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn']);
        let params = {
            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
            dragFlg: true
        };
        loading.dismiss().then(() => {
            if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                this.appCtrl.getRootNav().setRoot('SchedulePage', params);
            } else {
                this.appCtrl.getRootNav().setRoot('BoardPage', params);
            }
        });
    }
}
