import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ListAllRequestPage from "../page_objects/purchase_request/listAllRequestPage";

const listAllRequestPage = new ListAllRequestPage();

When("user clicks the first purchase request to open the details", () => {
  listAllRequestPage.clickPurchaseRequestCard(0);
});

Then("purchase request details opened successfully", () => {
  listAllRequestPage.assertTextContains(
    listAllRequestPage.text,
    "Detail Pengajuan"
  );
});
