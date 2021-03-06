"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var AddProductPopupComponent = (function () {
    function AddProductPopupComponent(getDbService, config, modalService, updateIncludesService) {
        this.getDbService = getDbService;
        this.modalService = modalService;
        this.updateIncludesService = updateIncludesService;
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
        this.db = this.getDbService.getDb();
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
    };
    AddProductPopupComponent.prototype.changeSelectedProd = function (res, typeArr) {
        this.includeObj[typeArr] = res.include;
        this.updateIncludesService.sendObject({ includeObj: this.includeObj, includeBuff: res.includeBuff });
    };
    AddProductPopupComponent.prototype.createNewProduct = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        args.push(this.includeObj);
        try {
            var FileSaver = require('file-saver');
            var blob = new Blob([JSON.stringify(new NewProduct(args))], { type: "JSON" });
            FileSaver.saveAs(blob, "new_product.json");
        }
        catch (ex) {
            console.log(ex);
        }
        this.includeObj = null;
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
var NewProduct = (function () {
    function NewProduct() {
        this.customerType = args[0];
        this.name = args[1];
        this.validValue = args[2] || 0;
        this.price = args[3];
        this.sku = args[4];
        this.type = args[5];
        if (args[6] == "")
            this.allowRecharge = false;
        else
            this.allowRecharge = args[6];
        if (args[6] == true)
            this.rechargePrice = args[7];
        else
            this.rechargePrice = 0;
        this.includes = this.processingIncludesArray(args[8]);
    }
    NewProduct.prototype.processingIncludesArray = function (includes) {
        var temp = [];
        for (var x in includes) {
            if (includes[x].length != 0) {
                for (var _i = 0, _a = includes[x]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    temp.push({
                        type: x.toUpperCase(),
                        connectedProduct: {
                            id: item.id
                        }
                    });
                }
            }
        }
        ;
        return temp;
    };
    return NewProduct;
}());
//# sourceMappingURL=add-product-popup.component.js.map