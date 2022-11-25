import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import ShipmentProcessListPage from "../page_objects/shipmentProcessListPage";

const shipmentProcessListPage = new ShipmentProcessListPage();

When("user selects the current shipment process", () => {
  shipmentProcessListPage.getShipmentDetailAPI();
  shipmentProcessListPage.getCurrentData();
  shipmentProcessListPage.clickExpandCurrentShipment();
  shipmentProcessListPage.clickCurrentShipmentProcess();
});

/**
 * this is for the next PR
 * And("user searches the recently completed shipment process", () => {
  shipmentProcessListPage.assertShipmentSuccessSnackBarExist();
  shipmentProcessListPage.searchRecentlyCompletedShipmentProcess();
});

And("user searches the recently submitted outbound ID", () => {
  shipmentProcessListPage.searchRecentlySubmittedOutboundId();
});
 */

And("the add shipment process button will be clickable", () => {
  shipmentProcessListPage.assertAddShipmentButtonEnabled();
});

And("user chooses to create a new shipment process", () => {
  shipmentProcessListPage.clickOutboundShipment();
});

And("user searches for the {string} shipment process", (value: string) => {
  shipmentProcessListPage.getCurrentOutboundId();
  shipmentProcessListPage.searchBasedOn(value);
});

Then(
  "user will be {string} to the shipment process list page",
  (keyword: string) => {
    switch (keyword) {
      case "redirected":
        shipmentProcessListPage.assertUserIsInTheShipmentListPage();
        shipmentProcessListPage.waitShipmentListResponseAPI();
        shipmentProcessListPage.waitListToRender();
        shipmentProcessListPage.getDefaultDeliveryDate();
        break;
      case "redirected back":
        shipmentProcessListPage.assertUserIsInTheShipmentListPage();
        break;
    }
  }
);

And("user resets the shipment delivery_date filter back to default", () => {
  shipmentProcessListPage.resetDeliveryDateFilter();
  shipmentProcessListPage.getDefaultDeliveryDate();
});

/**
 * These are for next PR
Then(
  "the recently submitted shipment status will be changed to {string}",
  (status: string) => {
    shipmentProcessListPage.assertShipmentStatus(status);
  }
);
Then("show valid shipmentId search result {string}", (shipmentId: string) => {
  shipmentProcessListPage.assertShipmentSearchResultWithArg(shipmentId);
});

Then("the recently submitted shipment process list will be showed", () => {
  shipmentProcessListPage.assertRecentlySubmittedOutboundId();
});
*/

Then("the default shipment process list will be showed", () => {
  shipmentProcessListPage.assertShipmentListDefault();
});

Then(
  "the shipment process list with status {string} will be showed",
  (status: string) => {
    shipmentProcessListPage.waitShipmentListResponseAPI();
    shipmentProcessListPage.waitListToRender();
    shipmentProcessListPage.assertShipmentStatus(status);
  }
);

Then("the total row of the shipment process list will be correct", () => {
  shipmentProcessListPage.assertTotalDataPerPage();
});

Then(
  "the shipment process list with delivery_date on {string} will be showed",
  (date: string) => {
    shipmentProcessListPage.waitShipmentListResponseAPI();
    shipmentProcessListPage.assertShipmentListByDate(date);
    shipmentProcessListPage.getCurrentDeliveryDate();
    shipmentProcessListPage.assertCurrentFilterDate();
  }
);

Then(
  "the shipment process list with delivery_method by {string} will be showed",
  (method: string) => {
    shipmentProcessListPage.waitShipmentListResponseAPI();
    shipmentProcessListPage.assertShipmentListByMethod(method);
  }
);

Then("user will be redirected to the second page of shipment process", () => {
  shipmentProcessListPage.assertUserIsInTheSecondPage();
  shipmentProcessListPage.waitShipmentListResponseAPI();
  shipmentProcessListPage.waitListToRender();
  shipmentProcessListPage.getCurrentTotalDataOnList();
  shipmentProcessListPage.getDefaultDeliveryDate();
});

/**
 * this is for the next PR
 * Then(
  "the default shipment process list by delivery_date will be showed",
  () => {
    shipmentProcessListPage.assertShipmentListDefaultByDate();
  }
);

Then(
  "the default shipment process list by delivery_method will be showed",
  () => {
    shipmentProcessListPage.assertShipmentListDefaultByMethod();
  }
);
 */
