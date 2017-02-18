import { TicketsListPage      } from './app.po';
import { browser, element, by } from 'protractor';
import { getLastSegment       } from '../src/app/testing/testing-helpers';

describe('Ticket List Page', function() {
  let page: TicketsListPage;
  let ticketsList;
  let firstRow;

  beforeEach(() => {
    page = new TicketsListPage();
    page.navigateTo();

    browser.wait(function() {
      return element(by.className('ticket-list')).isPresent();
    }, 2500);

    ticketsList = element.all(by.css('.ticket-list tr'));
    firstRow = ticketsList.get(1);

  });

  it('should display a list of tickets or a message indicating there is none', () => {
    expect(
      element(by.className('ticket-list')).isDisplayed() ||
      element(by.className('no-tickets')).isDisplayed()
    ).toBeTruthy()
  });


  it('should take you to a ticket-show component when clicking on a link', () => {
    if(element(by.className('ticket-list')).isDisplayed()){
      firstRow.click();

      browser.getCurrentUrl().then( url => {
        let lastSegment = getLastSegment(url)

        // If we're on the ticket show component, the last segment of the
        // url should be a number
        expect(+lastSegment).toEqual(jasmine.any(Number));
      })
    }
  });

  it('should have a navbar visible too', () => {
    expect(
      element(by.className('navbar')).isDisplayed()
    ).toBeTruthy()
  })



});
