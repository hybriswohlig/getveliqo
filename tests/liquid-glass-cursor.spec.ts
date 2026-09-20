import { expect, test } from "playwright/test";

test("activates the liquid-glass cursor after the hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);

  await page.locator("[data-scroll-range]").hover({ position: { x: 320, y: 240 } });
  await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);

  await page.locator("#one-voice").scrollIntoViewIfNeeded();
  await page.locator("#one-voice").hover({ position: { x: 320, y: 240 } });

  await expect(page.locator("[data-liquid-glass-cursor]")).toBeVisible();
  await expect(page.locator("[data-liquid-glass-cursor-ring]")).toBeVisible();
  await expect(page.locator("[data-liquid-glass-cursor-lens]")).toBeVisible();
});

test.describe("touch fallback", () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });

  test("does not render on touch devices", async ({ page }) => {
    await page.goto("/");
    await page.locator("#one-voice").scrollIntoViewIfNeeded();
    await page.mouse.move(320, 240);

    await expect(page.locator("[data-liquid-glass-cursor]")).toHaveCount(0);
  });
});
