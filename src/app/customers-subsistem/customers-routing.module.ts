import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }    from './customers.component';
import { TicketFormComponent }  from './ticket-form/ticket-form.component';

const customerRoutes: Routes = [
  { path: 'customers',                     component: CustomersComponent },
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
