"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/common/http');
var app_component_1 = require('./app.component');
var product_list_component_1 = require('./product-list/product-list.component');
var add_product_popup_component_1 = require('./add-product-popup/add-product-popup.component');
var list_filter_pipe_1 = require('./shared/list-filter.pipe');
var update_includes_service_1 = require('./shared/update-includes.service');
var get_db_service_1 = require('./shared/get-db.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var ip_template_component_1 = require('./ip-template/ip-template.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                list_filter_pipe_1.ListFilterPipe,
                product_list_component_1.ProductListComponent,
                add_product_popup_component_1.AddProductPopupComponent,
                ip_template_component_1.IpTemplateComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule
            ],
            providers: [
                ng_bootstrap_1.NgbModalConfig,
                ng_bootstrap_1.NgbModal,
                update_includes_service_1.UpdateIncludesService,
                get_db_service_1.GetDbService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map