import { AlertController } from 'ionic-angular';

export class ViewCommon {


    public static showAlert(alertCtrl: AlertController, msg) {
        let alert = alertCtrl.create({
          title: 'エラー',
          subTitle: msg,
          buttons: ['確定']
        });
        alert.present();
     }
}