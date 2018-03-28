import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { SodasComponent } from './sodas/sodas.component';
import { SodaDetailComponent } from './soda-detail/soda-detail.component';
import { SodaService } from './soda.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SodaSearchComponent } from './soda-search/soda-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SodasComponent,
    SodaDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SodaSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    SodaService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
