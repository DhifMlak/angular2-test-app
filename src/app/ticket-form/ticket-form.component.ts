import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
  ];

  model = new Ticket(1, 'Ticket Example Title', this.categories[0], 'Ticket Example Category');

  submitted = false;

  newTicket() {
    this.model = new Ticket(42, '', '', '');
  }

  onSubmit() {

    console.log(this.model)


    this.submitted = true;

  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }
}
