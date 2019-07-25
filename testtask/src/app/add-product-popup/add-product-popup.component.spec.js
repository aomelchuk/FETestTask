"use strict";
var testing_1 = require('@angular/core/testing');
var add_product_popup_component_1 = require('./add-product-popup.component');
describe('AddProductPopupComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [add_product_popup_component_1.AddProductPopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(add_product_popup_component_1.AddProductPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-product-popup.component.spec.js.map