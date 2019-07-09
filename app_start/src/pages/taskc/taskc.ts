import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, AlertController, Events } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { ApiTaskcServiceProvider } from '../../providers/api-service/api-taskc-service';
import { StrUti } from '../../providers/utility-service/StrUti';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { StoreTimer } from '@ionic-native/store-timer';
import { ViewCommon } from '../../providers/view-common/ViewCommon';

/**
 * Generated class for the TaskcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-taskc',
    templateUrl: 'taskc.html',
})
export class TaskcPage {

    private frameNm;

    private selectedWorkerFlg = false;
    private isShowJobFlg;
    private isShowTimeFlg;
    private isShowWorkerFlg;
    private ON;
    private OFF;
    private LOW;
    private HIGH;


    private showWorkeList;
    private showTimeList;
    private showWorkerList;

    private opNm;
    private isShow = [];
    private startDate = '';
    private endDate = '';
    private minDateTime;
    private maxDateTime;
    private startTime = '';
    private endTime = '';
    private selectWorkerList = [];
    private selectWorker = '';

    private getData = {};

    private categroyId;
    private categroyNm;
    private opId;
    private shiftId = '';
    private workerId = '';
    private workerNm = '';
    private taskPoolKbn;
    private taskPriorityKbn;
    private planSTime = '';
    private planETime = '';
    private workerFlg = false;
    private viewKbn;
    private activeIndex;
    private categoryInfoLists;
    private categoryInfoList;
    private timeSlotInfoList;
    private slideList;
    private noAssign;
    private duration = 60;
    private timePicker;
    private idxH = 0;
    private idxM = 0;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        private appCtrl: App,
        public alertCtrl: AlertController,
        private taskcServiceProvider: ApiTaskcServiceProvider,
        public keyboard: Keyboard,
        public events: Events,
        private storeTimer: StoreTimer) {
    }

    ionViewWillEnter() {
        this.frameNm = '業務登録';
        this.getData = this.navParams.data;
        this.minDateTime = '1950-01-01';
        this.maxDateTime = '2050-01-01';
        this.viewKbn = this.getData['viewKbn'];
        this.activeIndex = this.getData['activeIndex'];
        this.categoryInfoLists = this.getData['categoryInfoLists'];
        this.categoryInfoList = this.getData['categoryInfoList'];
        this.timeSlotInfoList = this.getData['timeSlotInfoList'];
        this.slideList = this.getData['slideList'];
        this.noAssign = this.getData['noAssign']
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

    ionViewDidEnter() {
        this.getCategoryAndShift();
    }

    ionViewDidLoad() {
        this.isShowJobFlg = true;
        this.isShowTimeFlg = true;
        this.isShowWorkerFlg = true;
        this.ON = true;
        this.OFF = false;
        this.LOW = false;
        this.HIGH = true;
        this.taskPoolKbn = 0;
        this.taskPriorityKbn = 1;
        this.initTime();
    }

    showOpList(index) {
        this.isShow[index] = !this.isShow[index];
    }

    selectedWork(categroyId, cgNm, opId, work, duration) {
        this.categroyId = categroyId;
        this.categroyNm = cgNm;
        this.opId = opId;
        this.opNm = work;
        this.workerFlg = true;
        this.shiftId = '';
        this.startTime = '';
        this.planSTime = '';
        this.endTime = '';
        this.planETime = '';
        this.selectWorker = '';
        this.selectWorkerList = [];
        this.showWorkerList = [];
        this.duration = duration
    }

    opnmChange(nm) {
        let opName = nm.trim();
        if (opName != "" && opName != undefined && opName != null) {
            this.opId = 0;
            this.categroyId = 0;
            this.duration = 60
            this.categroyNm = "非定常業務";
            this.opNm = opName;
            this.workerFlg = true;
        } else {
            this.opId = '000';
            this.workerFlg = false;
        }
    }

    selectedDate(timeName) {
        for (let i = 0; i < this.showTimeList.length; i++) {
            if (this.showTimeList[i].shift_nm == timeName) {
                this.startTime = this.showTimeList[i].start_time.substr(0, 5);
                this.endTime = this.showTimeList[i].end_time.substr(0, 5);
                this.shiftId = this.showTimeList[i].shift_id;
                this.planSTime = this.showTimeList[i].start_time;
                this.planETime = this.showTimeList[i].end_time;
                break;
            }
        }
        this.selectWorker = '';
        this.selectWorkerList = [];
        this.showWorkerList = [];
    }

    selectedName(index, id, name) {
        let addFlg = true;
        this.selectWorker = '';
        this.selectedWorkerFlg = false;
        if (this.selectWorkerList.length != 0) {
            for (let i = 0; i < this.selectWorkerList.length; i++) {
                if (this.selectWorkerList[i].Nm == name) {
                    this.selectWorkerList.splice(i, 1);
                    addFlg = false;
                    break;
                }
            }
            if (addFlg) {
                this.selectWorkerList.push({ 'id': this.showWorkerList[index].workerId, 'Nm': this.showWorkerList[index].workerNm });
            }
            for (let i = 0; i < this.selectWorkerList.length; i++) {
                this.selectWorker = this.selectWorkerList[i].Nm + '、' + this.selectWorker;
            }
            if (this.selectWorker.endsWith('、')) {
                this.selectWorker = this.selectWorker.substring(0, this.selectWorker.length - 1);
            }
        } else {
            this.selectWorkerList.push({ 'id': this.showWorkerList[index].workerId, 'Nm': this.showWorkerList[index].workerNm });
            this.selectWorker = this.selectWorkerList[0].Nm;
        }
    }

    createTaskClick() {

        if (this.workerFlg) {
            if ((this.startDate == '' && this.endDate != '') || (this.endDate == '' && this.startDate != '')) {
                let alert = this.alertCtrl.create({
                    title: '開始日と終了日は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if ((this.startTime == '' && this.endTime != '') || (this.endTime == '' && this.startTime != '')) {
                let alert = this.alertCtrl.create({
                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if (this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2) ||
                this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                let alert = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            this.createTask();
        } else if (this.LOW == false && this.HIGH == false) {
            let alert = this.alertCtrl.create({
                title: '優先度を入力してください。',
                buttons: ['OK']
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    isShowWork() {
        if (this.isShowJobFlg) {
            this.isShowJobFlg = false;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        } else {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        }
    }

    isShowTime() {
        if (this.isShowTimeFlg) {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = false;
            this.isShowWorkerFlg = true;
        } else {
            this.isShowJobFlg = true;
            this.isShowTimeFlg = true;
            this.isShowWorkerFlg = true;
        }
    }

    isShowWorker() {
        if (this.workerFlg) {
            if ((this.startDate == '' && this.endDate != '') || (this.endDate == '' && this.startDate != '')) {
                let alert = this.alertCtrl.create({
                    title: '開始日と終了日は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if ((this.startTime == '' && this.endTime != '') || (this.endTime == '' && this.startTime != '')) {
                let alert = this.alertCtrl.create({
                    title: '開始時間と終了時間は同時に入力、または同時に未入力の状態です。ご確認してください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if (this.startTime.substr(0, 2) == this.endTime.substr(0, 2) &&
                this.startTime.substr(3, 2) > this.endTime.substr(3, 2) ||
                this.startTime.substr(0, 2) > this.endTime.substr(0, 2)) {
                let alert = this.alertCtrl.create({
                    title: '開始時間より大きい終了時間を入力ください。',
                    buttons: ['OK']
                });
                alert.present();
                return;
            }
            if (this.isShowWorkerFlg) {
                this.isShowJobFlg = true;
                this.isShowTimeFlg = true;
                this.isShowWorkerFlg = false;
            } else {
                this.isShowJobFlg = true;
                this.isShowTimeFlg = true;
                this.isShowWorkerFlg = true;
            }
            if (this.workerFlg) {
                this.getWorker();
            }
        } else {
            let alert = this.alertCtrl.create({
                title: '業務名を入力してください。',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    clearStartDate() {
        if (this.startDate) {
            this.isShowWorkerFlg = true;
            this.startDate = '';
            // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
            if (this.selectWorkerList && this.showWorkerList
                && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
                this.getWorkerList().then(() => {
                    let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                    if (res) {
                        this.selectWorker = '';
                        this.selectWorkerList = [];
                        this.selectedWorkerFlg = true;
                    }
                });
            }
        }
    }

    clearEndDate() {
        if (this.endDate) {
            this.isShowWorkerFlg = true;
            this.endDate = '';
            // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
            if (this.selectWorkerList && this.showWorkerList
                && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
                this.getWorkerList().then(() => {
                    let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                    if (res) {
                        this.selectWorker = '';
                        this.selectWorkerList = [];
                        this.selectedWorkerFlg = true;
                    }
                });
            }
        }
    }
    setSDate(startDate) {
        this.startDate = startDate;
        this.endDate = startDate;

        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.getWorkerList().then(() => {
                let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                if (res) {
                    this.selectWorker = '';
                    this.selectWorkerList = [];
                    this.selectedWorkerFlg = true;
                }
            });
        }
    }
    setEDate(endDate) {
        this.startDate = endDate;
        this.endDate = endDate;

        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.getWorkerList().then(() => {
                let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                if (res) {
                    this.selectWorker = '';
                    this.selectWorkerList = [];
                    this.selectedWorkerFlg = true;
                }
            });
        }
    }
    startTimeChange() {

        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.planSTime = UtilityService.formatTimeString(this.startTime.substr(0, 5));
            this.getWorkerList().then(() => {
                let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                if (res) {
                    this.selectWorker = '';
                    this.selectWorkerList = [];
                    this.selectedWorkerFlg = true;
                }
            });
        }
        this.isShowWorkerFlg = true;
        this.showWorkerList = [];
        this.planSTime = UtilityService.formatTimeString(this.startTime.substr(0, 5))
    }

    isWorkerTime(current, all) {

        let count = 0;
        let res = false;

        current.forEach(element => {
            for (let j = 0; j < all.length; j++) {
                if (element['id'] == all[j]['workerId']) {
                    count++
                }
            }
        });

        if (count != current.length) {
            res = true;
        }
        return res;
    }

    clearStartTime() {
        if (this.startTime != '') {
            this.isShowWorkerFlg = true;
            this.showWorkerList = [];
            this.startTime = '';
            this.planSTime = '';
        }
    }

    endTimeChange() {

        // 時間を更新すると、担当者の仕事タイムのチェックが追加しました
        if (this.selectWorkerList && this.showWorkerList
            && this.selectWorkerList.length > 0 && this.showWorkerList.length > 0) {
            this.planETime = UtilityService.formatTimeString(this.endTime.substr(0, 5))
            this.getWorkerList().then(() => {
                let res = this.isWorkerTime(this.selectWorkerList, this.showWorkerList);
                if (res) {
                    this.selectWorker = '';
                    this.selectWorkerList = [];
                    this.selectedWorkerFlg = true;
                }
            });
        }

        this.isShowWorkerFlg = true;
        this.planETime = UtilityService.formatTimeString(this.endTime.substr(0, 5))
    }

    clearEndTime() {
        if (this.endTime != '') {
            this.isShowWorkerFlg = true;
            this.showWorkerList = [];
            this.endTime = '';
            this.planETime = '';
        }
    }

    clearWorker() {
        this.selectWorker = '';
        this.selectWorkerList = [];
    }

    changeON(Flg) {
        if (Flg) {
            this.ON = true;
            this.OFF = false;
            this.taskPoolKbn = 0
        } else {
            this.ON = false;
            this.OFF = true;
            this.taskPoolKbn = 1
        }
    }

    changeOFF(Flg) {
        if (Flg) {
            this.ON = false;
            this.OFF = true;
            this.taskPoolKbn = 1
        } else {
            this.ON = true;
            this.OFF = false;
            this.taskPoolKbn = 0
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
        this.navCtrl.pop();
    }

    async getCategoryAndShift() {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();

        //resCategory
        let resCategory = await this.taskcServiceProvider.getCategory(this.getData['storeNo']);

        if (!resCategory) {
            loading.dismiss();
            return;
        }

        let categoryResult = resCategory.json();
        if (categoryResult['categoryList'].length === 0) {
            ViewCommon.showAlert(this.alertCtrl, 'カテゴリーはありません。');
            return;
        }
        this.showWorkeList = categoryResult['categoryList'];
        for (let i = 0; i < this.showWorkeList.length; i++) {
            this.isShow.push(false);
        }

        //getShift
        let resShift = await this.taskcServiceProvider.getShift(this.getData['storeNo']);

        if (!resShift) {
            loading.dismiss();
            return;
        }

        let shiftResult = resShift.json();

        if (shiftResult["shiftList"].length === 0) {
            loading.dismiss();
            ViewCommon.showAlert(this.alertCtrl, 'シフト一覧はありません。');
            return;
        }
        this.showTimeList = shiftResult['shiftList'];
        for (let i = 0; i < this.showTimeList.length; i++) {
            if (this.showTimeList[i].start_time.substr(0, 2) > 12) {
                this.showTimeList[i]["start_timeF"] = this.showTimeList[i].start_time.substr(0, 2) - 12
                    + ':' + this.showTimeList[i].start_time.substr(3, 2) + 'PM';

            } else {
                this.showTimeList[i]["start_timeF"] = this.showTimeList[i].start_time.substr(0, 5) + 'AM';
            }
            if (this.showTimeList[i].end_time.substr(0, 2) > 12) {
                this.showTimeList[i]["end_timeF"] = this.showTimeList[i].end_time.substr(0, 2) - 12
                    + ':' + this.showTimeList[i].end_time.substr(3, 2) + 'PM';
            } else {
                this.showTimeList[i]["end_timeF"] = this.showTimeList[i].end_time.substr(0, 5) + 'AM';
            }
        }

        loading.dismiss();
    }

    async getWorker() {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();

        let selectedDate;

        if (!this.startDate && !this.endDate) {
            selectedDate = this.getData['selectedDate'];
        } else if (this.startDate) {
            selectedDate = this.startDate;
        } else {
            selectedDate = this.endDate;
        }

        let res = await this.taskcServiceProvider.getWorkerTime(this.getData['storeNo'], this.categroyId, this.opId, selectedDate, this.planSTime, this.planETime);
        if (!res) {
            loading.dismiss();
            return;
        }

        let result = res.json();
        if (result['workerList'].length === 0) {
            loading.dismiss();
            ViewCommon.showAlert(this.alertCtrl, '担当できる従業員はいません。');
            return;
        }
        this.selectedWorkerFlg = false;
        this.showWorkerList = result['workerList'];

        loading.dismiss();
    }

    async getWorkerList() {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();

        let selectedDate;
        if (!this.startDate && !this.endDate) {
            selectedDate = this.getData['selectedDate'];
        } else if (this.startDate) {
            selectedDate = this.startDate;
        } else {
            selectedDate = this.endDate;
        }

        let res = await this.taskcServiceProvider.getWorkerTime(this.getData['storeNo'], this.categroyId, this.opId, selectedDate, this.planSTime, this.planETime);
        if (!res) {
            loading.dismiss();
            return;
        }

        let result = res.json();
        if (result["workerList"].length === 0) {
            loading.dismiss();
            this.showWorkerList = [];
            return;
        }
        this.selectedWorkerFlg = false;
        this.showWorkerList = result['workerList'];

        loading.dismiss();
    }

    async createTask() {
        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        let res;
        let selectedDate;

        if (!this.startDate && !this.endDate) {
            selectedDate = this.getData['selectedDate'];
        } else if (this.startDate) {
            selectedDate = this.startDate;
        } else {
            selectedDate = this.endDate;
        }
        if (this.selectWorkerList.length != 0) {
            for (let i = 0; i < this.selectWorkerList.length; i++) {
                res = await this.taskcServiceProvider.createTask(
                    this.opId, this.opNm, this.selectWorkerList[i].id,
                    this.categroyId, this.taskPoolKbn, this.taskPriorityKbn,
                    this.planSTime, this.planETime,
                    this.getData['storeNo'], selectedDate);

                if (!res) {
                    loading.dismiss();
                    return;
                }

                let result = res.json();
                let taskId = result['taskId'];
                let pstime, petime;
                if (!(StrUti.isNothing(this.planSTime) && StrUti.isNothing(this.planETime))) {
                    pstime = selectedDate + 'T' + this.planSTime;
                    petime = selectedDate + 'T' + this.planETime;
                }
                let taskCObj = {
                    "cgId": this.categroyId,
                    "cgNm": this.categroyNm,
                    "opId": this.opId,
                    "opNm": this.opNm,
                    "storeNo": this.getData['storeNo'],
                    "taskDate": selectedDate,
                    "taskId": taskId,
                    "taskPoolKbn": this.taskPoolKbn,
                    "taskPriorityKbn": this.taskPriorityKbn,
                    "planETime": petime,
                    "planSTime": pstime,
                    "workerId": this.selectWorkerList[i].id,
                    "workerNm": this.selectWorkerList[i].Nm,
                    "duration": this.duration,
                    "hasHandover": 0,
                    "opCircle": null,
                    "status": "S",
                    "precOpList": [],
                    "subsOpList": [],
                    "actualETime": null,
                    "actualSTime": null,
                    "alertKbn": 0
                }

                // 非同期処理
                if (selectedDate == this.getData["selectedDate"]) {
                    if (StrUti.isNothing(this.planSTime) && StrUti.isNothing(this.planETime)) {
                        // 未割当タスク
                        this.inUnList(taskCObj);
                    } else {
                        // 割当済タスク
                        let matchKey, matchValue
                        if (StrUti.isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '2') {
                            // 業務別
                            matchKey = this.categroyId;
                            matchValue = this.categroyNm;
                        } else if (this.viewKbn == '1' || this.viewKbn == '3') {
                            // 担当者別
                            matchKey = this.selectWorkerList[i].id;
                            matchValue = this.selectWorkerList[i].Nm;
                        }
                        this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskCObj)
                    }
                }

            }

            loading.dismiss();
            //success
            let alert = this.alertCtrl.create({
                title: 'タスクは新規作成しました！'
            });
            alert.present();
            setTimeout(() => {
                alert.dismiss();
                this.goBackPop();
            }, 850);

        } else {
            let res = await this.taskcServiceProvider.createTask(
                this.opId, this.opNm, this.workerId,
                this.categroyId, this.taskPoolKbn, this.taskPriorityKbn,
                this.planSTime, this.planETime,
                this.getData['storeNo'], selectedDate);
            if (!res) {
                loading.dismiss();
                return;
            }

            let result = res.json();

            loading.dismiss();
            // 非同期処理
            let taskId = result['taskId'];
            let pstime, petime;
            if (!(StrUti.isNothing(this.planSTime) && StrUti.isNothing(this.planETime))) {
                pstime = selectedDate + 'T' + this.planSTime;
                petime = selectedDate + 'T' + this.planETime;
            }

            let taskCObj = {
                "cgId": this.categroyId,
                "cgNm": this.categroyNm,
                "opId": this.opId,
                "opNm": this.opNm,
                "storeNo": this.getData['storeNo'],
                "taskDate": selectedDate,
                "taskId": taskId,
                "taskPoolKbn": this.taskPoolKbn,
                "taskPriorityKbn": this.taskPriorityKbn,
                "planETime": petime,
                "planSTime": pstime,
                "workerId": this.workerId,
                "workerNm": this.workerNm,
                "duration": this.duration,
                "hasHandover": 0,
                "opCircle": null,
                "status": "S",
                "precOpList": [],
                "subsOpList": [],
                "actualETime": null,
                "actualSTime": null,
                "alertKbn": 0
            }
            if (StrUti.isNothing(this.workerId)
                || (StrUti.isNothing(this.planSTime) && StrUti.isNothing(this.planETime))) {
                // 未割当タスク
                if (StrUti.isNothing(this.workerId)) {
                    taskCObj['workerId'] = null;
                }
                this.inUnList(taskCObj);
            } else {
                // 割当済タスク
                let matchKey, matchValue
                if (StrUti.isNothing(this.viewKbn) || this.viewKbn == '0' || this.viewKbn == '2') {
                    // 業務別
                    matchKey = this.categroyId;
                    matchValue = this.categroyNm;
                } else if (this.viewKbn == '1' || this.viewKbn == '3') {
                    // 担当者別
                    matchKey = this.workerId;
                    matchValue = this.workerNm;
                }

                this.inCgList(this.planSTime, this.planETime, matchKey, matchValue, taskCObj)
            }

            //success
            let alert = this.alertCtrl.create({
                title: 'タスクは新規作成しました！'
            });
            alert.present();
            setTimeout(() => {
                alert.dismiss();
                this.goBackPop();
            }, 850);

        }
    }

    inUnList(taskCObj) {
        taskCObj["len"] = 2;
        taskCObj["taskStyle"] = '200%';
        taskCObj["textFlag"] = true;
        taskCObj["noAssingFlg"] = true;

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

    }

    getStartTime(slotSTime, slotETime) {
        let hh = this.planSTime.substr(0, 2);
        let mm = this.planSTime.substr(3, 2);
        // 表示時間帯の開始時刻と比較
        if (hh < slotSTime.substr(0, 2)) {
            hh = slotSTime.substr(0, 2);
            mm = slotSTime.substr(3, 2);
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
        let insertFlg = false;
        cgList.forEach(cgInfo => {
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
                        inHalfFlg = true;
                        insertFlg = true;
                        return;
                    }
                });
                if (!inHalfFlg) {
                    let newObj = new Object();
                    newObj['halfHour'] = startHalf;
                    let taskList = new Array<any>();
                    taskList.push(taskCObj);
                    newObj['taskInfoList'] = taskList;
                    cgInfo.halfHourList.push(newObj);
                    insertFlg = true;
                }
                if (insertFlg) {
                    return;
                }
            }
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
            newObj['taskInfoList'] = taskList;
            newCgInfo['halfHourList'].push(newObj);
            cgList.push(newCgInfo);
        }

        let intLen = 35;
        // タスクリスト整備
        ObjUti.mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen);
    }

    intoKanban(index, matchKey, matchValue, taskCObj) {
        let cgList = this.categoryInfoLists[index];

        let insertFlg = false;
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
                insertFlg = true;
                return;
            }
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
            newCgInfo['sTaskInforList'].push(newObj);
            cgList.push(newCgInfo);
        }
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
                this.startTime = result[0].description + ':' + result[1].description;
                console.log(result[0].description + ':' + result[1].description);
                this.startTimeChange();
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
                this.endTime = result[0].description + ':' + result[1].description;
                console.log(result[0].description + ':' + result[1].description);
                this.endTimeChange();
            },
            err => console.log('Error: ' + JSON.stringify(err))
        );
    }

}