/// <reference path="./_app.ts" />

module app {
    'use strict';
    export class AppStorage {
        get(key: string): string {
            return JSON.parse(localStorage.getItem(key) || "");
        }

        put(key: string, value: any): void {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}