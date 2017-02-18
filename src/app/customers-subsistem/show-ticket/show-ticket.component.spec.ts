import { Router, ActivatedRoute, Params   } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By                               } from '@angular/platform-browser';
import { DebugElement                     } from '@angular/core';

import { ShowTicketComponent              } from './show-ticket.component';
import { TruncatePipe                     } from '../../pipes/truncate.pipe';

import { Ticket                           } from '../../ticket';
import { TicketService                    } from '../../services/ticket.service';
import { ActivatedRouteStub, RouterStub   } from '../../testing/router-stubs';
import { TicketServiceStub                } from '../../testing/ticket.service.stub';
import { isVisible, pass, ticketStub      } from '../../testing/testing-helpers';

describe('ShowTicketComponent', () => {
  let comp: ShowTicketComponent;
  let fixture: ComponentFixture<ShowTicketComponent>;
  let expectedTicket: Ticket;
  let activatedRoute: ActivatedRouteStub;
  let page;


  // On this helper file we create the DebugElement, HTMLElement, HTMLInputElement and spies we consider
  // neccesary to mantain the tests succinct
  // Keep in mind that spies are set on the constructor
  class Page {
    ticketDisplay:    DebugElement;
    noTicketDiv: DebugElement;

    constructor() {
    }

    /** Add page elements after tickets arrives */
    addPageElements() {
      if (comp.ticket) {
        // have a ticket so these elements are now in the DOM
        this.ticketDisplay      = fixture.debugElement.query(By.css('.ticket-display'))
        this.noTicketDiv        = fixture.debugElement.query(By.css('.no-ticket-message'))
      }
    }
  }

  function createComponent(){
    // Creates Page Helper
    page    = new Page();

    // 1st change detection triggers ngOnInit which gets the ticket
    fixture.detectChanges();

    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched ticket
      fixture.detectChanges();
      page.addPageElements();
    });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowTicketComponent,
        TruncatePipe
      ],
      providers: [
        { provide: Router        , useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .overrideComponent(ShowTicketComponent, {
      set: {
        providers: [
          { provide: TicketService, useClass: TicketServiceStub }
        ]
      }
    })
    .compileComponents()
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowTicketComponent);
    comp    = fixture.componentInstance;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
  }));


  describe('when navigate to existing ticket', () => {

    beforeEach( async(() => {
      expectedTicket = ticketStub;

      // we can control the params using the stub :D
      activatedRoute.testParams = { id: expectedTicket.id };

      createComponent();
    }));

    // We're kind of testing the testing spec here :S
    it('the component is created', () => {
      expect(comp).toBeTruthy();
    });

    it('should have a ticket', () => {
      expect(comp.ticket).toEqual(expectedTicket)
    });

    it('should display that ticket\'s title', () => {
      expect(page.ticketDisplay.nativeElement.textContent.search(expectedTicket.title)).not.toBe(-1);
    });

    it('should display that ticket\'s category', () => {
      expect(page.ticketDisplay.nativeElement.textContent.search(expectedTicket.category)).not.toBe(-1);
    });

    it('should display that ticket\'s description', () => {
      expect(page.ticketDisplay.nativeElement.textContent.search(expectedTicket.description)).not.toBe(-1);
    });

  })

  describe('when navigate to non-existant ticket id', () => {

    beforeEach( async(() => {
      activatedRoute.testParams = { id: 99999 };
      fixture.detectChanges();
    }));

    it('should not have a ticket', () => {
      expect(comp.ticket).toEqual('');
    })

    it('should display a message saying that no ticket was found', () => {
      let el = fixture.debugElement.query(By.css('.no-ticket-message'))
      if(el){
        expect(isVisible(el.nativeElement)).toBeTruthy();
      } else{
        fail("There's no message when there are no tickets");
      }
    });

  })



});
