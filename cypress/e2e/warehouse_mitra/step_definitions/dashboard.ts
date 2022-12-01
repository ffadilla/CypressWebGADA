import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import DashboardPage from "../page_objects/dashboardPage";

const dashboardPage = new DashboardPage("mitra");

When("user redirects to Dashboard page", () => {
  dashboardPage.visitDashboard();
});

Then("user should be at dashboard page", () => {
  expect(cy.url().should("include", dashboardPage.path));
});
