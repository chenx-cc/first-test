import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the ApischeduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * 
 * 概 要： スゲジュール表示用情報取得処理
 * 作成日：2018.02.03
 * 作成者：DHC徐磊健
 */
@Injectable()
export class ApiScheduleServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    /**
     * タスクIDで、AWSへ通信する
     * 
     * @param storeNo 店No
     * @param date 日付
     * @param time 時間
     * @param kbn 区分
     */
    async getScheduleInit(storeNo, date, time, kbn?) {
        let res = await this.commonService.doGet('/schedule/' + storeNo
             + '?date=' + date + '&time=' + time + '&kbn=' + kbn);
        return res;
    }

    /**
     * タスク情報
     * @param params パラメータ
     * @param taskId タスクID
     */
    async modifyTask(taskId, params) {
        let res = await this.commonService.doPut('/task/' + taskId, params);
        return res;
    }
}
