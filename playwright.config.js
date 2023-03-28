const { defineConfig, devices } = require('@playwright/test')
const path = require('path')

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    screenshotPath: path.join(process.cwd(), 'screenshots'),
    video: 'on',
    videoSize: { width: 1920, height: 1080 },
    videoPath: path.join(process.cwd(), 'videos')
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: {
          viewport: {
            width: 1920,
            height: 1080
          },
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
          acceptDownloads: true
        },
        launchOptions: {
          headless: true,
          args: [
            '--disable-infobars',
            '--disable-notifications',
            '--disable-web-security'
          ]
        }
      }
    }
  ],
  webServer: {
    command: 'npm run start',
    port: 3000,
    reuseExistingServer: true
  }
})
