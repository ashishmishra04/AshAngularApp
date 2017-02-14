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
var character_button_component_1 = require('./shared/character-button/character-button.component');
var sort_characters_pipe_1 = require('./shared/sort-characters.pipe');
var characters_routing_module_1 = require('./characters-routing.module');
var shared_module_1 = require('../shared/shared.module');
var CharactersModule = (function () {
    function CharactersModule() {
    }
    CharactersModule = __decorate([
        core_1.NgModule({
            imports: [characters_routing_module_1.CharactersRoutingModule, shared_module_1.SharedModule],
            declarations: [character_button_component_1.CharacterButtonComponent, sort_characters_pipe_1.SortCharactersPipe, characters_routing_module_1.routedComponents]
        }), 
        __metadata('design:paramtypes', [])
    ], CharactersModule);
    return CharactersModule;
}());
exports.CharactersModule = CharactersModule;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=characters.module.js.map