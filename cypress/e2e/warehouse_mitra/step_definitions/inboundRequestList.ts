import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestListPage from "../page_objects/inboundRequestListPage";

const inboundRequestListPage = new InboundRequestListPage();

When("user clicks inbound Receipt list tab", () => {
  inboundRequestListPage.clickReceiptTab();
});

When(
  "user applies {string} to find related inbound Request",
  (keyword: string) => {
    inboundRequestListPage.setSearchKeyword(keyword);
  }
);
When(
  "user applies {string} as delivery date filter at inbound Request list",
  (deliveryDate: string) => {
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
  "user clicks {string} status chip at inbound Request list",
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

When("user clicks the first data on inbound Request table", () => {
  inboundRequestListPage.clickFirstRequest();
});

Then("user should be at inbound Request list", () => {
  expect(cy.url().should("include", inboundRequestListPage.path));
});

Then(
  "query param for {string} {string} should be added to inbound Request list URL",
  (val: string, attribute: string) => {
    const target =
      attribute === "keyword" ? "search" : attribute.split(" ").join("_");
    const value =
      attribute === "delivery method" ? val.split(" ").join("_") : val;

    if (attribute === "status") {
      inboundRequestListPage.assertStatusQueryParam(value);
    } else if (attribute === "delivery date") {
      inboundRequestListPage.assertDateQueryParam(target, value);
    } else if (attribute === "delivery method" && val === "Semua Metode") {
      inboundRequestListPage.assertQueryParam(target, "all");
    } else {
      inboundRequestListPage.assertQueryParam(target, value);
    }
  }
);

Then(
  "user should only able to see inbound Requests with {string} matched {string}",
  (attribute: string, value: string) => {
    inboundRequestListPage.assertRequestItemsBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see inbound Request with {string} {string}",
  (value: string, attribute: string) => {
    if (value === "Semua Metode") return;
    else if (attribute === "delivery date") {
      const expectedDeliveryDate =
        inboundRequestListPage.setExpectedDeliveryDate(parseInt(value));
      inboundRequestListPage.assertRequestItemsBySearchFilter(
        "delivery date",
        expectedDeliveryDate
      );
    } else {
      inboundRequestListPage.assertRequestItemsBySearchFilter(attribute, value);
    }
  }
);

Then("user should able to see empty inbound Requests list", () => {
  inboundRequestListPage.assertEmptyList();
});

Then("user should able to see created Request at inbound Request list", () => {
  inboundRequestListPage.assertCreatedRequestItem();
});
