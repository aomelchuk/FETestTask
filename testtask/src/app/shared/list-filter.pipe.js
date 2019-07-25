"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListFilterPipe = (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) {
            var nameUpper = item.name.toUpperCase();
            var skuUpper = item.sku.toUpperCase();
            return (nameUpper.indexOf(filter.toUpperCase()) !== -1) || (skuUpper.indexOf(filter.toUpperCase()) !== -1);
        });
    };
    ListFilterPipe = __decorate([
        core_1.Pipe({
            name: 'listFilter'
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());
exports.ListFilterPipe = ListFilterPipe;
//# sourceMappingURL=list-filter.pipe.js.map