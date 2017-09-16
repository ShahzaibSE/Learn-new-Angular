import { EventEmitterPage } from './app.po';

describe('event-emitter App', () => {
  let page: EventEmitterPage;

  beforeEach(() => {
    page = new EventEmitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
