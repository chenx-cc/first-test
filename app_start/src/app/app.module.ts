import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { MyApp } from './app.component';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';

import { ApiScheduleServiceProvider } from '../providers/api-service/api-schedule-service';
import { ApiControlServiceProvider } from '../providers/api-service/api-control-service';
import { ApiFeedbackServiceProvider } from '../providers/api-service/api-feedback-service';
import { ApiHandoverServiceProvider } from '../providers/api-service/api-handover-service';
import { ApiManualServiceProvider } from '../providers/api-service/api-manual-service';
import { ApiSelstoreServiceProvider } from '../providers/api-service/api-selstore-service';
import { ApiTaskrdServiceProvider } from '../providers/api-service/api-taskrd-service';
import { ApiTaskuServiceProvider } from '../providers/api-service/api-tasku-service';
import { ApiTaskcServiceProvider } from '../providers/api-service/api-taskc-service';
import { BackExitServiceProvider } from '../providers/back-exit/back-Exit';
import { ApiCommonProvider } from '../providers/api-common/api-common';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { S3Util } from '../providers/s3-common/s3.service';
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device';
import { StoreTimer } from '@ionic-native/store-timer';
import { CognitoCommonProvider } from '../providers/cognito-common/cognito-common';
import { EnvCommonProvider } from '../providers/env-common/env-common';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__storedb',
      driverOrder: ['indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AppMinimize,
    Device,
    StoreTimer,
    Push,
    Camera,
    Keyboard,
    DatePicker,
    StatusBar,
    ScreenOrientation,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiCommonProvider,
    ApiControlServiceProvider,
    ApiFeedbackServiceProvider,
    ApiHandoverServiceProvider,
    ApiManualServiceProvider,
    ApiSelstoreServiceProvider,
    ApiTaskrdServiceProvider,
    ApiTaskuServiceProvider,
    ApiTaskcServiceProvider,
    ApiScheduleServiceProvider,
    S3Util,
    BackExitServiceProvider,
    CognitoCommonProvider,
    EnvCommonProvider
  ]
})
export class AppModule { }
