import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiFeedbackServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }


    //GETWORKERS
    async getWorkerList(storeNo) {
        let res = await this.commonService.doGet('/worker/' + '?storeNo=' + storeNo);
        return res;
    }

    //GETFEEDBACK
    async getFeedback(workerId, date) {
        let res = await this.commonService.doGet('/feedback/' + workerId + '?feedback_date=' + date);
        return res;
    }

    //GETTASKS
    async getTaskList(workerId, storeNo, date) {
        let res = await this.commonService.doGet('/schedule/' + '?workerId=' + workerId + '&storeNo=' + storeNo + '&date=' + date + '&kbn=1');
        return res;
    }

    //GETHANDOVERS
    async getHandover(taskId, date) {
        let res = await this.commonService.doGet('/handover/' + '?taskId=' + taskId + '&date=' + date);
        return res;
    }

    //GETFEEDBACK
    async putFeedback(workerId, feedback_date, feedbacker_id, contents) {
        let param = {
            "worker_id": workerId,
            "feedback_date": feedback_date,
            "feedbacker_id": feedbacker_id,
            "contents": contents
        }

        let res = await this.commonService.doPut('/feedback', param);

        return res;
    }
}
