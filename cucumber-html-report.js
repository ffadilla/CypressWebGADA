const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/reports/cucumber-json",
  reportPath: "./cypress/reports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "103",
    },
    platform: {
      name: "mac",
      version: "Monterey",
    },
  },
});
