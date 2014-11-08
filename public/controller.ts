/// <reference path="./_app.ts" />

module app {
    'use strict';
    export interface IAlertUser {
        (): void;
    }

    export interface ITestCtrl {
        myMessage: string;
        alertUser: IAlertUser;
    }

    export class TestCtrl implements ITestCtrl {
        constructor(private appStorage: AppStorage) {}

        public myMessage:string = 'Hello World!';

        public alertUser = () => {
            alert('this alerts!');
        };

        public setStorage = (key: string) :void => {
            this.appStorage.put(key, Math.floor(Math.random() * 100));
        };

        public getStorage = (key: string) :void => {
            alert(this.appStorage.get(key));
        };
    }
}