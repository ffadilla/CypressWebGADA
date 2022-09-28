import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestDetailPage from "../page_objects/outboundRequestDetailPage";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestDetailPage = new OutboundRequestDetailPage();
const outboundRequestListPage = new OutboundRequestListPage();

When("user wants to view the outbound detail data", () => {
  outboundRequestListPage.clickFirstRequestDetail();
});

And("user goes back to the outbound request list page", () => {
  outboundRequestDetailPage.clickBackToRequestList();
});

Then("the outboundId shall be correct", () => {
  outboundRequestDetailPage.assertFirstOutboundId();
});

And("the requestId shall be correct", () => {
  outboundRequestDetailPage.assertFirstReqId();
});

And("the recipient name shall be correct", () => {
  outboundRequestDetailPage.assertFirstRecipientName();
});

And("the delivery method shall be correct", () => {
  outboundRequestDetailPage.assertFirstDeliveryMethod();
});

And("the request status shall be correct", () => {
  outboundRequestDetailPage.assertFirstRequestStatus();
});

And("the shipment date on the outbound request list shall be correct", () => {
  outboundRequestDetailPage.assertFirstShipmentDate();
});
