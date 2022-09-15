import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundReceiptListPage from "../page_objects/inboundReceiptListPage";

const inboundReceiptListPage = new InboundReceiptListPage();

When(
  "user applies {string} to find related inbound Receipt",
  (keyword: string) => {
    inboundReceiptListPage.setSearchKeyword(keyword);
  }
);

When("user resets any applied keyword filter at inbound Receipt list", () => {
  inboundReceiptListPage.resetSearchKeyword();
});

When(
  "user applies {string} as delivery date filter at inbound Receipt list",
  (deliveryDate: string) => {
    inboundReceiptListPage.setDeliveryDateFilter(deliveryDate);
  }
);

When(
  "user resets any applied delivery date filter at inbound Receipt list",
  () => {
    inboundReceiptListPage.resetDeliveryDate();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Receipt list",
  (deliveryMethod: string) => {
    inboundReceiptListPage.setDeliveryMethodFilter(deliveryMethod);
  }
);

When(
  "user clicks {string} status chip at inbound Receipt list",
  (status: string) => {
    inboundReceiptListPage.clickStatusChip(status);
  }
);

Then("user should be at inbound Receipt list", () => {
  expect(cy.url().should("include", inboundReceiptListPage.path));
});

Then(
  "query param for {string} {string} should be added to inbound Receipt list URL",
  (val: string, attribute: string) => {
    const target =
      attribute === "keyword" ? "search" : attribute.split(" ").join("_");
    const value =
      attribute === "delivery method" ? val.split(" ").join("_") : val;

    if (attribute === "status") {
      inboundReceiptListPage.assertStatusQueryParam(value);
    } else if (attribute === "delivery date") {
      inboundReceiptListPage.assertDateQueryParam(target, value);
    } else if (attribute === "delivery method" && val === "Semua Metode") {
      inboundReceiptListPage.assertQueryParam(target, "all");
    } else {
      inboundReceiptListPage.assertQueryParam(target, value);
    }
  }
);

Then(
  "user should only able to see inbound Receipts with {string} matched {string}",
  (attribute: string, value: string) => {
    inboundReceiptListPage.assertReceiptItemsBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see inbound Receipt with {string} {string}",
  (value: string, attribute: string) => {
    if (value === "Semua Metode") return;
    else if (attribute === "delivery date") {
      const expectedDeliveryDate =
        inboundReceiptListPage.setExpectedDeliveryDate(parseInt(value));
      inboundReceiptListPage.assertReceiptItemsBySearchFilter(
        "delivery date",
        expectedDeliveryDate
      );
    } else {
      inboundReceiptListPage.assertReceiptItemsBySearchFilter(attribute, value);
    }
  }
);

Then("user should able to see empty inbound Receipts list", () => {
  inboundReceiptListPage.assertEmptyList();
});
