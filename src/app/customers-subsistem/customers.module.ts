import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { MaterialModule }        from '@angular/material';


import { CustomersRoutingModule } from './customers-routing.module'
import { CustomersComponent } from './customers.component';

import { TicketFormComponent }   from './ticket-form/ticket-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    TicketFormComponent,
    CustomersComponent
  ]
})
export class CustomersModule { }
