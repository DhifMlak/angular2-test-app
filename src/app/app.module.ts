import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule  } from './app-routing.module';

import { CustomersModule } from './customers-subsistem/customers.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component'

import { TicketService } from './services/ticket.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomersModule,
    AppRoutingModule
  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
