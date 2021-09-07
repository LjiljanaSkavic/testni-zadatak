import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { DataTablesModule } from 'angular-datatables';
import {DataService} from "./city-data/city-data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PictureComponent } from './picture/picture.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import {CityDetailsService} from "./city-details/city-details.service";
import { InputFormComponent } from './input-form/input-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonGroupComponent,
    PictureComponent,
    CityDetailsComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataService, HttpClient, CityDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
