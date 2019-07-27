"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var UpdateIncludesService = (function () {
    function UpdateIncludesService() {
        this.subject = new rxjs_1.Subject();
    }
    UpdateIncludesService.prototype.sendObject = function (includesArr) {
        this.subject.next(includesArr);
    };
    UpdateIncludesService.prototype.clearObject = function () {
        this.subject.next();
    };
    UpdateIncludesService.prototype.getObject = function () {
        return this.subject.asObservable();
    };
    UpdateIncludesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UpdateIncludesService);
    return UpdateIncludesService;
}());
exports.UpdateIncludesService = UpdateIncludesService;
//# sourceMappingURL=update-includes.service.js.map