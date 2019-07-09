import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { CognitoCommonProvider } from '../../providers/cognito-common/cognito-common';
import { ApiFeedbackServiceProvider } from '../../providers/api-service/api-feedback-service';

import { EnvCommonProvider } from '../../providers/env-common/env-common';
import { UtilityService } from '../../providers/utility-service/UtilityService';
declare let AWS: any;
declare const Buffer: any;

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  private storeNo;
  private storeNm;
  private aplUserId;
  private selectedDate;
  private workerList;
  private selectedWorker;
  private feedback;
  private taskList;
  private handoverList;
  private aCount = 0;
  private eCount = 0;
  private iCount = 0;
  private sCount = 0;
  private sChecked = true;
  private iChecked = true;
  private eChecked = true;
  private aChecked = true;
  private dispStatusList = ['未着手','進行中','完了','中止'];
  private bucket;

　constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private viewCtrl: ViewController,
    private cognito: CognitoCommonProvider,
    private env: EnvCommonProvider,
    public alertCtrl: AlertController,
    private feedbackServiceProvider: ApiFeedbackServiceProvider) {
      this.aplUserId = this.navParams.data.aplUserId;
      this.storeNo = this.navParams.data.storeNo;
      this.storeNm = this.navParams.data.storeNm;
      this.selectedDate = this.navParams.data.selectedDate;
      this.bucket = this.env.getBucketNm();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
    this._getWorker();
  }

  //従業員一覧取得
  async _getWorker() {
    let loading = this.loadingCtrl.create({
        content: ''
    });
    loading.present();

    let selectedDate;

    let res = await this.feedbackServiceProvider.getWorkerList(this.storeNo);
    if (!res) {
        loading.dismiss();
        return;
    }

    let result = res.json();
    this.workerList = result['workerList'];

    loading.dismiss();
  }

  //タスク一覧とフィードバックの取得
  async showWorkerInfo() {

    if(!this.selectedDate || !this.selectedWorker) {
      return;
    }

    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();

    //初期化
    this.taskList = null;
    this.handoverList = null;
    this.aCount = 0;
    this.eCount = 0;
    this.iCount = 0;
    this.sCount = 0;

    
    //フィードバックの取得
    let date = this.selectedDate;
    let res = await this.feedbackServiceProvider.getFeedback(this.selectedWorker.workerId, date);
    if (!res) {
      this.feedback = "";
      loading.dismiss();
      return;
    }
    let result = res.json();
    if (result['feedback_list'] == null || result['feedback_list'][0] == null ||
     result['feedback_list'][0]["contents"] == null || result['feedback_list'][0]["contents"] == ""){
      this.feedback = "";
    } else {
      this.feedback = result['feedback_list'][0]["contents"];
    }
    
  

    //タスクリスト取得
    res = await this.feedbackServiceProvider.getTaskList(this.selectedWorker.workerId, this.storeNo, date);
    if (!res) {
        this.taskList = null;
        loading.dismiss();
        return;
    }

    result = res.json();
    let taskList = result['workerTaskInfoList'];

    //タスクリスト表示用編集
    let _aCount = 0;
    let _eCount = 0;
    let _iCount = 0;
    let _sCount = 0;
    for (let i in taskList){
      let task = taskList[i];
      res = await this.feedbackServiceProvider.getHandover(task.taskId, date);
      if (res) {
        result = res.json();
        task.handoverList = result['handoverList'];
      }
      if(task.planSTime && task.planSTime){
        task.planTime = task.planSTime.substr(11,5) + " ～ " + task.planETime.substr(11,5);
      }
      if(task.actualSTime && task.actualETime){
        task.actualTime = task.actualSTime.substr(11,5) + " ～ " + task.actualETime.substr(11,5);
      }
      switch (task.status){
        case "A":
          _aCount += 1;
          task.status = "中止";
          break;
        case "E":
          _eCount += 1;
          task.status = "完了";
          break;
        case "I":
          _iCount += 1;
          task.status = "進行中";
          break;
        case "S":
          _sCount += 1;
          task.status = "未着手";
          break;
        default:
          break;
      }
    }

    //表示
    this.aCount = _aCount;
    this.eCount = _eCount;
    this.iCount = _iCount;
    this.sCount = _sCount;
    this.taskList = taskList;
    loading.dismiss();
  }

  //タスク選択時、コメント表示
  async selectTask(selectedTask) {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    for (let i in selectedTask.handoverList){
      let handover = selectedTask.handoverList[i];
      if (handover.imgPath){
        console.log(handover.imgPath);
        handover.dispImgPath = this._makeS3Path(handover.imgPath);
      } else {
        handover.dispImgPath = "assets/imgs/noImage/NoImage.png"
      }
      
    }
    this.handoverList = selectedTask.handoverList;
    loading.dismiss();
  }

  //S3のパス生成
  _makeS3Path(imgPath) {
    return "https://s3-ap-northeast-1.amazonaws.com/" + this.bucket + "/" + imgPath;
  }

  //ステータスチェック時
  statusChecked(status) {
    switch (status){
      case "A":
        if(this.aChecked){
          this.aChecked = false;
          this.dispStatusList[3] = "非表示";
        } else{
          this.aChecked = true;
          this.dispStatusList[3] = "中止";
        }
        break;
      case "E":
        if(this.eChecked){
          this.eChecked = false;
          this.dispStatusList[2] = "非表示";
        } else{
          this.eChecked = true;
          this.dispStatusList[2] = "完了";
        }
      break;
      case "I":
        if(this.iChecked){
          this.iChecked = false;
          this.dispStatusList[1] = "非表示";
        } else{
          this.iChecked = true;
          this.dispStatusList[1] = "進行中";
        }
        break;
      case "S":
        if(this.sChecked){
          this.sChecked = false;
          this.dispStatusList[0] = "非表示";
        } else{
          this.sChecked = true;
          this.dispStatusList[0] = "未着手";
        }
      break;
      default:
        break;
    }
  }

  //フィードバックを更新する処理
  async updateFeedbackClick(){

    //入力値チェック
    if(!this.selectedDate || !this.selectedWorker) {
      return;
    }
    
    //本処理
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    let date = this.selectedDate;
    let res = await this.feedbackServiceProvider.putFeedback(this.selectedWorker.workerId,date,"MM3F manager",this.feedback);

    if (!res) {
      loading.dismiss();
      return;
    }

    //success
    let alert = this.alertCtrl.create({
      title: 'フィードバックを更新しました。'
    });
    alert.present();
    setTimeout(() => {
      alert.dismiss();
      loading.dismiss();
    }, 850);
  }  

}
