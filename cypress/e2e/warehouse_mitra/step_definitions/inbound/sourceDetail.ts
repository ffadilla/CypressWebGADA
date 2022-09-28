import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import SourceDetailPage from "../../page_objects/inbound/sourceDetailPage";

const sourceDetailPage = new SourceDetailPage();

When("user cancels Source at inbound Source detail", () => {
  sourceDetailPage.cancelSource();
});

Then(
  "user should be at inbound Source detail page with {string} Request",
  (status: string) => {
    expect(cy.url().should("include", sourceDetailPage.path));
    sourceDetailPage.assertSourceUI(status);
  }
);

Then(
  "user should see similar inbound Source data between detail page and {string} Request",
  (status: string) => {
    sourceDetailPage.assertSourceDataByRequestDetail(status);
  }
);

Then(
  "user should see similar inbound Source data between detail page and inbound form",
  () => {
    sourceDetailPage.assertSourceDataByInboundForm();
  }
);
