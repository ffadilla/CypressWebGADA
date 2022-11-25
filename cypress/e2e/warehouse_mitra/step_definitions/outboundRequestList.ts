import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestListPage = new OutboundRequestListPage();

When("user selects the current outbound request", () => {
  outboundRequestListPage.getOutboundDetailAPI();
  outboundRequestListPage.getCurrentData();
  outboundRequestListPage.clickCurrentOutboundRequest();
});

And("the add outbound request button will be clickable", () => {
  outboundRequestListPage.assertAddOutboundButtonEnabled();
});

And("user chooses to create a new outbound request", () => {
  outboundRequestListPage.getProductUnitAccessListAPI();
  outboundRequestListPage.clickAddOutboundRequest();
  outboundRequestListPage.clickCreateNewOutbound();
});

And("user searches for the {string} outbound request", (value: string) => {
  outboundRequestListPage.getCurrentOutboundId();
  switch (value) {
    case "invalid":
      outboundRequestListPage.searchInvalidId();
      break;
    default:
      outboundRequestListPage.searchBasedOn(value);
  }
});

And("user resets the outbound delivery_date filter back to default", () => {
  outboundRequestListPage.resetDeliveryDateFilter();
  outboundRequestListPage.getDefaultDeliveryDate();
});

Then(
  "user will be {string} to the outbound request list page",
  (keyword: string) => {
    switch (keyword) {
      case "redirected back":
        outboundRequestListPage.assertUserIsInTheOutboundListPage();
        break;
      case "redirected":
        outboundRequestListPage.assertUserIsInTheOutboundListPage();
        outboundRequestListPage.waitOutboundListResponseAPI();
        outboundRequestListPage.waitListToRender();
        outboundRequestListPage.getDefaultDeliveryDate();
        break;
    }
  }
);

Then("the default outbound request list will be showed", () => {
  outboundRequestListPage.assertOutboundListDefault();
});

/**
 * this is for the next PR
 * Then(
  "the default outbound request list by delivery_date will be showed",
  () => {
    outboundRequestListPage.assertOutboundListDefaultByDate();
  }
);

Then(
  "the default outbound request list by delivery_method will be showed",
  () => {
    outboundRequestListPage.assertOutboundListDefaultByMethod();
  }
);

Then("the recently created outbound request list will be showed", () => {
  outboundRequestListPage.waitListToRender();
  outboundRequestListPage.assertRecentlyAddedOutboundId();
});
 */

Then(
  "the outbound request list with status {string} will be showed",
  (status: string) => {
    outboundRequestListPage.waitOutboundListResponseAPI();
    outboundRequestListPage.waitListToRender();
    outboundRequestListPage.assertOutboundStatus(status);
  }
);

Then("the total row of the outbound request list will be correct", () => {
  outboundRequestListPage.assertTotalDataPerPage();
});

Then(
  "the outbound request list with delivery_date on {string} will be showed",
  (date: string) => {
    outboundRequestListPage.waitOutboundListResponseAPI();
    outboundRequestListPage.assertOutboundListByDate(date);
    outboundRequestListPage.getCurrentDeliveryDate();
    outboundRequestListPage.assertCurrentFilterDate();
  }
);

Then(
  "the outbound request list with delivery_method by {string} will be showed",
  (method: string) => {
    outboundRequestListPage.waitOutboundListResponseAPI();
    outboundRequestListPage.assertOutboundListByMethod(method);
  }
);

Then("user will be redirected to the second page of outbound request", () => {
  outboundRequestListPage.assertUserIsInTheSecondPage();
  outboundRequestListPage.waitOutboundListResponseAPI();
  outboundRequestListPage.waitListToRender();
  outboundRequestListPage.getCurrentTotalDataOnList();
  outboundRequestListPage.getDefaultDeliveryDate();
});
