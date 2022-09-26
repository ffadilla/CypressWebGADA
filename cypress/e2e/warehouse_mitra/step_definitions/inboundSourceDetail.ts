import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundSourceDetailPage from "../page_objects/inboundSourceDetailPage";

const inboundSourceDetailPage = new InboundSourceDetailPage();

When("user cancels Source at inbound Source detail", () => {
  inboundSourceDetailPage.cancelSource();
});

Then(
  "user should be at inbound Source detail page with {string} Request",
  (status: string) => {
    expect(cy.url().should("include", inboundSourceDetailPage.path));
    inboundSourceDetailPage.assertSourceUI(status);
  }
);

Then(
  "user should see similar inbound Source data between detail page and {string} Request",
  (status: string) => {
    inboundSourceDetailPage.assertSourceDataByRequestDetail(status);
  }
);

Then(
  "user should see similar inbound Source data between detail page and inbound form",
  () => {
    inboundSourceDetailPage.assertSourceDataByInboundForm();
  }
);
