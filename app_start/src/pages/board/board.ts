import { Component, ChangeDetectorRef } from '@angular/core';
import {
    App, IonicPage, NavController, NavParams, AlertController,
    PopoverController, LoadingController, Events
} from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ApiControlServiceProvider } from '../../providers/api-service/api-control-service'
import { DatePicker } from '@ionic-native/date-picker';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-board',
    templateUrl: 'board.html',
})
export class BoardPage {
    //前画面の変量値
    private storeNo: any;
    private storeNm: any;
    private aplUserId: any;
    private viewKbn: any;
    private selectedText: any;
    //AWSから取得された結果値
    private result: any;
    //画面表示用：引継があるフラッグ
    private hasHandover = false;
    //時間帯対象情報
    private timeSlotInfo = {};
    //選択pop画面
    private popover: any;
    //カテゴリーの表示用リスト
    private categoryInfoList = new Array<any>();
    private timeSlotInfoList = new Array<any>();
    private categoryInfoLists = new Array<any>();
    //時間帯Id
    private currentTimeSlotId: any;
    //未割当対象
    private noAssign: any;
    private noAssingFlg = false;
    //未割当区域表示/非表示用
    private mFlg: boolean = true;
    //ドラッグを取り消す用
    private dragSub: any;
    private dragendSub: any;
    //位置のパラメータ
    private dragIdStart: any;
    private dragIdEnd: any;
    //touchイベント判断用フラグ
    private touchFlag = false;
    //初期「移動不可」状態
    private flag = false;
    //タスク情報変量
    private currentTaskId: any;
    private currentTaskObj: any;

    //選択された日付
    private selectedDate;
    private selectedShowDate;
    //move判断flag
    private moveFlag = false;
    //event判断flag
    private eventFlag = false;
    //未着手のリスト
    private sTaskInforList = new Array<any>();
    //進行中のリスト
    private iTaskInforList = new Array<any>();
    //完了のリスト
    private eTaskInforList = new Array<any>();
    //中止のリスト
    private aTaskInforList = new Array<any>();
    private activeIndex;
    private activeIndexFlg;
    //drag用
    private dragIndex;
    private dragTaskList;
    private dragI;
    //スクロール制御用
    private scrollable;
    //シフト切り替える日付
    private selByCalandarDate = new Date();
    //前、次の判断用変数
    private count = 0;
    // 定時実行
    private timedExecution;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private navController: NavController,
        private alertCtrl: AlertController,
        private popoverCtrl: PopoverController,
        private loadingCtrl: LoadingController,
        private appCtrl: App,
        private scheduleProvider: ApiScheduleServiceProvider,
        public events: Events,
        public cd: ChangeDetectorRef,
        private dragulaService: DragulaService,
        public service: ApiControlServiceProvider,
        private datePicker: DatePicker,
        private storage: Storage) {

        //前画面がら取得する値
        this.result = this.navParams.get('res').json();
        this.storeNo = this.navParams.get('storeNo');
        this.storeNm = this.navParams.get('storeNm');
        this.viewKbn = this.navParams.get('viewKbn');
        this.aplUserId = this.navParams.get('aplUserId');
        this.selectedText = this.navParams.get('selectedText');
        this.selectedDate = this.navParams.get('selectedDate');
        if (this.selectedDate != UtilityService.formatDate(new Date())) {
            this.result["activeIndex"] = 0;
        }
        this.activeIndex = this.result["activeIndex"];
        this.selByCalandarDate = new Date(Date.parse(this.dateShowFormat(this.selectedDate)));
        this.currentTimeSlotId = this.navParams.get('currentTimeSlotId');
        events.subscribe('res:creat', (params) => {
            if (params.res != undefined) {
                this.result = params.res.json();
                if (this.count == 1) {
                    this.activeIndex = 0;
                    this.count = 0;
                } else if (this.count == -1) {
                    this.activeIndex = this.result["timeSlotInfoList"].length - 1;
                    this.count = 0;
                } else {
                    this.activeIndex = params.activeIndex != undefined
                        ? params.activeIndex : this.result["activeIndex"];
                }
                this.storeNo = params.storeNo;
                this.storeNm = params.storeNm;
                this.viewKbn = params.viewKbn;
                this.aplUserId = params.aplUserId;
                this.selectedText = params.selectedText;
                this.selectedDate = params.selectedDate;
                this.currentTimeSlotId = params.currentTimeSlotId;
                if (this.flag) {
                    this.flag = false;
                }
                if (params.dragFlg) {
                    this.dragSub.unsubscribe();
                    this.dragendSub.unsubscribe();
                }
                this.getData();

                if (!this.cd['destroyed']) {
                    this.cd.detectChanges();
                }
                if (this.eventFlag || params.dragFlg) {
                    this.ionViewDidEnter();
                    this.eventFlag = false;
                }
            }
            if (params != undefined && params.TaskHasHandover != undefined) {
                this.currentTaskObj['hasHandover'] = params.TaskHasHandover;
            } else if (params != undefined && params.hasHandover != undefined) {
                for (let i = 0; i < this.result['timeSlotInfoList'].length; i++) {
                    if (this.result['timeSlotInfoList'][i].timeSlotId == this.currentTimeSlotId) {
                        this.result['timeSlotInfoList'][i].hasHandover = params.hasHandover;
                        break;
                    }
                }
                this.hasHandover = params.hasHandover;
            }
            this.enableScroll();
            if (!this.cd['destroyed']) {
                this.cd.detectChanges();
            }
        });

        //画面のデータ再表示
        this.getData();

    }

    //画面ロードする時、初期設定
    ionViewDidEnter() {
        //ドラッグ開始
        this.dragSub = this.dragulaService.drag.subscribe((value) => {
            this.dragIdStart = value[2].id.slice(-1);
        });
        //ドラッグ移動終了
        this.dragendSub = this.dragulaService.dragend.subscribe((value) => {
            //スクロール利用可のメソッドを呼び出す
            this.enableScroll();
            document.getElementById(this.currentTaskId).className = 'taskButton';
            this.dragIdEnd = value[1].parentElement.id.slice(-1);
            //更新
            if (this.dragIdStart != this.dragIdEnd) {
                let status;
                if (this.dragIdEnd == 'S') {
                    //未着手の場合
                    status = '1';
                } else if (this.dragIdEnd == 'I') {
                    //進行中の場合
                    status = '2';
                } else if (this.dragIdEnd == 'A') {
                    //中止の場合
                    status = '3';
                } else {
                    //完了の場合
                    status = '4';
                }
                let result = this.changeStatus(this.currentTaskId, status);
                result.then((data) => {
                    if (data != false) {
                        this.currentTaskObj['status'] = this.dragIdEnd;
                        this.dragTaskList.splice(this.dragIndex, 1);
                        let taskInfoList = new Array<any>();

                        if (this.dragIdEnd == "S") {
                            //未着手の場合
                            if (this.categoryInfoList[this.dragI].sTaskInforList.length > 0) {
                                this.categoryInfoList[this.dragI].sTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                            } else {
                                taskInfoList.push(this.currentTaskObj);
                                this.categoryInfoList[this.dragI].sTaskInforList.push({ "taskInfoList": taskInfoList });
                            }

                        } else if (this.dragIdEnd == "I") {
                            //進行中の場合
                            if (this.categoryInfoList[this.dragI].iTaskInforList.length > 0) {
                                this.categoryInfoList[this.dragI].iTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                            } else {
                                taskInfoList.push(this.currentTaskObj);
                                this.categoryInfoList[this.dragI].iTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        } else if (this.dragIdEnd == "A") {
                            //中止の場合
                            if (this.categoryInfoList[this.dragI].aTaskInforList.length > 0) {
                                this.categoryInfoList[this.dragI].aTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                            } else {
                                taskInfoList.push(this.currentTaskObj);
                                this.categoryInfoList[this.dragI].aTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        } else {
                            //完了の場合
                            if (this.categoryInfoList[this.dragI].eTaskInforList.length > 0) {
                                this.categoryInfoList[this.dragI].eTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                            } else {
                                taskInfoList.push(this.currentTaskObj);
                                this.categoryInfoList[this.dragI].eTaskInforList.push({ "taskInfoList": taskInfoList });
                            }
                        }

                        taskInfoList = new Array<any>();
                        for (let i = 0; i < this.categoryInfoLists.length; i++) {
                            if (i != this.activeIndex) {
                                let categoryInfoList = this.categoryInfoLists[i];
                                for (let j = 0; j < categoryInfoList.length; j++) {
                                    switch (this.dragIdStart) {
                                        case "S":
                                            if (categoryInfoList[j].sTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].sTaskInforList[0].taskInfoList;
                                                for (let k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "I":
                                            if (categoryInfoList[j].iTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].iTaskInforList[0].taskInfoList;
                                                for (let k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "A":
                                            if (categoryInfoList[j].aTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].aTaskInforList[0].taskInfoList;
                                                for (let k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                        case "E":
                                            if (categoryInfoList[j].eTaskInforList.length > 0) {
                                                taskInfoList = categoryInfoList[j].eTaskInforList[0].taskInfoList;
                                                for (let k = 0; k < taskInfoList.length; k++) {
                                                    if (taskInfoList[k].taskId == this.currentTaskId) {
                                                        taskInfoList.splice(k, 1);
                                                        this.taskShiftSet(categoryInfoList, j);
                                                        break;
                                                    }
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                        this.updateAfterCtl();
                    }
                })
            } else {
                this.updateAfterCtl();
            }
        });
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
        this.dragAreaSet();
        this.startAutoRefresh();
    }
    ionViewDidLeave() {
        //ドラッグ事件を取り消す
        if (this.dragSub != undefined && this.dragendSub != undefined) {
            this.dragSub.unsubscribe();
            this.dragendSub.unsubscribe();
        }
        this.stopAutoRefresh();
    }

    //全画面表示用データ整備
    getData() {

        this.selectedShowDate = this.dateShowFormat(this.selectedDate);
        this.timeSlotInfoList = this.result["timeSlotInfoList"];
        this.categoryInfoLists = this.result["categoryInfoLists"];

        if (this.categoryInfoLists.length === 0) {
            this.categoryInfoLists = new Array<any>();
            this.timeSlotInfoList.forEach(element => {
                this.categoryInfoLists.push(new Array<any>());
            });
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }

        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        if (this.result["timeSlotInfoList"].length > 1) {
            this.activeIndexFlg = 0;
            if (this.activeIndex == this.result["timeSlotInfoList"].length - 1) {
                this.activeIndexFlg = 1;
            }
            if (this.activeIndex == 0) {
                this.activeIndexFlg = 2;
            }
        } else {
            this.activeIndexFlg = 9;
        }
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];

        this.noAssign = new Object();
        this.noAssign['taskInfoList'] = new Array<any>();

        if (this.result['categoryInfoLists'].length === 0) {
            ViewCommon.showAlert(this.alertCtrl, '指定された日付の現在時間帯のタスクはありません。');
            return;
        }

        //カテゴリの設定
        for (let i = 0; i < this.timeSlotInfoList.length; i++) {

            this.categoryInfoList = this.categoryInfoLists[i];
            this.categoryInfoList.forEach(category => {
                this.sTaskInforList = new Array<any>();
                this.iTaskInforList = new Array<any>();
                this.eTaskInforList = new Array<any>();
                this.aTaskInforList = new Array<any>();
                let temp = {};
                category.halfHourList.forEach(board => {
                    temp = { "taskInfoList": board.taskInfoList };
                    if (board.halfHour == "未着手") {
                        this.sTaskInforList.push(temp);
                    } else if (board.halfHour == "進行中") {
                        this.iTaskInforList.push(temp);
                    } else if (board.halfHour == "完了") {
                        this.eTaskInforList.push(temp);
                    } else {
                        this.aTaskInforList.push(temp);
                    }
                });
                //未割当のリスト作成
                if (this.categoryInfoList[this.categoryInfoList.length - 1].categoryId == -1) {
                    this.noAssign = this.categoryInfoList[this.categoryInfoList.length - 1].halfHourList[0];
                    //カテゴリーリストから未割当のリストを削除する。
                    this.categoryInfoList.pop();
                }
                category["sTaskInforList"] = this.sTaskInforList;
                category["iTaskInforList"] = this.iTaskInforList;
                category["eTaskInforList"] = this.eTaskInforList;
                category["aTaskInforList"] = this.aTaskInforList;
            });

            if (this.viewKbn == '3') {
                this.categoryInfoLists = this.filterNotShift4AllDay(
                    this.categoryInfoLists, this.result['workershiftInfoLists']);
            }
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }

        //DATEの設定
        if (this.selectedDate == undefined) {
            let date = new Date();
            this.selectedDate = UtilityService.formatDate(date);
        }
        this.selectedShowDate = this.dateShowFormat(this.selectedDate);
    }

    private filterNotShift4AllDay(categoryInfoLists: Array<any>, workerShifts: Array<any>) {
        let workers = [];
        workerShifts.forEach((e) => {
            if (e.workershifList.length == 0) {
                workers.push(e.workerId);
            }
        });

        let filterRlt = [];
        let len = categoryInfoLists.length;
        for (let i = 0; i < len; i++) {
            filterRlt[i] = categoryInfoLists[i].filter((e) => { return workers.indexOf(e.categoryId) < 0 });
        }
        return filterRlt;
    }

    //pulldownの区域
    presentPopover(myEvent) {
        this.popover = this.popoverCtrl.create('SelschedulePage',
            {
                'aplUserId': this.aplUserId, 'storeNo': this.storeNo, 'storeNm': this.storeNm,
                'viewKbn': this.viewKbn, 'selectedDate': this.selectedDate, 'currentTimeSlotId': this.currentTimeSlotId
            });
        this.popover.present({
            ev: myEvent
        });
    }
    activeAdd() {
        this.enableScroll();
        this.flag = false;
        if (this.activeIndexFlg == 1 || this.activeIndexFlg == 9) {
            this.count = 1;
            this.selByDate(1);
            return;
        }
        this.activeIndexFlg = 0;
        this.activeIndex = this.activeIndex + 1;

        if (this.categoryInfoLists != null && this.categoryInfoLists != undefined && this.categoryInfoLists.length > 0) {
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.dragAreaSet();

        if (this.activeIndex == this.result["timeSlotInfoList"].length - 1) {
            this.activeIndexFlg = 1;
        }
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
    }
    activeReduce() {
        this.enableScroll();
        this.flag = false;
        if (this.activeIndexFlg == 2 || this.activeIndexFlg == 9) {
            this.count = -1;
            this.selByDate(-1);
            return;
        }
        this.activeIndex = this.activeIndex - 1;
        this.activeIndexFlg = 0;
        if (this.categoryInfoLists != null && this.categoryInfoLists != undefined && this.categoryInfoLists.length > 0) {
            this.categoryInfoList = this.categoryInfoLists[this.activeIndex];
        }
        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        //時間帯の設定
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
        //引継情報有無フラグの設定
        this.hasHandover = this.timeSlotInfo["hasHandover"];
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.dragAreaSet();
        if (this.activeIndex == 0) {
            this.activeIndexFlg = 2;
        }
        this.hasHandover = this.timeSlotInfoList[this.activeIndex]['hasHandover'];

    }
    longPress(taskObj, dragName, taskList, index, i) {
        //スクロール利用不可のメソッドを呼び出す
        this.disableScroll();
        //未割当のタスクは担当者指定されていない場合、ドラッグ不可
        if (taskObj.workerId == null) {
            this.touchFlag = true;
            return;
        }
        let drag;
        if (this.viewKbn == '2') {
            drag = taskObj.cgId;
        } else {
            drag = taskObj.workerId;
        }
        this.dragIndex = index;
        this.dragI = i;
        this.dragTaskList = taskList;
        this.currentTaskObj = taskObj;
        if (!this.flag) {
            this.currentTaskId = taskObj.taskId;
            this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.status);
            // 「移動可」状態フラグに変更
            this.flag = true;
        } else {
            if (this.currentTaskId == taskObj.taskId) {
                this.flag = false;
                this.touchFlag = true;
                document.getElementById(taskObj.taskId).className = 'taskButton';
                this.enableScroll();
                //ドラッグ区域の制御
                this.dragAreaSet();
            } else {
                document.getElementById(this.currentTaskId).className = 'taskButton';
                this.enableScroll();
                this.currentTaskId = taskObj.taskId;
                //ドラッグ区域の設定
                this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.status);
                // 「移動可」状態フラグに変更
                this.flag = true;
            }
        }
    }

    //未割当部分表示(非表示)
    changMFlgFalse() {
        this.mFlg = false;
    }
    //未割当部分表示(表示)
    changMFlgTrue() {
        this.mFlg = true;
    }
    //新規画面へ遷移
    goNewTask() {
        return;
    }
    //ドラッグ部分の制御
    dragAreaSet() {
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        this.categoryInfoList.forEach(category => {
            if (this.dragulaService.find(category.categoryId) != undefined) {
                this.dragulaService.destroy(category.categoryId);
            }
            if (this.viewKbn == '3' && this.currentTaskObj != undefined) {
                if (this.dragulaService.find(this.currentTaskObj.cgId) != undefined) {
                    this.dragulaService.destroy(this.currentTaskObj.cgId);
                }
            }
        });
    }
    dragSet(drag, cgId, taskId, status) {
        if (!this.cd['destroyed']) {
            this.cd.detectChanges();
        }
        document.getElementById(taskId).className = 'taskButton' + ' animated infinite pulse';
        if (this.dragulaService.find(drag) != undefined) {
            this.dragulaService.destroy(drag);
        }

        this.dragulaService.setOptions(drag, {
            revertOnSpill: true,
            invalid: (el, handle) => {
                return this.handle(handle);
            }
        });
        let containers = this.dragulaService.find(drag).drake.containers;
        this.categoryInfoList.forEach(category => {
            if (this.viewKbn == '2' && category.categoryId == this.currentTaskObj["cgId"]) {
                containers.push(document.getElementById(category.categoryId + "S"));
                containers.push(document.getElementById(category.categoryId + "I"));
                containers.push(document.getElementById(category.categoryId + "E"));
                containers.push(document.getElementById(category.categoryId + "A"));
            } else {
                if (this.viewKbn == '3' && category.categoryId == this.currentTaskObj["workerId"]) {
                    containers.push(document.getElementById(category.categoryId + "S"));
                    containers.push(document.getElementById(category.categoryId + "I"));
                    containers.push(document.getElementById(category.categoryId + "E"));
                    containers.push(document.getElementById(category.categoryId + "A"));
                }
            }
        });
    }
    async changeStatus(taskId, status) {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        let lockTask = ObjUti.getLockObject(this.currentTaskObj);
        let res = await this.service.changeStatus(taskId, status, lockTask);

        loading.dismiss();
        if (!res) {
            return;
        }
        let result = res.json();
        this.currentTaskObj['status'] = status;
        this.currentTaskObj['actualSTime'] = result['lockTaskInfo'].actualSDayTime;
        this.currentTaskObj['actualETime'] = result['lockTaskInfo'].actualEDayTime;
        return true;
    }
    //更新後の画面制御
    updateAfterCtl() {
        document.getElementById(this.currentTaskId).className = 'taskButton';
        this.enableScroll();
        this.flag = false;

        this.dragAreaSet();
    }
    //画面表示用フォーマット(yyyy/mm/dd)
    dateShowFormat(date) {
        date = date.replace(/[-]/g, '/');
        return date;
    }
    //カレンダー
    async dateSelect() {
        this.datePicker.show({
            mode: 'date',
            date: new Date(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
            titleText: '日付を選択'
        }).then(
            async date => {
                this.selByCalandarDate = date;
                this.selByDate(0);
            },
            err => console.log('Error occurred while getting date: ', err)
        );
    }
    //タスクイベント(クリック、ダブりクリック)
    goControl(taskObj, categoryId, flg, taskList, index, i) {
        //pressイベント発生する時、touchイベントを阻止する
        if (this.flag == true || this.touchFlag == true || this.moveFlag == true) {
            if (this.touchFlag == true) {
                this.touchFlag = false;
            }
            if (this.moveFlag == true) {
                this.moveFlag = false;
            }
            return;
        }
        this.noAssingFlg = flg;
        this.currentTaskObj = taskObj;
        this.currentTaskObj["storeNm"] = this.storeNm;
        this.currentTaskObj["currentTimeSlotId"] = this.currentTimeSlotId;
        this.currentTaskObj["categoryId"] = categoryId;
        this.currentTaskObj["storeNo"] = this.storeNo;
        this.currentTaskObj["viewKbn"] = this.viewKbn;
        this.currentTaskObj["selectedText"] = this.selectedText;
        this.currentTaskObj["aplUserId"] = this.aplUserId;
        this.currentTaskObj["selectedDate"] = this.selectedDate;
        this.currentTaskObj["noAssingFlg"] = this.noAssingFlg;
        this.currentTaskObj['categoryInfoList'] = this.categoryInfoList;
        this.currentTaskObj['categoryIndex'] = i;
        this.currentTaskObj['taskIndex'] = index;
        this.currentTaskObj['noAssign'] = this.noAssign;
        this.currentTaskObj['timeSlotInfoList'] = this.timeSlotInfoList;
        this.currentTaskObj['categoryInfoLists'] = this.categoryInfoLists;
        this.currentTaskObj['activeIndex'] = this.activeIndex;

        //引続画面ポップ
        let popover = this.popoverCtrl.create('ControlPage', this.currentTaskObj, { cssClass: 'animated bounceInDown' });
        popover.present();
        //コントローラー画面の非同期処理(タスクのSTATUS変更)
        popover.onDidDismiss((data) => {
            //処理がない場合
            if (data == undefined) {
                return;
            }
            taskList.splice(index, 1);
            let taskInfoList = new Array<any>();
            if (data == "1") {
                //未着手の場合
                taskObj["status"] = "S";
                let len = this.categoryInfoList[i].sTaskInforList.length;
                if (len > 0) {
                    this.categoryInfoList[i].sTaskInforList[0]['taskInfoList'].push(taskObj);
                } else {
                    taskInfoList.push(taskObj);
                    this.categoryInfoList[i].sTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            } else if (data == "2") {
                //進行中の場合
                taskObj["status"] = "I";
                let len = this.categoryInfoList[i].iTaskInforList.length;
                if (len > 0) {
                    this.categoryInfoList[i].iTaskInforList[0]['taskInfoList'].push(taskObj);
                } else {
                    taskInfoList.push(taskObj);
                    this.categoryInfoList[i].iTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            } else if (data == "3") {
                //中止の場合
                taskObj["status"] = "A";
                let len = this.categoryInfoList[i].aTaskInforList.length;
                if (len > 0) {
                    this.categoryInfoList[i].aTaskInforList[0]['taskInfoList'].push(taskObj);
                } else {
                    taskInfoList.push(taskObj);
                    this.categoryInfoList[i].aTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            } else {
                //完了の場合
                taskObj["status"] = "E";
                let len = this.categoryInfoList[i].eTaskInforList.length;
                if (len > 0) {
                    this.categoryInfoList[i].eTaskInforList[0]['taskInfoList'].push(taskObj);
                } else {
                    taskInfoList.push(taskObj);
                    this.categoryInfoList[i].eTaskInforList.push({ 'taskInfoList': taskInfoList });
                }
            }
            this.dragAreaSet();
        });
    }
    //タスク新規画面に遷移
    goTaskC() {
        let param = new Object();
        param["storeNm"] = this.storeNm;
        param["currentTimeSlotId"] = this.currentTimeSlotId;
        param["timeSlotInfoList"] = this.result["timeSlotInfoList"];
        param["storeNo"] = this.storeNo;
        param["viewKbn"] = this.viewKbn;
        param["selectedText"] = this.selectedText;
        param["aplUserId"] = this.aplUserId;
        param["hasHandover"] = this.hasHandover;
        param["selectedDate"] = this.selectedDate;
        param["noAssign"] = this.noAssign;
        param["activeIndex"] = this.activeIndex;

        param["categoryInfoLists"] = this.categoryInfoLists;
        param["categoryInfoList"] = this.categoryInfoList;
        this.navController.push('TaskcPage', param);
    }
    //引き続き画面に遷移
    goHandoverpopPage() {
        let timeSlotObj = new Object();
        timeSlotObj["storeNm"] = this.storeNm;
        timeSlotObj["currentTimeSlotId"] = this.currentTimeSlotId;
        timeSlotObj["currentTimeSlotNm"] = this.timeSlotInfo['timeSlotNm'];
        timeSlotObj["storeNo"] = this.storeNo;
        timeSlotObj["viewKbn"] = this.viewKbn;
        timeSlotObj["selectedText"] = this.selectedText;
        timeSlotObj["aplUserId"] = this.aplUserId;
        // timeSlotObj["hasHandover"] = this.hasHandover;
        timeSlotObj["hasHandover"] = this.timeSlotInfoList[this.activeIndex]['hasHandover'];
        timeSlotObj["selectedDate"] = this.selectedDate;
        let popover = this.popoverCtrl.create('HandoverpopPage', timeSlotObj, { cssClass: 'animated bounceInDown' });
        popover.present();
    }
    //移動不可のタスク判断
    handle(handle) {
        if (handle.id == "") {
            if (handle.parentElement.id == "") {
                if (handle.parentElement.parentElement.id == "") {
                    if (handle.parentElement.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    if (handle.parentElement.parentElement.id == this.currentTaskId) {
                        return false;
                    } else {
                        return true;
                    }
                }
            } else {
                if (handle.parentElement.id == this.currentTaskId) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            if (handle.id == this.currentTaskId) {
                return false;
            } else {
                return true;
            }
        }
    }

    moveSet() {
        this.moveFlag = true;
    }
    //アラートが発生する時、再検索処理
    async selAlert() {
        let date = new Date();
        let loading = this.loadingCtrl.create({
            content: ''
        });
        let res;
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());
        res = await this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn);
        this.result = res.json();
        loading.present();
        loading.dismiss().then(() => {
            this.getData();
        });
    }

    taskShiftSet(categoryInfoList, index) {
        let taskInfoList = new Array<any>();
        switch (this.dragIdEnd) {
            case 'S':
                if (categoryInfoList[index].sTaskInforList.length > 0) {
                    categoryInfoList[index].sTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                } else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].sTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'A':
                if (categoryInfoList[index].aTaskInforList.length > 0) {
                    categoryInfoList[index].aTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                } else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].aTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'E':
                if (categoryInfoList[index].eTaskInforList.length > 0) {
                    categoryInfoList[index].eTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                } else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].eTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
            case 'I':
                if (categoryInfoList[index].iTaskInforList.length > 0) {
                    categoryInfoList[index].iTaskInforList[0].taskInfoList.push(this.currentTaskObj);
                } else {
                    taskInfoList.push(this.currentTaskObj);
                    categoryInfoList[index].iTaskInforList.push({ "taskInfoList": taskInfoList });
                }
                break;
        }
    }
    //スクロール利用不可の設定
    disableScroll() {
        this.scrollable = 'no-scroll';
    }
    //スクロール利用可の設定
    enableScroll() {
        this.scrollable = 'enable-scroll';
    }

    async refreshTask(refreshLoading) {

        if (!refreshLoading) {
            refreshLoading = this.loadingCtrl.create({
                content: '',
            });
            refreshLoading.present();
        }

        let date = new Date();
        if (this.selectedDate == undefined) {
            this.selectedDate = UtilityService.formatDate(date);
        }
        let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());

        let res = await this.scheduleProvider.getScheduleInit(
            this.storeNo, this.selectedDate, selTime, this.viewKbn);

        refreshLoading.dismiss();
        if (!res) {
            return;
        }
        let result = res.json();
        if (result['timeSlotInfoList'].length === 0) {
            ViewCommon.showAlert(this.alertCtrl, '本店の時間帯データはありません。');
            return;
        }

        this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
        this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];

        let params = {
            res: res, selectedText: this.selectedText, storeNo: this.storeNo,
            storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
            selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
            dragFlg: true, activeIndex: this.activeIndex
        };

        this.events.publish('res:creat', params);
    }
    async selByDate(count) {
        let loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
        let newDate = new Date();
        let selTime;
        this.selByCalandarDate.setDate(this.selByCalandarDate.getDate() + count);
        let selDate = UtilityService.formatDate(this.selByCalandarDate);
        if (count == 0) {
            if (UtilityService.formatDate(newDate) == selDate) {
                selTime = UtilityService.formatTime(newDate.getHours(), newDate.getMinutes(), newDate.getSeconds());
            } else {
                selTime = '00:00:00';
            }
        } else if (count < 0) {
            selTime = '23:59:00';
        } else {
            selTime = '00:00:00';
        }
        let res = await this.scheduleProvider.getScheduleInit(this.storeNo, selDate, selTime, this.viewKbn);
        if (!res) {
            return;
        }
        let result = res.json();
        this.selectedDate = selDate;
        this.selectedShowDate = this.dateShowFormat(this.selectedDate);
        let params = {
            storeNo: this.storeNo, storeNm: this.storeNm,
            res: res, aplUserId: this.aplUserId, selectedText: this.selectedText, viewKbn: this.viewKbn,
            selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId
        };
        this.dragSub.unsubscribe();
        this.dragendSub.unsubscribe();
        this.eventFlag = true;
        this.events.publish('res:creat', params);
        loading.dismiss();
    }

    stopAutoRefresh() {
        if (this.timedExecution != undefined) {
            clearInterval(this.timedExecution);
            this.timedExecution = undefined;
        }
    }

    startAutoRefresh() {
        // 時間初期化
        this.storage.set('autoRefreshTimeCounter', 0);
        let refreshLoading;

        if (!this.timedExecution
            && this.selectedDate == UtilityService.formatDate(new Date())) {
            this.timedExecution = setInterval(async () => {
                let counter = await this.storage.get('autoRefreshTimeCounter');
                let accessToken = await this.storage.get('accessToken');
                if (!accessToken) {
                    return;
                }

                if (counter == 299) {
                    refreshLoading = this.loadingCtrl.create({
                        content: '',
                        duration: 5000
                    });
                    refreshLoading.present();
                }
                if (counter > 300) {
                    this.refreshTask(refreshLoading);
                    counter = 0;
                }
                counter = counter + 1;
                this.storage.set('autoRefreshTimeCounter', counter);
            }, 1000);
        }
    }

    scrollHandler(event) {
        if (event == null) {
            return;
        }
        let headers = document.getElementsByName('scrollHeader');
        for (let i = 0; i < headers.length; i++) {
            if (event.scrollTop > 0) {
                headers[i].style.transform = 'translateY(' + (event.scrollTop) + 'px)'
            } else {
                headers[i].style.transform = 'translateY(0px)'
            }
        }
    }
}
