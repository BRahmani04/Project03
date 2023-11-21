const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6hibcx',
  viewportHeight: 1080,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  //retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    SITE_URL: 'https://techglobal-training.com'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/integration/*.cy.{js,jsx,ts,tsx}',
    screenshotOnRunFailure: true,
    video: true,
  },
})
