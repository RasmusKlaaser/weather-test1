import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Weather Application', function() {
  this.timeout(30000);
  let driver;

  before(async () => {
    // Uncomment the browser you want to use: 'firefox' or 'edge'
    driver = await new Builder().forBrowser('firefox').build();
    // driver = await new Builder().forBrowser('edge').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('renders weather application title', async () => {
    await driver.get('http://localhost:5173');
    const linkElement = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Weather Application')]")), 10000);
    const linkText = await linkElement.getText();
    expect(linkText).to.include('Weather Application');
  });

  it('shows city search results', async () => {
    await driver.get('http://localhost:5173');
    const input = await driver.wait(until.elementLocated(By.css('[data-testid="search-input"]')), 10000);
    await input.sendKeys('Melbourne');
    const button = await driver.wait(until.elementLocated(By.css('[data-testid="search-button"]')), 10000);
    await button.click();
    const results = await driver.wait(until.elementsLocated(By.xpath("//*[contains(text(), 'Melbourne')]")), 10000);
    expect(results.length).to.equal(5);
  });

  it('adds search result to my weather list', async () => {
    await driver.get('http://localhost:5173');
    const input = await driver.wait(until.elementLocated(By.css('[data-testid="search-input"]')), 10000);
    await input.sendKeys('Melbourne');
    const button = await driver.wait(until.elementLocated(By.css('[data-testid="search-button"]')), 10000);
    await button.click();
    const results = await driver.wait(until.elementsLocated(By.xpath("//*[contains(text(), 'Melbourne')]")), 10000);
    expect(results.length).to.equal(5);
    const selected = results[3];
    await selected.click();
    const myWeatherList = await driver.wait(until.elementLocated(By.css('[data-testid="my-weather-list"]')), 10000);
    const myWeatherItem = await myWeatherList.findElement(By.xpath("//*[contains(text(), 'Melbourne')]"));
    expect(myWeatherItem).to.not.be.null;
    const searchResults = await driver.findElements(By.css('[data-testid="search-results"]'));
    expect(searchResults.length).to.equal(0);
  });
});