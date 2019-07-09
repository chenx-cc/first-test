import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiTaskrdServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    /**
     * タスクIDで、AWSへ通信する
     * 
     * @param taskId 
     */
    async getTaskDetail(taskId) {
        let res = await this.commonService.doGet('/task/' + taskId);
        return res;
    }

    async deleteTask(taskId) {
        let res = await this.commonService.doDelete('/task/' + taskId);

        return res;
    }

    /**
     * タスク削除の楽観ロック
     * 
     * @param taskId タスクID
     */
    async lockTask(taskId, lockTaskInfo, lockTaskChklistInfo, lockChklist, lockHandover) {
        let param = {
            "lockTaskInfo": lockTaskInfo,
            "lockTaskChklistInfo": lockTaskChklistInfo,
            "lockChklist": lockChklist,
            "lockHandover": lockHandover,
        }
        let res = await this.commonService.doPut('/locktask/' + taskId, param);
        return res;
    }
}
