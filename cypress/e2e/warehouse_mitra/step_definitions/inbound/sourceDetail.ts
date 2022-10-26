import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import SourceDetailPage from "../../page_objects/inbound/sourceDetailPage";

const sourceDetailPage = new SourceDetailPage();

When("user cancels Source at inbound Source detail", () => {
  sourceDetailPage.cancelSource();
});

When("user clicks historical reception button at inbound Source detail", () => {
  sourceDetailPage.clickHistoryCTA();
});

When(
  "user should be able to download {string} document on inbound Source detail's history popup",
  (value: string) => {
    sourceDetailPage.downloadSourceAttachment(value);
  }
);

When("user closes historical reception popup at inbound Source detail", () => {
  sourceDetailPage.closeHistoryPopup();
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

Then(
  "user should see similar inbound Source data between historical reception and request data",
  () => {
    sourceDetailPage.assertHistoryDataByRequestDetail();
  }
);

Then(
  "user should see similar inbound Source data between historical reception and submitted Receipt data",
  () => {
    sourceDetailPage.assertHistoryDataByReceiptSubmission();
  }
);
