const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Enable tracing
  await context.tracing.start({ path: 'trace.json' });

  const page = await context.newPage();
  const navigationPromise = page.goto('https://www.example.com');

  // Wait for page to load and become interactive
  await page.waitForLoadState('networkidle');

  // Get TTFB
  const response = await navigationPromise;
  const ttfb = response.timing.responseStart - response.timing.requestStart;

  // Get page load time
  const loadTime = response.timing.loadEventEnd - response.timing.navigationStart;

  // Get resource timings
  const resourceTimings = await page.evaluate(() => performance.getEntriesByType('resource'));

  // Get layout shift score
  const layoutShiftScore = await page.evaluate(() => {
    const layoutShiftEntries = performance.getEntriesByName('layout-shift', 'layout-shift');
    return layoutShiftEntries.reduce((score, entry) => score + entry.value, 0);
  });

  // Get JavaScript execution time
  const jsExecutionTime = await page.evaluate(() => performance.timing.domContentLoadedEventEnd - performance.timing.domContentLoadedEventStart);

  // Get memory usage
  const memoryUsage = await page.evaluate(() => performance.memory.usedJSHeapSize);

  // Print out results
  console.log(`TTFB: ${ttfb}ms`);
  console.log(`Page load time: ${loadTime}ms`);
  console.log(`Resource timings: ${JSON.stringify(resourceTimings)}`);
  console.log(`Layout shift score: ${layoutShiftScore}`);
  console.log(`JavaScript execution time: ${jsExecutionTime}ms`);
  console.log(`Memory usage: ${memoryUsage} bytes`);

  // Stop tracing and close the browser
  await context.tracing.stop();
  await browser.close();
})();
