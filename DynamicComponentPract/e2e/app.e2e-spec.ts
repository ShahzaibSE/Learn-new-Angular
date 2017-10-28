import { DynamicComponentPractPage } from './app.po';

describe('dynamic-component-pract App', () => {
  let page: DynamicComponentPractPage;

  beforeEach(() => {
    page = new DynamicComponentPractPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
