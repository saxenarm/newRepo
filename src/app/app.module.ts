import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import {ViewRoutingModule} from './View.routing';
import { RejectComponent } from './reject/reject.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    ViewRequestComponent,
    RejectComponent
  ],
  imports: [
    BrowserModule,
    ViewRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
