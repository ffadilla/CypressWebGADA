import { When, Then, And, But } from "@badeball/cypress-cucumber-preprocessor";
import OutboundPage from "../page_objects/outboundPage";

const outboundPage = new OutboundPage();

When("user goes to the second page", () => {
  outboundPage.checkSecondPage();
});

When("user inputs ID {string}", (value: string) => {
  outboundPage.inputRequestWithArg(value);
});

When("user filters status by {string}", (value: string) => {
  outboundPage.selectStatus(value);
});

When("user filters delivery_date by {string}", (value: string) => {
  outboundPage.selectDeliveryDate(value);
});

When("user filters delivery_method by {string}", (value: string) => {
  outboundPage.selectDeliveryMethod(value);
});

When("user chooses total {int} data per page", (value: number) => {
  outboundPage.selectTotalPage(value);
});

And("the previous page button will be disabled", () => {
  outboundPage.assertPrevButtonDisable();
});

Then("the previous page button will be clickable", () => {
  outboundPage.assertPrevButtonEnable();
});

But("the next page button will be clickable", () => {
  outboundPage.assertNextButtonEnable();
});

And("user deletes the search input", () => {
  outboundPage.resetSearchRequest();
});

And("user resets the delivery_date filter back to default", () => {
  outboundPage.resetDelivDateFilter();
});

And("user changes delivery_method filter back to default", () => {
  outboundPage.resetDeliveryMethod();
});

And(
  "the total data with status {string} should be correct",
  (value: string) => {
    outboundPage.assertTotalOutboundStatus(value);
  }
);

Then(
  "show default list with delivery_method filter as {string}",
  (value: string) => {
    outboundPage.assertDefaultDelivMethodFilterWithArg(value);
  }
);

Then("show invalid ID search result {string}", (value: string) => {
  outboundPage.assertInvalidSearchResult(value);
});

Then(
  "show default list with delivery_date filter as {string}",
  (value: string) => {
    outboundPage.assertDefaultDelivDateFilterWithArg(value);
  }
);
