import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import OutboundPage from "../page_objects/outboundPage";

const outboundPage = new OutboundPage();

When("user filters status by {string}", (status: string) => {
  outboundPage.getOutbondListPageAPI();
  outboundPage.getShipmentListPageAPI();
  outboundPage.selectStatus(status);
});

And("user filters delivery_method by {string}", (method: string) => {
  outboundPage.selectDeliveryMethod(method);
});

And("user filters delivery_date by {string}", (date: string) => {
  outboundPage.selectDeliveryDate(date);
});

And("user chooses total {int} data per page", (page: number) => {
  outboundPage.selectTotalPage(page);
});

And("the default search bar shall be empty", () => {
  outboundPage.assertDefaultSearchBar();
});

And("the default filter date shall be correct", () => {
  outboundPage.assertDefaultFilterDate();
});

And("the previous page button will be disabled", () => {
  outboundPage.assertPrevButtonDisable();
});

And("user clears the search input", () => {
  outboundPage.resetSearchRequest();
});

And("user changes delivery_method filter back to default", () => {
  outboundPage.resetDeliveryMethod();
});

And("the next page button will be clickable", () => {
  outboundPage.assertNextButtonEnable();
});

Then("the previous page button will be clickable", () => {
  outboundPage.assertPrevButtonEnable();
});

Then(
  "the default query param for delivery_method will be {string}",
  (method: string) => {
    outboundPage.assertDefaultDeliveryMethodWithArg(method);
  }
);

Then("the error message {string} will be showed", (err: string) => {
  outboundPage.assertInvalidId(err);
});

Then("the outbound request will be created successfully", () => {
  outboundPage.waitOutboundCreationToSucceed();
  outboundPage.assertRequestSuccessSnackBarExist();
});

Then("the shipment process will be submitted successfully", () => {
  outboundPage.waitShipmentSubmissionToSucceed();
  outboundPage.assertShipmentSuccessSnackBarExist();
  outboundPage.getShipmentListPageAPI();
});

Then("the outbound request creation will be failed", () => {
  outboundPage.assertFailSnackBarExist();
});

Then("the expected {string} list will be showed", (keyword: string) => {
  outboundPage.assertCurrentOutboundId(keyword);
});

And("the total {string} on the next page shall be correct", (value: string) => {
  outboundPage.assertTotalDataNextPage(value);
});

And(
  "the total {string} on the selected status shall be correct",
  (value: string) => {
    outboundPage.assertTotalData(value);
  }
);

Then("the total {string} shall be correct", (value: string) => {
  outboundPage.assertTotalData(value);
});

And("user goes to the {string} second page", (value: string) => {
  outboundPage.getOutbondListPageAPI();
  outboundPage.getShipmentListPageAPI();
  outboundPage.getCurrentDataAmountOnPagination(value);
  outboundPage.checkSecondPage();
});
