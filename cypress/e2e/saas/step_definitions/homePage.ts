import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../e2e/saas/page_objects/homePage";

const homePage = new HomePage();

Given("a user is on home page", () => {
  cy.clearCookies();
  homePage.visitHomePage();
});

When("user clicks close tutorial button", () => {
  cy.wait(5000);
  homePage.clickCloseTutorialButton();
});

When("user clicks confirm close tutorial button", () => {
  homePage.clickConfirmCloseTutorialButton();
});

When("user clicks cancel close tutorial button", () => {
  homePage.clickCancelCloseTutorialButton();
});
// assertions
