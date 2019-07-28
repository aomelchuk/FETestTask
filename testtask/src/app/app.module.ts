import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilterPipe } from './shared/list-filter.pipe';
import { UpdateIncludesService } from './shared/update-includes.service';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductPopupComponent } from './add-product-popup/add-product-popup.component';


import {NgbModule, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IpTemplateComponent } from './ip-template/ip-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe,
    ProductListComponent,
    AddProductPopupComponent,
    IpTemplateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbModalConfig,
    NgbModal,
    UpdateIncludesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
