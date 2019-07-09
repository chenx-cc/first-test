import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Events, Select } from 'ionic-angular';
import { TaskrdPage } from '../taskrd/taskrd';
import { StrUti } from '../../providers/utility-service/StrUti';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { ApiTaskuServiceProvider } from '../../providers/api-service/api-tasku-service'
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { StoreTimer } from '@ionic-native/store-timer';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the TaskuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-tasku',
    templateUrl: 'tasku.html',
})
export class TaskuPage {
    @ViewChild('workerSelect') workerSelect: Select;

    private getTaskID;
    private checkList = [];
    private taskContent;
    private pageNm;
    private opNm;
    private opId;
    private workerId;
    private workerNm;
    private planSTime;
    private planETime;
    private statusContent;
    private getWorkerId;
    private getWorkerFlg: boolean;
    private getWorkerAgain: boolean;
    private selectedWorkerList;
    private selectedWorkerFlg;
    private selectedDate;
    private ON: boolean;
    private OFF: boolean;
    private LOW: boolean;
    private HIGH: boolean;
    private taskPoolKbn;
    private taskPriorityKbn;
    private minDateTime;
    private maxDateTime;
    private startDate;
    private startTime;
    private startT;
    private endDate;
    private endTime;
    private endT;
    private goBackLoading;
    private getData = {};
    private timeSlotInfoList;
    private categoryInfoLists;
    private categoryInfoList;
    private activeIndex;
    private viewKbn;
    private slideList;
    private noAssign;
    private item;
    private timePicker;
    private idxH = 0;
    private idxM = 0;

    constructor(public navCtrl: NavController,
        public appCtrl: App,
        private storeTimer: StoreTimer,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public service: ApiTaskuServiceProvider,
        private scheduleProvider: ApiScheduleServiceProvider,
        public events: Events,
        public keyboard: Keyboard) {
    }

    ionViewDidLoad() {
        this.initTime();
    }


    ionViewWillEnter() {
        this.keyboard.onKeyboardShow().subscribe(() => {
            document.body.classList.add('keyboard-is-open');
            let pageTaskU = document.getElementById('ion-tasku');

            if (pageTaskU != undefined && pageTaskU != null) {
                let sContent = pageTaskU.getElementsByClassName('scroll-content');
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

        this.getData = this.navParams.data;
        this.getTaskID = this.getData['taskId'];
        this.getWorkerId = this.getData['workerId'];
        this.viewKbn = this.getData['viewKbn'];
        this.minDateTime = '1950-01-01';
        this.maxDateTime = '2050-01-01';
        this.pageNm = '業務登録';
        this.timeSlotInfoList = this.getData['obj']['timeSlotInfoList'];
        this.categoryInfoLists = this.getData['obj']['categoryInfoLists'];
        this.categoryInfoList = this.getData['obj']['categoryInfoList'];
        this.activeIndex = this.getData['obj']['activeIndex'];
        this.noAssign = this.getData['obj']['noAssign'];
        this.slideList = this.getData['obj']['slideList'];
        this.getWorkerAgain = false;

        this.getTaskDetail();
    }

    initTime() {
        let hours = [];
        let minutes = [];
        for (let i = 0; i < 24; i++) {
            let obj = new Object();
            obj['description'] = UtilityService.formatNumber(i);
            hours.push(obj);
        }

        for (let j = 0; j < 60; j++) {
            let obj = new Object();
            obj['description'] = UtilityService.formatNumber(j);
            minutes.push(obj);
        }
        this.timePicker = {
            hours: hours,
            minutes: minutes
        }
    }

    changeWorker(item) {
        this.getWorkerId = item.workerId == '' ? undefined : item.workerId;
        this.workerNm = item.workerNm;
    }
    changeDate(date) {
    }

    opnmChange(nm) {
        let opName = nm.trim();
        if (opName != "" || opName != undefined || opName != null) {
            this.opNm = opName;
        }
    }

    changeON(flg) {
        if (flg) {
            this.OFF = false;
            this.taskPoolKbn = 0;
        } else {
            this.OFF = true;
            this.taskPoolKbn = 1;
        }
    }

    changeOFF(flg) {
        if (flg) {
            this.ON = false;
            this.taskPoolKbn = 1;
        } else {
            this.ON = true;
            this.taskPoolKbn = 0;
        }
    }
    changeLOW(Flg) {
        if (Flg) {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0
        } else {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1
        }
    }

    changeHIGH(Flg) {
        if (Flg) {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1
        } else {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0
        }
    }
    goBackPop() {
        this.navCtrl.pop()
    }

    //登録 ボータン押下
    updateTask() {
        if (((this.startDate == '' && this.startTime == '' && this.endDate == '' && this.endTime == '') ||
            (this.startDate != '' && this.startTime != '' && this.endDate != '' && this.endTime != '')) &&
            (this.opNm != "" && this.opNm != undefined && this.opNm != null)) {
            if (this.startDate == this.endDate && this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                let alert = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if (this.startDate == this.endDate &&
                this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2)) {
                let alert = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }


            let alert = this.alertCtrl.create({
                title: '修正してよろしいでしょうか？',
                buttons: [
                    {
                        text: 'キャンセル ',
                        handler: () => {
                        }
                    },
                    {
                        text: '確認',
                        handler: () => {
                            this.taskUpdateCheck();
                        }
                    }
                ]
            });
            alert.present();
        } else if (!this.opNm) {
            let alert = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert.present();
            return;

        } else {
            let alert = this.alertCtrl.create({
                title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                buttons: ['OK']
            });
            alert.present();
        }

    }

    async getTaskDetail() {

        let res = await this.service.getTaskDetail(this.getTaskID);
        if (res == undefined) {
            TaskrdPage.goTaskUpdateLoading.dismiss();
            return;
        }

        let result = res.json();
        let temp = result['taskDetail'];
        this.taskContent = temp[0]
        this.opNm = this.taskContent.opNm;
        this.opId = this.taskContent.opId;
        this.workerId = this.taskContent.workerId;
        this.workerNm = this.taskContent.workerNm;
        this.checkList = this.taskContent.chkList;

        if (this.taskContent.status == 'S') {
            this.statusContent = '未着手'
        } else if (this.taskContent.status == 'I') {
            this.statusContent = '進行中'
        } else {
            this.statusContent = '終了'
        }

        //曜日
        if (this.taskContent.opCircle != '' && this.taskContent.opCircle != null) {
            this.selectedDate = this.taskContent.opCircle.split(',');
        } else {
            this.selectedDate = '';
        }
        if (this.taskContent.planSDay != '' &&
            this.taskContent.planSTime != '' &&
            this.taskContent.planEDay != '' &&
            this.taskContent.planETime != '' &&
            this.taskContent.planSDay != null &&
            this.taskContent.planSTime != null &&
            this.taskContent.planEDay != null &&
            this.taskContent.planETime != null) {
            let startD = this.taskContent.planSDay
            this.startDate = startD;
            this.startTime = this.taskContent.planSTime
            this.startT = this.startTime.substr(0, 5);
            let endD = this.taskContent.planEDay
            this.endDate = endD;
            this.endTime = this.taskContent.planETime
            this.endT = this.endTime.substr(0, 5);
            this.planSTime = this.taskContent.planSTime;
            this.planETime = this.taskContent.planETime;
        } else {
            this.startDate = '';
            this.startTime = '';
            this.endDate = '';
            this.endTime = '';
            this.planSTime = '';
            this.planETime = '';
        }

        //task pool kbn
        if (this.taskContent.taskPoolKbn == 0) {
            this.ON = true;
            this.OFF = false;
            this.taskPoolKbn = 0;
        } else if (this.taskContent.taskPoolKbn == 1) {
            this.OFF = true;
            this.ON = false;
            this.taskPoolKbn = 1;
        }
        //task Priority kbn
        if (this.taskContent.taskPriorityKbn == 0) {
            this.LOW = true;
            this.HIGH = false;
            this.taskPriorityKbn = 0;
        } else if (this.taskContent.taskPriorityKbn == 1) {
            this.LOW = false;
            this.HIGH = true;
            this.taskPriorityKbn = 1;
        }
        //getWorker
        this.getWorkerFlg = false;
        await this.getTaskWorker();
        this.getWorkerFlg = true;
        TaskrdPage.goTaskUpdateLoading.dismiss();

    }

    //checkWork
    async isWorkerTime() {

        let isExisted = false;
        let getWorkerAgainloading = this.loadingCtrl.create({ content: '' });
        let res = await this.requestTaskWorker(getWorkerAgainloading);

        if (res == undefined) {
            getWorkerAgainloading.dismiss();
            return;
        }

        let result = res.json();
        this.selectedWorkerList = result['workerList'];
        for (let i = 0; i < this.selectedWorkerList.length; i++) {
            if (this.selectedWorkerList[i].workerId == this.getWorkerId) {
                this.item = this.selectedWorkerList[i];
                isExisted = true;
                break;
            }
        }

        getWorkerAgainloading.dismiss();
        return isExisted;
    }

    compareFn(e1: Object, e2: Object): boolean {
        return e1 && e2 ? e1['workerId'] === e2['workerId'] : e1 === e2;
    }

    //GETWORKER
    async getTaskWorker() {
        let getWorkerAgainloading = this.loadingCtrl.create({ content: '' });
        let res = await this.requestTaskWorker(getWorkerAgainloading);

        if (res != null) {
            this.dealTaskWorkerRequestResult(res, getWorkerAgainloading);
        }
    }

    async requestTaskWorker(getWorkerAgainloading) {
        let planSDay;
        if (this.startDate != undefined && this.startDate != '') {
            planSDay = this.startDate;
        } else {
            let date = new Date();
            planSDay = date.toISOString().substr(0, 10);
        }

        if (this.startTime != '' && this.startTime != undefined && this.endTime != '' && this.endTime != undefined) {
            this.planSTime = this.startTime
            this.planETime = this.endTime
        }
        if ((this.startTime == '' || this.startTime == undefined) && (this.endTime == '' || this.endTime == undefined)) {
            this.planSTime = '';
            this.planETime = '';
        }
        if (this.getWorkerFlg) {
            if ((this.startDate == '' && this.startTime == '' && this.endDate == '' && this.endTime == '') ||
                (this.startDate != '' && this.startTime != '' && this.endDate != '' && this.endTime != '')) {
                if (this.startDate == this.endDate && this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                    let alert = this.alertCtrl.create({
                        title: '開始時間より大きい終了時間を入力ください。',
                        buttons: ['OK']
                    });
                    alert.present();
                    return null;
                }
                if (this.startDate == this.endDate &&
                    this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                    this.startTime.substr(3, 2) > this.endTime.substr(3, 2)) {
                    let alert = this.alertCtrl.create({
                        title: '開始時間より大きい終了時間を入力ください。',
                        buttons: ['OK']
                    });
                    alert.present();
                    return null;
                }
            } else {
                let alert = this.alertCtrl.create({
                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert.present();
                return null;
            }
        }

        if (this.getWorkerAgain) {
            getWorkerAgainloading.present();
        }
        let res = await this.service.getWorker(this.getData['storeNo'], this.getData['cgId'], this.getData['opId'], planSDay, this.planSTime, this.planETime);
        return res;
    }

    dealTaskWorkerRequestResult(res, getWorkerAgainloading) {
        let result = res.json();

        if (result['workerList'].length === 0) {
            if (this.getWorkerAgain) {
                getWorkerAgainloading.dismiss();
            }
            if (this.getWorkerFlg) {
                ViewCommon.showAlert(this.alertCtrl, "担当できる従業員はいません。");
            }
            // failure
            this.selectedWorkerList = [];
            this.getWorkerId = '';
            this.workerNm = '';
            return;
        }
        this.selectedWorkerFlg = false;
        this.selectedWorkerList = result['workerList'];
        let idFlg = true;
        for (let i = 0; i < this.selectedWorkerList.length; i++) {
            if (this.selectedWorkerList[i].workerId == this.getWorkerId) {
                idFlg = false;
            }
        }
        if (idFlg) {
            this.getWorkerId = '';
            this.workerNm = '';
        }
        if (this.getWorkerAgain) {
            getWorkerAgainloading.dismiss();
            this.getWorkerAgain = false;
            setTimeout(() => {
                this.workerSelect.open();
            }, 100);
        }
    }

    //UPDATECHECK
    async taskUpdateCheck() {
        let date = '';
        let stime = '';
        let etime = '';
        if (this.startDate != '' &&
            this.startDate != undefined &&
            this.startTime != '' &&
            this.startTime != undefined &&
            this.endTime != '' &&
            this.endTime != undefined) {
            date = this.startDate;
            stime = this.startTime;
            etime = this.endTime;
        }

        if (this.getWorkerId == undefined ||
            this.getWorkerId == '' ||
            date == '' ||
            stime == '' ||
            etime == '') {
            this.goBackLoading = this.loadingCtrl.create({
                content: ''
            });
            this.goBackLoading.present();
            this.taskUpdate();
            return;
        }


        this.goBackLoading = this.loadingCtrl.create({
            content: ''
        });
        this.goBackLoading.present();

        let res = await this.service.taskUpdateCheck(this.getData['storeNo'], this.getWorkerId, date, stime, etime, this.getData['cgId'], this.getData['opId']);

        if (res == undefined) {
            this.goBackLoading.dismiss();
            return;
        }

        this.taskUpdate();

    }

    //UPDATE
    async taskUpdate() {
        let selectedDateForU = StrUti.strNullFormat(this.selectedDate.toString());
        let planSDate = '';
        let planEDate = '';
        let planSTime = '';
        let planETime = '';
        if (this.startDate != '' &&
            this.startDate != undefined &&
            this.endDate != '' &&
            this.endDate != undefined &&
            this.startTime != '' &&
            this.startTime != undefined &&
            this.endTime != '' &&
            this.endTime != undefined) {
            planSDate = this.startDate;
            planEDate = this.endDate;
            planSTime = this.startTime;
            planETime = this.endTime;
        }
        if (this.getWorkerId == '' || this.getWorkerId == undefined) {
            this.getWorkerId = null;
        }

        let lockTaskInfo = ObjUti.getLockTaskInfo(this.getData['obj']);
        let updTaskInfo = {
            'workerId': this.getWorkerId, 'opNm': this.getData['obj']['opId'] != 0 ? null : this.opNm,
            'taskPoolKbn': this.taskPoolKbn, 'taskPriorityKbn': this.taskPriorityKbn,
            'opCircle': selectedDateForU, 'planSDate': planSDate,
            'planEDate': planEDate, 'planSTime': planSTime, 'planETime': planETime
        };

        let taskInfo = { "updTaskInfo": updTaskInfo, "lockTaskInfo": lockTaskInfo };
        let res = await this.service.taskUpdate(this.getTaskID, taskInfo);
        if (res == undefined) {
            this.goBackLoading.dismiss();
            return;
        }

        //最新のデータを設定する
        this.getData["obj"].opNm = this.opNm;
        this.getData["obj"].taskPoolKbn = this.taskPoolKbn;
        this.getData["obj"].taskPriorityKbn = this.taskPriorityKbn;
        this.getData["obj"].taskId = this.getTaskID;
        this.getData["obj"].workerId = this.getWorkerId;
        this.getData["obj"].opCircle = StrUti.strNullFormat(selectedDateForU);
        this.getData["obj"].planEDay = StrUti.strNullFormat(planSDate);
        this.getData["obj"].planSDay = StrUti.strNullFormat(planEDate);
        this.getData["obj"].planEHour = StrUti.strNullFormat(planETime);
        this.getData["obj"].planSHour = StrUti.strNullFormat(planSTime);
        this.getData["obj"].planSTime = StrUti.strNullFormat(planSDate + planSTime) ? (planSDate + 'T' + planSTime) : null;
        this.getData["obj"].planETime = StrUti.strNullFormat(planEDate + planETime) ? (planEDate + 'T' + planETime) : null;
        this.getData["obj"].workerNm = this.workerNm;
        if (!StrUti.isNothing(planSDate)) {
            this.getData["obj"].taskDate = planSDate;
        }

        let taskUObj = this.getData["obj"];
        // 非同期処理
        if (StrUti.isNothing(taskUObj['workerId'])
            || (StrUti.isNothing(taskUObj['planSTime']) && StrUti.isNothing(taskUObj['planETime']))) {
            // 未割当タスク
            if (StrUti.isNothing(taskUObj['workerId'])) {
                taskUObj['workerId'] = null;
            }
            // 更新前オブジェクトを削除
            this.removeBefor();
            if (!(StrUti.isNothing(taskUObj['taskDate'])) && this.getData['selectedDate'] == taskUObj['taskDate']) {
                // 更新後オブジェクトを挿入
                this.inUnList(taskUObj);
            }
        } else {
            // 割当済タスク
            let matchKey, matchValue
            if (this.viewKbn == '0' || this.viewKbn == '2') {
                // 業務別
                matchKey = taskUObj['cgId'];
                matchValue = taskUObj['cgNm'];
            } else if (this.viewKbn == '1' || this.viewKbn == '3') {
                // 担当者別
                matchKey = taskUObj['workerId'];
                matchValue = taskUObj['workerNm'];
            }
            // 更新前オブジェクトを削除
            this.removeBefor();
            if (this.getData['selectedDate'] == taskUObj['taskDate']) {
                // 更新後オブジェクトを挿入
                this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskUObj)
            }
        }
        this.navCtrl.pop();
        this.goBackLoading.dismiss();

    }

    displayMsg() {
        this.getWorkerAgain = true;
        this.getTaskWorker();
    }

    async resetWorkerSDate(startDate) {

        this.startDate = startDate;
        this.endDate = startDate;
        if (!this.startTime || !this.endTime) {
            return;
        }
        let flg = await this.isWorkerTime();
        if (!flg) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
            this.selectedWorkerFlg = true;
        }
    }
    async resetWorkerEDate(endDate) {

        this.startDate = endDate;
        this.endDate = endDate;

        if (!this.startTime || !this.endTime) {
            return;
        }
        let flg = await this.isWorkerTime();
        if (!flg) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
            this.selectedWorkerFlg = true;
        }
    }
    async resetWorkerSTime(startTime) {
        this.startTime = startTime;
        if (!this.startTime || !this.endTime) {
            return;
        }
        let flg = await this.isWorkerTime();
        if (!flg) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
            this.selectedWorkerFlg = true;
        }
    }
    async resetWorkerETime(EndTime) {
        this.endTime = EndTime;
        if (!this.startTime || !this.endTime) {
            return;
        }
        let flg = await this.isWorkerTime();
        if (!flg) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
            this.selectedWorkerFlg = true;
        }
    }

    clearStartDate() {
        if (this.startDate == '') {
            return;
        }
        this.startDate = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    }
    clearEndDate() {
        if (this.endDate == '') {
            return;
        }
        this.endDate = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    }
    clearStartTime() {
        if (this.startTime == '') {
            return;
        }
        this.startTime = '';
        this.startT = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    }
    clearEndTime() {
        if (this.endTime == '') {
            return;
        }
        this.endTime = '';
        this.endT = '';
        if (this.isDateTimeAllClear()) {
            this.item = undefined;
            this.getWorkerId = '';
            this.workerNm = '';
            this.selectedWorkerList = [];
        }
    }

    isDateTimeAllClear() {
        // 全部存在しないtrue
        return !this.startDate && !this.endDate && !this.startTime && !this.endTime;
    }
    //タスク編集後、非同期処理
    inUnList(taskCObj) {
        taskCObj["len"] = 2;
        taskCObj["taskStyle"] = '200%';
        taskCObj["textFlag"] = true;
        this.getData['obj']['noAssingFlg'] = true;

        if (this.noAssign != undefined) {
            if (this.noAssign['taskInfoList'] != undefined) {
                this.noAssign['taskInfoList'].push(taskCObj);
            } else {
                this.noAssign['taskInfoList'] = new Array<any>();
                this.noAssign['taskInfoList'].push(taskCObj);
            }
        } else {
            this.noAssign = new Object();
            this.noAssign['taskInfoList'] = new Array<any>();
            this.noAssign['taskInfoList'].push(taskCObj);
        }
        this.getData['obj']['taskIndex'] = this.changeIndex(this.noAssign['taskInfoList']);
    }

    removeBefor() {
        let activeIndex = this.getData['obj']['activeIndex'];
        let categoryIndex = this.getData['obj']['categoryIndex'];
        let taskIndex = this.getData['obj']['taskIndex'];
        if (this.getData['obj']['noAssingFlg']) {
            // 未割当
            this.noAssign['taskInfoList'].splice(taskIndex, 1);
        } else {
            // 割当済
            if (StrUti.isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '1') {
                // スケジュール画面
                this.delFromCategoryList(categoryIndex, taskIndex);
            } else if (this.viewKbn == '2' || this.viewKbn == '3') {
                // カンバン画面
                let categoryInfo = this.categoryInfoLists[activeIndex][categoryIndex];
                let taskInfo = categoryInfo.sTaskInforList[0].taskInfoList;

                let categoryId = categoryInfo['categoryId'];
                let taskId = taskInfo[taskIndex]['taskId'];
                this.delOtherShiftToKanban(categoryId, taskId);

            }
        }
    }

    delOtherShiftToKanban(categoryId, taskId) {
        let taskInforList = [];
        this.categoryInfoLists.forEach(element => {
            element.forEach(categoryInfo => {
                if (categoryId == categoryInfo['categoryId']) {
                    let sTaskInforList = categoryInfo.sTaskInforList;
                    if (sTaskInforList.length < 1) {
                        return;
                    }
                    taskInforList = sTaskInforList[0].taskInfoList;
                    for (let i = 0; i < taskInforList.length; i++) {
                        if (taskInforList[i]['taskId'] == taskId) {
                            taskInforList.splice(i, 1);
                            break;
                        }
                    }
                    return;
                }
            });
        });
    }

    delFromCategoryList(categoryIndex, taskIndex) {
        let categoryInfoLists = this.categoryInfoLists;
        let timeSlot = this.getData['obj']['timeSlot'];
        let categoryInfo = categoryInfoLists[0];
        let hourList = categoryInfo[categoryIndex]['halfHourList'];
        let slotSTime = this.timeSlotInfoList[0].startTime;
        let slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;

        let taskInfoList = [];
        for (let i = 0; i < hourList.length; i++) {
            let tmp = hourList[i];
            if (timeSlot == tmp['halfHour']) {
                taskInfoList = tmp['taskInfoList'];
                break;
            }
        }
        taskInfoList.splice(taskIndex, 1);
        ObjUti.mkTaskPos(categoryInfo, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35);
    }

    inCgList(pstime, petime, matchKey, matchValue, taskCObj) {
        if (StrUti.isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '1') {
            // スケジュール画面
            if (this.timeSlotInfoList.length <= 0) {
                return;
            }
            // 時間帯計算
            let slotSTime = this.timeSlotInfoList[0].startTime;
            let slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;
            if ((pstime >= slotSTime && pstime < slotETime)
                || (petime > slotSTime && petime <= slotETime)
                || (pstime < slotSTime && petime > slotETime)) {
                ObjUti.addLen(taskCObj, slotSTime, slotETime);
                this.intoSchedule(0, matchKey, matchValue, taskCObj, slotSTime, slotETime);
            }
            if (ObjUti.isNull(this.categoryInfoLists)) {
                this.categoryInfoLists.push(this.categoryInfoList);
            } else {
                this.categoryInfoLists[0] = this.categoryInfoList;
            }
        } else if (this.viewKbn == '2' || this.viewKbn == '3') {
            // カンバン画面
            for (let index = 0; index < this.timeSlotInfoList.length; index++) {
                let slot = this.timeSlotInfoList[index];
                // 時間帯計算
                if ((pstime >= slot.startTime && pstime < slot.endTime)
                    || (petime > slot.startTime && petime <= slot.endTime)
                    || (pstime < slot.startTime && petime > slot.endTime)) {
                    this.intoKanban(index, matchKey, matchValue, taskCObj);
                }
            }
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.getData['obj']['noAssingFlg'] = false;
    }

    getStartTime(slotSTime, slotETime) {
        let hh = this.planSTime.substr(0, 2);
        let mm = this.planSTime.substr(2, 2);
        // 表示時間帯の開始時刻と比較
        if (hh < slotSTime.substr(0, 2)) {
            hh = slotSTime.substr(0, 2);
            mm = slotSTime.substr(2, 2);
        }
        if (mm < "30") {
            return hh + ":00:00"
        } else {
            return hh + ":30:00"
        }
    }

    intoSchedule(index, matchKey, matchValue, taskCObj, slotSTime, slotETime) {
        let cgList = this.categoryInfoList;

        let startHalf = this.getStartTime(slotSTime, slotETime);
        this.getData['obj']['timeSlot'] = startHalf;
        let insertFlg = false;
        let indexCg = 0;
        cgList.forEach(cgInfo => {
            let sList;
            // 縦ヘッダーは存在
            if (matchKey == cgInfo.categoryId) {
                let inHalfFlg = false;
                cgInfo.halfHourList.forEach(halfList => {
                    if (startHalf == halfList.halfHour) {
                        if (ObjUti.isNull(halfList.taskInfoList)) {
                            halfList.taskInfoList = new Array<any>();
                            halfList.taskInfoList.push(taskCObj);
                        } else {
                            halfList.taskInfoList.push(taskCObj);
                        }
                        this.getData['obj']['taskIndex'] = this.changeIndex(halfList.taskInfoList);
                        inHalfFlg = true;
                        insertFlg = true;
                        this.getData['obj']['categoryIndex'] = indexCg;
                        return;
                    }
                });
                if (!inHalfFlg) {
                    let newObj = new Object();
                    newObj['halfHour'] = startHalf;
                    let taskList = new Array<any>();
                    taskList.push(taskCObj);
                    this.getData['obj']['taskIndex'] = this.changeIndex(taskList);
                    newObj['taskInfoList'] = taskList;
                    cgInfo.halfHourList.push(newObj);
                    insertFlg = true;
                }
                if (insertFlg) {
                    return;
                }
            }
            indexCg++;
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            let newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['halfHourList'] = [];

            let newObj = new Object();
            newObj['halfHour'] = startHalf;
            let taskList = new Array<any>();
            taskList.push(taskCObj);
            this.getData['obj']['taskIndex'] = this.changeIndex(taskList);
            newObj['taskInfoList'] = taskList;
            newCgInfo['halfHourList'].push(newObj);
            cgList.push(newCgInfo);
            this.getData['obj']['categoryIndex'] = this.changeIndex(cgList);
        }
        let intLen = 35;
        // タスクリスト整備
        ObjUti.mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen);
    }

    intoKanban(index, matchKey, matchValue, taskCObj) {
        let cgList = this.categoryInfoLists[index];

        let insertFlg = false;
        let indexCg = 0;
        cgList.forEach(cgInfo => {
            let sList;
            if (matchKey == cgInfo.categoryId) {
                // 縦ヘッダーは存在
                if (cgInfo.sTaskInforList.length > 0) {
                    sList = cgInfo.sTaskInforList[0]['taskInfoList'];
                } else {
                    let newObj = new Object();
                    sList = new Array<any>();
                    newObj['taskInfoList'] = sList;
                    cgInfo.sTaskInforList.push(newObj);
                }

                sList.push(taskCObj);
                this.getData['obj']['taskIndex'] = this.changeIndex(sList);
                insertFlg = true;
                this.getData['obj']['categoryIndex'] = indexCg;
                return;
            }
            indexCg++;
        });
        if (!insertFlg) {
            // 縦ヘッダーは不存在
            let newCgInfo = new Object();
            newCgInfo['categoryId'] = matchKey;
            newCgInfo['categoryNm'] = matchValue;
            newCgInfo['sTaskInforList'] = [];
            newCgInfo['iTaskInforList'] = [];
            newCgInfo['eTaskInforList'] = [];
            newCgInfo['aTaskInforList'] = [];

            let newObj = new Object();
            let sList = new Array<any>();
            newObj['taskInfoList'] = sList;
            sList.push(taskCObj);
            this.getData['obj']['taskIndex'] = this.changeIndex(sList);
            newCgInfo['sTaskInforList'].push(newObj);
            cgList.push(newCgInfo);
            this.getData['obj']['categoryIndex'] = this.changeIndex(cgList);
        }
    }

    changeIndex(taskList) {
        return taskList.length - 1;
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

    selectSTime() {
        if (!StrUti.isNothing(this.startTime)) {
            this.idxH = parseInt(this.startTime.substr(0, 2));
            this.idxM = parseInt(this.startTime.substr(3, 2));
        } else {
            let now = UtilityService.fmtSysDateTime(new Date());
            console.log(now);

            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }
        this.timeArea(this.endTime, 1);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: UtilityService.formatNumber(this.idxH) },
                { index: 1, value: UtilityService.formatNumber(this.idxM) }
            ]
        }).then(
            result => {
                this.startTime = UtilityService.formatTimeString(result[0].description + ':' + result[1].description);
                this.startT = this.startTime.substr(0, 5);
                console.log(UtilityService.formatTimeString(result[0].description + ':' + result[1].description));
                this.resetWorkerSTime(this.startTime);
            },
            err => console.log('Error: ' + JSON.stringify(err))
            );
    }

    timeArea(time, flg) {
        if (!StrUti.isNothing(time)) {
            let hoursLimit;
            hoursLimit = parseInt(time.substr(0, 2));
            let hours = [];
            if (flg == 0) {
                for (let i = hoursLimit; i < 24; i++) {
                    let obj = new Object();
                    obj['description'] = UtilityService.formatNumber(i);
                    hours.push(obj);
                }
            }
            if (flg == 1) {
                for (let i = 0; i <= hoursLimit; i++) {
                    let obj = new Object();
                    obj['description'] = UtilityService.formatNumber(i);
                    hours.push(obj);
                }
            }
            this.timePicker.hours = hours;
        } else {
            this.initTime();
        }
    }

    selectETime() {
        if (!StrUti.isNothing(this.endTime)) {
            this.idxH = parseInt(this.endTime.substr(0, 2));
            this.idxM = parseInt(this.endTime.substr(3, 2));
        } else {
            let now = UtilityService.fmtSysDateTime(new Date());
            this.idxH = parseInt(now.substr(8, 2));
            this.idxM = parseInt(now.substr(10, 2));
            console.log(this.idxH, this.idxM);
        }

        this.timeArea(this.startTime, 0);
        this.storeTimer.show({
            title: '',
            items: [
                this.timePicker.hours,
                this.timePicker.minutes
            ],
            positiveButtonText: "OK",
            negativeButtonText: "CANCEL",
            wrapWheelText: true,
            defaultItems: [
                { index: 0, value: UtilityService.formatNumber(this.idxH) },
                { index: 1, value: UtilityService.formatNumber(this.idxM) }
            ]
        }).then(
            result => {
                this.endTime = UtilityService.formatTimeString(result[0].description + ':' + result[1].description);
                this.endT = this.endTime.substr(0, 5);
                console.log(UtilityService.formatTimeString(result[0].description + ':' + result[1].description));
                this.resetWorkerETime(this.endTime);
            },
            err => console.log('Error: ' + JSON.stringify(err))
            );
    }

}
