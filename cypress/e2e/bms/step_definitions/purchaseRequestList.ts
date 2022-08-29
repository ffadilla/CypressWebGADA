import { And, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";
import ListAllRequestPage from "../page_objects/purchase_request/listAllRequestPage";
import WaitingForApprovalPage from "../page_objects/purchase_request/waitingForApprovalPage";

const basePage = new BasePage();
const listAllRequestPage = new ListAllRequestPage();
const witingForApprovalPage = new WaitingForApprovalPage();

// List All Reuquest Page
And("user is in Daftar Pengajuan Pembelian page", () => {
  listAllRequestPage.visitListAllRequestPage();
});

When("user clicks the first purchase request to open the details", () => {
  listAllRequestPage.clickPurchaseRequestCard(0);
});

Then("purchase request details opened successfully", () => {
  listAllRequestPage.assertTextContains(
    basePage.selectors.text,
    "Detail Pengajuan"
  );
});

// Waiting for Approval Page
And("user is in Menunggu Approval page", () => {
  witingForApprovalPage.visitWaitingForApprovalPage();
});
