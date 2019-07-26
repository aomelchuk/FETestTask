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
        this.changeSelectedProductsEvent = new core_1.EventEmitter();
    }
    IpTemplateComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log('changing', args);
    };
    IpTemplateComponent.prototype.ngOnInit = function () {
        this.dbTemp = [];
        this.dbTemp = this.geDBData(db_1.db);
        this.preIncludeDB = [];
        this.preIncludeIncl = [];
        this.include = [];
    };
    IpTemplateComponent.prototype.geDBData = function (db) {
        var _this = this;
        var newDB = [];
        for (var i in db) {
            newDB[i] = Object.assign({}, db[i]);
            newDB[i].status = false;
        }
        console.log(this.includeArr);
        if (this.includeArr['include'] != [] || this.includeArr['include'] != undefined)
            newDB = newDB.filter(function (x) { return _this.includeArr['include'].indexOf(x) < 0; });
        if (this.includeArr['pass'] != [] || this.includeArr['pass'] != undefined)
            newDB = newDB.filter(function (x) { return _this.includeArr['pass'].indexOf(x) < 0; });
        return newDB;
    };
    IpTemplateComponent.prototype.selectProduct = function (product, source, selectedProds) {
        var temp = source.find(function (x) { return x.sku == product.sku; });
        if (selectedProds.find(function (x) { return x.sku == product.sku; }) != temp)
            selectedProds.push(temp);
        product.status = true;
    };
    IpTemplateComponent.prototype.unselectProduct = function (product, selectedProds) {
        selectedProds = selectedProds.filter(function (x) { return x.sku != product.sku; });
        product.status = false;
    };
    IpTemplateComponent.prototype.toggle = function (product, source, selectedProds) {
        var status;
        // if(selectedProds.find( x => x.sku == product.sku )!= undefined) {
        if (product.status) {
            this.unselectProduct(product, selectedProds);
        }
        else {
            this.selectProduct(product, source, selectedProds);
        }
    };
    IpTemplateComponent.prototype.moveSelected = function (isDB, selectedProds) {
        var _this = this;
        if (isDB) {
            this.include = this.include.concat(selectedProds);
            this.include.forEach(function (element) {
                element.status = false;
            });
            this.dbTemp = this.dbTemp.filter(function (x) { return selectedProds.indexOf(x) < 0; });
            this.preIncludeDB = [];
        }
        else {
            this.dbTemp = this.dbTemp.concat(selectedProds);
            this.dbTemp.forEach(function (x) { return x.status = false; });
            this.include = this.include.filter(function (x) { return selectedProds.indexOf(x) < 0; });
        }
        if (this.includeArr['include'] != null || this.includeArr['include'] != undefined) {
            this.includeArr['include'].push(this.include);
            this.dbTemp = this.dbTemp.filter(function (x) { return _this.includeArr['include'].indexOf(x) < 0; });
        }
        if (this.includeArr['pass'] != null || this.includeArr['pass'] != undefined) {
            this.includeArr['pass'].push(this.include);
            this.dbTemp = this.dbTemp.filter(function (x) { return _this.includeArr['pass'].indexOf(x) < 0; });
        }
        console.log(this.typeArr);
        console.log(this.includeArr);
        this.changeSelectedProductsEvent.emit(this.include);
    };
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "includeArr");
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "typeArr");
    __decorate([
        core_1.Output()
    ], IpTemplateComponent.prototype, "changeSelectedProductsEvent");
    IpTemplateComponent = __decorate([
        core_1.Component({
            selector: 'ip-template',
            templateUrl: './ip-template.component.html',
            styleUrls: ['./ip-template.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], IpTemplateComponent);
    return IpTemplateComponent;
}());
exports.IpTemplateComponent = IpTemplateComponent;
//# sourceMappingURL=ip-template.component.js.map