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
var models_1 = require('../../../models');
var DashboardButtonComponent = (function () {
    function DashboardButtonComponent() {
    }
    DashboardButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', models_1.Character)
    ], DashboardButtonComponent.prototype, "character", void 0);
    DashboardButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'story-dashboard-button',
            templateUrl: 'dashboard-button.component.html',
            styleUrls: ['dashboard-button.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardButtonComponent);
    return DashboardButtonComponent;
}());
exports.DashboardButtonComponent = DashboardButtonComponent;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=dashboard-button.component.js.map