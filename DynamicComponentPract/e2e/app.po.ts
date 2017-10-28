import { browser, by, element } from 'protractor';

export class DynamicComponentPractPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
