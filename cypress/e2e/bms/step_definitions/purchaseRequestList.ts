import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";
import ListAllRequestPage from "../page_objects/purchase_request/listAllRequestPage";

const basePage = new BasePage();
const listAllRequestPage = new ListAllRequestPage();

When("user clicks the first purchase request to open the details", () => {
  listAllRequestPage.clickPurchaseRequestCard(0);
});

Then("purchase request details opened successfully", () => {
  listAllRequestPage.assertTextContains(
    basePage.selectors.text,
    "Detail Pengajuan"
  );
});
