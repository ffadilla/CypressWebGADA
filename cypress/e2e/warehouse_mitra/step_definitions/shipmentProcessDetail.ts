import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import ShipmentProcessDetailPage from "../page_objects/shipmentProcessDetailPage";

const shipmentProcessDetailPage = new ShipmentProcessDetailPage();

When("user wants to view the shipment detail data", () => {
  shipmentProcessDetailPage.clickExpandShipmentId();
  shipmentProcessDetailPage.clickFirstShipmentDetail();
});

And("user wants to download the outbound list", () => {
  shipmentProcessDetailPage.clickDownloadOutboundList();
});

Then("the shipmentId shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentId();
});

Then("the outbound list file shall be downloaded successfully", () => {
  shipmentProcessDetailPage.assertOutboundListFileExist();
});

And("the outbound type shall be correct", () => {
  shipmentProcessDetailPage.assertFirstOutboundType();
});

And("the shipment date shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentDeliveryDate();
});

And("the shipment recipient name shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentRecipientName();
});

And("the shipment method shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentDeliveryMethod();
});

And("the outboundId shall be corect", () => {
  shipmentProcessDetailPage.assertFirstOutboundId();
});

And("the outbound request date shall be correct", () => {
  shipmentProcessDetailPage.assertFirstRequestDate();
});

And("the shipment status shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentStatus();
});

And("the total outbound request shall be correct", () => {
  shipmentProcessDetailPage.assertFirstTotalOutboundRequest();
});
