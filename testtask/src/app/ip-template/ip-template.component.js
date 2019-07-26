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
    IpTemplateComponent.prototype.ngOnInit = function () {
        this.dbTemp = [];
        this.dbTemp = this.geDBData(db_1.db);
        console.log(db_1.db[1]);
        this.preIncludeDB = [];
        this.preIncludeIncl = [];
        this.include = [];
    };
    IpTemplateComponent.prototype.geDBData = function (db) {
        var newDB = [];
        for (var i in db) {
            newDB[i] = Object.assign({}, db[i]);
            newDB[i].status = false;
        }
        return newDB;
    };
    IpTemplateComponent.prototype.selectProduct = function (product, source, selectedProds) {
        var temp = source.find(function (x) { return x.sku == product.sku; });
        if (selectedProds.find(function (x) { return x.sku == product.sku; }) != temp)
            selectedProds.push(temp);
        product.status = true;
        console.log("where is action, Billy?");
        console.log(this.typeArr);
        console.log(product);
    };
    IpTemplateComponent.prototype.unselectProduct = function (product, selectedProds) {
        selectedProds = selectedProds.filter(function (x) { return x.sku != product.sku; });
        product.status = false;
        console.log("where is another action, Billy?");
        console.log(this.typeArr);
        console.log(product);
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