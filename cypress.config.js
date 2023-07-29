const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout : 10000,
    baseUrl:"https://www.eurostar.com/rw-en",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern:"cypress/e2e/*.feature"
  },
});
