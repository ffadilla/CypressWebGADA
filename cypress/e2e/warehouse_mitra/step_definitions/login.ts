import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../e2e/warehouse_mitra/page_objects/loginPage";

const loginPage = new LoginPage();

//PRECONDITION

Given("user is at login page", () => {
  loginPage.navigate(loginPage.path);
});

//STEP
When("user fills email input with {string} at login page", (email: string) => {
  cy.get(loginPage.emailField).type(email);
});

When(
  "user fills password input with {string} at login page",
  (password: string) => {
    cy.get(loginPage.passwordField).type(password);
  }
);

When("user click MASUK button at login page", () => {
  loginPage.clickLoginButton();
});

//ASSERTION
Then(
  "{string} error message at login page should appear",
  (errorMessage: string) => {
    expect(
      cy.xpath(loginPage.errorLoginButton).should("contain.text", errorMessage)
    );
  }
);
