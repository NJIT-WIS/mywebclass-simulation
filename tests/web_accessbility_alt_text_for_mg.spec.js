import { test, expect } from "@playwright/test";

test("Alternative text for images should be present", async ({ page, browser }) => {
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, browserName: "safari" });
  const pages = await context.newPage();
  await pages.goto("http://localhost:3000");

  const images = await pages.$$("img");
  for (const image of images) {
    const altText = await image.getAttribute("alt");
    expect(altText).toBeTruthy();
  }
});
