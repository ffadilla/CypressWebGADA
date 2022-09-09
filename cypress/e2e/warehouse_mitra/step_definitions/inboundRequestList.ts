import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestListPage from "../page_objects/inboundRequestListPage";
import * as utils from "../common/utils";

const inboundRequestListPage = new InboundRequestListPage();

When(
  "user applies {string} to find related inbound Request",
  (keyword: string) => {
    inboundRequestListPage.setSearchKeyword(keyword);
  }
);
When(
  "user applies {int} as delivery date filter at inbound Request list",
  (deliveryDate: number) => {
    inboundRequestListPage.setDeliveryDateFilter(deliveryDate);
  }
);

When(
  "user applies {string} as delivery method filter at inbound Request list",
  (deliveryMethod: string) => {
    inboundRequestListPage.setDeliveryMethodFilter(deliveryMethod);
  }
);

When(
  "user clicks {string} button at inbound Request list",
  (status: string) => {
    inboundRequestListPage.clickStatusChip(status);
  }
);

When("user clicks create inbound request button", () => {
  cy.xpath(inboundRequestListPage.createRequestButton).click();
});

When("user selects new inbound request dropdown", () => {
  cy.contains(inboundRequestListPage.createNewRequestButtonOption).click();
});

Then("user should be at inbound Request list", () => {
  expect(cy.url().should("include", inboundRequestListPage.path));
});

Then(
  "query param for {string} status should be added to inbound Request list URL",
  (value: string) => {
    inboundRequestListPage.assertStatusQueryParam(value);
  }
);

Then(
  "query param for {string} keyword should be added to inbound Request list URL",
  (value: string) => {
    inboundRequestListPage.assertQueryParam("search=", value);
  }
);

Then(
  "query param for {string} delivery method should be added to inbound Request list URL",
  (value: string) => {
    const deliveryMethod =
      value === "Semua Metode" ? "" : value.split(" ").join("_");
    inboundRequestListPage.assertQueryParam("delivery_method=", deliveryMethod);
  }
);

Then(
  "query param for {int} delivery date should be added to inbound Request list URL",
  (value: number) => {
    inboundRequestListPage.assertDateQueryParam("delivery_date=", value);
  }
);

Then(
  "user should only able to see {string} status inbound Request",
  (value: string) => {
    inboundRequestListPage.assertRequestItemsBySearchFilter("status", value);
  }
);

Then(
  "user should only able to see inbound Requests with {string} matched {string}",
  (target: string, value: string) => {
    inboundRequestListPage.assertRequestItemsBySearchFilter(target, value);
  }
);

Then(
  "user should only able to see inbound Request with {string} delivery method",
  (value: string) => {
    if (value === "Semua Metode") return null;
    inboundRequestListPage.assertRequestItemsBySearchFilter(
      "delivery method",
      value
    );
    return null;
  }
);

Then(
  "user should only able to see inbound Request with {int} delivery date",
  (value: number) => {
    const expectedDeliveryDate =
      inboundRequestListPage.setExpectedDeliveryDate(value);
    inboundRequestListPage.assertRequestItemsBySearchFilter(
      "delivery date",
      expectedDeliveryDate
    );
  }
);

Then("user should able to see empty inbound Requests list", () => {
  inboundRequestListPage.assertEmptyList();
});

Then(
  "user should able to see created Request at inbound Request list -- with {string}, {string}, {int}",
  (targetStoreName: string, deliveryMethod: string, deliveryDate: number) => {
    inboundRequestListPage.setSearchKeyword(utils.getSourceID());
    inboundRequestListPage.assertFirtRequestItem(
      utils.getSourceID(),
      targetStoreName,
      deliveryMethod,
      deliveryDate
    );
  }
);
