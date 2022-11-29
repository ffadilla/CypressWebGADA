import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import ShipmentProcessDetailPage from "../page_objects/shipmentProcessDetailPage";

const shipmentProcessDetailPage = new ShipmentProcessDetailPage("mitra");

And("user downloads the travel document file", () => {
  shipmentProcessDetailPage.clickDownloadTravelDocument();
});

And("user downloads the outbound list file", () => {
  shipmentProcessDetailPage.clickDownloadOutboundList();
});

And("user confirms a single source request", () => {
  shipmentProcessDetailPage.clickSingleItemConfirmation();
});

And("user confirms all items", () => {
  shipmentProcessDetailPage.clickAllItemsConfirmation();
  shipmentProcessDetailPage.clickConfirm();
});

And("user attaches the travel document file", () => {
  shipmentProcessDetailPage.attachTravelDocument();
});

And("user submits the shipment process", () => {
  shipmentProcessDetailPage.getShipmentSubmissionAPI();
  shipmentProcessDetailPage.clickSubmitShipmentProcess();
});

And(
  "user will see similar data between data on the shipment process list page and data on the detail page",
  () => {
    shipmentProcessDetailPage.assertCurrentShipmentId();
    shipmentProcessDetailPage.assertCurrentOutboundType();
    shipmentProcessDetailPage.assertCurrentDeliveryDate();
    shipmentProcessDetailPage.assertCurrentRecipientName();
    shipmentProcessDetailPage.assertCurrentDeliveryMethod();
    shipmentProcessDetailPage.assertCurrentOutboundId();
    shipmentProcessDetailPage.assertCurrentRequestDate();
    shipmentProcessDetailPage.assertCurrentShipmentStatus();
    shipmentProcessDetailPage.assertCurrentTotalRequest();
  }
);

Then("user will be redirected to the shipment process detail page", () => {
  shipmentProcessDetailPage.assertInShipmentDetailPage();
  shipmentProcessDetailPage.waitElementsToRender();
  shipmentProcessDetailPage.getDownloadOutboundListAPI();
  shipmentProcessDetailPage.getDownloadOutboundTravelAPI();
  shipmentProcessDetailPage.getDownloadPDFAPI();
  shipmentProcessDetailPage.getFirstOrderAmount();
  shipmentProcessDetailPage.getFirstCurrentItemAmount();
});

Then("the {string} will be downloaded successfully", (doc: string) => {
  shipmentProcessDetailPage.assertPDFDownloadSucceed();
  shipmentProcessDetailPage.assertDownloadSucceed(doc);
});

And("the CTA download outbound list will be enabled", () => {
  shipmentProcessDetailPage.assertDownloadOutboundListEnable();
});

And("the submit button will be disabled", () => {
  shipmentProcessDetailPage.assertShipmentSubmitDisable();
});

And("the CTA shipment cancelation text link will be enabled", () => {
  shipmentProcessDetailPage.assertShipmentCancelationEnable();
});

And("the subtract button will be enabled", () => {
  shipmentProcessDetailPage.assertSubtractButtonEnable();
});

And("the subtract button will be disabled", () => {
  shipmentProcessDetailPage.assertSubtractButtonDisable();
});

And("the add button will be disabled", () => {
  shipmentProcessDetailPage.assertAddButtonDisable();
});

And("the add button will be enabled", () => {
  shipmentProcessDetailPage.assertAddButtonEnable();
});

And("the add other UOM button will be enabled", () => {
  shipmentProcessDetailPage.assertFirstAddOtherUOMEnable();
});

And(
  "the default soon-to-be sent {string} shall be correct",
  (value: string) => {
    shipmentProcessDetailPage.assertFirstTotalOrder(value);
  }
);

And("there will be no discrepancy amount", () => {
  shipmentProcessDetailPage.assertFirstDiscrepancyAmount();
});

And("the default discrepancy reason will be {string}", (reason: string) => {
  shipmentProcessDetailPage.assertFirstDiscrepancyReason(reason);
});

And("the button confirmation will be enabled", () => {
  shipmentProcessDetailPage.assertFirstConfirmationEnable();
});

And("the checkbox for the next shipment will be disabled", () => {
  shipmentProcessDetailPage.assertIsPartialDisable();
});

And("the button all items confirmation should be disabled", () => {
  shipmentProcessDetailPage.assertAllItemsConfirmationDisable();
});

And("the button all items confirmation should be enabled", () => {
  shipmentProcessDetailPage.assertAllItemsConfirmationEnable();
});

And("the CTA upload travel document will be enabled", () => {
  shipmentProcessDetailPage.assertUploadTravelDocumentEnable();
});

And("the CTA Lihat Expiry Date text link will be enabled", () => {
  shipmentProcessDetailPage.assertViewExpiryDate();
});

And("the CTA download travel document will be enabled", () => {
  shipmentProcessDetailPage.assertDownloadTravelDocumentEnable();
});

And("the button confirmation will be changed to {string}", (value: string) => {
  shipmentProcessDetailPage.assertChangeToEdit(value);
});

And("the item amount will be read-only", () => {
  shipmentProcessDetailPage.assertItemAmountDisable();
});
