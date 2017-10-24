import { DynamicComponentAppPage } from './app.po';

describe('dynamic-component-app App', () => {
  let page: DynamicComponentAppPage;

  beforeEach(() => {
    page = new DynamicComponentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
