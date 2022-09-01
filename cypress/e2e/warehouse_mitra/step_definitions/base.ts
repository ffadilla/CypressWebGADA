/**
 * This file should only related to WMS global header and sidebar menu.
 */

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";

const basePage = new BasePage();

//STEP
When("user logs out from WMS", () => {
  basePage.logout();
});

When("user redirects to inbound menu", () => {
  cy.xpath(basePage.inboundMenuButton).click();
});

Then("user should be logged out", () => {
  basePage.logout();
});
