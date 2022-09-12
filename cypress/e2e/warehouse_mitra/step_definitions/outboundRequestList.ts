import { When, Then, And, But } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestListPage = new OutboundRequestListPage();

And("user is in menu Barang Keluar", () => {
  outboundRequestListPage.selectMenuOutbound();
});

When("user check the outbound request first page", () => {
  outboundRequestListPage.checkReqFirstPage();
});

When("user check the outbound shipment first page", () => {
  outboundRequestListPage.checkShipFirstPage();
});

When("user goes to the second page", () => {
  outboundRequestListPage.checkSecondPage();
});

When("user goes to the outbound request last page", () => {
  outboundRequestListPage.checkReqLastPage();
});

When("user goes to the outbound shipment last page", () => {
  outboundRequestListPage.checkShipLastPage();
});

When("user inputs valid requestId", () => {
  outboundRequestListPage.searchRequest();
});

When("user inputs requestId {string}", (value: string) => {
  outboundRequestListPage.inputRequestWithArg(value);
});

And("user deletes the search input", () => {
  outboundRequestListPage.resetSearchRequest();
});

When("user inputs shipmentId {string}", (value: string) => {
  outboundRequestListPage.inputRequestWithArg(value);
});

When("user filters outbound requests by {string}", (value: string) => {
  outboundRequestListPage.selectStatus(value);
});

When("user goes to outbound shipment page", () => {
  outboundRequestListPage.selectShipment();
});

When("user inputs valid shipmentId", () => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.searchShipment();
});

When("user filters outbound shipments by {string}", (value: string) => {
  outboundRequestListPage.selectShipment();
  outboundRequestListPage.selectStatus(value);
});

When(
  "user filters outbound request delivery_date by {string}",
  (value: string) => {
    outboundRequestListPage.selectDeliveryDate(value);
  }
);

When(
  "user filters outbound shipment delivery_date by {string}",
  (value: string) => {
    outboundRequestListPage.selectShipment();
    outboundRequestListPage.selectDeliveryDate(value);
  }
);

And("user resets the delivery_date filter back to default", () => {
  outboundRequestListPage.resetDelivDateFilter();
});

When(
  "user filters outbound request delivery_method by {string}",
  (value: string) => {
    outboundRequestListPage.selectDeliveryMethod(value);
  }
);

When(
  "user filters outbound shipment delivery_method by {string}",
  (value: string) => {
    outboundRequestListPage.selectShipment();
    outboundRequestListPage.selectDeliveryMethod(value);
  }
);

And("user changes delivery_method filter back to default", () => {
  outboundRequestListPage.resetDeliveryMethod();
});

When("user chooses total {int} data per page", (value: number) => {
  outboundRequestListPage.selectPage(value);
});

Then("show valid requestId search result {string}", (value: string) => {
  outboundRequestListPage.assertRequestSearchResultWithArg(value);
});

Then("show valid requestId search result", () => {
  outboundRequestListPage.assertRequestSearchResult();
});

Then("show valid shipmentId search result {string}", (value: string) => {
  outboundRequestListPage.assertShipmentSearchResultWithArg(value);
});

Then("show valid shipmentId search result", () => {
  outboundRequestListPage.assertShipmentSearchResult();
});

Then("show the outbound request default list", () => {
  outboundRequestListPage.assertReqListDefault();
});

Then("show the outbound shipment default list", () => {
  outboundRequestListPage.assertShipListDefault();
});

Then("show invalid requestId search result {string}", (value: string) => {
  outboundRequestListPage.assertInvalidSearchResult(value);
});

Then("show invalid shipmentId search result {string}", (value: string) => {
  outboundRequestListPage.assertInvalidSearchResult(value);
});

Then("show outbound requests result with status {string}", (value: string) => {
  outboundRequestListPage.assertReqResultStatus(value);
});

And(
  "the total outbound request with status {string} should be correct",
  (value: string) => {
    outboundRequestListPage.assertTotalOutboundStatus(value);
  }
);

Then("show outbound shipments result with status {string}", (value: string) => {
  outboundRequestListPage.assertShipResultStatus(value);
});

And(
  "the total outbound shipment with status {string} should be correct",
  (value: string) => {
    outboundRequestListPage.assertTotalOutboundStatus(value);
  }
);

Then("the total outbound request should be correct", () => {
  outboundRequestListPage.assertTotalOutboundRequest();
});

Then("the total outbound shipment should be correct", () => {
  outboundRequestListPage.assertTotalOutboundShipment();
});

Then("show total {int} data request per page", () => {
  outboundRequestListPage.assertTotalDataReqPerPage();
});

Then("show total {int} data shipment per page", () => {
  outboundRequestListPage.assertTotalDataShipPerPage();
});

Then("show outbound request delivery_date on {string}", (value: string) => {
  outboundRequestListPage.assertRequestDeliveryDate(value);
});

Then("show outbound shipment delivery_date on {string}", (value: string) => {
  outboundRequestListPage.assertShipmentDeliveryDate(value);
});

Then(
  "show default list with delivery_date filter as {string}",
  (value: string) => {
    outboundRequestListPage.assertDefaultDelivDateFilterWithArg(value);
  }
);

Then("show outbound request delivery_method by {string}", (value: string) => {
  outboundRequestListPage.assertReqDelivMethodWithArg(value);
});

Then("show outbound shipment delivery_method by {string}", (value: string) => {
  outboundRequestListPage.assertShipDelivMethodWithArg(value);
});

Then(
  "show default list with delivery_method filter as {string}",
  (value: string) => {
    outboundRequestListPage.assertDefaultDelivMethodFilterWithArg(value);
  }
);

And("the previous page button will be disabled", () => {
  outboundRequestListPage.assertPrevButtonDisable();
});

Then("the previous page button will be clickable", () => {
  outboundRequestListPage.assertPrevButtonEnable();
});

But("the next page button will be clickable", () => {
  outboundRequestListPage.assertNextButtonEnable();
});

But("the next page button will be disabled", () => {
  outboundRequestListPage.assertNextButtonDisable();
});
