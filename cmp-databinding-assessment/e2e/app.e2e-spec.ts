import { CmpDatabindingAssessmentPage } from './app.po';

describe('cmp-databinding-assessment App', () => {
  let page: CmpDatabindingAssessmentPage;

  beforeEach(() => {
    page = new CmpDatabindingAssessmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
