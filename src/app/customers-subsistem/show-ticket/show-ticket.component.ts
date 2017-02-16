import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Ticket } from '../../ticket';
import { TicketService }         from '../../services/ticket.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {

  ticket: Ticket;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TicketService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getTicket(+params['id']))
      .subscribe((ticket: Ticket) => this.ticket = ticket);
  }

  goToList(): void{
    this.router.navigate(['../'], { relativeTo: this.route } )
  }

}
