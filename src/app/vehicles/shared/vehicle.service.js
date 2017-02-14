"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var _1 = require('../.');
var vehiclesUrl = _1.CONFIG.baseUrls.vehicles;
var VehicleService = (function () {
    function VehicleService(http, exceptionService, messageService, spinnerService) {
        var _this = this;
        this.http = http;
        this.exceptionService = exceptionService;
        this.messageService = messageService;
        this.spinnerService = spinnerService;
        this.onDbReset = this.messageService.state;
        this.messageService.state.subscribe(function (state) { return _this.getVehicles(); });
    }
    VehicleService.prototype.addVehicle = function (vehicle) {
        var _this = this;
        var body = JSON.stringify(vehicle);
        this.spinnerService.show();
        return this.http
            .post("" + vehiclesUrl, body)
            .map(function (res) { return res.json().data; })
            .catch(this.exceptionService.catchBadResponse)
            .finally(function () { return _this.spinnerService.hide(); });
    };
    VehicleService.prototype.deleteVehicle = function (vehicle) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .delete(vehiclesUrl + "/" + vehicle.id)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse)
            .finally(function () { return _this.spinnerService.hide(); });
    };
    VehicleService.prototype.getVehicles = function () {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get(vehiclesUrl)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse)
            .finally(function () { return _this.spinnerService.hide(); });
    };
    VehicleService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json ? res.json() : null;
        return (body && body.data || {});
    };
    VehicleService.prototype.getVehicle = function (id) {
        var _this = this;
        this.spinnerService.show();
        return this.http
            .get(vehiclesUrl + "/" + id)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse)
            .finally(function () { return _this.spinnerService.hide(); });
    };
    VehicleService.prototype.updateVehicle = function (vehicle) {
        var _this = this;
        var body = JSON.stringify(vehicle);
        this.spinnerService.show();
        return this.http
            .put(vehiclesUrl + "/" + vehicle.id, body)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse)
            .finally(function () { return _this.spinnerService.hide(); });
    };
    VehicleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof _1.ExceptionService !== 'undefined' && _1.ExceptionService) === 'function' && _a) || Object, (typeof (_b = typeof _1.MessageService !== 'undefined' && _1.MessageService) === 'function' && _b) || Object, (typeof (_c = typeof _1.SpinnerService !== 'undefined' && _1.SpinnerService) === 'function' && _c) || Object])
    ], VehicleService);
    return VehicleService;
    var _a, _b, _c;
}());
exports.VehicleService = VehicleService;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
//# sourceMappingURL=vehicle.service.js.map