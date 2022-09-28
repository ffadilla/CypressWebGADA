import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import OutboundPage from "../page_objects/outboundPage";
import ShipmentProcessDetailPage from "../page_objects/shipmentProcessDetailPage";
import ShipmentProcessListPage from "../page_objects/shipmentProcessListPage";

const shipmentProcessDetailPage = new ShipmentProcessDetailPage();
const shipmentProcessListPage = new ShipmentProcessListPage();
const outboundPage = new OutboundPage();

When("user wants to view the shipment detail data", () => {
  shipmentProcessListPage.clickExpandShipmentId();
  shipmentProcessListPage.clickFirstShipmentDetail();
});

And("user downloads the travel document file", () => {
  shipmentProcessDetailPage.clickDownloadOutboundList();
});

And("user confirms the first total outbound list for shipment process", () => {
  shipmentProcessDetailPage.clickFirstItemConfirmation();
});

And("user confirms all the total outbound", () => {
  shipmentProcessDetailPage.clickAllItemsConfirmation();
  shipmentProcessDetailPage.clickConfirm();
});

And("user attaches the travel document file", () => {
  shipmentProcessDetailPage.attachTravelDoc();
});

And("user submits the shipment process", () => {
  shipmentProcessDetailPage.clickSubmitShipmentProcess();
});

Then("the shipmentId shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentId();
});

Then("the outbound list file shall be downloaded successfully", () => {
  shipmentProcessDetailPage.assertOutboundListFileExist();
});

Then("the shipment status will be changed to {string}", (status: string) => {
  shipmentProcessDetailPage.assertSuccessSnackBar();
  outboundPage.inputRequest();
  shipmentProcessListPage.assertResultStatus(status);
});

And("the outbound type shall be correct", () => {
  shipmentProcessDetailPage.assertFirstOutboundType();
});

And("the shipment date on the outbound shipment list shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentDeliveryDate();
});

And("the shipment recipient name shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentRecipientName();
});

And("the shipment method shall be correct", () => {
  shipmentProcessDetailPage.assertFirstShipmentDeliveryMethod();
});

And("the outboundId shall be corect", () => {
  shipmentProcessDetailPage.assertFirstShipmentOutboundId();
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

And("the submit button will be disabled", () => {
  shipmentProcessDetailPage.assertShipmentSubmitDisable();
});

And("the CTA shipment cancelation text link will be enabled", () => {
  shipmentProcessDetailPage.assertShipmentCancelationEnable();
});
