import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ReceiptDetailPage from "../../page_objects/inbound/receiptDetailPage";

const receiptDetailPage = new ReceiptDetailPage();

When("user cancels Receipt at inbound Receipt detail page", () => {
  receiptDetailPage.cancelReceipt();
});

When("user deletes allocated quantity on inbound Receipt form", () => {
  receiptDetailPage.deleteAllocatedQuantity();
});

When("user clicks submit inbound Receipt button", () => {
  receiptDetailPage.submitReceipt();
});

Then("user should be able to see error messages on mandatory fields", () => {
  receiptDetailPage.assertErrorAllocatedQty();
  receiptDetailPage.assertErrorExpDate();
  receiptDetailPage.assertErrorDiscrepancyRemark();
  receiptDetailPage.assertErrorAttachments();
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
