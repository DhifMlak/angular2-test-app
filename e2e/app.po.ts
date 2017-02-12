import { browser, element, by } from 'protractor';

export class TicketSystemPage {
  navigateTo() {
    return browser.get('/');
  };

  submitBtn = element(by.css('[type="submit"]'));

}
