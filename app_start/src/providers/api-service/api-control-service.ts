import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiControlServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    async getCheckList(getTaskId) {
        let res = await this.commonService.doGet('/chklist/' + getTaskId);

        return res;
    }

    async changeStatus(taskId, status, lockTask) {
        let param = { 'lockTask': lockTask };
        let res = await this.commonService.doPut('/task/' + taskId + '/' + status, param);

        return res;
    }

    async changeCheckList(getTaskId, checkListId, lineNo, chkStatus, lockChkListInfo) {
        let param = { 'chkStatus': chkStatus, 'lockChkListInfo': lockChkListInfo };
        let res = await this.commonService.doPut('/chklist/' + getTaskId + '/' + checkListId + '/' + lineNo, param);

        return res;
    }
}
