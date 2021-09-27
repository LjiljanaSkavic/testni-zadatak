import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import {DataService} from "./city-data/city-data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PictureComponent } from './picture/picture.component';
import {FormsModule} from "@angular/forms";
import {EmaticCoreUIModule} from "./ematic-core-ui/ematic-core-ui.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CitiesComponent } from './cities/cities.component';
import {CityDetailsService} from "./cities/city-details/city-details.service";
import {CityDetailsComponent} from "./cities/city-details/city-details.component";
import {TableComponent} from "./cities/table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PictureComponent,
    CityDetailsComponent,
    CitiesComponent
  ],
    imports: [
        BrowserModule,
        DataTablesModule,
        HttpClientModule,
        FormsModule,
        EmaticCoreUIModule,
        BrowserAnimationsModule
    ],
  providers: [ DataService, HttpClient, CityDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
