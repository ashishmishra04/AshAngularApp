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
var router_1 = require('@angular/router');
var vehicle_list_component_1 = require('./vehicle-list/vehicle-list.component');
var vehicle_component_1 = require('./vehicle/vehicle.component');
var vehicles_component_1 = require('./vehicles.component');
var vehicle_resolver_service_1 = require('./shared/vehicle-resolver.service');
var _1 = require('./.');
var routes = [
    {
        path: '',
        component: vehicles_component_1.VehiclesComponent,
        children: [
            {
                path: '',
                component: vehicle_list_component_1.VehicleListComponent,
            },
            {
                path: ':id',
                component: vehicle_component_1.VehicleComponent,
                canDeactivate: [_1.CanDeactivateGuard],
                resolve: {
                    vehicle: vehicle_resolver_service_1.VehicleResolver
                }
            },
        ]
    },
];
var VehiclesRoutingModule = (function () {
    function VehiclesRoutingModule() {
    }
    VehiclesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: [vehicle_resolver_service_1.VehicleResolver]
        }), 
        __metadata('design:paramtypes', [])
    ], VehiclesRoutingModule);
    return VehiclesRoutingModule;
}());
exports.VehiclesRoutingModule = VehiclesRoutingModule;
exports.routedComponents = [vehicles_component_1.VehiclesComponent, vehicle_list_component_1.VehicleListComponent, vehicle_component_1.VehicleComponent];
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
//# sourceMappingURL=vehicles-routing.module.js.map