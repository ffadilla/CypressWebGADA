import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ReceiptDetailPage from "../../page_objects/inbound/receiptDetailPage";

const receiptDetailPage = new ReceiptDetailPage();

When(
  "user selects {string} as expiry date on inbound Receipt form",
  (value: string) => {
    receiptDetailPage.selectExpDate(value);
  }
);

When(
  "user downloads Berkas Serah Terima document on inbound Receipt form",
  () => {
    receiptDetailPage.downloadPrintableDoc();
  }
);

When(
  "user attaches downloaded document to {string} field on inbound Receipt form",
  (value: string) => {
    receiptDetailPage.setAttachment(value);
  }
);

When(
  "user types {string} on allocated quantity at inbound Receipt form",
  (value: string) => {
    receiptDetailPage.setAllocatedQuantity(value);
  }
);

When("user cancels Receipt at inbound Receipt detail page", () => {
  receiptDetailPage.cancelReceipt();
});

When("user clicks submit inbound Receipt button", () => {
  receiptDetailPage.submitReceipt();
});

When("user confirm inbound Receipt submission popup", () => {
  receiptDetailPage.confirmReceiptSubmission();
});

Then("user should be able to see error messages on mandatory fields", () => {
  receiptDetailPage.assertErrorAllocatedQty();
  receiptDetailPage.assertErrorExpDate();
  receiptDetailPage.assertErrorDiscrepancyRemark();
  receiptDetailPage.assertErrorAttachments();
});

Then(
  "user should be able to download {string} document on inbound Receipt form",
  (value: string) => {
    receiptDetailPage.downloadAttachment(value);
  }
);

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
  "user should see similar inbound Receipt data between detail page and submitted data",
  () => {
    receiptDetailPage.assertReceiptDataByReceiptSubmission();
  }
);

Then(
  "user should see similar inbound Receipt data between detail page and Request data",
  () => {
    receiptDetailPage.assertReceiptDataByRequestDetail();
  }
);
