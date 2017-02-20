import { TicketsListPage      } from './app.po';
import { browser, element, by } from 'protractor';
import { getLastSegment       } from '../src/app/testing/testing-helpers';

describe('Ticket Show Page', function() {
  let ticketsList;
  let firstRow;

  beforeEach(() => {
    // To actually get to test this component we first navigate to the list of
    // tickets and then click on the first one

    browser.get('/customers/tickets');

    browser.wait(function() {
      return element(by.className('ticket-list')).isPresent();
    }, 2500);

    ticketsList = element.all(by.css('.ticket-list tr'));
    firstRow = ticketsList.get(1);

    firstRow.click();
  });

  it('should display a ticket', () => {
    expect(
      element(by.className('ticket-display')).isDisplayed()
    ).toBeTruthy();
  });

  it('should display ticket\'s title', () => {
    expect(
      element(by.className('ticket-title')).isDisplayed()
    ).toBeTruthy();
  });

  it('should display ticket\'s category', () => {
    expect(
      element(by.className('ticket-category')).isDisplayed()
    ).toBeTruthy();
  });

  it('should display ticket\'s description', () => {
    expect(
      element(by.className('ticket-description')).isDisplayed()
    ).toBeTruthy();
  });

  it('should display a back button', () => {
    expect(
      element(by.className('back-button')).isDisplayed()
    ).toBeTruthy();
  });

  it('back button should take you to tickets list', () => {
    element(by.className('back-button')).click();

    browser.getCurrentUrl().then( url => {
      const lastSegment = getLastSegment(url);
      expect(lastSegment).toBe('tickets');
    });
  });





});
