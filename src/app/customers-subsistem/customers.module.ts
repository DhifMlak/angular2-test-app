import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { MaterialModule }         from '@angular/material';

import { CustomersRoutingModule } from './customers-routing.module'
import { CustomersComponent }     from './customers.component';

import { TicketFormComponent }    from './ticket-form/ticket-form.component';
import { ListTicketsComponent }   from './list-tickets/list-tickets.component';
import { ShowTicketComponent }    from './show-ticket/show-ticket.component';

import { TruncatePipe  }          from './../pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    CustomersComponent,
    TicketFormComponent,
    ListTicketsComponent,
    ShowTicketComponent,
    TruncatePipe,
  ]
})
export class CustomersModule { }
