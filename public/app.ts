/// <reference path="./_app.ts" />

module app {
    'use strict';

    angular.module('app', [])
    .controller('TestCtrl', TestCtrl)
    .service('appStorage', AppStorage);
}