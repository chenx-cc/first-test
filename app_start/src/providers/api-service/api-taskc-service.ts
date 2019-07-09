import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiTaskcServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    //GETCATEGORY
    async getCategory(storeNo) {
        let res = await this.commonService.doGet('/category/' + '?storeNo=' + storeNo);
        return res;
    }

    //GETSHITF
    async getShift(storeNo) {
        let res = await this.commonService.doGet('/shift/' + '?storeNo=' + storeNo);
        return res;
    }

    //GETWORKERandSHIFT
    async getWorkerShift(storeNo, categoryId, opId, date, shiftId) {
        let res = await this.commonService.doGet('/worker/' + storeNo + "/" + categoryId + "/" + opId + '?date=' + date + '&shiftId=' + shiftId);
        return res;
    }
    //GETWORKERandTIME
    async getWorkerTime(storeNo, categoryId, opId, date, sTime, eTime) {
        let res = await this.commonService.doGet('/worker/' + storeNo + "/" + categoryId + "/" + opId + '?date=' + date + '&sTime=' + sTime + '&eTime=' + eTime);
        return res;
    }

    //CREATTASK
    async createTask(opId, opNm, workerId, categoryId, taskPoolKbn, taskPriorityKbn, planSTime, planETime, storeNo, taskDate) {
        let param = {
            "opId": opId,
            "opNm": opNm,
            "workerId": workerId,
            "categoryId": categoryId,
            "taskPoolKbn": taskPoolKbn,
            "taskPriorityKbn": taskPriorityKbn,
            "planSTime": planSTime,
            "planETime": planETime,
            "storeNo": storeNo,
            "taskDate": taskDate
        }

        let res = await this.commonService.doPost('/task', param);

        return res;
    }
}
