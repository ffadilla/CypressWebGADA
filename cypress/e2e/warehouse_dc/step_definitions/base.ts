/**
 * This file should only related to WMS global header and sidebar menu.
 */

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";
import BasePage from "../page_objects/mainPage";

const basePage = new BasePage("dc");
const loginPage = new LoginPage();

Given("user already logged in to WMS as {string}", (role: string) => {
  loginPage.loginAs(role);
});

When("user logs out from WMS", () => {
  basePage.header.logout();
});

When("user redirects to the previous visited page", () => {
  cy.go("back");
});
