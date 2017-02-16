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

describe('ListTicketsComponent', () => {
  let comp: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let page: Page;
  let tsSpy;


  // On this helper file we create the DebugElement, HTMLElement, HTMLInputElement and spies we consider
  // neccesary to mantain the tests succinct
  // Keep in mind that spies are set on the constructor
  class Page {
    gotoSpy:      jasmine.Spy;
    navSpy:       jasmine.Spy;

    tableRows:    DebugElement;

    // saveBtn:      DebugElement;
    // cancelBtn:    DebugElement;
    // nameDisplay:  HTMLElement;
    // nameInput:    HTMLInputElement;

    constructor() {
      const router = TestBed.get(Router); // get router from root injector
      // this.gotoSpy = spyOn(comp, 'gotoList').and.callThrough();
      // this.navSpy  = spyOn(router, 'navigate');
    }

    /** Add page elements after tickets arrives */
    addPageElements() {
      if (comp.tickets) {
        // have a hero so these elements are now in the DOM
        this.tableRows = fixture.debugElement.query(By.css('tr:not(:first-child)')).nativeElement
      }
    }
  }

  /** Create the component, initialize it, set test variables  */
  function createComponent() {
    fixture = TestBed.createComponent(ListTicketsComponent);
    comp    = fixture.componentInstance;
    page    = new Page();

    // 1st change detection triggers ngOnInit which gets all the ticket
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
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

  beforeEach( async(() => {
    createComponent();
    // get the component's injected TicketServiceSpy
    tsSpy = fixture.debugElement.injector.get(TicketService);
  }));

  it('should create the ListTicketsComponent', () => {
    expect(comp).toBeTruthy();
  });


  it('should ve called getTickets once', () => {
    expect(tsSpy.getTickets.calls.count()).toBe(1);
  });

  it('should have four rows of tickets', () => {
    expect(page.tableRows).toBe(1);
  });



});
