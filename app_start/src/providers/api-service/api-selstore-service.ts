import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ApiSelstoreServiceProvider {

    constructor(public commonService: ApiCommonProvider) {
    }

    async selstore(getUserID) {
        let res = await this.commonService.doGet('/store/' + getUserID);
        
        return res;
    }
}
