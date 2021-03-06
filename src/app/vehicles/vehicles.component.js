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
var vehicle_service_1 = require('./shared/vehicle.service');
var VehiclesComponent = (function () {
    function VehiclesComponent() {
    }
    VehiclesComponent = __decorate([
        core_1.Component({
            // selector: 'story-vehicles',
            template: "<router-outlet></router-outlet>",
            providers: [vehicle_service_1.VehicleService]
        }), 
        __metadata('design:paramtypes', [])
    ], VehiclesComponent);
    return VehiclesComponent;
}());
exports.VehiclesComponent = VehiclesComponent;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=vehicles.component.js.map