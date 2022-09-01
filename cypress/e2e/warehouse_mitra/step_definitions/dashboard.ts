import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../page_objects/dashboardPage";
import LoginPage from "../page_objects/loginPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

//PRECONDITION
Given(
  "user {string} already logged in to WMS with {string} as password",
  (email: string, password: string) => {
    loginPage.login(email, password);
  }
);

Given("user is already logged in", () => {
  loginPage.silentLogin();
});

When("user redirects to Dashboard page", () => {
  dashboardPage.visitDashboard();
});

//ASSERTION
Then("user should be at dashboard page", () => {
  expect(cy.url().should("include", dashboardPage.path));
});
