"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var db_1 = require('../shared/db');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var AddProductPopupComponent = (function () {
    function AddProductPopupComponent(config, modalService, updateIncludesService) {
        this.modalService = modalService;
        this.updateIncludesService = updateIncludesService;
        this.newProduct = {
            id: 1,
            sku: "",
            name: "",
            newProductAllowRecharge: false
        };
        this.typeValues = {
            'BASIC_SINGLE': 'Basic single',
            'BASIC_VALID_HOURS': 'Basic valid hours',
            'PASS_LIMITED': 'Pass limited',
            'PASS_UNLIMITED': 'Pass unlimited'
        };
        this.customerTypeValues = {
            'ADULT': 'Adult',
            'CHILD': 'Child'
        };
        this.includeObj = {
            pass: [],
            include: []
        };
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    AddProductPopupComponent.prototype.open = function (content) {
        try {
            this.modalService.open(content);
        }
        catch (ex) {
            console.log(ex);
        }
    };
    ;
    AddProductPopupComponent.prototype.ngOnInit = function () {
        this.db = db_1.db;
    };
    AddProductPopupComponent.prototype.changeSelectedProd = function (res) {
        console.log(res.typeArr, res.include);
        this.includeObj[res.typeArr] = res.include;
        console.log("add product popup");
        console.log(this.includeObj);
        this.updateIncludesService.sendObject(this.includeObj);
    };
    AddProductPopupComponent.prototype.createNewProduct = function () {
        var temp = new Object;
        console.log(temp);
    };
    AddProductPopupComponent = __decorate([
        core_1.Component({
            selector: 'add-product-popup',
            templateUrl: './add-product-popup.component.html',
            styleUrls: ['./add-product-popup.component.scss'],
            providers: [ng_bootstrap_1.NgbModalConfig, ng_bootstrap_1.NgbModal]
        })
    ], AddProductPopupComponent);
    return AddProductPopupComponent;
}());
exports.AddProductPopupComponent = AddProductPopupComponent;
/*
export class NewProduct {
  constructor() {

  }
}
*/
//# sourceMappingURL=add-product-popup.component.js.map