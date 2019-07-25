"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var db_1 = require('../shared/db');
var IpTemplateComponent = (function () {
    function IpTemplateComponent() {
    }
    IpTemplateComponent.prototype.toggle = function () {
    };
    IpTemplateComponent.prototype.ngOnInit = function () {
        this.db = db_1.db;
    };
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "includeArr");
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "typeArr");
    IpTemplateComponent = __decorate([
        core_1.Component({
            selector: 'ip-template',
            templateUrl: './ip-template.component.html',
            styleUrls: ['./ip-template.component.scss']
        })
    ], IpTemplateComponent);
    return IpTemplateComponent;
}());
exports.IpTemplateComponent = IpTemplateComponent;
//# sourceMappingURL=ip-template.component.js.map