import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

//import { HttpClientModule } from '@angular/common/http';
//import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//import {InMemoryDataService} from './app/shared/data.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilterPipe } from './shared/list-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
