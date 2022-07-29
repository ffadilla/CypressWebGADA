import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../integration/saas/page_objects/HomePage";

const homePage = new HomePage();

Given("SAAS - a user is on home page", () => {
  cy.clearCookies();
  homePage.visitHomePage();
});

When("SAAS - user clicks close tutorial button", () => {
  cy.wait(5000);
  homePage.clickCloseTutorialButton();
});

When("SAAS - user clicks confirm close tutorial button", () => {
  homePage.clickConfirmCloseTutorialButton();
});

When("SAAS - user clicks cancel close tutorial button", () => {
  homePage.clickCancelCloseTutorialButton();
});
// assertions
