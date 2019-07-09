import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/**
 * 
 * 概 要： 引継ぎ事項のロジック処理
 * 作成日：2018.02.23
 * 作成者：DHC王東亮
 */
@Injectable()
export class ApiHandoverServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    /**
     * 引継ぎ事項を新規登録する
     * 
     * @param taskId タスクID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    async creHandoverByTaskId(taskId, workerId, handoverContents, imgPath, handoverDate, selectedDate) {
        let param = {
            "workerId": workerId,
            "handoverContents": handoverContents,
            "imgPath": imgPath,
            "handoverDate": handoverDate
        }
        let res = await this.commonService.doPost('/handover/' + '?date=' + selectedDate + '&taskId=' + taskId, param);
        return res;
    }

    /**
     * 引継ぎ事項を新規登録する
     * 
     * @param timesoltId 時間帯ID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    async creHandoverByTimesoltId(timeSlotId, workerId, handoverContents, imgPath, handoverDate, selectedDate) {
        let param = {
            "workerId": workerId,
            "handoverContents": handoverContents,
            "imgPath": imgPath,
            "handoverDate": handoverDate
        }
        let res = await this.commonService.doPost('/handover/' + '?date=' + selectedDate + '&timeSlotId=' + timeSlotId, param);
        return res;
    }

    /**
     * 引継ぎ事項を検索する
     * 
     * @param taskId タスクID
     */
    async selHandoverByTaskId(taskId) {
        let res = await this.commonService.doGet('/handover' + '?taskId=' + taskId);
        return res;
    }

    /**
     * 引継ぎ事項を検索する
     * 
     * @param timesoltId 時間帯ID
     */
    async selHandoverByTimesoltId(timesoltId, selectedDate) {
        let res = await this.commonService.doGet('/handover' + '?timeSlotId=' + timesoltId + '&date=' + selectedDate);
        return res;
    }

    /**
     * 引継ぎ事項を更新する
     * 
     * @param handoverId 引継ぎ事項ID
     * @param workerId 引継者
     * @param handoverContents 引継内容
     * @param imgPath 画像パス
     * @param handoverDate 引継日時
     */
    async uptHandover(handoverId, workerId, handoverContents, imgPath, handoverDate, lockHandoverInfo) {
        let param = {
            "workerId": workerId,
            "handoverContents": handoverContents,
            "imgPath": imgPath,
            "handoverDate": handoverDate,
            "lockHandoverInfo": lockHandoverInfo
        }

        let res = await this.commonService.doPut('/handover/' + handoverId, param);
        return res;
    }

    /**
     * 引継ぎ事項を削除する
     * 
     * @param handoverId 引継ぎ事項ID
     */
    async delHandover(handoverId) {

        let res = await this.commonService.doDelete('/handover/' + handoverId);
        return res;
    }

    /**
     * 引継ぎ事項を削除する
     * 
     * @param handoverId 引継ぎ事項ID
     */
    async getWorker(storeNo) {
        let res = await this.commonService.doGet('/worker' + '?storeNo=' + storeNo);
        return res;
    }

    /**
     * 引継ぎ事項の楽観ロック
     * 
     * @param handoverId 引継ぎ事項ID
     */
    async lockHandover(handoverId, lockHandoverInfo) {
        let param = {
            "lockHandoverInfo": lockHandoverInfo
        }
        let res = await this.commonService.doPut('/lockhandover/' + handoverId, param);
        return res;
    }
}
