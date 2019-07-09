import { Platform, App, NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { ApiCommonProvider } from '../api-common/api-common';
import { AppMinimize } from '@ionic-native/app-minimize';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class BackExitServiceProvider {

	private backButtonFlg: boolean;
	constructor(public commonService: ApiCommonProvider,
		private platform: Platform, 　private appMinimize: AppMinimize,
		private appCtrl: App) { }

	// 最小化
	registerBackButtonAction(): void {
		this.platform.registerBackButtonAction(() => {
			let activeNav: NavController = this.appCtrl.getActiveNav();
			if (activeNav.canGoBack()) {
				activeNav.pop();
			} else {
				if (this.backButtonFlg) {
					// 最小化
					this.appMinimize.minimize();
				} else {
					this.backButtonFlg = true;
					setTimeout(() => this.backButtonFlg = false, 1500);
				}
			}
		});
	}
}
