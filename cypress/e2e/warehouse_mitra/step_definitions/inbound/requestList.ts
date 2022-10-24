import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import RequestListPage from "../../page_objects/inbound/requestListPage";

const requestListPage = new RequestListPage();

When(
  "user applies {string} to find related inbound Request",
  (keyword: string) => {
    if (keyword === "canceled Source ID") {
      cy.get("@sourceDetailSourceID").then((sourceID) => {
        requestListPage.setSearchKeyword(String(sourceID));
      });
    } else if (keyword === "created Source ID") {
      cy.get("@inboundFormSourceID").then((sourceID) => {
        requestListPage.setSearchKeyword(String(sourceID));
      });
    } else requestListPage.setSearchKeyword(keyword);
    requestListPage.waitSearchRender();
  }
);

When("user resets any applied keyword filter at inbound Request list", () => {
  requestListPage.resetSearchKeyword();
  requestListPage.waitSearchRender();
});

When(
  "user applies {string} date, {string} month, {string} year as delivery date filter at inbound Request list",
  (deliveryDate: string, deliveryMonth: string, deliveryYear: string) => {
    requestListPage.setDeliveryDateFilter(
      deliveryDate,
      deliveryMonth,
      deliveryYear
    );
    requestListPage.waitSearchRender();
  }
);

When(
  "user resets any applied delivery date filter at inbound Request list",
  () => {
    requestListPage.resetDeliveryDate();
    requestListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Request list",
  (deliveryMethod: string) => {
    requestListPage.setDeliveryMethodFilter(deliveryMethod);
    requestListPage.waitSearchRender();
  }
);

When(
  "user clicks {string} status chip at inbound Request list",
  (status: string) => {
    requestListPage.clickStatusChip(status);
    requestListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as page amount at inbound Request list",
  (value: string) => {
    requestListPage.setPageAmount(value);
    requestListPage.waitSearchRender();
  }
);

When("user clicks create new inbound request button", () => {
  requestListPage.clickCreateNewRequest();
});

When("user clicks the first data on inbound Request table", () => {
  requestListPage.clickFirstRequest();
});

Then("user should be at inbound Request list", () => {
  expect(cy.url().should("include", requestListPage.path));
});

Then(
  "user should able to see {string} snackbar at inbound Request list",
  (value: string) => {
    requestListPage.assertSnackbar(value);
  }
);

Then(
  "query param for {string} {string} should be added to inbound Request list URL",
  (val: string, attribute: string) => {
    const target =
      attribute === "keyword" ? "search" : attribute.split(" ").join("_");
    const value =
      attribute === "delivery method" ? val.split(" ").join("_") : val;

    if (attribute === "status") {
      requestListPage.assertStatusQueryParam(value);
    } else if (attribute === "delivery date") {
      requestListPage.assertDateQueryParam(target, value);
    } else if (attribute === "delivery method" && val === "Semua Metode") {
      requestListPage.assertQueryParam(target, "all");
    } else {
      requestListPage.assertQueryParam(target, value);
    }
  }
);

Then(
  "user should only able to see inbound Requests with {string} matched {string}",
  (attribute: string, value: string) => {
    requestListPage.assertRequestItemsBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see {string} inbound Request per page maximum",
  (value: string) => {
    requestListPage.assertTotalPageAmount(value);
  }
);

Then(
  "user should only able to see inbound Request with {string} {string}",
  (value: string, attribute: string) => {
    if (value === "Semua Metode") return;
    else if (attribute === "delivery date") {
      requestListPage.assertRequestItemsBySearchFilter("delivery date", value);
    } else {
      requestListPage.assertRequestItemsBySearchFilter(attribute, value);
    }
  }
);

Then("user should able to see empty inbound Requests list", () => {
  requestListPage.assertEmptyList();
});

Then(
  "user should able to see {string} Request at inbound Request list",
  (value: string) => {
    if (value === "created") requestListPage.assertCreatedRequestItem();
    else if (value === "canceled") requestListPage.assertCanceledRequestItem();
  }
);
