/* tslint:disable:no-unused-variable */
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { TicketFormComponent } from './ticket-form.component';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../ticket';


describe('TicketFormComponent', () => {
  let comp: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;
  let ticketService;
  let testTicket = new Ticket(42, 'Test Ticket', 'Category 2', 'Test Description');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFormComponent ],
      imports:      [ FormsModule, HttpModule ],
      providers:    [ TicketService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

     // TicketService actually injected into the component
    ticketService = fixture.debugElement.injector.get(TicketService);
  });

  it('should create the component', () => {
    expect(comp).toBeTruthy();
  });

  describe('onSubmit()', () => {
    it('should call createTicket method on TicketService', () => {
      // Setup spy on the `createTicket` method
      spyOn(ticketService, 'createTicket').and.returnValue(Observable.of(1));
      comp.onSubmit()
      expect(ticketService.createTicket).toHaveBeenCalled();
    });
  })

  describe('newTicket()', () => {
    it('should empty title', () => {
      comp.model = testTicket;
      comp.newTicket()
      expect(comp.model.title).toEqual('');
    });

    it('should empty description', () => {
      comp.model = testTicket;
      comp.newTicket()
      expect(comp.model.description).toEqual('');
    });

    it('should select first category', () => {
      comp.model = testTicket;
      comp.newTicket()
      expect(comp.model.category).toEqual('Category 1');
    });
  })
});
