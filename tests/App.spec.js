const { test, expect } = require('@playwright/test');
const login = require("../user");

test('Успешная авторизация', async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login.email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(login.pass);
  await page.getByTestId('login-submit-btn').click();

  await expect(page).toHaveURL('https://netology.ru/profile');
  await expect(page.getByRole('heading', { name: 'Моё обучение' })).toHaveText('Моё обучение');

});

test('Неуспешная авторизация', async ({ page }) => {

  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login.email);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill("somepass");
  await page.getByTestId('login-submit-btn').click();

  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
  await expect(page.getByTestId('login-error-hint')).toHaveText("Вы ввели неправильно логин или пароль");

});
