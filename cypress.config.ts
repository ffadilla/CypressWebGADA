import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";
const fs = require("fs-extra");
const path = require("path");

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
      browserifyOptions: {
        plugin: [["tsify"]],
      },
    })
  );

  const fetchConfigurationByFile = (file) => {
    const pathOfConfigurationFile = `config/cypress.${file}.json`;

    return (
      file &&
      fs.readJson(path.join(__dirname, "cypress/", pathOfConfigurationFile))
    );
  };

  const environment = config.env.configFile || "development";
  const configurationForEnvironment = fetchConfigurationByFile(environment);

  return configurationForEnvironment || config;
}

export default defineConfig({
  chromeWebSecurity: false,
  projectId: "rd4f39",
  e2e: {
    setupNodeEvents,
    // This param is enabled due to the usage of cy.session() for storing a session
    experimentalSessionAndOrigin: false,
    excludeSpecPattern: ["*.js", "*.md"],
    specPattern: "cypress/e2e/**/*.feature",
  },
});
