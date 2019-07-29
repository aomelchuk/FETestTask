"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var IpTemplateComponent = (function () {
    function IpTemplateComponent(getDbService, updateIncludesService) {
        var _this = this;
        this.getDbService = getDbService;
        this.updateIncludesService = updateIncludesService;
        this.changeSelectedProductsEvent = new core_1.EventEmitter();
        this.dbTemp = [];
        this.getDbService.get().subscribe(function (data) {
            _this.dbTemp = _this.geDBData(data);
        });
        this.subscription = this.updateIncludesService.getObject().subscribe(function (res) {
            switch (_this.typeArr) {
                case 'include':
                    _this.updateDBList('pass', res.includeObj, res.includeBuff);
                    break;
                case 'pass':
                    _this.updateDBList('include', res.includeObj, res.includeBuff);
                    break;
                default:
                    console.log("Exception: do not have typeArr");
            }
        });
    }
    IpTemplateComponent.prototype.ngOnInit = function () {
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
    IpTemplateComponent.prototype.updateDBList = function (typeStr, includeObj, includeBuff) {
        if (includeObj[typeStr].length != 0) {
            for (var iy in includeObj[typeStr]) {
                for (var ii in this.dbTemp) {
                    if (this.dbTemp[ii].id == includeObj[typeStr][iy].id) {
                        this.dbTemp.splice(this.dbTemp.indexOf(this.dbTemp[ii]), 1);
                    }
                }
            }
        }
        else {
            if (this.dbTemp.length == 0)
                this.dbTemp = this.geDBData(includeBuff);
            else {
                var _loop_1 = function(iy) {
                    if (!this_1.dbTemp.find(function (x) { return x.id == includeBuff[iy].id; }))
                        this_1.dbTemp = this_1.dbTemp.concat(includeBuff[iy]);
                };
                var this_1 = this;
                for (var iy in includeBuff) {
                    _loop_1(iy);
                }
            }
        }
    };
    IpTemplateComponent.prototype.selectProduct = function (product, source, selectedProds) {
        var temp = source.find(function (x) { return x.sku == product.sku; });
        product.status = true;
        if (selectedProds.find(function (x) { return x.sku == product.sku; }) != temp && product.status == true)
            selectedProds.push(temp);
    };
    IpTemplateComponent.prototype.unselectProduct = function (product, selectedProds) {
        product.status = false;
        return selectedProds.filter(function (x) { return x.sku != product.sku; });
    };
    IpTemplateComponent.prototype.toggle = function (product, source, selectedProds) {
        var status;
        if (product.status) {
            selectedProds = this.unselectProduct(product, selectedProds);
        }
        else {
            this.selectProduct(product, source, selectedProds);
            return selectedProds;
        }
        return selectedProds;
    };
    IpTemplateComponent.prototype.moveSelected = function (isDB, selectedProds) {
        this.includeBuff = this.include;
        if (isDB) {
            this.include = this.include.concat(selectedProds);
            this.include.forEach(function (x) { return x.status = false; });
            this.dbTemp = this.dbTemp.filter(function (x) { return selectedProds.indexOf(x) < 0; });
            this.preIncludeDB = [];
        }
        else {
            this.dbTemp = this.dbTemp.concat(selectedProds);
            this.dbTemp.forEach(function (x) { return x.status = false; });
            this.includeBuff = this.include;
            this.include = this.include.filter(function (x) { return selectedProds.indexOf(x) < 0; });
        }
        this.changeSelectedProductsEvent.emit({ include: this.include, typeArr: this.typeArr, includeBuff: this.includeBuff });
    };
    IpTemplateComponent.prototype.moveAll = function (isDB, dbRes) {
        this.moveSelected(isDB, dbRes);
    };
    ;
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "includeArr");
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "typeArr");
    __decorate([
        core_1.Input()
    ], IpTemplateComponent.prototype, "db");
    __decorate([
        core_1.Output()
    ], IpTemplateComponent.prototype, "changeSelectedProductsEvent");
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