import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilityService } from '../providers/utility-service/UtilityService';
import { BackExitServiceProvider } from "../providers/back-exit/back-Exit";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = 'LoginPage';
    constructor(platform: Platform, statusBar: StatusBar,
        private screenOrientation: ScreenOrientation,
        splashScreen: SplashScreen,
        private backExitService: BackExitServiceProvider) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            screenOrientation.lock(screenOrientation.ORIENTATIONS.LANDSCAPE).catch(e => console.log(e));
            this.backExitService.registerBackButtonAction();
            // タイムゾーンを設定
            UtilityService.setISODateTimeWithZone();
        });
    }
}
