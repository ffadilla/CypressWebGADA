import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestListPage from "../page_objects/inboundRequestListPage";
const inboundRequestListPage = new InboundRequestListPage();

When("user clicks create inbound request button", () => {
  cy.xpath(inboundRequestListPage.createRequestButton).click();
});

When("user selects new inbound request dropdown", () => {
  cy.contains(inboundRequestListPage.createNewRequestButtonOption).click();
});

//ASSERTION
Then("user should be at inbound Request list", () => {
  expect(cy.url().should("include", inboundRequestListPage.path));
});
