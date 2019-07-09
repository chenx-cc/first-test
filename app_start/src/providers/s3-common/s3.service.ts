import { Injectable } from '@angular/core';
import { UtilityService } from '../utility-service/UtilityService';
import { EnvCommonProvider } from '../env-common/env-common';
import { CognitoCommonProvider } from '../cognito-common/cognito-common';

declare let AWS: any;
declare const Buffer: any;

@Injectable()
export class S3Util {

    private bucket;
    private region = 'ap-northeast-1';
    private contentType = 'image/jpeg';
    private encoding = 'base64';
    private acl = "public-read-write";

    constructor(private env: EnvCommonProvider,
        private coginto: CognitoCommonProvider) {
        this.bucket = this.env.getBucketNm();
    }

    getCredentials() {
        AWS.config.region = this.region;
        let cognitoUser = this.coginto.getCognitoUser();

        if (cognitoUser != null) {
            let region = this.region;
            let userPoolId: any = this.env.getUserPoolId();
            let identityPoolId = this.env.getIdentityPoolId();
            cognitoUser.getSession(function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                if (result) {
                    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: identityPoolId,
                        Logins: { [`cognito-idp.${region}.amazonaws.com/${userPoolId}`]: result.getIdToken().getJwtToken() }
                    });
                }
            });
        }
    }
    /*
     * バケット内のオブジェクトを取得
     */
    getObject(callback, errcallback, mythis) {
        console.log('getObject');
        UtilityService.setISODateTime();
        var s3;
        var result = null;

        if (callback == null) {
            throw ("S3Util.getObject() :callback is null...returning");
        }
        this.getCredentials();
        console.log(mythis.imgPath);
        s3 = new AWS.S3();
        var param = {
            Bucket: this.bucket,
            Key: mythis.imgPath
        };

        var objectPromise = s3.getObject(param).promise();
        objectPromise.then(
            function (data) {
                UtilityService.setISODateTimeWithZone();
                //読み込んだデータを引数にコールバック呼び出し
                callback(data, mythis);
            }
        ).catch(
            function (err) {
                console.log(err, err.stack);
                UtilityService.setISODateTimeWithZone();
                errcallback();
                mythis.handoverPic = 'assets/imgs/noImage/NoImage.png';
            }
        );

        return result;

    }

    /*
     * バケット内のオブジェクトリストを削除
     */
    delObject(callback, mythis) {
        console.log('delObject');
        UtilityService.setISODateTime();
        var s3;
        var result = null;

        if (callback == null) {
            throw ("S3Util.getObject() :callback is null...returning");
        }
        this.getCredentials();
        s3 = new AWS.S3();

        console.log(mythis.imgPath);

        if (!mythis.imgPath) {
            return;
        }
        var param = {
            Bucket: this.bucket,
            Key: mythis.imgPath
        };

        var objectPromise = s3.deleteObject(param).promise();
        objectPromise.then(
            function (data) {
                UtilityService.setISODateTimeWithZone();
                //読み込んだデータを引数にコールバック呼び出し
                callback(data, mythis);
            }
        ).catch(
            function (err) {
                UtilityService.setISODateTimeWithZone();
                console.log(err, err.stack);
            }
        );

        return result;
    }

    /*
     * S3に写真をupload
    */
    uploadToS3(callback, mythis) {
        console.log('uploadToS3');
        UtilityService.setISODateTime();
        var s3;
        var result = null;

        if (callback == null) {
            throw ("S3Util.uploadToS3() :callback is null...returning");
        }
        this.getCredentials();
        s3 = new AWS.S3();

        console.log(mythis.imgPath);

        let buf = Buffer.from(mythis.base64Image, this.encoding);

        var params3 = {
            Bucket: this.bucket,
            Key: mythis.imgPath,
            Body: buf,
            ACL: this.acl,
            ContentEncoding: this.encoding,
            ContentType: this.contentType
        };
        console.log("params3:", params3);
        var retUploadPromise = s3.putObject(params3).promise();
        retUploadPromise.then(
            function (data) {
                UtilityService.setISODateTimeWithZone();
                //戻り値を引数にコールバック呼び出し
                callback(data, mythis);
            }
        ).catch(
            function (err) {
                UtilityService.setISODateTimeWithZone();
                console.log(err, err.stack);
            }
        );

        return result;

    }

}
