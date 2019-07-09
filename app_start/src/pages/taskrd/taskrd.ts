import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { ApiTaskrdServiceProvider } from '../../providers/api-service/api-taskrd-service';
import { ApiHandoverServiceProvider } from '../../providers/api-service/api-handover-service';
import { StrUti } from '../../providers/utility-service/StrUti';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { UtilityService } from '../../providers/utility-service/UtilityService';

/**
 * Generated class for the TaskrdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-taskrd',
    templateUrl: 'taskrd.html',
})
export class TaskrdPage {

    private getTaskID;
    private storeNm;
    private taskContent;
    private checkList = [];
    private actualStartFlg: boolean;
    private actualEndFlg: boolean;
    private editFlg: boolean;
    private opNm;
    private workerId;
    private workerNm;
    private opCircle;
    private statusContent;
    private planSDay;
    private planSHour;
    private planEDay;
    private planEHour;
    private actualSDay;
    private actualSHour;
    private actualEDay;
    private actualEHour;

    private hasHandover;
    private checkedON;
    private checkedOFF;
    private checkedLOW;
    private checkedHIGH;
    private params;
    //from schedulePage
    private getData = {};
    private handoverList;

    public static goTaskUpdateLoading;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private appCtrl: App,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public service: ApiTaskrdServiceProvider,
        private scheduleProvider: ApiScheduleServiceProvider,
        private handoverProvider: ApiHandoverServiceProvider,
        public events: Events) {
    }

    ionViewWillEnter() {
        this.getData = this.navParams.data;
    }

    ionViewDidEnter() {

        this.getTaskID = this.getData['taskId'];
        this.storeNm = '業務状況';
        this.getTaskDetail();
        this.selHandover();
    }
    async getTaskDetail() {

        this.taskContent = this.getData;
        if (this.taskContent.planSTime != null && this.taskContent.planSTime != '') {
            this.taskContent['planSDay'] = this.taskContent.planSTime.substr(0, 10);
            this.taskContent['planSHour'] = this.taskContent.planSTime.substr(11, 8);
        }
        if (this.taskContent.planETime != null && this.taskContent.planETime != '') {
            this.taskContent['planEDay'] = this.taskContent.planETime.substr(0, 10);
            this.taskContent['planEHour'] = this.taskContent.planETime.substr(11, 8);
        }
        if (this.taskContent.actualSTime != null && this.taskContent.actualSTime != '') {
            this.taskContent['actualSDay'] = this.taskContent.actualSTime.substr(0, 10);
            this.taskContent['actualSHour'] = this.taskContent.actualSTime.substr(11, 8);
        }
        if (this.taskContent.actualETime != null && this.taskContent.actualETime != '') {
            this.taskContent['actualEDay'] = this.taskContent.actualETime.substr(0, 10);
            this.taskContent['actualEHour'] = this.taskContent.actualETime.substr(11, 8);
        }
        this.opNm = this.taskContent.opNm;
        this.workerId = this.taskContent.workerId;
        this.workerNm = this.taskContent.workerNm;
        this.opCircle = this.taskContent.opCircle;
        this.hasHandover = this.taskContent.hasHandover;

        this.planSDay = (this.taskContent.planSDay != null && this.taskContent.planSDay != '') ? this.taskContent.planSDay.replace(/[-]/g, '/') : '';
        this.planEDay = (this.taskContent.planEDay != null && this.taskContent.planEDay != '') ? this.taskContent.planEDay.replace(/[-]/g, '/') : '';
        this.actualSDay = (this.taskContent.actualSDay != null && this.taskContent.actualSDay != '') ? this.taskContent.actualSDay.replace(/[-]/g, '/') : '';
        this.actualEDay = (this.taskContent.actualEDay != null && this.taskContent.actualEDay != '') ? this.taskContent.actualEDay.replace(/[-]/g, '/') : '';
        this.planSHour = (this.taskContent.planSHour != null && this.taskContent.planSHour != '') ? this.taskContent.planSHour.substr(0, 5) : '';
        this.planEHour = (this.taskContent.planEHour != null && this.taskContent.planEHour != '') ? this.taskContent.planEHour.substr(0, 5) : '';
        this.actualSHour = (this.taskContent.actualSHour != null && this.taskContent.actualSHour != '') ? this.taskContent.actualSHour.substr(0, 5) : '';
        this.actualEHour = (this.taskContent.actualEHour != null && this.taskContent.actualEHour != '') ? this.taskContent.actualEHour.substr(0, 5) : '';

        this.checkList = this.taskContent.chkList;
        if (this.taskContent.status == 'S') {
            this.statusContent = '未着手';
            this.editFlg = false;
            this.actualStartFlg = true;
            this.actualEndFlg = true;
        } else if (this.taskContent.status == 'I') {
            this.statusContent = '進行中';
            this.editFlg = true;
            this.actualStartFlg = false;
            this.actualEndFlg = true;
        } else if (this.taskContent.status == 'A') {
            this.statusContent = '中止';
            this.editFlg = true;
            this.actualStartFlg = false;
            this.actualEndFlg = false;
        } else {
            this.statusContent = '完了'
            this.editFlg = true;
            this.actualStartFlg = false;
            this.actualEndFlg = false;
        }
        if (this.taskContent.taskPoolKbn == '0') {
            this.checkedON = true;
            this.checkedOFF = false;
        } else if (this.taskContent.taskPoolKbn == '1') {
            this.checkedON = false;
            this.checkedOFF = true;
        }
        if (this.taskContent.taskPriorityKbn == '0') {
            this.checkedLOW = true;
            this.checkedHIGH = false;
        } else if (this.taskContent.taskPriorityKbn == '1') {
            this.checkedLOW = false;
            this.checkedHIGH = true;
        }
    }

    //削除ボータン押下
    deleteButton() {
        let alert = this.alertCtrl.create({
            title: '当該タスクを削除してよろしいでしょうか？',
            buttons: [
                {
                    text: 'キャンセル ',
                    handler: () => {
                    }
                },
                {
                    text: '確認',
                    handler: () => {
                        this.deleteTask();
                    }
                }
            ]
        });
        alert.present();
    }

    async deleteTask() {

        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();
        //タスク削除の楽観ロックの情報の設定
        let lockTaskInfo;
        let lockTaskChklistInfo;
        let lockChklist;
        let lockHandover;
        let opNm = this.getData['opNm']
        if (this.getData['opId'] != 0) {
            opNm = null
        }
        if (this.getData['planSTime'] == undefined) {
            this.getData['planSTime'] = null;
        }
        if (this.getData['planETime'] == undefined) {
            this.getData['planETime'] = null;
        }
        lockTaskInfo = {
            'taskId': this.getData['taskId'],
            'opId': this.getData['opId'],
            'opNm': opNm,
            'workerId': this.getData['workerId'],
            'categoryId': this.getData['cgId'],
            'storeNo': this.getData['storeNo'],
            'taskPoolKbn': this.getData['taskPoolKbn'],
            'taskPriorityKbn': this.getData['taskPriorityKbn'],
            'opCircle': this.getData['opCircle'],
            'planSDayTime': this.getData['planSTime'],
            'planEDayTime': this.getData['planETime'],
            'actualSDayTime': this.getData['actualSTime'],
            'actualEDayTime': this.getData['actualETime'],
            'status': this.getData['status'],
            'alertKbn': this.getData['alertKbn'],
            'taskDate': this.getData['taskDate'],
        };
        if (this.getData['chkList'].length > 0) {
            lockTaskChklistInfo = {
                'taskChklistId': this.getData['chkList'][0].taskChklistId,
                'taskId': this.getData['taskId']
            };
        } else {
            lockTaskChklistInfo = null;
        }
        lockChklist = this.getData['chkList'];
        let handoverListTemp = new Array<any>();
        if (this.handoverList.length > 0) {
            this.handoverList.forEach(handoverListtObj => {
                let param = {
                    'handoverId': handoverListtObj['handoverId'],
                    'handoverContents': handoverListtObj['handoverContents'],
                    'handoverDate': handoverListtObj['handoverDate'],
                    'handoverWorkerId': handoverListtObj['workerId'],
                    'imgPath': handoverListtObj['imgPath'],
                    'timeSlotId': handoverListtObj['timeSlotId'],
                    'taskId': this.getData['taskId'],
                    'date': handoverListtObj['date']
                }
                handoverListTemp.push(param);
            });
        } else {
            handoverListTemp = [];
        }
        lockHandover = handoverListTemp;

        let lockRes = await this.service.lockTask(this.getTaskID, lockTaskInfo, lockTaskChklistInfo, lockChklist, lockHandover);
        if (lockRes == undefined) {
            loading.dismiss();
            return;
        }

        let res = await this.service.deleteTask(this.getTaskID);
        if (res == undefined) {
            loading.dismiss();
            return;
        }

        //未割当の場合
        if (this.getData['noAssingFlg'] == true) {
            let noAssign = this.getData['noAssign'];
            let taskIndex = this.getData['taskIndex'];
            noAssign.taskInfoList.splice(taskIndex, 1);
            loading.dismiss();
            this.goBackPop();
            return;
        }
        let categoryInfoList = this.getData['categoryInfoList'];
        let categoryIndex = this.getData['categoryIndex'];
        let taskIndex = this.getData['taskIndex'];
        let viewKbn = this.getData['viewKbn'];
        let taskInforList;
        let categoryId;
        let taskId;
        if (StrUti.isNothing(viewKbn) || viewKbn == '0' || viewKbn == '1') {
            this.delFromCategoryList();
        } else {
            if (this.getData['status'] == 'S') {
                taskInforList = categoryInfoList[categoryIndex].sTaskInforList[0].taskInfoList;
            } else if (this.getData['status'] == 'I') {
                taskInforList = categoryInfoList[categoryIndex].iTaskInforList[0].taskInfoList;
            } else if (this.getData['status'] == 'A') {
                taskInforList = categoryInfoList[categoryIndex].aTaskInforList[0].taskInfoList;
            } else if (this.getData['status'] == 'E') {
                taskInforList = categoryInfoList[categoryIndex].eTaskInforList[0].taskInfoList;
            }

            categoryId = categoryInfoList[categoryIndex]['categoryId'];
            taskId = taskInforList[taskIndex]['taskId'];
            this.delOtherShiftToKanban(categoryId, taskId);
        }

        loading.dismiss();
        this.goBackPop();

    }

    //task編集画面
    async goTaskUpdate() {
        TaskrdPage.goTaskUpdateLoading = this.loadingCtrl.create({
            content: ''
        });
        TaskrdPage.goTaskUpdateLoading.present();
        let cgId = this.getData['cgId'];
        let opId = this.getData['opId'];
        let taskId = this.getData['taskId'];
        let storeNo = this.getData['storeNo'];
        let categoryId = this.getData['categoryId'];
        let timeSlotId = this.getData['currentTimeSlotId'];
        let viewKbn = this.getData['viewKbn'];
        let aplUserId = this.getData['aplUserId'];
        let selectedText = this.getData['selectedText'];
        let selectedDate = this.getData['selectedDate']

        this.params = {
            storeNo: this.navParams.data.storeNo,
            storeNm: this.navParams.data.storeNm,
            opId: opId,
            taskId: taskId,
            categoryId: categoryId,
            currentTimeSlotId: timeSlotId,
            viewKbn: viewKbn,
            aplUserId: aplUserId,
            selectedText: selectedText,
            workerId: this.workerId,
            selectedDate: this.navParams.data.selectedDate,
            cgId: cgId,
            obj: this.getData
        };
        this.navCtrl.push('TaskuPage', this.params);
    }
    goBackPop() {
        this.navCtrl.pop();
    }

    goHandoverrd() {
        this.navCtrl.push('HandoverrdPage', {
            taskId: this.getData['taskId'],
            storeNo: this.getData['storeNo'],
            storeNm: this.getData['storeNm'],
            currentTimeSlotId: this.getData['currentTimeSlotId'],
            aplUserId: this.getData['aplUserId'],
            viewKbn: this.getData['viewKbn'],
            selectedText: this.getData['selectedText'],
            selectedDate: this.getData['selectedDate']
        });
    }

    async selHandover() {

        let loading = this.loadingCtrl.create({
            content: ''
        });

        loading.present();

        let res = undefined;
        let selectedDate = this.getData['selectedDate'];
        if (this.getData['taskId'] != undefined) {
            res = await this.handoverProvider.selHandoverByTaskId(this.getData['taskId']);
        } else if (this.getData['currentTimeSlotId'] != undefined) {
            res = await this.handoverProvider.selHandoverByTimesoltId(this.getData['currentTimeSlotId'], selectedDate);
        }

        loading.dismiss();
        if (res == undefined) {
            return;
        }

        let result = res.json();
        this.handoverList = result['handoverList'];
    }

    delFromCategoryList() {
        let categoryInfoLists = this.getData['categoryInfoLists'];
        let categoryIndex = this.getData['categoryIndex'];
        let taskIndex = this.getData['taskIndex'];
        let timeSlot = this.getData['timeSlot'];
        let categoryInfoList = this.getData['categoryInfoList'];

        let hourList = categoryInfoList[categoryIndex]['halfHourList'];
        let slideList = this.getData['slideList'];

        let timeSlotInfoList = this.getData['timeSlotInfoList'];
        let slotSTime = timeSlotInfoList[0].startTime;
        let slotETime = timeSlotInfoList[timeSlotInfoList.length - 1].endTime;

        let taskInfoList = [];
        for (let i = 0; i < hourList.length; i++) {
            let tmp = hourList[i];
            if (timeSlot == tmp['halfHour']) {
                taskInfoList = tmp['taskInfoList'];
                break;
            }
        }
        taskInfoList.splice(taskIndex, 1);

        ObjUti.mkTaskPos(categoryInfoList, slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35);

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

    delOtherShiftToKanban(categoryId, taskId) {

        let categoryInfoLists = this.getData['categoryInfoLists'];
        let taskInforList = [];
        categoryInfoLists.forEach(element => {
            element.forEach(categoryInfo => {
                if (categoryId == categoryInfo['categoryId']) {

                    let taskInforLists = [];
                    if (this.getData['status'] == 'S') {
                        taskInforLists = categoryInfo.sTaskInforList;
                    } else if (this.getData['status'] == 'I') {
                        taskInforLists = categoryInfo.iTaskInforList;
                    } else if (this.getData['status'] == 'A') {
                        taskInforLists = categoryInfo.aTaskInforList;
                    } else if (this.getData['status'] == 'E') {
                        taskInforLists = categoryInfo.eTaskInforList;
                    }

                    if (taskInforLists.length < 1) {
                        return;
                    }

                    taskInforList = taskInforLists[0].taskInfoList;
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
}
