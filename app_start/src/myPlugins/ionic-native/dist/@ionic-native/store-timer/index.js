var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name StoreTimer Plugin
 * @description Native wheel selector for Cordova (Android/iOS).
 */
var StoreTimer = (function (_super) {
    __extends(StoreTimer, _super);
    function StoreTimer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows the wheel selector
     * @param {WheelSelectorOptions} options Options for the wheel selector
     * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
     */
    StoreTimer.prototype.show = function (options) {
        return;
    };
    /**
     * Hide the selector
     * @returns {Promise<void>}
     */
    StoreTimer.prototype.hideSelector = function () { return; };
    StoreTimer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StoreTimer.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], StoreTimer.prototype, "show", null);
    __decorate([
        Cordova({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], StoreTimer.prototype, "hideSelector", null);
    StoreTimer = __decorate([
        Plugin({
            pluginName: 'StoreTimer',
            plugin: 'cordova-plugin-timer',
            pluginRef: 'storeTimer',
            repo: '',
            platforms: ['Android', 'iOS']
        })
    ], StoreTimer);
    return StoreTimer;
}(IonicNativePlugin));
export { StoreTimer };