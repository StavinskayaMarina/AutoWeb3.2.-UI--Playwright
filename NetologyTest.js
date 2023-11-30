const login = require("./user");
const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 3000,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru");
    expect(page.url()).toBe("https://netology.ru/");
  };

  await page.pause();

  await browser.close();
})();
