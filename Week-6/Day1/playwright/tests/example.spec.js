const { test, expect } = require('@playwright/test');

test('Day 5 API page loads', async ({ page }) => {
  await page.goto('http://host.docker.internal:8001');

  await expect(page.locator('body')).toContainText('Hello from Environment');
});

//Change to master