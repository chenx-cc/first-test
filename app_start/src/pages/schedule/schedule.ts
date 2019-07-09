import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
	App, IonicPage, NavController, NavParams, AlertController,
	LoadingController, PopoverController, Events
} from 'ionic-angular';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DatePicker } from '@ionic-native/date-picker';
import { ApiScheduleServiceProvider } from '../../providers/api-service/api-schedule-service';
import { UtilityService } from '../../providers/utility-service/UtilityService';
import { ApiTaskuServiceProvider } from '../../providers/api-service/api-tasku-service';
import { ApiTaskcServiceProvider } from '../../providers/api-service/api-taskc-service';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { ObjUti } from '../../providers/utility-service/ObjUti';
import { Content } from 'ionic-angular';
import { StrUti } from '../../providers/utility-service/StrUti';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html'
})
export class SchedulePage {
	@ViewChild(Content) content: Content;

	//カテゴリーの表示用リスト
	private categoryInfoList = new Array<any>();
	//未割当対象
	private noAssign: any;
	private noAssingFlg = false;
	//最後のクリックタイム
	private lastClickTime = 0;
	private clickTimer: any;
	//選択された日付
	private selectedDate;
	private selectedShowDate;
	//画面表示用：アラートがあるフラッグ
	private hasAlert = false;
	private hasAlertS = false;
	private hasAlertE = false;
	//画面表示用：引継があるフラッグ
	private hasHandover = false;
	//時間帯対象情報
	private activeIndex;
	private timeSlotInfo = {};
	//AWS返却された対象
	private result: any;
	//初期「移動不可」状態
	private flag = false;
	//touchイベント判断用フラグ
	private touchFlag = false
	//開始時間
	private sTime: any;
	//終了時間
	private eTime: any;
	//前画面の選択された店No
	private storeNo: any;
	//前画面の選択された店名称
	private storeNm: any;
	//時間帯Id
	private currentTimeSlotId: any;
	// 時間length
	private timeLength;
	//response
	private res;
	//時間線
	private timeRun;
	private timeSE;
	//業務名称
	private selectedText;
	//位置のパラメータ
	private dragIdStart: any;
	private dragIdEnd: any;
	//タスク情報変量
	private currentTaskId: any;
	private currentTaskLen: any;
	private currentTaskObj: any;
	private currentCgId: any;
	private aplUserId: any;
	private mFlg: boolean = true;
	private slideList = new Array<any>();
	//ドラッグを取り消す用
	private dragSub: any;
	private dragendSub: any;
	//画面業務区分
	private viewKbn: any;
	//選択pop画面
	private popover: any;
	//move判断flag
	private moveFlag = false;
	//touch判断flag
	private clickFlag = false;
	//event判断flag
	private eventFlag = false;
	//タスクの開始時間
	private currentStartTime;
	private oldStartTime;
	private scrollYFlg = true;
	private dragFlg = false;
	private dragMoveFlg = true;
	private otherDateFlg = false;

	//SCROLL
	private scrollStartSet;
	private len;
	private n = 0;
	private moveX;
	private startX;
	private gbWidth;
	private clientWidth;
	private timeSlotFlg;
	private gbWidthCount;
	private clientWidthN;
	private timeSlotSheet;
	private scrollHoursCount;
	private timeSlotList = [];
	private timeSlotSheetCount;
	private screenClientWidthLeft;
	private screenClientWidthRight;
	private screenClientWidthRightChange;
	//SHEET
	private timeSlotSheetNm;
	private timeSlotInfoList;
	private categoryInfoLists;
	private newWorkerId;
	private loading;
	//スクロール制御用
	private scrollable;
	//選択日付
	private selByCalandarDate = new Date();
	private beforeDate = new Date();
	private isShow;
	//positionChange-scroll
	private eventScroll;
	private addOrReduceValue = 0;

	private timeInSlideLen = 4;
	private zoomFlag = false;
	private zoominDisabled = true;
	private zoomoutDisabled = false;

	constructor(private navController: NavController,
		private dragulaService: DragulaService,
		private appCtrl: App,
		private datePicker: DatePicker,
		private popoverCtrl: PopoverController,
		private scheduleProvider: ApiScheduleServiceProvider,
		private alertCtrl: AlertController,
		private navParams: NavParams,
		private loadingCtrl: LoadingController,
		public events: Events,
		public cd: ChangeDetectorRef,
		public service: ApiTaskuServiceProvider,
		private taskcServiceProvider: ApiTaskcServiceProvider,
		private storage: Storage) {

		//前画面がら取得する値
		this.storeNo = this.navParams.get('storeNo');
		this.storeNm = this.navParams.get('storeNm');
		this.res = this.navParams.get('res');
		this.aplUserId = this.navParams.get('aplUserId');
		this.viewKbn = this.navParams.get('viewKbn');
		this.selectedText = this.navParams.get('selectedText');
		this.selectedDate = this.navParams.get('selectedDate');
		this.selByCalandarDate = new Date(Date.parse(this.dateShowFormat(this.selectedDate)));
		this.currentTimeSlotId = this.navParams.get('currentTimeSlotId');
		this.getData();
		this.scrollStartSet = true;
		//画面のデータ再表示
		this.events.subscribe('res:created', (params) => {
			if (params.res != undefined) {
				this.storeNo = params.storeNo;
				this.storeNm = params.storeNm;
				this.selectedText = params.selectedText;
				this.aplUserId = params.aplUserId;
				this.viewKbn = params.viewKbn;
				this.selectedDate = params.selectedDate;
				this.currentTimeSlotId = params.currentTimeSlotId;
				this.res = params.res;
				if (this.flag) {
					this.flag = false;
				}
				if (params.dragFlg) {
					this.dragSub.unsubscribe();
					this.dragendSub.unsubscribe();
				}
				this.getData();
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
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
			setTimeout(() => {
				if (this.content._scroll) {
					this.content.scrollToTop();
				}
			}, 0);
		});
	}

	zoomin() {
		if (this.timeInSlideLen - 2 >= 4) {
			this.timeInSlideLen = this.timeInSlideLen - 2;
			this.set();
		}
	}

	zoomout() {
		if (this.timeInSlideLen + 2 <= 8) {
			this.timeInSlideLen = this.timeInSlideLen + 2;
			this.set();
		}
	}

	set() {
		this.zoomFlag = true;
		this.scrollStartSet = true;
		// ドラッグ解除
		if (this.flag) {
			this.updateAfterCtl();
		}

		let params = {
			res: '', selectedText: this.selectedText, storeNo: this.storeNo,
			storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
			selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
			dragFlg: true
		};
		this.events.publish('res:created', params);

		this.zoomFlag = false;
		this.scrollStartSet = false;

		if (this.timeInSlideLen == 4) {
			this.zoominDisabled = true;
		} else if (this.timeInSlideLen == 8) {
			this.zoomoutDisabled = true;
		} else {
			this.zoominDisabled = false;
			this.zoomoutDisabled = false;
		}
	}

	//全画面表示用データ整備
	getData() {

		if (this.zoomFlag == false) {
			this.result = this.res.json();
		}
		//時間帯の情報設定
		//DATEの設定
		let date = new Date();
		if (this.selectedDate == undefined) {
			this.selectedDate = UtilityService.formatDate(date);
		}
		this.selectedShowDate = this.dateShowFormat(this.selectedDate);
		this.activeIndex = this.result["activeIndex"];
		if (this.otherDateFlg) {
			if (UtilityService.formatDate(this.selByCalandarDate) > UtilityService.formatDate(this.beforeDate)) {
				//次のシフトに移動する
				// this.result["activeIndex"] = 0;
				this.activeIndex = 0;
			} else if (UtilityService.formatDate(this.selByCalandarDate) < UtilityService.formatDate(this.beforeDate)) {
				// this.result["activeIndex"] = this.result["timeSlotInfoList"].length - 1;
				this.activeIndex = this.result["timeSlotInfoList"].length - 1;
			} else {
				//当日の場合
				if (this.addOrReduceValue == 1) {
					// this.result["activeIndex"] = 0;
					this.activeIndex = 0;
				} else if (this.addOrReduceValue == -1) {
					// this.result["activeIndex"] = this.result["timeSlotInfoList"].length - 1;
					this.activeIndex = this.result["timeSlotInfoList"].length - 1;
				}
			}
		} else {
			if (this.selectedDate != UtilityService.formatDate(date)) {
				// this.result["activeIndex"] = 0;
				this.activeIndex = 0;
			}
		}

		this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
		this.timeSlotInfoList = this.result["timeSlotInfoList"];
		//時間帯の設定
		this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];
		//引継情報有無フラグの設定
		this.hasHandover = this.timeSlotInfo["hasHandover"];


		//時間帯の情報設定
		this.sTime = this.result["timeSlotInfoList"][0]["startTime"];
		this.eTime = this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"];
		this.categoryInfoLists = this.result["categoryInfoLists"];
		if (ObjUti.isNull(this.categoryInfoLists)) {
			this.categoryInfoLists = new Array<any>();
			this.categoryInfoLists.push(new Array<any>());
			this.categoryInfoList = this.categoryInfoLists[0];
		}
		//時間帯のリスト切り
		this.timeListCut(this.eTime, this.sTime);
		if (this.result["categoryInfoLists"].length === 0) {
			if (this.zoomFlag == false) {
				ViewCommon.showAlert(this.alertCtrl, '指定された日付の現在時間帯のタスクはありません。');
			}
			this.categoryInfoList = new Array<any>();
			// this.slideList = new Array<any>();
			this.noAssign = new Object();
			this.noAssign['taskInfoList'] = new Array<any>();
			return;

		}
		//カテゴリの設定
		if (this.categoryInfoLists.length > 0) {
			if (this.viewKbn == '1') {
				this.categoryInfoLists[0] = this.filterNotShift4AllDay(
					this.categoryInfoLists[0], this.result['workershiftInfoLists']);
			}
			this.categoryInfoList = this.categoryInfoLists[0];
		}

		//カテゴリ情報の整備
		this.categoryInfoListSet();

	}

	private filterNotShift4AllDay(categoryInfoList: Array<any>, workerShifts: Array<any>) {
		let workers = [];
		workerShifts.forEach((e) => {
			if (e.workershifList.length == 0) {
				workers.push(e.workerId);
			}
		});
		return categoryInfoList.filter((e) => { return workers.indexOf(e.categoryId) < 0 });
	}

	//画面ロードする時、初期設定
	ionViewDidEnter() {
		let margin;
		//ドラッグ開始
		this.dragSub = this.dragulaService.drag.subscribe((value) => {
			this.dragFlg = true;
			this.dragIdStart = value[2].id;
			margin = document.getElementById(value[1].id).style.marginTop;
			document.getElementById(value[1].id).style.marginTop = '0px';
		});
		//ドラッグ移動終了
		this.dragendSub = this.dragulaService.dragend.subscribe((value) => {
			//スクロール利用可のメソッドを呼び出す
			this.enableScroll();
			this.dragFlg = false;
			document.getElementById(value[1].id).style.marginTop = margin;
			//重複利用できるタスク場合、COPYされたタスクを削除する。
			if (this.currentTaskObj.taskPoolKbn == 0 && this.dragulaService.find("drag-bag") != undefined) {
				this.dragulaService.destroy("drag-bag");
			}
			document.getElementById(this.currentTaskId).className = 'taskButton';
			if (value[1].parentElement == null) {
				this.flag = false;
				return;
			}

			this.dragIdEnd = value[1].parentElement.id
			let param;

			if (this.dragIdStart != this.dragIdEnd) {
				if (this.noAssingFlg) {
					let len = parseInt(String(this.currentTaskObj.duration / 30));
					param = this.getDrakTaskTime(this.dragIdEnd, len, this.currentTaskObj.duration % 30);
				} else {
					param = this.getDrakTaskTime(this.dragIdEnd, this.currentTaskObj.actlen);
				}
				let planETimeHour = parseInt(param.planETime.substr(0, 2));
				if (planETimeHour > 24) {
					let days = parseInt(String(planETimeHour / 24));
					planETimeHour = planETimeHour - days * 24;
				}
				let planETimeHourTemp;
				planETimeHour > 9 ? planETimeHourTemp = planETimeHour : planETimeHourTemp = "0" + planETimeHour;
				planETimeHour = planETimeHourTemp;
				param.planETime = String(planETimeHour) + param.planETime.substr(2, 6);
				let result = this.taskUpdateCheck(param);
				result.then((res) => {
					this.currentStartTime = param.planSTime;
					this.currentTaskObj["planSTime"] = this.selectedDate + 'T' + param.planSTime;
					this.currentTaskObj["planETime"] = this.selectedDate + 'T' + param.planETime;
					if (res['taskId'] != undefined) {
						//重複利用できる場合
						this.currentTaskObj['taskId'] = res['taskId'];
						this.currentTaskObj['hasHandover'] = 0;
						this.currentTaskObj['opCircle'] = null;
						this.currentTaskObj['status'] = "S";
						this.currentTaskObj['precOpList'] = [];
						this.currentTaskObj['subsOpList'] = [];
						this.currentTaskObj['actualETime'] = null;
						this.currentTaskObj['actualSTime'] = null;
						this.currentTaskObj['alertKbn'] = 0;
					}
					if (this.newWorkerId != undefined) {
						this.currentTaskObj['workerId'] = this.newWorkerId;
					}
					this.flag = true;
					this.updateListSet();
					this.updateAfterCtl();
					if (!this.cd['destroyed']) {
						this.cd.detectChanges();
					}
					if (this.noAssingFlg) {
						let noAssingObj = document.getElementById(this.currentTaskObj['taskId']);
						if (noAssingObj != undefined && noAssingObj != null) {
							let noAssingObjParent = document.getElementById(this.currentTaskObj['taskId']).parentElement;
							for (let i = 0; i < noAssingObjParent.children.length; i++) {
								if (noAssingObjParent.children[i].getAttribute("name") == 'noAssign') {
									noAssingObjParent.removeChild(noAssingObjParent.children[i]);
									break;
								}
							}
						}
						if (document.getElementById(this.currentTaskId) != null) {
							document.getElementById(this.currentTaskId).className = 'taskButton';
							this.enableScroll();
						}
					}
					if (!this.cd['destroyed']) {
						this.cd.detectChanges();
					}
				})

			} else {
				if (!StrUti.isNothing(this.dragIdStart)) {
					this.updateListSet();
				}
				this.updateAfterCtl();
			}
		});
		this.dragAreaSet();
		this._leftHeight();
		if (this.scrollStartSet) {
			//SCROLL
			if (this.slideList.length != 0) {
				this.len = this.slideList.length;
				this.clientWidth = document.getElementById('scrollX').clientWidth;
				this.gbWidth = (this.clientWidth / this.timeInSlideLen);
				this.n = 0;
				this.gbWidthCount = 0;
				this.timeSlotSheetCount = 0;
				//NOWSHEET
				if (!this.zoomFlag) {
					this.timeSlotSheet = this.result.activeIndex;
					this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
					this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
					this.screenClientWidthRight = document.getElementById('div-outermost').clientWidth - document.getElementById('div-left').clientWidth;
					this.screenClientWidthRightChange = this.screenClientWidthRight;
					this.screenClientWidthLeft = 0;
				}
				this.scrollStartSet = false;
				//NOWTIMESHEET
				this.getNowTime();
				let se = this.result['timeSlotInfoList'][this.result['timeSlotInfoList'].length - 1].endTime.substr(0, 2) - this.result['timeSlotInfoList'][0].startTime.substr(0, 2);
				if (this.zoomFlag) {
					this.scrollTouchE(this.scrollHoursCount);
					for (let i = 0; i < this.timeSlotSheet; i++) {
						this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
					}
				} else {
					if (this.timeSE >= this.timeInSlideLen && this.timeSE < se) {
						this.scrollTouchE(this.timeSE);
						for (let i = 0; i < this.timeSlotSheet; i++) {
							this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
						}
					} else if (this.timeSE == 9999) {
						for (let i = 0; i < this.timeSlotSheet; i++) {
							this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
						}
						this.scrollTouchE(this.timeSlotSheetCount);
					} else {
						if (this.otherDateFlg) {
							for (let i = 0; i < this.timeSlotSheet; i++) {
								this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[i];
							}
							this.scrollTouchE(this.timeSlotSheetCount);
						} else {
							this.timeSlotSheetCount = 0;
							this.scrollTouchE(this.timeSlotSheetCount);
						}
					}
				}
			}
		}

		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
		// ログイン画面でメモリーから削除
		this.storage.get('isShow').then((val) => {
			this.isShow = val;
			// 自動リフレッシュ後、タスクの並べ替え
			this._positionChange();
		});

		// 自動リフレッシュ
		this.startAutoRefresh()
	}

	//画面終了する
	ionViewDidLeave() {
		//ドラッグ事件を取り消す
		this.dragSub.unsubscribe();
		this.dragendSub.unsubscribe();
		this.stopAutoRefresh();
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

	longPress(taskObj, dragName, timeSlot, categoryIndex, taskIndex) {

		//スクロール利用不可のメソッドを呼び出す
		this.disableScroll();
		if (this.touchFlag) {
			return;
		}
		if (timeSlot != null) {
			this.oldStartTime = timeSlot;
		}
		//未着手以外の場合、ドラッグ不可
		if (taskObj.status != "S") {
			this.touchFlag = true;
			return;
		}
		//未割当のタスクは担当者指定されていない場合、ドラッグ不可
		if (this.viewKbn == '0') {
			if (taskObj.workerId == null) {
				this.touchFlag = true;
				return;
			}
		}
		let drag;
		document.getElementById(taskObj.taskId).style.width = taskObj.taskStyle;
		document.getElementById(taskObj.taskId).style.marginTop = taskObj.top;
		if (this.noAssingFlg && dragName != 'drag-bag') {
			this.noAssingFlg = false;
		}
		//未割当の場合、フラッグの設定
		if (dragName == 'drag-bag') {
			this.noAssingFlg = true;
			drag = 'drag-bag';
		} else if (this.viewKbn == '1') {
			//ワーカー別タイムスケジュール画面の場合
			drag = 'drag-worker';
		} else {
			drag = taskObj.cgId;
		}
		this.currentTaskLen = taskObj.len;
		if (taskObj['taskPoolKbn'] == 0) {
			let seen = [];
			let replacer = function (key, value) {
				if (value != null && typeof value == "object") {
					if (seen.indexOf(value) >= 0) {
						return;
					}
					seen.push(value);
				}
				return value;
			};
			this.currentTaskObj = new Object();
			this.currentTaskObj = JSON.parse(JSON.stringify(taskObj, replacer));
		} else {
			this.currentTaskObj = taskObj;
		}

		this.currentCgId = taskObj.cgId;
		this.currentTaskObj["noAssingFlg"] = this.noAssingFlg;
		this.currentTaskObj['timeSlot'] = timeSlot;
		this.currentTaskObj['taskIndex'] = taskIndex;
		this.currentTaskObj['categoryIndex'] = categoryIndex;


		if (!this.flag) {
			this.currentTaskId = taskObj.taskId;
			this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.taskPoolKbn);
			//未割当の場合、ドラッグのコンテナに追加す
			if (this.noAssingFlg) {
				this.dragulaService.find(drag).drake.containers.push(document.getElementById(taskObj.taskId).parentElement);
			}
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
				this.noAssingFlg = false;
			} else {
				if (this.noAssingFlg) {
					//ドラッグ区域の制御
					this.dragAreaSet();
				}
				document.getElementById(this.currentTaskId).className = 'taskButton';
				this.enableScroll();
				this.currentTaskId = taskObj.taskId;
				//ドラッグ区域の設定
				this.dragSet(drag, taskObj.cgId, taskObj.taskId, taskObj.taskPoolKbn);
				if (this.noAssingFlg) {
					this.dragulaService.find(drag).drake.containers.push(document.getElementById(taskObj.taskId).parentElement);
				}
				// 「移動可」状態フラグに変更
				if (!this.noAssingFlg) {
					this.flag = true;
					this.noAssingFlg = false;
				}
			}
		}
		//可視区域の限界になると、スクロールする。
		// document.addEventListener('touchmove', this.dragWheelHandler.bind(this), true);
	}
	//タスクイベント(クリック、ダブりクリック)
	goControl(taskObj, categoryId, noAssingFlg, categoryIndex, timeSlot, taskIndex) {

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
		this.noAssingFlg = noAssingFlg;
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
		this.currentTaskObj['categoryIndex'] = categoryIndex;
		this.currentTaskObj['timeSlot'] = timeSlot;
		this.currentTaskObj['taskIndex'] = taskIndex;
		this.currentTaskObj['noAssign'] = this.noAssign;
		this.currentTaskObj['timeSlotInfoList'] = this.timeSlotInfoList;
		this.currentTaskObj['categoryInfoLists'] = this.categoryInfoLists;
		this.currentTaskObj['activeIndex'] = this.activeIndex;
		this.currentTaskObj['slideList'] = this.slideList;

		//引続画面ポップ
		let popover = this.popoverCtrl.create('ControlPage', this.currentTaskObj, { cssClass: 'animated bounceInDown' });
		popover.present();

		//コントローラー画面の非同期処理(タスクのSTATUS変更)
		popover.onDidDismiss((data) => {
			//処理がない場合
			if (data == undefined) {
				return;
			} else {
				if (data == "1") {
					//未着手の場合
					taskObj["status"] = "S";
					taskObj["topCStyleColor"] = '#78909C';
				} else if (data == "2") {
					//進行中の場合
					taskObj["status"] = "I";
					taskObj["topCStyleColor"] = '#78909C';
				} else if (data == "3") {
					//中止の場合
					taskObj["status"] = "A";
					taskObj["topCStyleColor"] = '#78909C';
				} else {
					//完了の場合
					taskObj["status"] = "E";
					taskObj["topCStyleColor"] = '#78909C';
				}

				// タスクリスト整備
				ObjUti.mkTaskPos(this.categoryInfoList, this.slideList,
					this.sTime.substring(0, 2),
					this.eTime.substring(0, 2), 35, this.isShow, this.timeInSlideLen);
			}
			this.flag = false;
		});
	}

	//時間帯のリスト切り
	timeListCut(endTime: string, startTime: string) {
		this.slideList = new Array<any>();
		let intETime = parseInt(endTime.substring(0, 2));
		let intSTime = parseInt(startTime.substring(0, 2));
		let timeTemp: {};
		let timeInSlide = new Array<any>();

		let workerShifList = [];
		if (this.result['workershiftInfoLists']) {
			this.result['workershiftInfoLists'].forEach((e) => {
				if (e.workershifList.length != 0) {
					workerShifList.push(e);
				}
			});
		}

		let formatK;
		for (let k = intSTime; k < intETime; k++) {
			if (k > 12) {
				timeTemp = { "time": k - 12, "amOrpm": "PM", "timeO": k };
				formatK = k;
			} else {
				let m = null
				k < 10 ? m = '0' + k : m = k
				timeTemp = { "time": k, "amOrpm": "AM", "timeO": m };
				formatK = m;
			}
			// Free Time Is Gray ---
			if (this.viewKbn == '1' && workerShifList != null) {
				let xxx = new Array<any>();
				for (let j = 0; j < workerShifList.length; j++) {
					let ttt = new Object();
					ttt['x'] = '#ccc';
					ttt['y'] = '#ccc';
					if (workerShifList[j]['workershifList'].length > 0) {
						workerShifList[j]['workershifList'].forEach(workeTimeItem => {
							if (workeTimeItem.startTime <= formatK + ':00:00'
								&& formatK + ':00:00' < workeTimeItem.endTime
								&& ttt['x'] != '') {
								ttt['x'] = '';
							}
							if (workeTimeItem.startTime <= formatK + ':30:00'
								&& formatK + ':30:00' < workeTimeItem.endTime
								&& ttt['y'] != '') {
								ttt['y'] = '';
							}

						})
					} else {
						ttt['x'] = '#ccc';
						ttt['y'] = '#ccc';
					}
					xxx.push(ttt);
				}
				timeTemp['bkColor'] = xxx;
			}
			// ---
			timeInSlide.push(timeTemp);
			if (timeInSlide.length == this.timeInSlideLen) {
				this.slideList.push(timeInSlide);
				timeInSlide = new Array<any>();
			}
		}
		if (timeInSlide.length != 0) {
			this.slideList.push(timeInSlide);
		}

		if (this.timeSlotList.length == 0) {
			if (this.result["timeSlotInfoList"].length > 1) {
				let timeSoltCount;
				for (let i = 0; i < this.result["timeSlotInfoList"].length; i++) {
					if (i + 1 <= this.result["timeSlotInfoList"].length - 1) {
						timeSoltCount = this.result["timeSlotInfoList"][i + 1].startTime.substr(0, 2)
							- this.result["timeSlotInfoList"][i].startTime.substr(0, 2)
						this.timeSlotList.push(timeSoltCount);
					} else {
						return;
					}
				}
			}
		}
	}

	// 時間線
	getNowTime() {
		if (this.result['timeSlotInfoList'].length > 0 &&
			this.result['timeSlotInfoList'] != null &&
			this.result['timeSlotInfoList'] != undefined) {
			let nowTime = new Date();
			if (!this.otherDateFlg && this.selectedDate != UtilityService.formatDate(nowTime)) {
				this.timeSE = 0;
				document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
				return;
			}
			if (UtilityService.formatDate(this.beforeDate) < this.selectedDate) {
				if (this.selectedDate != UtilityService.formatDate(nowTime)) {
					this.timeSE = 0;
					document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
					this.beforeDate.setDate(this.beforeDate.getDate() + 1);
					return;
				} else {
					this.beforeDate.setDate(this.beforeDate.getDate() + 1);
				}
			} else if (UtilityService.formatDate(this.beforeDate) > this.selectedDate) {
				if (this.selectedDate != UtilityService.formatDate(nowTime)) {
					this.timeSE = 9999;
					document.getElementById("timeLine").setAttribute("style", "margin-left: 0%;");
					this.beforeDate.setDate(this.beforeDate.getDate() - 1);
					return;
				} else {
					this.beforeDate.setDate(this.beforeDate.getDate() - 1);
				}
			} else {
				if (this.selectedDate != UtilityService.formatDate(nowTime)) {
					return;
				}
			}

			let timeHours = nowTime.getHours();
			let startHours = this.result['timeSlotInfoList'][0].startTime.substr(0, 2);
			if (timeHours - startHours > 0) {
				if (!this.otherDateFlg) {
					this.timeSE = timeHours - startHours;
				}
				let timeMinutes = nowTime.getMinutes();
				let width = (timeHours - startHours) * 0.2085 * 6 * 2 * 4.0 / this.timeInSlideLen + timeMinutes / 5 * 0.2085 * 4.0 / this.timeInSlideLen;
				let timeMargin = "margin-left:" + width + "%;";
				let elTimeLine = document.getElementById("timeLine");
				if (elTimeLine != undefined && elTimeLine != null) {
					elTimeLine.setAttribute("style", timeMargin);
				}
			}
		}
	}
	//更新用時間取得
	getDrakTaskTime(value, taskLen, DurationMinute?) {
		//slide位置
		let conIndexSlid = parseInt(value.substring(0, 1));
		let conMinute = value.substring(1, 2);
		let conIndexHour = value.substring(2, 3);
		let sHour;
		let amOrpm;
		let sMinute;
		let eHour;
		let eMinute;
		let planSTime;
		let planETime;
		conMinute == "x" ? sMinute = "00" : sMinute = "30";
		sHour = this.slideList[conIndexSlid][conIndexHour].time;
		amOrpm = this.slideList[conIndexSlid][conIndexHour].amOrpm
		amOrpm == "PM" ? sHour = sHour + 12 : sHour;
		if (taskLen % 2 == 0) {
			eHour = taskLen / 2 + sHour;
			eMinute = sMinute;
		} else {
			eHour = parseInt(String(taskLen / 2)) + sHour;
			if (sMinute == "30") {
				eHour = eHour + 1;
				eMinute = "00";
			} else {
				eMinute = "30";
			}
		}
		if (DurationMinute != undefined) {
			eMinute = parseInt(eMinute) + parseInt(DurationMinute);
			eMinute > 9 ? eMinute = String(eMinute) : eMinute = "0" + eMinute;
		}
		sHour > 9 ? sHour : sHour = "0" + sHour;
		eHour > 9 ? eHour : eHour = "0" + eHour;
		planSTime = UtilityService.formatTimeString(sHour + ':' + sMinute);
		planETime = UtilityService.formatTimeString(eHour + ':' + eMinute);
		let param = { "planSTime": planSTime, "planETime": planETime };
		return param;
	}

	//画面表示用フォーマット(yyyy/mm/dd)
	dateShowFormat(date) {
		date = date.replace(/[-]/g, '/');
		return date;
	}
	//未割当部分表示(非表示)
	changMFlgFalse() {
		this.mFlg = false;
	}
	//未割当部分表示(表示)
	changMFlgTrue() {
		this.mFlg = true;
	}
	//pulldownの区域
	presentPopover(myEvent) {
		this.popover = this.popoverCtrl.create('SelschedulePage',
			{
				'aplUserId': this.aplUserId, 'timeRun': this.timeRun, 'storeNo': this.storeNo,
				'storeNm': this.storeNm, 'viewKbn': this.viewKbn, 'selectedDate': this.selectedDate, 'currentTimeSlotId': this.currentTimeSlotId
			});
		this.popover.present({
			ev: myEvent
		});
	}
	//ドラッグ部分の制御
	dragAreaSet() {
		//未割当の場合
		if (this.dragulaService.find("drag-bag") != undefined) {
			this.dragulaService.destroy("drag-bag");
		}
		//担当者の場合
		if (this.dragulaService.find("drag-worker") != undefined) {
			this.dragulaService.destroy("drag-worker");
		}
		//業務の場合
		this.categoryInfoList.forEach(category => {
			if (!ObjUti.isNull(category)) {
				if (this.dragulaService.find(category.categoryId) != undefined) {
					this.dragulaService.destroy(category.categoryId);
				}
			}
		});
	}

	//更新後の画面制御
	updateAfterCtl() {
		document.getElementById(this.currentTaskId).className = 'taskButton';
		this.enableScroll();
		this.flag = false;
		this.dragAreaSet();
	}
	//ドラッグ関連の設定
	dragSet(drag, cgId, taskId, taskPoolKbn) {
		document.getElementById(taskId).className = 'taskButton' + ' animated infinite pulse';
		if (this.dragulaService.find(drag) != undefined) {
			this.dragulaService.destroy(drag);
		}
		if (this.dragulaService.find("drag-bag") != undefined) {
			this.dragulaService.destroy("drag-bag");
		}
		this.dragulaService.setOptions(drag, {
			revertOnSpill: true,
			invalid: (el, handle) => {
				return this.handle(handle);
			},
			copy: () => {
				if (this.noAssingFlg && taskPoolKbn == 0) {
					return true;
				}
			},
		});
		for (let n = 0; n < document.getElementsByName('conName').length; n++) {
			if (this.viewKbn == '1') {
				//ワーカー別タイムスケジュール画面の場合、各行に移動できる
				this.dragulaService.find(drag).drake.containers.push(document.getElementsByName('conName')[n]);
			} else {
				if (document.getElementsByName('conName')[n].attributes['ng-reflect-dragula'].value == cgId) {
					this.dragulaService.find(drag).drake.containers.push(document.getElementsByName('conName')[n]);
				}
			}
		}

		if (this.viewKbn == '1' && this.noAssign != undefined && this.noAssign.taskInfoList != undefined) {
			this.dragulaService.find(drag).drake.containers = this.dragulaService.find(drag).drake.containers.slice(0, (this.dragulaService.find(drag).drake.containers.length - this.noAssign.taskInfoList.length))
		}
	}
	//タスク新規画面に遷移
	goTaskC() {
		let param = new Object();
		param["storeNm"] = this.storeNm;
		param["currentTimeSlotId"] = this.currentTimeSlotId;
		param["storeNo"] = this.storeNo;
		param["viewKbn"] = this.viewKbn;
		param["selectedText"] = this.selectedText;
		param["aplUserId"] = this.aplUserId;
		param["hasHandover"] = this.hasHandover;
		param["selectedDate"] = this.selectedDate;
		param["slideList"] = this.slideList;
		param["noAssign"] = this.noAssign;
		param["activeIndex"] = this.activeIndex;
		param["timeSlotInfoList"] = this.result["timeSlotInfoList"];
		param["categoryInfoLists"] = this.categoryInfoLists;
		param["categoryInfoList"] = this.categoryInfoList;
		this.navController.push('TaskcPage', param);
	}
	//引き続き画面に遷移
	goHandoverpopPage(timeSlotNm) {
		let timeSlotObj = new Object();
		timeSlotObj["storeNm"] = this.storeNm;
		timeSlotObj["currentTimeSlotId"] = this.currentTimeSlotId;
		timeSlotObj["currentTimeSlotNm"] = this.timeSlotSheetNm;
		timeSlotObj["storeNo"] = this.storeNo;
		timeSlotObj["viewKbn"] = this.viewKbn;
		timeSlotObj["selectedText"] = this.selectedText;
		timeSlotObj["aplUserId"] = this.aplUserId;
		// timeSlotObj["hasHandover"] = this.hasHandover;
		timeSlotObj["hasHandover"] = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
		timeSlotObj["timeSlotNm"] = timeSlotNm
		timeSlotObj["selectedDate"] = this.selectedDate;
		let popover = this.popoverCtrl.create('HandoverpopPage', timeSlotObj, { cssClass: 'animated bounceInDown' });
		popover.present();
	}
	//タスク情報の更新前チェック処理
	async taskUpdateCheck(param) {
		this.loading = this.loadingCtrl.create({ content: '' });
		this.loading.present();
		let workerId;
		if (this.viewKbn == '0') {
			workerId = this.currentTaskObj.workerId;
		} else {
			workerId = this.dragIdEnd.substr(3);
		}
		let res = await this.service.taskUpdateCheck(this.storeNo, workerId, this.selectedDate, param.planSTime, param.planETime, this.currentTaskObj.cgId, this.currentTaskObj.opId);
		if (!res) {
			this.loading.dismiss();
			return;
		}
		let result = res.json();

		if (!result['chkFlg']) {
			this.loading.dismiss();
			let alert = this.alertCtrl.create({
				title: 'エラー',
				subTitle: 'この従業員は当該時間でシフトしていません。',
				buttons: [
					{
						text: 'OK',
						handler: data => {
							this.selAlert();
						}
					},
				],
				enableBackdropDismiss: false
			});
			alert.present();
			return result;
		}

		//未割当のタスクは重複利用できる
		if (this.currentTaskObj.taskPoolKbn == 0 && this.noAssingFlg) {
			this.currentTaskObj['workerId'] = workerId;
			result = await this.createTask(param, this.currentTaskObj, workerId);
		} else {
			result = await this.modifyTask(param, this.currentTaskObj, workerId);
		}
		this.loading.dismiss();
		return result;

	}
	async modifyTask(param, taskObj, workerId) {
		// タスク更新Parameterの作成
		taskObj['opCircle'] = taskObj.opCircle;
		let lockTaskInfo = ObjUti.getLockTaskInfo(taskObj);

		let updTaskInfo = {
			'workerId': workerId, 'opNm': taskObj.opId == 0 ? taskObj.opNm : null, 'taskPoolKbn': taskObj.taskPoolKbn, 'taskPriorityKbn': taskObj.taskPriorityKbn,
			'opCircle': taskObj.opCircle, 'planSDate': this.selectedDate,
			'planEDate': this.selectedDate, 'planSTime': param.planSTime, 'planETime': param.planETime
		};

		let taskInfo = { "updTaskInfo": updTaskInfo, "lockTaskInfo": lockTaskInfo };
		let res = await this.service.taskUpdate(taskObj['taskId'], taskInfo);
		if (!res) {
			return;
		}
		let resJson = res.json();
		this.newWorkerId = workerId;
		return resJson;
	}

	//未割当のタスクは重複利用できるタスクドラグする場合、タスク新規処理
	async createTask(param, taskObj, workerId) {
		let res = await this.taskcServiceProvider.createTask(
			taskObj.opId, taskObj.opId == 0 ? taskObj.opNm : null, workerId, taskObj.cgId,
			taskObj.taskPoolKbn, taskObj.taskPriorityKbn, param.planSTime, param.planETime,
			this.storeNo, this.selectedDate);
		if (!res) {
			return;
		}
		let resJson = res.json();
		return resJson;

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
	moveSet(touchEvent, flag?) {
		this.moveFlag = true;
		this.dragWheelHandler(touchEvent);
		if (flag) {
			this.scrollTouchM(touchEvent);
		}
	}


	//カテゴリー情報の整備
	categoryInfoListSet() {
		// タスク長さ設定
		this.categoryInfoList.forEach(category => {
			if (category.categoryNm != "未割当") {
				category.halfHourList.forEach(halfHour => {
					halfHour.taskInfoList.forEach(task => {
						ObjUti.addLen(task, this.sTime, this.eTime)
					});
				});
			} else {
				category.halfHourList.forEach(halfHour => {
					halfHour.taskInfoList.forEach(task => {
						task["len"] = 2;
						task["taskStyle"] = '200%';
						task["textFlag"] = true;
					});
				});
			}
		});

		//未割当のリスト作成
		if (this.categoryInfoList.length > 0) {
			if (this.categoryInfoList[this.categoryInfoList.length - 1].categoryId == -1) {
				this.noAssign = this.categoryInfoList[this.categoryInfoList.length - 1].halfHourList[0];
				//カテゴリーリストから未割当のリストを削除する。
				this.categoryInfoList.pop();
			} else {
				if (!this.zoomFlag) {
					this.noAssign = new Object();
					this.noAssign['taskInfoList'] = new Array<any>();
				}
			}
		}

		let intLen = 35;
		// タスクリスト整備
		ObjUti.mkTaskPos(this.categoryInfoList, this.slideList,
			this.result["timeSlotInfoList"][0]["startTime"].substring(0, 2),
			this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"].substring(0, 2), intLen, this.isShow, this.timeInSlideLen);

		this.timeLength = 'height: ' + intLen + 'px;';
	}

	//SCROLL
	scrollTouchS(event) {
		if (this.dragFlg) {
			return;
		}
		if (!event.touches.length) {
			return;
		}
		this.startX = event.touches[0].pageX;
		this.moveX = 0;
	}

	scrollTouchM(event) {
		if (this.dragFlg && this.dragMoveFlg) {
			if (event.touches[0].clientX >= this.screenClientWidthRightChange - 2) {
				this.screenClientWidthRightChange = this.screenClientWidthRight * 2;
				this.dragMoveFlg = false;
				this.anHourAdd();
				this.anHourAdd();
				this.dragMoveFlg = true;
			}
			if (event.touches[0].clientX < this.screenClientWidthRight + 2) {
				this.screenClientWidthRightChange = this.screenClientWidthRight;
			}
			if (event.touches[0].clientX <= this.screenClientWidthLeft) {
				this.screenClientWidthLeft = -100;
				this.dragMoveFlg = false;
				this.anHourReduce();
				this.anHourReduce();
				this.dragMoveFlg = true;
			}
			if (event.touches[0].clientX > 0) {
				this.screenClientWidthLeft = 1;
			}
		}
		if (this.dragFlg) {
			return;
		}
		if (!event.touches.length) {
			return;
		}
		this.moveX = event.touches[0].pageX - this.startX;
		// document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN + this.moveX) + 'px)';
	}

	scrollTouchHourE() {
		if (this.moveX > 100) {
			this.anHourReduce();
		} else if (this.moveX < -100) {
			this.anHourAdd();
		}
	}

	scrollTouchE(timeSlot) {
		if (this.dragFlg) {
			return;
		}
		if (this.moveX < -100) this.n++;
		if (this.moveX > 100) this.n--;
		if (this.n < 0) this.n = 0;
		if (this.n > this.len - 1) this.n = this.len - 1;
		if (timeSlot != undefined) {
			document.getElementById('scrollCon').style.transform = 'translateX(' + (-timeSlot * this.gbWidth) + 'px)';
			this.clientWidthN = timeSlot * this.gbWidth;
			this.n = parseInt((this.clientWidthN / this.clientWidth).toLocaleString());
			this.gbWidthCount = this.clientWidthN - this.n * this.clientWidth;
			this.scrollHoursCount = timeSlot;
			return;
		}
		if (-this.clientWidthN > - this.clientWidth && this.moveX > 0) {
			document.getElementById('scrollCon').style.transform = 'translateX(' + (0) + 'px)'
			this.clientWidthN = 0;
			this.gbWidthCount = 0;
			this.scrollHoursCount = 0;
			if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
				if (this.timeSlotSheet > 0) {
					this.timeSlotSheet--;
				}
				this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
			return;
		}
		if (-this.clientWidthN < -this.clientWidth * (this.len - 1) + this.clientWidth && this.moveX < 0) {
			document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.n * this.clientWidth) + 'px)';
			this.clientWidthN = this.clientWidth * this.n;
			this.gbWidthCount = 0;
			this.scrollHoursCount = this.clientWidthN / this.gbWidth;
			if (this.timeSlotSheet == this.timeSlotList.length) {
				return;
			}
			if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
				this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
				if (this.timeSlotSheet < this.timeSlotList.length) {
					this.timeSlotSheet++;
				}
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
			return;
		}

		document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.n * this.clientWidth - this.gbWidthCount) + 'px)';

		this.clientWidthN = this.n * this.clientWidth + this.gbWidthCount;
		this.scrollHoursCount = this.clientWidthN / this.gbWidth;
		if (this.moveX < 0) {
			if (this.timeSlotSheet == this.timeSlotList.length) {
				return;
			}
			if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
				this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
				if (this.timeSlotSheet < this.timeSlotList.length) {
					this.timeSlotSheet++;
				}
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
		}
		if (this.moveX > 0) {
			if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
				if (this.timeSlotSheet > 0) {
					this.timeSlotSheet--;
				}
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
		}
		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
	}

	anHourAdd() {
		// if (this.dragFlg) {
		// 	return;
		// }
		if (this.clientWidthN < this.clientWidth * (this.len - 1)) {
			document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN - this.gbWidth) + 'px)';
			this.clientWidthN = this.clientWidthN + this.gbWidth;
			this.gbWidthCount = this.gbWidthCount + this.gbWidth;
			this.scrollHoursCount = this.clientWidthN / this.gbWidth;
			if (this.gbWidthCount == this.clientWidth) {
				this.gbWidthCount = this.gbWidthCount - this.clientWidth;
				this.n = this.n + 1;
			};
			if (this.timeSlotSheet == this.timeSlotList.length) {
				return;
			}
			if (this.clientWidthN >= (this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet]) * this.gbWidth) {
				this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
				if (this.timeSlotSheet < this.timeSlotList.length) {
					this.timeSlotSheet++;
				}
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
		}
		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
	}
	anHourReduce() {
		// if (this.dragFlg) {
		// 	return;
		// }
		if (this.clientWidthN > 0) {
			document.getElementById('scrollCon').style.transform = 'translateX(' + (-this.clientWidthN + this.gbWidth) + 'px)';
			this.clientWidthN = this.clientWidthN - this.gbWidth;
			this.gbWidthCount = this.gbWidthCount - this.gbWidth;
			this.scrollHoursCount = this.clientWidthN / this.gbWidth;
			if (this.gbWidthCount == this.clientWidth) {
				this.gbWidthCount = this.gbWidthCount - this.clientWidth;
				this.n = this.n - 1;
			};
			if (this.clientWidthN < this.timeSlotSheetCount * this.gbWidth) {
				if (this.timeSlotSheet > 0) {
					this.timeSlotSheet--;
				}
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
			}
		}
		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
	}
	sheetAdd() {
		if (this.dragFlg) {
			return;
		}
		if (this.timeSlotList.length > 0) {
			if (this.timeSlotSheet < this.timeSlotList.length) {
				this.moveX = -110;
				this.timeSlotSheetCount = this.timeSlotSheetCount + this.timeSlotList[this.timeSlotSheet];
				this.timeSlotSheet++;
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
				this.scrollTouchE(this.timeSlotSheetCount);
			} else {
				//翌日の検索
				this.selByDate(1);
			}
		}
		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
	}
	sheetReduce() {
		if (this.dragFlg) {
			return;
		}
		if (this.timeSlotList.length > 0) {
			if (this.timeSlotSheet > 0) {
				this.moveX = 110;
				this.timeSlotSheet--;
				this.timeSlotInfo = this.result["timeSlotInfoList"][this.timeSlotSheet];
				this.timeSlotSheetCount = this.timeSlotSheetCount - this.timeSlotList[this.timeSlotSheet];
				this.timeSlotSheetNm = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotNm;
				this.currentTimeSlotId = this.result['timeSlotInfoList'][this.timeSlotSheet].timeSlotId;
				this.scrollTouchE(this.timeSlotSheetCount);
			} else {
				//前日の検索
				this.selByDate(-1);
			}
		}
		this.hasHandover = this.timeSlotInfoList[this.timeSlotSheet]['hasHandover'];
	}
	async selAlert() {
		let date = new Date();
		let loading = this.loadingCtrl.create({
			content: ''

		});
		loading.present();
		let selTime = UtilityService.formatTime(date.getHours(), date.getMinutes(), date.getSeconds());
		let res = await this.scheduleProvider.getScheduleInit(this.storeNo, this.selectedDate, selTime, this.viewKbn);
		let params;
		loading.dismiss().then(() => {
			params = {
				res: res, selectedText: this.selectedText, storeNo: this.storeNo,
				storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
				selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
				dragFlg: true
			};

			this.events.publish('res:created', params);
		});
	}

	scrollHandler(event) {
		if (event == null) {
			return;
		}
		let headers = document.getElementsByName('scrollHeader');
		this.eventScroll = event;
		for (let i = 0; i < headers.length; i++) {
			if (event.scrollTop > 0) {
				headers[i].style.transform = 'translateY(' + (event.scrollTop) + 'px)'
			} else {
				headers[i].style.transform = 'translateY(0px)'
			}
		}
	}

	updateListSet() {
		// 非同期処理 割当済タスク
		let matchKey, matchValue
		if (this.viewKbn == '0') {
			// 業務別
			matchKey = this.currentTaskObj['cgId'];
			matchValue = this.currentTaskObj['cgNm'];
		} else if (this.viewKbn == '1') {
			// 担当者別
			matchKey = this.currentTaskObj['workerId'];
			matchValue = this.currentTaskObj['workerNm'];
		}
		// 更新前オブジェクトを削除
		this.removeBefor();
		if (this.selectedDate == this.currentTaskObj['taskDate']) {
			// 更新後オブジェクトを挿入
			this.inCgList(this.currentTaskObj['planSTime'], this.currentTaskObj['planETime'], matchKey, matchValue, this.currentTaskObj);
			this._leftHeight();
		}

	}
	inCgList(pstime, petime, matchKey, matchValue, taskCObj) {
		// スケジュール画面
		if (this.timeSlotInfoList.length <= 0) {
			return;
		}
		// 時間帯計算
		let slotSTime = this.sTime;
		let slotETime = this.eTime;
		let taskStime = pstime.substring(8, 11);
		let taskEtime = petime.substring(8, 11);

		if ((taskStime >= slotSTime && taskStime < slotETime)
			|| (taskEtime > slotSTime && taskEtime <= slotETime)
			|| (taskStime < slotSTime && taskEtime > slotETime)) {

			ObjUti.addLen(taskCObj, slotSTime, slotETime);
			this.intoSchedule(0, matchKey, matchValue, taskCObj, slotSTime, slotETime);
		}

		this.currentTaskObj['noAssingFlg'] = false;
	}

	intoSchedule(index, matchKey, matchValue, taskCObj, slotSTime, slotETime) {
		let cgList;
		if (this.categoryInfoLists.length > 0) {
			cgList = this.categoryInfoLists[index];
		} else {
			cgList = new Array<any>();
		}

		let startHalf = this.getStartTime(slotSTime, slotETime);
		let insertFlg = false;
		let indexCg = 0;
		cgList.forEach(cgInfo => {
			// 縦ヘッダーは存在
			if (matchKey == cgInfo.categoryId) {
				if (this.viewKbn == '1') {
					this.currentTaskObj['workerNm'] = cgInfo.categoryNm;
				}
				let inHalfFlg = false;
				cgInfo.halfHourList.forEach(halfList => {
					if (startHalf == halfList.halfHour) {
						if (ObjUti.isNull(halfList.taskInfoList)) {
							halfList.taskInfoList = new Array<any>();
							halfList.taskInfoList.push(taskCObj);
						} else {
							halfList.taskInfoList.push(taskCObj);
						}
						this.currentTaskObj['taskIndex'] = this.changeIndex(halfList.taskInfoList);
						inHalfFlg = true;
						insertFlg = true;
						this.currentTaskObj['categoryIndex'] = indexCg;
						return;
					}
				});
				if (!inHalfFlg) {
					let newObj = new Object();
					newObj['halfHour'] = startHalf;
					let taskList = new Array<any>();
					taskList.push(taskCObj);
					this.currentTaskObj['taskIndex'] = this.changeIndex(taskList);
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
			this.currentTaskObj['taskIndex'] = this.changeIndex(taskList);
			newObj['taskInfoList'] = taskList;
			newCgInfo['halfHourList'].push(newObj);
			cgList.push(newCgInfo);
			this.currentTaskObj['categoryIndex'] = this.changeIndex(cgList);
		}
		let intLen = 35;
		// タスクリスト整備
		ObjUti.mkTaskPos(cgList, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), intLen, this.isShow, this.timeInSlideLen);
	}

	removeBefor() {
		let categoryIndex = this.currentTaskObj['categoryIndex'];
		let taskIndex = this.currentTaskObj['taskIndex'];
		if (this.currentTaskObj['noAssingFlg']) {
			// 未割当
			if (this.currentTaskObj.taskPoolKbn != 0) {
				//重複利用できない未割当の場合
				if (this.noAssign['taskInfoList'] != undefined && this.noAssign['taskInfoList'] != null) {
					this.noAssign['taskInfoList'].splice(taskIndex, 1);
				}
			}
		} else {
			// 割当済
			this.delFromCategoryList(categoryIndex, taskIndex);
		}
	}
	inUnList(taskCObj) {
		taskCObj["len"] = 2;
		taskCObj["taskStyle"] = '200%';
		taskCObj["textFlag"] = true;
		this.currentTaskObj['noAssingFlg'] = true;

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
		this.currentTaskObj['taskIndex'] = this.changeIndex(this.noAssign['taskInfoList']);
	}
	delFromCategoryList(categoryIndex, taskIndex) {
		let categoryInfoLists = this.categoryInfoLists;
		let timeSlot = this.currentTaskObj['timeSlot'];
		let categoryInfo = categoryInfoLists[0];
		let hourList = categoryInfo[categoryIndex]['halfHourList'];
		let slotSTime = this.timeSlotInfoList[0].startTime;
		let slotETime = this.timeSlotInfoList[this.timeSlotInfoList.length - 1].endTime;

		let taskInfoList;
		for (let i = 0; i < hourList.length; i++) {
			let tmp = hourList[i];
			if (timeSlot == tmp['halfHour']) {
				taskInfoList = tmp['taskInfoList'];
				break;
			}
		}
		if (taskInfoList != undefined && taskInfoList != null) {
			taskInfoList.splice(taskIndex, 1);
		}
		ObjUti.mkTaskPos(categoryInfo, this.slideList, slotSTime.substring(0, 2), slotETime.substring(0, 2), 35, this.isShow, this.timeInSlideLen);
	}
	getStartTime(slotSTime, slotETime) {
		let hm = this.currentTaskObj['planSTime'].substr(11, 5);
		let hh = hm.substr(0, 2);
		let mm = hm.substr(3, 2);
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
	changeIndex(taskList) {
		return taskList.length - 1;
	}

	//スクロール利用不可の設定
	disableScroll() {
		this.scrollable = 'no-scroll';
	}
	//スクロール利用可の設定
	enableScroll() {
		this.scrollable = 'enable-scroll';
	}
	//スクロールの設定
	dragWheelHandler(touchEvent) {
		//deviceの可視区域の高度
		let currentSrennHeight = document.body.clientHeight;
		//タッチの縦座標
		let clientY = touchEvent.touches[0].clientY;
		//スクロールのtop取得
		let currentScrollTop = this.content.scrollTop;
		if (currentSrennHeight - clientY <= 100) {
			if (this.scrollYFlg) {
				//下へ移動
				this.scrollYFlg = false;
				this.content.scrollTo(0, currentScrollTop + currentSrennHeight, 3000).then(() => {
					this.scrollYFlg = true;
				});
			}
		}

		if (clientY < 200 && currentSrennHeight != 0) {
			if (this.scrollYFlg) {
				//上へ移動
				this.scrollYFlg = false;
				this.content.scrollTo(0, currentScrollTop - currentSrennHeight, 3000).then(() => {
					this.scrollYFlg = true;
				});
			}
		}
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

		if (result["timeSlotInfoList"].length === 0) {
			ViewCommon.showAlert(this.alertCtrl, '本店の時間帯データはありません。');
			return;
		}

		this.activeIndex = this.result["activeIndex"];
		this.timeSlotInfo = this.result["timeSlotInfoList"][this.activeIndex];
		this.currentTimeSlotId = this.timeSlotInfo["timeSlotId"];

		let params = {
			res: res, selectedText: this.selectedText, storeNo: this.storeNo,
			storeNm: this.storeNm, viewKbn: this.viewKbn, aplUserId: this.aplUserId,
			selectedDate: this.selectedDate, currentTimeSlotId: this.currentTimeSlotId,
			dragFlg: true
		};

		this.events.publish('res:created', params);
	}
	async selByDate(count) {
		this.addOrReduceValue = count;
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
				// selTime = '0000';
				selTime = this.sTime;
			}
		} else if (count < 0) {
			// selTime = '2359';
			selTime = this.eTime;
		} else {
			// selTime = '0000';
			selTime = this.sTime;
		}
		this.scrollStartSet = true;
		let res = await this.scheduleProvider.getScheduleInit(this.storeNo, selDate, selTime, this.viewKbn);
		if (!res) {
			loading.dismiss();
			return;
		}
		let result = res.json();
		if (result) {
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
			if (count == 0) {
				this.otherDateFlg = false;
			} else {
				this.otherDateFlg = true;
			}
			if (this.timeRun != undefined) {
				clearInterval(this.timeRun);
				this.timeRun = undefined;
			}
			this.events.publish('res:created', params);
			loading.dismiss();
		}
	}
	positionChange() {
		this.isShow = !this.isShow;
		this.storage.set('isShow', this.isShow);
		this._positionChange();
		let headers = document.getElementsByName('scrollHeader');
		setTimeout(() => {
			if (this.eventScroll != undefined) {
				for (let i = 0; i < headers.length; i++) {
					headers[i].style.transform = 'translateY(' + (this.eventScroll['scrollTop']) + 'px)';
				}
			}
		}, 50);
	}

	_positionChange() {
		if (!this.res) {
			return;
		}

		let intLen = 35;
		// タスクリスト整備
		ObjUti.mkTaskPos(this.categoryInfoList, this.slideList,
			this.result["timeSlotInfoList"][0]["startTime"].substring(0, 2),
			this.result["timeSlotInfoList"][this.result["timeSlotInfoList"].length - 1]["endTime"].substring(0, 2), intLen, this.isShow, this.timeInSlideLen);

		this.timeLength = 'height: ' + intLen + 'px;';
		this._leftHeight();
	}

	_leftHeight() {
		for (let i = 0; i < this.categoryInfoList.length; i++) {

			let maxLeftHeight = Math.max(document.getElementById('leftheadercon' + i).offsetHeight, this.categoryInfoList[i].mheight.replace('px', ''));
			if (maxLeftHeight >= 228) {
				this.categoryInfoList[i].mheight = maxLeftHeight + 'px';
			} else {
				this.categoryInfoList[i].mheight = 228 + 'px';
			}
		}

	}

	stopAutoRefresh() {
		if (this.timeRun != undefined) {
			clearInterval(this.timeRun);
			this.timeRun = undefined;
		}
	}

	startAutoRefresh() {
		// 時間初期化
		this.storage.set('autoRefreshTimeCounter', 0);
		let refreshLoading;

		if (!this.timeRun
			&& this.selectedDate == UtilityService.formatDate(new Date())) {
			this.timeRun = setInterval(async () => {
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
}
