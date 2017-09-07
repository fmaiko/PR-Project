import { PRProjectPage } from './app.po';

describe('pr-project App', function() {
  let page: PRProjectPage;

  beforeEach(() => {
    page = new PRProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
