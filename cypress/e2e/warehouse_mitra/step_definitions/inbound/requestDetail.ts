import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import RequestDetailPage from "../../page_objects/inbound/requestDetailPage";

const requestDetailPage = new RequestDetailPage("mitra");

When("user retrieves data from inbound Request detail page", () => {
  requestDetailPage.invokeRequestDetail();
});

When("user click create Receipt data at inbound Request detail page", () => {
  requestDetailPage.clickCreateReceipt();
});

When("user clicks Source CTA button at inbound Request detail", () => {
  requestDetailPage.clickSourceCTA();
});

Then(
  "user should be at {string} inbound Request detail page",
  (status: string) => {
    expect(cy.url().should("include", requestDetailPage.path));
    requestDetailPage.assertRequestUI(status);
  }
);

Then(
  "user should see similar inbound Request data between detail page and request list",
  () => {
    requestDetailPage.assertRequestDataByRequestList();
  }
);

Then(
  "user should see similar inbound Request data between detail page and inbound form",
  () => {
    requestDetailPage.assertRequestDataByInboundForm();
  }
);

Then(
  "user should see similar inbound Request data between detail page and submitted data",
  () => {
    requestDetailPage.assertRequestDataByReceiptSubmission();
  }
);
