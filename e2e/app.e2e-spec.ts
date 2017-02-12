import { TicketSystemPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Create ticket Form', function() {
  let page: TicketSystemPage;

  beforeEach(() => {
    page = new TicketSystemPage();
    page.navigateTo();
  });

  // Default Form Behaviour

  it('should have a form', () => {
    let form = element(by.css('form'))
    expect(form.isPresent()).toBeTruthy();
  });

  it('should have disabled submit button by default', () => {
    let el = page.submitBtn
    expect(el.isEnabled()).toBeFalsy();
  });

  // Title Input

  it('should ask for a ticket title', () => {
    let el = element(by.css('#title'));
    expect(el.isPresent()).toBeTruthy();
  });

  it('should have a required ticket title', () => {
    let el = element(by.css('#title'));
    el.clear()
    expect(page.submitBtn.isEnabled()).toBeFalsy();
  });

  // Category Input

  it('should ask for a ticket category', () => {
    let el = element(by.css('#category'));
    expect(el.isPresent()).toBeTruthy();
  });

  it('should be possible to select from a few category options', () => {
    let list = element.all(by.css('form select option'));
    expect(list.count()).toBeGreaterThan(3)
  });

  // Description Input

  it('should ask for a ticket description', () => {
    let el = element(by.css('#description'));
    expect(el.isPresent()).toBeTruthy();
  });

  it('should have a required ticket description', () => {
    let el = element(by.css('#description'));
    el.clear()
    expect(page.submitBtn.isEnabled()).toBeFalsy();
  });








});
