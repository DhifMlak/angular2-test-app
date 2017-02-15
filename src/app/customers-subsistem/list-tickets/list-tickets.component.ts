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
  private selectedId: number;

  constructor(
    private service: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tickets = this.route.params
      .switchMap((params: Params) => {
        console.log('runs')
        return this.service.getTickets();
      });
  }

  onSelect(ticket):void {
    this.router.navigate(['/tickets', ticket.id]);
  }

}
