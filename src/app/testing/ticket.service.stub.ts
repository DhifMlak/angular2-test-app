import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs/Observable';

import { Ticket     }      from '../ticket';
import { ticketStub }      from './testing-helpers';

@Injectable()
export class TicketServiceStub{

  private _tickets: Ticket[] = [
    {
      "id": 1,
      "title": "Example Title",
      "description": "Example Description.",
      "created_at": "2017-02-15T17:03:29.386Z",
      "updated_at": "2017-02-15T17:03:29.386Z",
      "category": "Category A"
    },
    {
      "id": 8,
      "title": "Dolor ea aut quae nisi animi et voluptatem enim.",
      "description": "Qui sit quos. Quod dolores debitis eos. Asperiores expedita eum eaque non minima laudantium nisi.",
      "created_at": "2017-02-15T17:03:29.386Z",
      "updated_at": "2017-02-15T17:03:29.386Z",
      "category": "Category A"
    },
    {
      "id": 9,
      "title": "Voluptatum et veritatis tempora enim autem inventore.",
      "description": "Enim odit soluta a laborum quidem iste. Perspiciatis ea ad sed est natus est. Sint enim eos est quas ut quidem. Repudiandae et delectus officia omnis magnam. Veritatis consequatur quasi.",
      "created_at": "2017-02-15T17:03:29.396Z",
      "updated_at": "2017-02-15T17:03:29.396Z",
      "category": "Category A"
    },
    {
      "id": 10,
      "title": "Ullam minima labore nemo velit eveniet nam.",
      "description": "Facilis et dicta tempora voluptatem officiis. Eveniet culpa officia quaerat. Assumenda est soluta dolorem at fugiat non natus.",
      "created_at": "2017-02-15T17:03:29.398Z",
      "updated_at": "2017-02-15T17:03:29.398Z",
      "category": "Category C"
    },
    {
      "id": 11,
      "title": "Iste quo dolorem est perspiciatis eligendi voluptatem quidem.",
      "description": "Tenetur veritatis qui quam. Dolorem praesentium quo. Amet nam et sit dolorem quia et. In ipsam enim impedit et alias reiciendis. Saepe distinctio labore alias odio omnis.",
      "created_at": "2017-02-15T17:03:29.399Z",
      "updated_at": "2017-02-15T17:03:29.399Z",
      "category": "Category B"
    }
  ];

  set tickets(tickets){
    this._tickets = tickets;
  };

  get tickets(){
    return this._tickets;
  };

  getTicket = jasmine.createSpy('getTickets').and.callFake( (id) => {
    if(+id == 1){
      let ticket = ticketStub;
      return Observable.of(ticket);
    }
    else{
      return Observable.of('');
    }
  });

  getTickets = jasmine.createSpy('getTickets').and.callFake( () => {
    let tickets = this._tickets;
    return Observable.of(tickets);
  });

}
