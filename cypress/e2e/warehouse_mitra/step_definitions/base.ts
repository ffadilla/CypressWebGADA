/**
 * This file should only related to WMS global header and sidebar menu.
 */

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";
import BasePage from "../page_objects/basePage";
import OutboundPage from "../page_objects/outboundPage";

const basePage = new BasePage();
const loginPage = new LoginPage();
const outboundPage = new OutboundPage();

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

When("user chooses menu Barang Keluar", () => {
  basePage.sidebar.clickMenuOutbound();
});

When("user redirects to inventory menu", () => {
  basePage.sidebar.clickInventoryMenu();
});

Then("user should see disabled global filter dropdown", () => {
  basePage.header.assertDisabledGlobalFilter();
});

When("user selects menu Permintaan Barang", () => {
  outboundPage.getOutbondListPageAPI();
  outboundPage.getCounterStatusOutboundAPI();
  basePage.sidebar.selectOutboundRequest();
});

When("user selects menu Pengiriman Barang", () => {
  outboundPage.getShipmentListPageAPI();
  outboundPage.getCounterStatusShipmentAPI();
  basePage.sidebar.selectShipmentProcess();
});

Then("user should be logged out", () => {
  basePage.header.logout();
});
