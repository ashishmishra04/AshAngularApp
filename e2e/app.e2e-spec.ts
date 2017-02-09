import { AshAngularAppPage } from './app.po';

describe('ash-angular-app App', function() {
  let page: AshAngularAppPage;

  beforeEach(() => {
    page = new AshAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
