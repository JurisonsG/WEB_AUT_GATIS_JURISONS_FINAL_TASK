const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      // node events
    },
  },
  viewportWidth: 1440,
  viewportHeight: 1200,
});
