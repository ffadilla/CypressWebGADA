const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = (file) => {
  const pathOfConfigurationFile = `config/cypress.${file}.json`;

  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  const environment = config.env.configFile || "development";
  const configurationForEnvironment = fetchConfigurationByFile(environment);

  return configurationForEnvironment || config;
};
