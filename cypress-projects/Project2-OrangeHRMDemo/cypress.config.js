require('dotenv').config();
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_APPLICATION_URL,

    env: {
      "userId": process.env.CYPRESS_APPLICATION_USERID,
      "password": process.env.CYPRESS_APPLICATION_PASSWORD
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }


  },
});
