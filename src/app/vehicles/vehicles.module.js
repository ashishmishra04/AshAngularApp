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
var vehicle_button_component_1 = require('./shared/vehicle-button/vehicle-button.component');
var vehicles_routing_module_1 = require('./vehicles-routing.module');
var shared_module_1 = require('../shared/shared.module');
var vehicle_service_1 = require('./shared/vehicle.service');
var VehiclesModule = (function () {
    function VehiclesModule() {
    }
    VehiclesModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, vehicles_routing_module_1.VehiclesRoutingModule],
            declarations: [vehicle_button_component_1.VehicleButtonComponent, vehicles_routing_module_1.routedComponents],
            providers: [vehicle_service_1.VehicleService]
        }), 
        __metadata('design:paramtypes', [])
    ], VehiclesModule);
    return VehiclesModule;
}());
exports.VehiclesModule = VehiclesModule;
// avoids having to lazy load with loadChildren: "app/vehicles/vehicle.module#VehicleModule"
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=vehicles.module.js.map