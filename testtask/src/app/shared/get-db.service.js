"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var operators_1 = require('rxjs/operators');
var GetDbService = (function () {
    function GetDbService(http) {
        this.http = http;
        this.sourceUrl = 'https://raw.githubusercontent.com/makedonmax/test_data/master/data.txt';
        this.db = [];
        /*this.get().subscribe(data=>{
          this.db = data
          console.log(this.db);
        });*/
    }
    GetDbService.prototype.getDb = function () {
        return this.db;
    };
    GetDbService.prototype.get = function () {
        var _this = this;
        console.log("zapros");
        return this.http.get(this.sourceUrl).pipe(operators_1.map(function (res) { return _this.db = res; }));
    };
    GetDbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GetDbService);
    return GetDbService;
}());
exports.GetDbService = GetDbService;
//# sourceMappingURL=get-db.service.js.map