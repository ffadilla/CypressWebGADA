/**
 * This file should only related to WMS global header and sidebar menu.
 */

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
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

When(
  "user applies {string} and its store as global filters",
  (warehouse: string) => {
    basePage.header.setGlobalFilter(warehouse);
  }
);

When("user redirects to inbound Request menu", () => {
  basePage.sidebar.clickInboundRequestMenu();
});

When("user redirects to inbound Receipt menu", () => {
  basePage.sidebar.clickInboundReceiptMenu();
});

When("user redirects to the previous visited page", () => {
  cy.go("back");
});

Then("user should see disabled global filter dropdown", () => {
  basePage.header.assertDisabledGlobalFilter();
});
