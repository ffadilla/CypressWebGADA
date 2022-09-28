import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundReceiptDetailPage from "../page_objects/inboundReceiptDetailPage";

const inboundReceiptDetailPage = new InboundReceiptDetailPage();

When("user cancels Receipt at inbound Receipt detail page", () => {
  inboundReceiptDetailPage.cancelReceipt();
});

Then(
  "user should be at {string} inbound Receipt detail page",
  (status: string) => {
    expect(cy.url().should("include", inboundReceiptDetailPage.path));
    inboundReceiptDetailPage.assertReceiptUI(status);
  }
);

Then(
  "user should see similar inbound Receipt data between detail page and receipt list",
  () => {
    inboundReceiptDetailPage.assertReceiptDataByReceiptList();
  }
);

Then(
  "user should see similar inbound Receipt data between detail page and Request data",
  () => {
    inboundReceiptDetailPage.assertReceiptDataByRequestDetail();
  }
);
