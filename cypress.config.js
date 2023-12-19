const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

  // baseUrl: "https://google.com/",
  
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,

viewportHeight:1080,
viewportWidth:1630,


  },
});

