import { browser, element, by } from 'protractor';

export class TicketFormPage {
  navigateTo(url='/') {
    return browser.get(url);
  };

  submitBtn = element(by.css('[type="submit"]'));
}

export class TicketsListPage {
  navigateTo(url='/customers/tickets') {
    return browser.get(url);
  };

}
