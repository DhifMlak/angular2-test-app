import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CustomersComponent }     from './customers.component';
import { TicketFormComponent }    from './ticket-form/ticket-form.component';
import { ListTicketsComponent }   from './list-tickets/list-tickets.component';
import { ShowTicketComponent }    from './show-ticket/show-ticket.component';

const customerRoutes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      {
        path: 'create-ticket',
        component: TicketFormComponent
      },
      {
        path: 'tickets',
        component: ListTicketsComponent
      },
      {
        path: 'tickets/:id',
        component: ShowTicketComponent
      }
    ]
  }
  // { path: 'customers/create-ticket',        component: TicketFormComponent },
];




@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule { }
