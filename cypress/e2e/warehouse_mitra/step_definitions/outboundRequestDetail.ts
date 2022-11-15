import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestDetailPage from "../page_objects/outboundRequestDetailPage";
const outboundRequestDetailPage = new OutboundRequestDetailPage();

And("user chooses to go back", () => {
  outboundRequestDetailPage.getOutboundIdOnDetail();
  outboundRequestDetailPage.clickBack();
});

Then("user will be redirected to the outbound request detail page", () => {
  outboundRequestDetailPage.assertInOutboundDetailPage();
  outboundRequestDetailPage.getCreateDateOnDetail();
  outboundRequestDetailPage.getDeliveryDateOnDetail();
  outboundRequestDetailPage.getDeliveryMethodOnDetail();
  outboundRequestDetailPage.getFirstProductName();
  outboundRequestDetailPage.getFirstTotalItem();
  outboundRequestDetailPage.getOutboundIdOnDetail();
  outboundRequestDetailPage.getRecipientOnDetail();
  outboundRequestDetailPage.getOutboundTypeOnDetail();
  outboundRequestDetailPage.getShipperOnDetail();
  outboundRequestDetailPage.getStatusOnDetail();
  outboundRequestDetailPage.getShipperWarehouseLocationOnDetail();
  outboundRequestDetailPage.getRequestIdOnDetail();
});

And(
  "user will see similar data between data on the outbound request list page and data on the detail page",
  () => {
    outboundRequestDetailPage.assertCurrentOutboundId();
    outboundRequestDetailPage.assertCurrentRequestId();
    outboundRequestDetailPage.assertCurrentRecipientName();
    outboundRequestDetailPage.assertCurrentDeliveryMethod();
    outboundRequestDetailPage.assertCurrentRequestStatus();
    outboundRequestDetailPage.assertCurrentShipmentDate();
  }
);

And("user submits the new outbound request", () => {
  outboundRequestDetailPage.getShipmentCreateAPI();
  outboundRequestDetailPage.clickSubmitOutbound();
  outboundRequestDetailPage.waitShipmentCreationToSucceed();
  outboundRequestDetailPage.getDetailPageAPI();
});

And("the send outbound button will be enabled", () => {
  outboundRequestDetailPage.assertSendOutboundButtonEnable();
});

And("the back button will be visible", () => {
  outboundRequestDetailPage.assertBackButtonEnable();
});
