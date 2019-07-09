import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiManualServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }
    
    async manual(getOpId, getCategoryId, getStoreNo) {
        let res = await this.commonService.doGet('/manual/'+ getOpId + '/' + getCategoryId + '/' + getStoreNo);
        
        return res;
    }
}
