import { NewprojectPage } from './app.po';

describe('newproject App', () => {
  let page: NewprojectPage;

  beforeEach(() => {
    page = new NewprojectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
