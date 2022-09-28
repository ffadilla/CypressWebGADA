import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestListPage from "../page_objects/inboundRequestListPage";

const inboundRequestListPage = new InboundRequestListPage();

When("user clicks inbound Request list tab", () => {
  inboundRequestListPage.clickRequestTab();
});

When(
  "user applies {string} to find related inbound Request",
  (keyword: string) => {
    if (keyword === "canceled Source ID") {
      cy.get("@sourceDetailSourceID").then((sourceID) => {
        inboundRequestListPage.setSearchKeyword(String(sourceID));
      });
    } else if (keyword === "created Source ID") {
      cy.get("@inboundFormSourceID").then((sourceID) => {
        inboundRequestListPage.setSearchKeyword(String(sourceID));
      });
    } else inboundRequestListPage.setSearchKeyword(keyword);
  }
);

When("user resets any applied keyword filter at inbound Request list", () => {
  inboundRequestListPage.resetSearchKeyword();
});

When(
  "user applies {string} as delivery date filter at inbound Request list",
  (deliveryDate: string) => {
    inboundRequestListPage.setDeliveryDateFilter(deliveryDate);
  }
);

When(
  "user resets any applied delivery date filter at inbound Request list",
  () => {
    inboundRequestListPage.resetDeliveryDate();
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

When(
  "user applies {string} as page amount at inbound Request list",
  (value: string) => {
    inboundRequestListPage.setPageAmount(value);
  }
);

When("user clicks create new inbound request button", () => {
  inboundRequestListPage.clickCreateNewRequest();
});

When("user clicks the first data on inbound Request table", () => {
  inboundRequestListPage.clickFirstRequest();
});

Then("user should be at inbound Request list", () => {
  expect(cy.url().should("include", inboundRequestListPage.path));
});

Then("user should able to see succeeded cancelation message", () => {
  inboundRequestListPage.assertSnackbar();
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
  "user should only able to see {string} inbound Request per page maximum",
  (value: string) => {
    inboundRequestListPage.assertTotalPageAmount(value);
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

Then(
  "user should able to see {string} Request at inbound Request list",
  (value: string) => {
    if (value === "created") inboundRequestListPage.assertCreatedRequestItem();
    else if (value === "canceled")
      inboundRequestListPage.assertCanceledRequestItem();
  }
);
