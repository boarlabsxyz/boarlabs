import { test, expect } from '@playwright/test';

test('should render IntroductionSection with title and subtext', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  const mainText = page.locator('.IntroductionSection_mainText__D_HRm');

  await expect(mainText).toBeVisible();

  const title = mainText.locator('.IntroductionSection_title__kBNWW');
  await expect(title).toBeVisible();
  await expect(title).toHaveText(
    'BoarLabs is a young growing team of IT developers'
  );

  const subtext = mainText.locator('.IntroductionSection_subtext__tYKYG');
  await expect(subtext).toBeVisible();
  await expect(subtext).toHaveText(
    'We work to learn, design, code and build products for the better!'
  );
});
