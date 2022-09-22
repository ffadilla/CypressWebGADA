import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestDetailPage from "../page_objects/outboundRequestDetailPage";

const outboundRequestDetailPage = new OutboundRequestDetailPage();

When("user wants to view the outbound detail data", () => {
  outboundRequestDetailPage.clickFirstRequestDetail();
});

And("user goes back to the outbound request list page", () => {
  outboundRequestDetailPage.clickBackToRequestList();
});

Then("the outboundId should be correct", () => {
  outboundRequestDetailPage.assertFirstOutboundId();
});

And("the requestId should be correct", () => {
  outboundRequestDetailPage.assertFirstReqId();
});

And("the recipient name should be correct", () => {
  outboundRequestDetailPage.assertFirstRecipientName();
});

And("the delivery method should be correct", () => {
  outboundRequestDetailPage.assertFirstDeliveryMethod();
});

And("the request status should be correct", () => {
  outboundRequestDetailPage.assertFirstRequestStatus();
});

And("the shipment date should be correct", () => {
  outboundRequestDetailPage.assertFirstShipmentDate();
});
