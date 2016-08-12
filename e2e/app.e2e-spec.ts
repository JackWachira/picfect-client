import { PicfectPage } from './app.po';

describe('picfect App', function() {
  let page: PicfectPage;

  beforeEach(() => {
    page = new PicfectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
