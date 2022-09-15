import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestListPage = new OutboundRequestListPage();

And("user is in menu Barang Keluar", () => {
  outboundRequestListPage.selectMenuOutbound();
});

When("user goes to the outbound request last page", () => {
  outboundRequestListPage.checkReqLastPage();
});

When("user inputs valid requestId", () => {
  outboundRequestListPage.searchRequest();
});

Then("show valid requestId search result {string}", (value: string) => {
  outboundRequestListPage.assertSearchResultWithArg(value);
});

Then("show valid requestId search result", () => {
  outboundRequestListPage.assertSearchResult();
});

Then("show the outbound request default list", () => {
  outboundRequestListPage.assertListDefault();
});

Then("show outbound requests result with status {string}", (value: string) => {
  outboundRequestListPage.assertResultStatus(value);
});

Then("the total outbound request should be correct", () => {
  outboundRequestListPage.assertTotalData();
});

Then("show total {int} data request per page", () => {
  outboundRequestListPage.assertTotalDataPerPage();
});

Then("show outbound request delivery_date on {string}", (value: string) => {
  outboundRequestListPage.assertDeliveryDate(value);
});

Then("show outbound request delivery_method by {string}", (value: string) => {
  outboundRequestListPage.assertDelivMethodWithArg(value);
});
