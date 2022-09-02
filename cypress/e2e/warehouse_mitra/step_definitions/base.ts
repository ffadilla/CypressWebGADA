/**
 * This file should only related to WMS global header and sidebar menu.
 */

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";
import BasePage from "../page_objects/basePage";

const basePage = new BasePage();
const loginPage = new LoginPage();

Given(
  "user {string} already logged in to WMS with {string} as password",
  (email: string, password: string) => {
    loginPage.login(email, password);
  }
);

Given("user already logged in to WMS as {string}", (role: string) => {
  loginPage.loginAs(role);
});

Given("user is already logged in", () => {
  loginPage.silentLogin();
});

When("user logs out from WMS", () => {
  basePage.logout();
});

When("user redirects to inbound menu", () => {
  cy.xpath(basePage.inboundMenuButton).click();
});

Then("user should be logged out", () => {
  basePage.logout();
});
