const { defineConfig } = require("cypress");
require('dotenv').config();
const fs = require('fs');
const path = require('path');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        fileExists(filePath) {
          return fs.existsSync(path.join(__dirname, filePath))
        }
      })
    },
    baseUrl: process.env.CYPRESS_APPLICATION_URL,
    env: {
      "emailAddress": process.env.CYPRESS_APPLICATION_EMAIL_ADDRESS,
      "password": process.env.CYPRESS_APPLICATION_PASSWORD

    }
  },

});
