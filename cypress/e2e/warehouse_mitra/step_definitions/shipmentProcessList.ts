import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import ShipmentProcessListPage from "../page_objects/shipmentProcessListPage";

const shipmentProcessListPage = new ShipmentProcessListPage("mitra");

And("user chooses Shipment Process page", () => {
  shipmentProcessListPage.selectShipmentProcess();
});

When("user goes to the outbound shipment last page", () => {
  shipmentProcessListPage.checkShipLastPage();
});

When("user inputs valid shipmentId", () => {
  shipmentProcessListPage.searchFirstShipment();
});

Then("show valid shipmentId search result {string}", (value: string) => {
  shipmentProcessListPage.assertSearchResultWithArg(value);
});

Then("the shipmentId result will be showed", () => {
  shipmentProcessListPage.assertSearchResult();
});

Then("the outbound shipment default list will be showed", () => {
  shipmentProcessListPage.assertShipmentDefaultList();
});

Then(
  "the outbound shipment result with status {string} will be showed",
  (value: string) => {
    shipmentProcessListPage.assertResultStatus(value);
  }
);

Then("the total outbound shipment shall be correct", () => {
  shipmentProcessListPage.assertTotalData();
});

Then(
  "the total row of the outbound shipment list will be {int} rows per page",
  () => {
    shipmentProcessListPage.assertTotalDataPerPage();
  }
);

Then(
  "the outbound shipment delivery_date on {string} will be showed",
  (value: string) => {
    shipmentProcessListPage.assertDeliveryDate(value);
  }
);

Then(
  "the outbound shipment delivery_method by {string} will be showed",
  (value: string) => {
    shipmentProcessListPage.assertDelivMethodWithArg(value);
  }
);
