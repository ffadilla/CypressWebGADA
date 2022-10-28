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

When("user logs out from WMS", () => {
  basePage.logout();
});

When(
  "user applies {string} and its store as global filters",
  (warehouse: string) => {
    basePage.setGlobalFilter(warehouse);
  }
);

When("user redirects to inbound Request menu", () => {
  basePage.clickInboundRequestMenu();
});

When("user redirects to inbound Receipt menu", () => {
  basePage.clickInboundReceiptMenu();
});

When("user redirects to the previous visited page", () => {
  cy.go("back");
});

When("user chooses menu Barang Keluar", () => {
  basePage.clickMenuOutbound();
});

When("user redirects to inventory menu", () => {
  basePage.clickInventoryMenu();
});

Then("user should see disabled global filter dropdown", () => {
  basePage.assertDisabledGlobalFilter();
});

Then("user should be logged out", () => {
  basePage.logout();
});
