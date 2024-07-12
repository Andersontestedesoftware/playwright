// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async({ page }) =>{
  await page.goto('https://automationpratice.com.br/')
})
test('Login Com sucesso @login', async ({ page }) => {
  //const button = await page.getByRole('button', {name: 'Send Mail'})
  const texto = await page.waitForSelector('text=NEWSLETTER') 
  await texto.scrollIntoViewIfNeeded()
  //await button.scrollIntoViewIfNeeded()
  //await button.click()
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Com sucesso 1', async ({ page }) => {
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Com sucesso 2', async ({ page }) => {
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});


test('Login Com sucessoo @login', async ({ page }) => {
  //const button = await page.getByRole('button', {name: 'Send Mail'})
  const texto = await page.waitForSelector('text=NEWSLETTER') 
  await texto.scrollIntoViewIfNeeded()
  //await button.scrollIntoViewIfNeeded()
  //await button.click()
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Com sucesso 5', async ({ page }) => {
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Com sucesso 4', async ({ page }) => {
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});


test.afterEach(async({ page }) =>{
  //
})