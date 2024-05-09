import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatetimeComponent } from './datetime/datetime.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { DisplayComponent } from './display/display.component';
import { HistoryComponent } from './history/history.component';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { DetailComponent } from './detail/detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    DetailComponent,
    MessagesComponent,
    DatetimeComponent,
    CalculatorComponent,
    DisplayComponent,
    HistoryComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
