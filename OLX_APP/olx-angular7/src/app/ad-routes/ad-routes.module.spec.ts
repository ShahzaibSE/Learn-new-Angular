import { AdRoutesModule } from './ad-routes.module';

describe('AdRoutesModule', () => {
  let adRoutesModule: AdRoutesModule;

  beforeEach(() => {
    adRoutesModule = new AdRoutesModule();
  });

  it('should create an instance', () => {
    expect(adRoutesModule).toBeTruthy();
  });
});
