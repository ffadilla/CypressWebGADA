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

//STEP
When("user redirects to inbound menu", () => {
  cy.xpath(dashboardPage.inboundMenuButton).click();
});

//ASSERTION
Then("user should be on dashboard page", () => {
  expect(cy.url().should("include", dashboardPage.path));
});
