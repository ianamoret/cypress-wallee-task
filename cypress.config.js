const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1920,
  viewportWidth: 1280,
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://woocommerce.showcase-wallee.com/'
  }
});
