/* tslint:disable:no-unused-variable */
import { Router, ActivatedRoute, Params   } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By                               } from '@angular/platform-browser';
import { DebugElement                     } from '@angular/core';

import { ListTicketsComponent             } from './list-tickets.component';
import { TruncatePipe                     } from '../../pipes/truncate.pipe';

import { TicketService                    } from '../../services/ticket.service';
import { ActivatedRouteStub, RouterStub   } from '../../testing/router-stubs';
import { TicketServiceStub                } from '../../testing/ticket.service.stub';
import { isVisible, pass, ticketStub      } from '../../testing/testing-helpers';

describe('ListTicketsComponent', () => {
  let comp: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let page: Page;
  let tsSpy: TicketServiceStub;
  let first_ticket;

  // On this helper file we create the DebugElement, HTMLElement, HTMLInputElement and spies we consider
  // neccesary to mantain the tests succinct
  // Keep in mind that spies are set on the constructor
  class Page {
    tableRows:    DebugElement[];
    firstRow:     DebugElement;

    constructor() {
      const router = TestBed.get(Router); // get router from root injector
    }

    /** Add page elements after tickets arrives */
    addPageElements() {
      if (comp.tickets) {
        // have a hero so these elements are now in the DOM
        this.tableRows = fixture.debugElement.queryAll(By.css('tr:not(:first-child)'))
        this.firstRow = fixture.debugElement.query(By.css('tr:not(:first-child)'))
      }
    }
  }

  /** Create the component, initialize it, set test variables  */
  function createComponent(mode?) {
    fixture = TestBed.createComponent(ListTicketsComponent);
    comp    = fixture.componentInstance;
    page    = new Page();

    // On empty mode the service gets no tickets
    if(mode == 'empty-mode'){
      tsSpy = fixture.debugElement.injector.get(TicketService);
      tsSpy.tickets = [];
    }

    // 1st change detection triggers ngOnInit which gets all the ticket
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
        ListTicketsComponent,
        TruncatePipe
      ],
      providers: [
        { provide: Router        , useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .overrideComponent(ListTicketsComponent, {
      set: {
        providers: [
          { provide: TicketService, useClass: TicketServiceStub }
        ]
      }
    })
    .compileComponents()
  }));



  describe('In case there are five tickets on the list', () => {
    beforeEach( async(() => {
      createComponent();
      // get the component's injected TicketServiceSpy
      // By default it has four tickets
      tsSpy = fixture.debugElement.injector.get(TicketService);
    }));

    it('should create the ListTicketsComponent', () => {
      expect(comp).toBeTruthy();
    });

    it('should call navigate when calling on select', () => {
      let router = fixture.debugElement.injector.get(Router);
      spyOn(router, 'navigate');
      comp.onSelect(ticketStub);
      expect(router.navigate).toHaveBeenCalled();
    });

    it('should ve called getTickets', () => {
      expect(tsSpy.getTickets).toHaveBeenCalled();
    });

    it('should have five rows of tickets', () => {
      expect(page.tableRows.length).toBe(5);
    });

    it('should not display a message indicating there are no tickets', () => {
      let noTicketsDiv = fixture.debugElement.query(By.css('.no-tickets'))
      if(noTicketsDiv){
        expect(isVisible(noTicketsDiv.nativeElement)).toBeFalsy();
      }else{
        pass();
      }
    })

    describe('each row', () => {
      beforeEach( () => {
        tsSpy = fixture.debugElement.injector.get(TicketService);
        first_ticket = tsSpy.tickets[0];
      })

      it('should display a title', () => {
        expect(page.firstRow.nativeElement.textContent.search(first_ticket.title)).not.toBe(-1);
      });

      it('should display a category', () => {
        expect(page.firstRow.nativeElement.textContent.search(first_ticket.category)).not.toBe(-1);
      });

      it('should display a description', () => {
        expect(page.firstRow.nativeElement.textContent.search(first_ticket.description)).not.toBe(-1);
      });
    })
  })



  describe('In case there are no tickets on the list', () => {
    beforeEach( async(() => {
      createComponent('empty-mode');
    }));

    it('should ve called getTickets', () => {
      expect(tsSpy.getTickets).toHaveBeenCalled();
    });

    it('should have no rows of tickets', () => {
      expect(page.tableRows.length).toBe(0);
    });

    it('should display a message indicating there are no tickets', () => {
      let noTicketsDiv = fixture.debugElement.query(By.css('.no-tickets'))
      if(noTicketsDiv){
        expect(isVisible(noTicketsDiv.nativeElement)).toBeTruthy();
      } else{
        fail("There's no message when there are no tickets");
      }
    })

  })
});
