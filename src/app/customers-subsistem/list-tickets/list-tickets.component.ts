import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Ticket } from '../../ticket';
import { TicketService }         from '../../services/ticket.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  tickets: Observable<Ticket[]>

  constructor(
    private service: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tickets = this.route.params
      .switchMap((params: Params) => {
        return this.service.getTickets();
      });
  }

  onSelect(ticket):void {
    this.router.navigate([ticket.id], { relativeTo: this.route });
  }

}
