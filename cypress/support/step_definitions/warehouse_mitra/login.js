import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../integration/warehouse_mitra/page_objects/login-page.js";

const loginPage = new LoginPage();

//PRECONDITION

Given("Mitra - user is on log in page", () => {
  loginPage.navigate(loginPage.path);
});

//STEP

When("Mitra - user fills email input with {string}", (email) => {
  cy.get(loginPage.emailField).type(email);
});

When("Mitra - user fills password input with {string}", (password) => {
  cy.get(loginPage.passwordField).type(password);
});

When("Mitra - user click MASUK button", () => {
  cy.get(loginPage.loginButton).click();
});

//ASSERTION

Then("Mitra - user is on dashboard page", () => {
  expect(cy.url().should('include', 'dashboard'));
  loginPage.logout();
});

Then("Mitra - {string} error message should appear", (errorMessage) => {
  expect(cy.get('.css-1r9jg41 > .css-10ttwk5 > .MuiBox-root')
    .should('contain.text', errorMessage));
});
