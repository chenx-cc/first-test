/**
 * 概　要： 環境変数取得
 * 作成日： 2018.11.30
 * 作成者： DHC
 */

import { Injectable } from '@angular/core';
import { ENV } from '@app/env';

@Injectable()
export class EnvCommonProvider {

    /**
     * リクエストURL取得
     * @returns リクエストURL
     */
    public getBaseUrl() {
        return ENV.baseUrl;
    }

    /**
     * 環境変数の取得
     * @returns 環境変数
     */
    public getMode() {
        return ENV.mode;
    }

    /**
     * UserPoolId取得
     * @returns UserPoolId
     */
    public getUserPoolId() {
        return ENV.userPoolId;
    }

    /**
     * ClientId取得
     * @returns ClientId
     */
    public getClientId() {
        return ENV.clientId;
    }

    /**
     * bucket名取得
     * @returns bucketNm
     */
    public getBucketNm() {
        return ENV.bucketNm;
    }

    public getIdentityPoolId() {
        return ENV.identityPoolId;
    }
}
