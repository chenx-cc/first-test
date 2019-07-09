import { Injectable } from '@angular/core';
import { EnvCommonProvider } from '../env-common/env-common';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CognitoCommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare let AmazonCognitoIdentity: any;

@Injectable()
export class CognitoCommonProvider {

    private cognitoUser: any;
    constructor(private env: EnvCommonProvider,
        private storage: Storage) {
    }

    public login(userId: string, password: string) {
        let authenticationData = {
            Username: userId,
            Password: password,
        };

        let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        let poolData = {
            UserPoolId: this.env.getUserPoolId(),
            ClientId: this.env.getClientId()
        };

        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        let userData = {
            Username: userId,
            Pool: userPool
        };
        this.cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        return new Promise((resolve, reject) => {
            this.cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: (result) => {
                    this.storage.set('accessToken', result.idToken.jwtToken);
                    let auth = { userName: this.cognitoUser.username };
                    resolve(auth);
                },

                onFailure: (err) => {
                    reject(err);
                },
            });
        });
    }

    public logout() {
        if (this.cognitoUser) {
            this.cognitoUser.signOut();
        }
    }

    public getCognitoUser() {
        return this.cognitoUser;
    }
}
