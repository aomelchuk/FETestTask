import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';



//import { HttpClientModule } from '@angular/common/http';
//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from './app/shared/data.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilterPipe } from './shared/list-filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductPopupComponent } from './add-product-popup/add-product-popup.component';


import {NgbModule, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe,
    ProductListComponent,
    AddProductPopupComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbModalConfig,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
