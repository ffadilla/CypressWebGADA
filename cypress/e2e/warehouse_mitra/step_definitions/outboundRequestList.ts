import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import OutboundRequestListPage from "../page_objects/outboundRequestListPage";

const outboundRequestListPage = new OutboundRequestListPage();

When("user selects the current outbound request", () => {
  outboundRequestListPage.getOutboundDetailAPI();
  outboundRequestListPage.clickCurrentOutboundRequest();
});

And("the total outbound request on status shall be correct", () => {
  outboundRequestListPage.getCurrentDataAmountOnPagination();
  outboundRequestListPage.assertTotalOutboundRequest();
});

And("the add outbound request button will be clickable", () => {
  outboundRequestListPage.assertAddOutboundButtonEnabled();
});

And("the total outbound request on the next page shall be correct", () => {
  outboundRequestListPage.assertTotalOutboundNextPage();
});

And("user chooses to create a new outbound request", () => {
  outboundRequestListPage.getProductUnitAccessListAPI();
  outboundRequestListPage.clickAddOutboundRequest();
  outboundRequestListPage.clickCreateNewOutbound();
});

And("user searches the recently created outbound request", () => {
  outboundRequestListPage.searchRecentlyAddedOutboundId();
});

And("user goes to the outbound second page", () => {
  outboundRequestListPage.getOutbondListPageAPI();
  outboundRequestListPage.getCurrentDataAmountOnPagination();
  outboundRequestListPage.getCurrentFilterDate();
  outboundRequestListPage.checkSecondPage();
  outboundRequestListPage.getOutboundListResponseAPI();
  outboundRequestListPage.waitListToRender();
  outboundRequestListPage.getCurrentTotalDataOnList();
});

And("user searches for an outbound current valid outboundId", () => {
  outboundRequestListPage.getCurrentOutboundId();
  outboundRequestListPage.searchCurrentOutboundId();
});

And("user searches for an outbound invalid outboundId", () => {
  outboundRequestListPage.getCurrentOutboundId();
  outboundRequestListPage.searchInvalidId();
});

And("user filters outbound delivery_date by {string}", (date: string) => {
  outboundRequestListPage.selectDeliveryDate(date);
  outboundRequestListPage.getOutboundListResponseAPI();
});

And("user resets the delivery_date filter back to default", () => {
  outboundRequestListPage.resetDeliveryDateFilter();
  outboundRequestListPage.getCurrentFilterDate();
});

Then(
  "user will be {string} to the outbound request list page",
  (keyword: string) => {
    switch (keyword) {
      case "redirected back":
        outboundRequestListPage.assertInOutboundListPage();
        break;
      case "redirected":
        outboundRequestListPage.assertInOutboundListPage();
        outboundRequestListPage.getOutboundListResponseAPI();
        outboundRequestListPage.waitListToRender();
        outboundRequestListPage.getCurrentFilterDate();
        outboundRequestListPage.getCurrentDataAmountOnPagination();
        break;
    }
  }
);

Then("the default outbound request list will be showed", () => {
  outboundRequestListPage.assertOutboundListDefault();
});

Then(
  "the default outbound request list by delivery_date will be showed",
  () => {
    outboundRequestListPage.assertOutboundListDefaultByDate();
  }
);

Then(
  "the outbound request list with status {string} will be showed",
  (status: string) => {
    outboundRequestListPage.getOutboundListResponseAPI();
    outboundRequestListPage.waitListToRender();
    outboundRequestListPage.getCurrentRequestStatus();
    outboundRequestListPage.assertOutboundStatus(status);
    outboundRequestListPage.getCurrentOutboundId();
    outboundRequestListPage.getCurrentRequestId();
    outboundRequestListPage.getCurrentRecipientName();
    outboundRequestListPage.getCurrentDeliveryMethod();
    outboundRequestListPage.getCurrentRequestStatus();
    outboundRequestListPage.getCurrentDeliveryDate();
  }
);

Then("the total outbound request shall be correct", () => {
  outboundRequestListPage.assertTotalOutboundRequest();
});

Then(
  "the total row of the outbound request list will be {int} rows per page",
  () => {
    outboundRequestListPage.getCurrentTotalDataPerPage();
    outboundRequestListPage.getCurrentTotalDataOnList();
    outboundRequestListPage.assertTotalDataPerPage();
  }
);

Then(
  "the outbound request list with delivery_date on {string} will be showed",
  (date: string) => {
    outboundRequestListPage.assertOutboundListByDate(date);
  }
);

Then(
  "the outbound request list with delivery_method by {string} will be showed",
  (method: string) => {
    outboundRequestListPage.getCurrentDeliveryMethod();
    outboundRequestListPage.assertOutboundListByMethod(method);
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
