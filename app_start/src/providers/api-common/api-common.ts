import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EnvCommonProvider } from '../env-common/env-common';
import { CognitoCommonProvider } from '../cognito-common/cognito-common';
import * as jwt_decode from "jwt-decode";
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { App, AlertController } from 'ionic-angular';
import { scheduleMicroTask } from '@angular/core/src/util';
/*
  Generated class for the ApiCommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/**
 * 
 * 概 要： AWSの通信処理
 * 作成日：2018.01.30
 * 作成者：DHC孫志棟
 */

@Injectable()
export class ApiCommonProvider {
    private host;
    private accessToken;
    constructor(public http: Http,
        private appCtrl: App,
        private storage: Storage,
        private env: EnvCommonProvider,
        private alertCtrl: AlertController,
        private cognito: CognitoCommonProvider) {
        this.host = this.env.getBaseUrl();
    }

    async doPost(path: string, param: Object) {
        let res;
        this.accessToken = await this.storage.get('accessToken');

        if (!this.checkAuth(this.accessToken)) {
            return res;
        }
        let addHeaders = new Headers({ 'Authorization': this.accessToken });
        this.storage.set('autoRefreshTimeCounter', 0);

        try {
            res = await this.http.post(this.host + path,
                JSON.stringify(param), { headers: addHeaders }).toPromise();
        } catch (error) {
            this.handleError(error);
        }
        return res;
    }

    async doGet(path: string, param?: Object) {
        let res;
        this.accessToken = await this.storage.get('accessToken');

        if (!this.checkAuth(this.accessToken)) {
            return res;
        }
        let addHeaders = new Headers({ 'Authorization': this.accessToken });
        this.storage.set('autoRefreshTimeCounter', 0);

        try {
            res = await this.http.get(this.host + path, { headers: addHeaders }).toPromise();
        } catch (error) {
            this.handleError(error);
        }
        return res;
    }

    async doDelete(path: string, param?: Object) {
        let res;
        this.accessToken = await this.storage.get('accessToken');

        if (!this.checkAuth(this.accessToken)) {
            return res;
        }
        let addHeaders = new Headers({ 'Authorization': this.accessToken });
        this.storage.set('autoRefreshTimeCounter', 0);

        try {
            res = await this.http.delete(this.host + path, { headers: addHeaders }).toPromise();
        } catch (error) {
            this.handleError(error);
        }
        return res;
    }

    async doPut(path: string, param?: Object) {
        let res;
        this.accessToken = await this.storage.get('accessToken');
        if (!this.checkAuth(this.accessToken)) {
            return res;
        }
        let addHeaders = new Headers({ 'Authorization': this.accessToken });
        this.storage.set('autoRefreshTimeCounter', 0);

        try {
            res = await this.http.put(this.host + path, JSON.stringify(param), { headers: addHeaders }).toPromise();
        } catch (error) {
            this.handleError(error);
        }
        return res;
    }

    private checkAuth(accessToken) {
        let now = Math.floor(new Date().getTime() / 1000);

        if (!accessToken || now > jwt_decode(accessToken)['exp']) {
            this.showAlertToLogin('認証処理失敗、再ログインしてください。');
            return false;
        }
        return true;
    }

    private handleError(error) {
        const errAuth = '認証処理失敗、再ログインしてください。';
        switch (error.status) {
            case 401:
            case 403:
                this.showAlertToLogin(errAuth);
                break;
            case 400:
            case 404:
            case 500:
                this.dealError(error.json());
                break;
            default:
                console.log(error);
        }
    }

    private dealError(bodyCont) {
        const returnStr = '<br/>';
        if (bodyCont.message) {
            this.showAlert(bodyCont.message);
        } else {
            let messages = '';
            let globalErrors = bodyCont.errors.global_errors;
            globalErrors.forEach(errMsg => {
                messages = messages + errMsg + returnStr;
            });

            let field_errors = bodyCont.errors.field_errors;
            for (let key in field_errors) {
                field_errors[key].forEach(errMsg => {
                    messages = messages + `項目[${key}]：${errMsg}${returnStr}`;
                });
            }

            this.showAlert(messages);
        }
    }

    private showAlert(msg) {
        let alert = this.alertCtrl.create({
            title: 'エラー',
            subTitle: msg,
            buttons: ['確定'],
            enableBackdropDismiss: false
        });
        alert.present();
    }

    private showAlertToLogin(msg) {
        this.clearInterval();

        let alert = this.alertCtrl.create({
            title: 'エラー',
            subTitle: msg,
            buttons: [
                {
                    text: 'ログイン画面へ戻る',
                    handler: data => {
                        this.appCtrl.getRootNav().setRoot('LoginPage');
                    }
                },
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    }

    private clearInterval() {
        let max = setTimeout(function(){},1);

        for (let i = 0; i <= max; i++) {
            window.clearInterval(i);
        }
    }
}

