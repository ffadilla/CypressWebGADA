import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ReceiptDetailPage from "../../page_objects/inbound/receiptDetailPage";

const receiptDetailPage = new ReceiptDetailPage();

When("user cancels Receipt at inbound Receipt detail page", () => {
  receiptDetailPage.cancelReceipt();
});

Then(
  "user should be at {string} inbound Receipt detail page",
  (status: string) => {
    expect(cy.url().should("include", receiptDetailPage.path));
    receiptDetailPage.assertReceiptUI(status);
  }
);

Then(
  "user should see similar inbound Receipt data between detail page and receipt list",
  () => {
    receiptDetailPage.assertReceiptDataByReceiptList();
  }
);

Then(
  "user should see similar inbound Receipt data between detail page and Request data",
  () => {
    receiptDetailPage.assertReceiptDataByRequestDetail();
  }
);
