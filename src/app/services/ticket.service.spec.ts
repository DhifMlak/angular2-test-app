/* tslint:disable:no-unused-variable */
import { TicketService } from './ticket.service'
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Ticket Service', function() {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TicketService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });

  });


  it('#createTicket should return an Observable<Ticket>', inject([TicketService, MockBackend], (ticketService, mockBackend) => {

    const mockResponse = {
      data: [
        { id: 1 },
      ]
    };

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    ticketService.createTicket().subscribe( (tickets) => {
      expect(tickets.data).toBeDefined()
    });

  }));

  let service: TicketService;
  const fakeHttp =  {
    get: () => '',
    _backend: ''
  };

  beforeEach( () => { service = new TicketService(fakeHttp as Http); });


});


// import { TestBed, async, inject } from '@angular/core/testing';
// import { TicketService } from './ticket.service';

// describe('TicketService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [TicketService]
//     });
//   });

  // it('should ...', inject([TicketService], (service: TicketService) => {
  //   expect(service).toBeTruthy();
  // }));
// });
