import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }     from './customers.component';
import { TicketFormComponent }    from './ticket-form/ticket-form.component';
import { ReviewTicketsComponent } from './review-tickets/review-tickets.component';

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
        component: ReviewTicketsComponent
      },
      // {
      //   path: 'tickets/:id',
      //   component: showTicketComponent
      // }
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
