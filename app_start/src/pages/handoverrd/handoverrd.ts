import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { S3Util } from '../../providers/s3-common/s3.service';
import { ApiHandoverServiceProvider } from '../../providers/api-service/api-handover-service';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
/**
 * Generated class for the HandoverrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-handoverrd',
    templateUrl: 'handoverrd.html',
})
export class HandoverrdPage {

    private getData;
    private getTaskId;
    private currentTimeSlotId;

    private frameNm;
    private handoverList;
    private handoverId;
    private handoverIndex;
    private handoverWorker;
    private workerId;
    private handoverDate;
    private handoverAddDate;
    private handoverDateF;
    private handoverOpId;
    private handoverOp;
    private timeSlotId;
    private handoverTimeSolt;
    private handoverPic;
    private handoverPicFlg;
    private hiddenFlg;
    private pages;
    private page;
    private imgPath;
    private params;
    private handoverContents;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public s3Util: S3Util,
        private handoverProvider: ApiHandoverServiceProvider,
        public events: Events) {
    }
    ionViewDidEnter() {
        if (this.params != undefined) {
            this.handoverWorker = this.params['handoverWorker'];
            this.handoverContents = this.params['handoverContents'];
            this.handoverDate = this.params['handoverDate'];
            this.workerId = this.params['workerId'];
            this.imgPath = this.params['imgPath'];
            this.handoverList[this.handoverIndex].handoverContents = this.handoverContents;
            this.handoverList[this.handoverIndex].workerNm = this.handoverWorker;
            this.handoverList[this.handoverIndex].handoverDate = this.handoverDate;
            this.handoverList[this.handoverIndex].date = this.handoverAddDate;
            this.handoverList[this.handoverIndex].workerId = this.workerId;
            this.handoverList[this.handoverIndex].imgPath = this.imgPath;
            this.handoverDateF = this.dateFormat();
            this.getImg();
        }
    }
    ionViewDidLoad() {
        this.page = 1;
        this.handoverIndex = 0;
        this.frameNm = '引継確認';
        this.handoverPicFlg = false;
        this.getData = this.navParams.data;
        this.getTaskId = this.getData['taskId'];
        this.currentTimeSlotId = this.getData['currentTimeSlotId'];

        this.selHandover().then(() => {
            if (this.handoverList != undefined && this.handoverList.length > 0) {
                this.hiddenFlg = false;
                this.getFrameData();
            } else {
                this.hiddenFlg = true;
            }
        });
    }
    getFrameData() {
        this.pages = this.handoverList.length;
        this.imgPath = this.handoverList[this.handoverIndex]['imgPath'];

        this.getImg();

        this.handoverDate = this.handoverList[this.handoverIndex]['handoverDate'];
        this.handoverAddDate = this.handoverList[this.handoverIndex]['date'];
        this.handoverId = this.handoverList[this.handoverIndex]['handoverId'];
        this.handoverOpId = this.handoverList[this.handoverIndex]['opId'];
        this.handoverOp = this.handoverList[this.handoverIndex]['opNm'];
        this.timeSlotId = this.handoverList[this.handoverIndex]['timeSlotId'];
        this.handoverTimeSolt = this.handoverList[this.handoverIndex]['timeSlotNm'];
        this.handoverWorker = this.handoverList[this.handoverIndex]['workerNm'];
        this.workerId = this.handoverList[this.handoverIndex]['workerId'];
        this.handoverContents = this.handoverList[this.handoverIndex]['handoverContents'];

        this.handoverDateF = this.dateFormat();
    }

    getImg() {
        let mythis = this;
        let callback = function (data, mythis) {
        if (data != null) {
            let bin : string = '';
            for(let i = 0, l = data.Body.length; i < l; i++) {
                bin += String.fromCharCode(data.Body[i]);
            }
            let base64Data = btoa(bin);

            mythis.handoverPic = 'data:image/png;base64,' + base64Data;
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

    pageAdd() {
        if (this.page != this.pages) {
            this.page = this.page + 1;
            this.handoverIndex = this.handoverIndex + 1;
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = false;
            this.getFrameData();
        }
    }

    pageReduce() {
        if (this.page != '1') {
            this.page = this.page - 1;
            this.handoverIndex = this.handoverIndex - 1;
            this.handoverPic = 'assets/imgs/noImage/NoImage.png';
            this.handoverPicFlg = false;
            this.getFrameData();
        }
    }

    async selHandover() {
            let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        let res = undefined;
        let selectedDate = this.navParams.data.selectedDate;
        if (this.getTaskId != undefined) {
            res = await this.handoverProvider.selHandoverByTaskId(this.getTaskId);            
        } else if (this.currentTimeSlotId != undefined) {
            res = await this.handoverProvider.selHandoverByTimesoltId(this.currentTimeSlotId, selectedDate);
        }

        loading.dismiss();
        
        if(!res){
            return
        }
        let result = res.json();
        if (result['handoverList'].length === 0) {
            ViewCommon.showAlert(this.alertCtrl, '引継事項はありません。');
            return;
        }
        this.handoverList = result['handoverList']
    }

    async delHandover() {
        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        let lockHandoverInfo = this.handoverList[this.handoverIndex];

        lockHandoverInfo = ObjUti.getLockHandoverObject(lockHandoverInfo);
        if (this.timeSlotId != null) {
            lockHandoverInfo['taskId'] = null;
        } else {
            lockHandoverInfo['taskId'] = this.getData['taskId'];
        }

        let lockRes = await this.handoverProvider.lockHandover(this.handoverId, lockHandoverInfo);
        if (!lockRes) {
            loading.dismiss();
            return;
        }
        let res = await this.handoverProvider.delHandover(this.handoverId);
        if (!res) {
            loading.dismiss();
            return;
        }

        let mythis = this;
        var callback = function (data, mythis) {
        //スピナー削除
        if (mythis.loading != null) {
            mythis.loading.dismiss();
        }
        };

        this.s3Util.delObject(callback, mythis);
        this.handoverList.splice(this.handoverIndex, 1);
        if (this.handoverList.length == 0) {
            if (this.getData['taskId'] != undefined) {
                //スゲジュール画面
                if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                //タスクの引継ぎ
                this.events.publish('res:created', { "TaskHasHandover": 0 });
                } else {
                //タスクの引継ぎ
                this.events.publish('res:creat', { "TaskHasHandover": 0 });
                }
            } else {
                //スゲジュール画面
                if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                this.events.publish('res:created', { "hasHandover": false });
                } else {
                //シフトの引継ぎ
                this.events.publish('res:creat', { "hasHandover": false });
                }
            }
            this.goBackPop();
        } else {
            if (this.handoverIndex == 0) {
                this.handoverIndex = 1;
            }
            if (this.page == 1) {
                this.page = 2;
            }
            this.pageReduce();
        }
        loading.dismiss();
    }

    //削除ボータン押下
    deleteButton() {
        let alert = this.alertCtrl.create({
        title: '当該引継事項を削除してよろしいでしょうか？',
        buttons: [
            {
                text: 'キャンセル ',
                handler: () => {}
            },
            {
                text: '確認',
                handler: () => {
                    this.delHandover();
                }
            }
        ]});
        alert.present();
    }

    goBackPop() {
        this.navCtrl.pop();
    }

    goEdit() {
        let storeNo = this.navParams.data.storeNo;
        let storeNm = this.navParams.data.storeNm;
        let aplUserId = this.navParams.data.aplUserId;
        let viewKbn = this.navParams.data.viewKbn;
        let selectedText = this.navParams.data.selectedText;
        let selectedDate = this.navParams.data.selectedDate;
        this.params = {
            taskId: this.getTaskId,
            currentTimeSlotId: this.currentTimeSlotId,
            handoverId: this.handoverId,
            handoverOpId: this.handoverOpId,
            handoverOp: this.handoverOp,
            timeSlotId: this.timeSlotId,
            handoverTimeSolt: this.handoverTimeSolt,
            workerId: this.workerId,
            handoverWorker: this.handoverWorker,
            handoverContents: this.handoverContents,
            handoverDate: this.handoverDate,
            date: this.handoverAddDate,
            imgPath: this.imgPath,
            storeNo: storeNo, storeNm: storeNm, viewKbn: viewKbn,
            aplUserId: aplUserId, selectedText: selectedText, selectedDate: selectedDate,
        };
        this.navCtrl.push('HandoveruPage', this.params);
    }

   dateFormat() {
        this.handoverDateF = this.handoverDate.replace(/[-]/g, '/').replace('T', ' ').substr(0, 16);
        return this.handoverDateF;
    }
}
