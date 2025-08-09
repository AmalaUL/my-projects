require('dotenv').config();

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_APPLICATION_URL,
    env: {
      "backendUrl": process.env.CYPRESS_APPLICATION_BACKENDURL,
      "userId": process.env.CYPRESS_APPLICATION_USERID,
      "password": process.env.CYPRESS_APPLICATION_PASSWORD
    },
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },

  },
});
