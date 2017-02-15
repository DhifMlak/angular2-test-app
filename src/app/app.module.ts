import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { MaterialModule }        from '@angular/material';

import { AppRoutingModule  }     from './app-routing.module';

import { CustomersModule }       from './customers-subsistem/customers.module';

import { AppComponent }          from './app.component';
import { PageNotFoundComponent } from './other/page-not-found/page-not-found.component'

import { TicketService }         from './services/ticket.service';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomersModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
