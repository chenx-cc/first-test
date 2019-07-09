import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController, Events } from 'ionic-angular';
import { ApiControlServiceProvider } from '../../providers/api-service/api-control-service'
import { ApiManualServiceProvider } from '../../providers/api-service/api-manual-service';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
@IonicPage()
@Component({
    selector: 'page-control',
    templateUrl: 'control.html',
})
export class ControlPage {

    private taskUndoneFlg: boolean;
    private taskDoingFlg: boolean;
    private taskStopFlg: boolean;
    private taskDoneFlg: boolean;
    private taskButtonUndoneFlg: boolean;
    private taskButtonDoingFlg: boolean;
    private taskButtonStopFlg: boolean;
    private taskButtonDoneFlg: boolean;
    private checkListFLG: boolean;
    private checkListNew = [];
    private warnContent;
    private warnFLG: boolean;
    private taskFromList = [];
    private taskToList = [];
    private taskIcon: boolean;
    private taskIconOne: boolean;
    private taskIconTwo: boolean;
    private taskIconThree: boolean;
    private taskContentFromFLG: boolean;
    private taskContentToFLG: boolean;
    private startTime = '';
    private endTime = '';
    private taskButtonN;
    private taskButtonS;
    private taskButtonSu;
    private taskButtonE;
    private advice;
    private detail;
    private transferDone;
    private transferOk;
    private firstW;
    private secondW;
    private checkListId;
    private lineNo;
    private chkStatus;
    private getData = {};
    private loading;

    private viewFlg = true;
    private viewFlgCon = true;
    private manualFlg = true;
    private manualList = new Array<any>();
    private checkListContent;
    private lockStatus;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public service: ApiControlServiceProvider,
        public toastCtrl: ToastController,
        public manualService: ApiManualServiceProvider,
        private scheduleProvider: ApiScheduleServiceProvider,
        public appCtrl: App,
        public events: Events) {
        this.getData = this.navParams.data;
    }

    ionViewWillEnter() {
        if (this.viewFlg) {
            let pop = document.querySelector('.popover-content');
            if (pop != undefined && pop != null) {
                pop['style'].top = '51px';
                pop['style'].width = '400px';
                let left = pop['style'].left;
                left = (left.replace('px', '') - 55) + 'px';
                pop['style'].left = left;
                this.viewFlg = false;
            }
        }
    }
    ionViewDidEnter() {
        if (this.viewFlgCon) {
            if (this.getData['status'] == 'S') {
                this.taskUndoneFlg = false;
                this.taskDoingFlg = true;
                this.taskStopFlg = true;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = true;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = false;
            } else if (this.getData['status'] == 'I') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = false;
                this.taskStopFlg = true;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = true;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = false;
            } else if (this.getData['status'] == 'A') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = true;
                this.taskStopFlg = false;
                this.taskDoneFlg = true;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = true;
                this.taskButtonDoneFlg = false;
                document.getElementById('taskButton').setAttribute('style', 'background-color:#BDBDBD');
            } else if (this.getData['status'] == 'E') {
                this.taskUndoneFlg = true;
                this.taskDoingFlg = true;
                this.taskStopFlg = true;
                this.taskDoneFlg = false;
                this.taskButtonUndoneFlg = false;
                this.taskButtonDoingFlg = false;
                this.taskButtonStopFlg = false;
                this.taskButtonDoneFlg = true;
                document.getElementById('taskButton').setAttribute('style', 'background-color:#90A4AE');
            }

            this.startTime = this.timeFmt(this.getData['planSTime'])
            this.endTime = this.timeFmt(this.getData['planETime'])

            this.taskButtonN = '未着手';
            this.taskButtonS = '開始';
            this.taskButtonSu = '中止';
            this.taskButtonE = '完了';
            this.advice = '留意点確認';
            this.detail = '詳細・編集'
            this.transferDone = '引継作成';
            this.transferOk = '引継確認';
            this.firstW = '先行業務：';
            this.secondW = '後続業務：';

            if (this.getData['alertKbn'] == '1') {
                this.warnFLG = false;
                this.warnContent = 'タスク未開始！！';
            } else if (this.getData['alertKbn'] == '2') {
                this.warnFLG = false;
                this.warnContent = 'タスク未終了！！';
            } else {
                this.warnFLG = true;
            }

            // if (this.getData['precOpList'].length != 0 && this.getData['subsOpList'].length != 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = true;
            //     this.taskIconTwo = false;
            //     this.taskIconThree = true;
            //     this.taskContentFromFLG = false;
            //     this.taskFromList = this.getData['precOpList']
            //     this.taskContentToFLG = false;
            //     this.taskToList = this.getData['subsOpList']
            // } else if (this.getData['precOpList'].length != 0 && this.getData['subsOpList'].length == 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = true;
            //     this.taskIconTwo = true;
            //     this.taskIconThree = false;
            //     this.taskContentFromFLG = false;
            //     this.taskFromList = this.getData['precOpList']
            //     this.taskContentToFLG = true;
            // } else if (this.getData['precOpList'].length == 0 && this.getData['subsOpList'].length != 0) {
            //     this.taskIcon = false;
            //     this.taskIconOne = false;
            //     this.taskIconTwo = true;
            //     this.taskIconThree = true;
            //     this.taskContentFromFLG = true;
            //     this.taskContentToFLG = false;
            //     this.taskToList = this.getData['subsOpList']
            // } else {
            this.taskIcon = true;
            // }
            this.getCheckList().then((result) => {
                if (result != undefined) {
                    this.manualSel();
                }
            });
            this.viewFlgCon = false;
        }
        //未割当の場合
        if (this.getData['noAssingFlg']) {
            this.taskButtonUndoneFlg = true;
            this.taskButtonDoingFlg = true;
            this.taskButtonStopFlg = true;
            this.taskButtonDoneFlg = true;
        }
    }

    close() {
        this.viewCtrl.dismiss();
    }

    checkListInvalid(flg, i) {
        this.lockStatus = this.checkListContent[i].chkStatus;
        let statusbk = this.checkListNew[i].chkStatus;
        if (flg) {
            this.checkListNew[i].chkStatus = 0;
        } else {
            this.checkListNew[i].chkStatus = 2;
        }
        this.lineNo = this.checkListNew[i].lineNo;
        this.checkListId = this.checkListNew[i].taskChklistId;
        this.chkStatus = this.checkListNew[i].chkStatus;
        this.changeCheckList(i, statusbk);
    }
    check(i) {
        this.lockStatus = this.checkListContent[i].chkStatus;
        let statusbk = this.checkListNew[i].chkStatus;
        if (this.checkListNew[i].chkStatus == 0) {
            this.checkListNew[i].chkStatus = 1;
            this.lineNo = this.checkListNew[i].lineNo;
            this.checkListId = this.checkListNew[i].taskChklistId;
            this.chkStatus = this.checkListNew[i].chkStatus;
            this.changeCheckList(i, statusbk);
            return;
        }
        if (this.checkListNew[i].chkStatus == 1) {
            this.checkListNew[i].chkStatus = 0;
            this.lineNo = this.checkListNew[i].lineNo;
            this.checkListId = this.checkListNew[i].taskChklistId;
            this.chkStatus = this.checkListNew[i].chkStatus;
            this.changeCheckList(i, statusbk);
            return;
        }
    }

    goManual() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push('ManualPage', {
            manualList: this.manualList
        });
    }

    goTaskrd() {
        this.viewCtrl.dismiss();
        this.getData['chkList'] = this.checkListNew;
        this.appCtrl.getRootNav().push('TaskrdPage', this.getData);
    }

    goHandoverc() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push('HandovercPage', {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            opId: this.getData['opId'],
            opNm: this.getData['opNm'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate'],
            hasHandover: this.getData['hasHandover']
        });

    }
    goHandoverrd() {

        this.appCtrl.getRootNav().push('HandoverrdPage', {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
        this.viewCtrl.dismiss();
    }

    async getCheckList() {
        this.loading = this.loadingCtrl.create({
            content: ''
        });

        this.loading.present();
        let res = await this.service.getCheckList(this.getData['taskId']);
        if (!res) {
            this.loading.dismiss();
            this.close();
            return;
        }
        let result = res.json();
        if (result['checkList'].length === 0) {
            this.checkListFLG = true;
            return result;
        }
        this.checkListContent = result['checkList'];
        this.checkListFLG = false;
        this.checkListNew = JSON.parse(JSON.stringify(this.checkListContent));
        return result;

    }

    async changeStatus(status) {
        //未割当の場合
        if (this.getData['noAssingFlg']) {
            return;
        }
        if (status == 1 && this.taskUndoneFlg == false) {
            return;
        }
        if (status == 2 && this.taskDoingFlg == false) {
            return;
        }
        if (status == 3 && this.taskStopFlg == false) {
            return;
        }
        if (status == 4 && this.taskDoneFlg == false) {
            return;
        }
        let loading = this.loadingCtrl.create({
            content: ''
        });


        loading.present();

        let lockTask = ObjUti.getLockObject(this.getData);

        let res = await this.service.changeStatus(this.getData['taskId'], status, lockTask);
        loading.dismiss();
        if (!res) {
            this.close();
            return;
        }
        let result = res.json();
        //非同期処理用変数の設定
        let categoryInfoLists = this.getData['categoryInfoLists'];
        let activeIndex = this.getData['activeIndex'];
        let categoryId = this.getData['categoryId'];
        let beforeStatus = this.getData['status'];
        let taskId = this.getData['taskId'];

        for (let i = 0; i < categoryInfoLists.length; i++) {
            if (activeIndex == i) {
                continue;
            }

            let categoryInfo = categoryInfoLists[i];
            for (let j = 0; j < categoryInfo.length; j++) {
                let temp = categoryInfo[j];

                if (categoryId == temp['categoryId']) {
                    let beforeTaskList = [];
                    switch (beforeStatus) {
                        case 'S':
                            beforeTaskList = temp.sTaskInforList;
                            break;
                        case 'I':
                            beforeTaskList = temp.iTaskInforList;
                            break;
                        case 'A':
                            beforeTaskList = temp.aTaskInforList;
                            break;
                        case 'E':
                            beforeTaskList = temp.eTaskInforList;
                            break;
                        default:
                            break;
                    }

                    let afterCopy;
                    if (!beforeTaskList) {
                        beforeTaskList = [];
                    }

                    beforeTaskList.forEach(e => {
                        let infoList = e['taskInfoList'];
                        for (let k = 0; k < infoList.length; k++) {
                            if (infoList[k].taskId == taskId) {
                                afterCopy = infoList[k];
                                infoList.splice(k, 1);
                                break;
                            }
                        }
                    })

                    if (!afterCopy) {
                        continue;
                    }
                    let afterTaskList = [];
                    let afterStatus;
                    switch (status) {
                        case 1:
                            afterStatus = 'S';
                            afterTaskList = temp.sTaskInforList;
                            break;
                        case 2:
                            afterStatus = 'I';
                            afterTaskList = temp.iTaskInforList;
                            break;
                        case 3:
                            afterStatus = 'A';
                            afterTaskList = temp.aTaskInforList;
                            break;
                        case 4:
                            afterStatus = 'E';
                            afterTaskList = temp.eTaskInforList;
                            break;
                        default:
                            break;
                    }

                    if (afterTaskList.length == 0) {
                        afterTaskList.push({ taskInfoList: [] });
                    }
                    afterTaskList.forEach(e => {
                        let infoList = e['taskInfoList'];
                        afterCopy.status = afterStatus;
                        afterCopy['actualETime'] = result['lockTaskInfo'].actualEDayTime;
                        afterCopy['actualSTime'] = result['lockTaskInfo'].actualSDayTime;
                        infoList.push(afterCopy);
                    })
                    break;
                }
            }
        }

        this.getData['actualETime'] = result['lockTaskInfo'].actualEDayTime;
        this.getData['actualSTime'] = result['lockTaskInfo'].actualSDayTime;
        this.viewCtrl.dismiss(status);
    }

    async changeCheckList(i, statusbk) {
        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();

        let lockChkListInfo = { 'taskChklistId': this.checkListId, 'lineNo': this.lineNo, 'chkStatus': this.lockStatus, 'chkContents': this.checkListContent[i].chkContents };
        let res = await this.service.changeCheckList(this.getData['taskId'], this.checkListId, this.lineNo, this.chkStatus, lockChkListInfo);
        if (res) {
            this.checkListContent[i].chkStatus = this.chkStatus;
        } else {
            this.checkListNew[i].chkStatus = statusbk;
        }
        loading.dismiss();
    }

    /**
     * 時間をフォーマットする
     * @param datetime　YYYYMMDDHHMM
     */
    timeFmt(datetime) {
        if (datetime != undefined) {
            let hh = datetime.substr(11, 2);
            let mm = datetime.substr(14, 2);
            let sufix = 'AM'
            if (parseInt(hh) > 12) {
                hh = parseInt(hh) - 12;
                sufix = 'PM'
            }
            let fmtTime = hh + ':' + mm + sufix;
            return fmtTime;
        }
    }

    //留意点の検索
    async manualSel() {
        let res = await this.manualService.manual(this.getData['opId'], this.getData['cgId'], this.getData['storeNo']);
        this.loading.dismiss();
        if (!res) {
            this.close();
            return;
        }
        let result = res.json();

        if (result['manualList'].length === 0) {
            this.manualFlg = true;
            return;
        }
        this.manualList = result['manualList'];
        this.manualFlg = false;
    }
    //アラートが発生する時、再検索処理
    async selAlert() {
        let date = new Date();
        let loading = this.loadingCtrl.create({
            content: ''
        });
        let res;
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());
        let params;
        res = await this.scheduleProvider.getScheduleInit(this.getData['storeNo'], this.getData['selectedDate'], selTime, this.getData['viewKbn']);
        params = {
            res: res, selectedText: this.getData['selectedText'], storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'], viewKbn: this.getData['viewKbn'], aplUserId: this.getData['aplUserId'],
            selectedDate: this.getData['selectedDate'], currentTimeSlotId: this.getData['currentTimeSlotId'],
            dragFlg: true
        };
        loading.dismiss().then(() => {
            this.viewCtrl.dismiss();
            if (this.getData['viewKbn'] == '0' || this.getData['viewKbn'] == '1') {
                this.events.publish('res:created', params);
            } else {
                this.events.publish('res:creat', params);
            }
        });
    }
}
