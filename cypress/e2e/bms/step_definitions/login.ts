import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/login/loginPage";
import * as enums from "../common/enums";

const loginPage = new LoginPage();

type userRole =
  | "BM"
  | "SBM"
  | "VP"
  | "VP_OPS"
  | "TGA_OPS"
  | "FINANCE"
  | "VIEWER";

Given("user is in Business Management System Login page", () => {
  loginPage.visitPage(loginPage.path);
});

And("user clicks on Masuk dengan Email button", () => {
  cy.get(loginPage.loginWithEmailButton).click();
});

And("user selects {string} user email", (userRole: userRole) => {
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
});

When("user clicks on Login button", () => {
  cy.get(loginPage.loginButton).click();
});

Then("user logged in successfully", () => {
  loginPage.assertTextContains(loginPage.bmsText, "Business Management System");
});

Given("user logged in as {string}", (userRole: userRole) => {
  loginPage.visitPage(loginPage.path);
  cy.get(loginPage.loginWithEmailButton).click();
  loginPage.selectUserEmail(enums.userRoleEmail[userRole]);
  cy.get(loginPage.loginButton).click();
  loginPage.assertTextContains(loginPage.bmsText, "Business Management System");
});
