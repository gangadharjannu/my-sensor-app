import { MyWeatherAppPage } from './app.po';

describe('my-weather-app App', () => {
  let page: MyWeatherAppPage;

  beforeEach(() => {
    page = new MyWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
