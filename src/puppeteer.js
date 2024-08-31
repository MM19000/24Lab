

const puppeteer = require('puppeteer');

const testCreateUserButton = async () => {
  let browser;
  let page;

  try {
    // Step 1 - Launch Puppeteer and assign response to the browser variable
    browser = await puppeteer.launch({ headless: false }); 

    // Step 2 - Using the browser variable, create a new page and assign the response to the page variable
    page = await browser.newPage();

    // Step 3 - Using the page variable go to the correct URL that the React app is running on
    await page.goto('http://localhost:8080'); 

    // Step 4 - Using the page variable, use the click method by passing the ".create-user" class name
    // await page.click('.create-user');
    // await page.click('.create-user');
    // await page.click('.create-user');
    

    // Step 5 - Using the page variable, use the screenshot method to generate a screenshot of the React app with the newly created user
    await page.screenshot({ path: 'screenshot.png', fullPage: true }); 

  } catch (error) {
    console.error('Error during Puppeteer operation:', error);
  } finally {
    
    if (browser) {
      await browser.close();
    }
  }
}
module.exports = testCreateUserButton;