import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular'
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewCommon } from '../../providers/view-common/ViewCommon';
import { Keyboard } from '@ionic-native/keyboard';
import { CognitoCommonProvider } from '../../providers/cognito-common/cognito-common';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

/**
 * 
 * 概 要： ログイン処理
 * 作成日：2018.01.30
 * 作成者：DHC孫志棟
 */
export class LoginPage {
    private password: any;
    private aplUserId: any;
    private loginForm: FormGroup;
    public static loginLoading;
    private imgHid = false;
    private userId;
    private passwd;

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        private formBuilder: FormBuilder,
        private loadingCtrl: LoadingController,
        private storage: Storage,
        public keyboard: Keyboard,
        private cognito: CognitoCommonProvider) {

        this.loginForm = this.formBuilder.group({
            aplUserId: ['', Validators.compose([Validators.maxLength(255), Validators.required])],
            password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
        })

        this.password = this.loginForm.controls['password'];
        this.aplUserId = this.loginForm.controls['aplUserId'];
    }

    ionViewWillEnter() {
        this.keyboard.onKeyboardShow().subscribe(() => {
            this.imgHid = true;
            document.body.classList.add('keyboard-is-open');
            let sContent = document.getElementsByClassName('scroll-content');
            if (sContent.length > 0) {
                if (sContent[0] != undefined && sContent[0] != null) {
                    sContent[0].setAttribute('style', 'padding-bottom: 0px;');
                }
            }
        });
        this.keyboard.onKeyboardHide().subscribe(() => {
            this.imgHid = false;
            document.body.classList.remove('keyboard-is-open');
        });
    }


    /**
     * 入力のユーザーID、パスワードでログインする
     * @param value フォームの項目バリュー
     */
    async login(value) {
        // isShowの初期化
        this.storage.remove('isShow');
        LoginPage.loginLoading = this.loadingCtrl.create({
            content: ''
        });

        LoginPage.loginLoading.present();

        // SDKを使って、Cognitoの認証処理を呼び出して、TOKENを生成する
        try {
            let auth = await this.cognito.login(value.aplUserId, value.password);
            this.navCtrl.setRoot('SelstorePage', { aplUserId: auth['userName']});

        } catch (err) {
            console.log("auth error:" + err);
            LoginPage.loginLoading.dismiss();
            ViewCommon.showAlert(this.alertCtrl, '登録失敗しました。');
        }
    }

    hidImg() {
        this.imgHid = true;
    }
}
