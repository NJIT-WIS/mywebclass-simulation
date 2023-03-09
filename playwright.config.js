const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  // Directory where test files are located.
  testDir: './tests',

  // Maximum time each test can run for.
  timeout: 30 * 1000,

  // Maximum time the expect() function should wait for a condition to be met.
  expect: {
    timeout: 5000
  },

  // Run tests in files in parallel.
  fullyParallel: true,

  // Forbid test.only() on CI environments.
  forbidOnly: !!process.env.CI,

  // Retry failed tests up to 2 times on CI environments.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI environments.
  workers: process.env.CI ? 1 : undefined,

  // Use the 'list' reporter for test results.
  reporter: 'list',

  // Set shared settings for all projects.
  use: {
    // Maximum time each action such as click() can take. Defaults to 0 (no limit).
    actionTimeout: 0,

    // Base URL to use in actions like await page.goto('/').
    // Uncomment and set a value if your tests need to navigate to a specific URL.
    // baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test.
    // See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',

    // Set screenshot options for failed tests.
    screenshot: 'only-on-failure',
    screenshotPath: path.join(process.cwd(), 'screenshots'),

    // Set video options for failed tests.
    video: 'retain-on-failure',
    videoSize: { width: 1920, height: 1080 },
    videoPath: path.join(process.cwd(), 'videos')
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],

        // Set context options for the browser.
        contextOptions: {
          viewport: {
            width: 1920,
            height: 1080
          },
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
          acceptDownloads: true
        },

        // Set additional options for the browser.
        launchOptions: {
          headless: true,
          args: [
            '--disable-infobars',
            '--disable-notifications',
            '--disable-web-security'
          ]
        }
      }
    },

    // Uncomment and configure projects for other browsers, such as Firefox and Safari.
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     launchOptions: { headless: true }
    //   }
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     launchOptions: { headless: true }
    //   }
    // }
  ],

  // Folder for test artifacts such as screenshots, videos, traces, etc.
  // Uncomment and set a value if you want to specify an output directory.
  // outputDir: 'test-results/',

  // Start a local development server before running tests.
  webServer: {
    command: 'npm run start',
    port: 3000,
    reuseExistingServer: true
  }
})
