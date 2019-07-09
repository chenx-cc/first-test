import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiTaskuServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    async getTaskDetail(taskId) {
        let res = await this.commonService.doGet('/task/' + taskId);
        
        return res;
    }

    //GETWORKER
    async getWorker(storeNo, categoryId, opId, date, stime, etime) {
        let res = await this.commonService.doGet('/worker/'+ storeNo +"/"+ categoryId +"/"+ opId +'?date=' + date + '&sTime=' + stime + '&eTime=' + etime);
        return res;
    }

    //UPDATECHECK
    async taskUpdateCheck(storeNo, workerId, date, stime, etime, categoryId, opId) {
        let res = await this.commonService.doGet('/worker/'+ storeNo + '?workerId=' + workerId + '&date=' + date + '&stime=' + stime + '&etime=' + etime + '&categoryId=' + categoryId+ '&opId=' + opId);
        
        return res;
    }

    //UPDATE
    async taskUpdate(getTaskID, taskInfo) {
        let param = taskInfo;
        let res = await this.commonService.doPut('/task/'+ getTaskID, param);
        
        return res;
    }
}
