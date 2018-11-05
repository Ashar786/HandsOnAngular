import { Angular7Page } from './app.po';

describe('angular7 App', function() {
  let page: Angular7Page;

  beforeEach(() => {
    page = new Angular7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
