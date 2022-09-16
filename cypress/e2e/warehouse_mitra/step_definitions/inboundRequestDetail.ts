import { Then } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestDetailPage from "../page_objects/inboundRequestDetailPage";

const inboundRequestDetailPage = new InboundRequestDetailPage();

Then(
  "user should be at {string} inbound Request detail page",
  (status: string) => {
    expect(cy.url().should("include", inboundRequestDetailPage.path));
    inboundRequestDetailPage.assertRequestUI(status);
  }
);

Then(
  "user should see similar inbound Request data between detail page and request list",
  () => {
    inboundRequestDetailPage.assertRequestDataByRequestList();
  }
);

Then(
  "user should see similar inbound Request data between detail page and inbound form",
  () => {
    inboundRequestDetailPage.assertRequestDataByInboundForm();
  }
);
