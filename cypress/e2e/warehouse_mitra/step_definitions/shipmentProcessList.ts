import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import ShipmentProcessListPage from "../page_objects/shipmentProcessListPage";

const shipmentProcessListPage = new ShipmentProcessListPage();

And("user is in Shipment Process page", () => {
  shipmentProcessListPage.selectShipmentProcess();
});

When("user goes to the outbound shipment last page", () => {
  shipmentProcessListPage.checkShipLastPage();
});

When("user inputs valid shipmentId", () => {
  shipmentProcessListPage.searchShipment();
});

Then("show valid shipmentId search result {string}", (value: string) => {
  shipmentProcessListPage.assertSearchResultWithArg(value);
});

Then("show valid shipmentId search result", () => {
  shipmentProcessListPage.assertSearchResult();
});

Then("show the outbound shipment default list", () => {
  shipmentProcessListPage.assertListDefault();
});

Then("show outbound shipments result with status {string}", (value: string) => {
  shipmentProcessListPage.assertResultStatus(value);
});

Then("the total outbound shipment should be correct", () => {
  shipmentProcessListPage.assertTotalData();
});

Then("show total {int} data shipment per page", () => {
  shipmentProcessListPage.assertTotalDataPerPage();
});

Then("show outbound shipment delivery_date on {string}", (value: string) => {
  shipmentProcessListPage.assertDeliveryDate(value);
});

Then("show outbound shipment delivery_method by {string}", (value: string) => {
  shipmentProcessListPage.assertDelivMethodWithArg(value);
});
