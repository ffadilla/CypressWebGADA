import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestListPage = new OutboundRequestListPage();

When("user inputs valid requestId", () => {
  outboundRequestListPage.searchRequest();
});

Then("show valid requestId search result {string}", (value: string) => {
  outboundRequestListPage.assertSearchResultWithArg(value);
});

Then("the requestId result will be showed", () => {
  outboundRequestListPage.assertSearchResult();
});

Then("the outbound request default list will be showed", () => {
  outboundRequestListPage.assertRequestDefaultList();
});

Then("show outbound requests result with status {string}", (value: string) => {
  outboundRequestListPage.assertResultStatus(value);
});

Then("the total outbound request should be correct", () => {
  outboundRequestListPage.assertTotalData();
});

Then(
  "the total row of the outbound request list will be {int} rows per page",
  () => {
    outboundRequestListPage.assertTotalDataPerPage();
  }
);

Then(
  "the outbound request delivery_date on {string} will be showed",
  (value: string) => {
    outboundRequestListPage.assertDeliveryDate(value);
  }
);

Then(
  "the outbound request delivery_method by {string} will be showed",
  (value: string) => {
    outboundRequestListPage.assertDelivMethodWithArg(value);
  }
);
