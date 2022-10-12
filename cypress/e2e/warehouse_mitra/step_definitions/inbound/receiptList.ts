import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ReceiptListPage from "../../page_objects/inbound/receiptListPage";

const receiptListPage = new ReceiptListPage();

When("user clicks create inbound Receipt button", () => {
  cy.xpath(receiptListPage.createReceiptButton).click();
});

When(
  "user fills create inbound Receipt popup with 1 retrieved Request data",
  () => {
    receiptListPage.submitCreateReceiptPopup();
  }
);

When(
  "user applies {string} to find related inbound Receipt",
  (keyword: string) => {
    receiptListPage.setSearchKeyword(keyword);
  }
);

When("user resets any applied keyword filter at inbound Receipt list", () => {
  receiptListPage.resetSearchKeyword();
});

When(
  "user applies {string} as delivery date filter at inbound Receipt list",
  (deliveryDate: string) => {
    receiptListPage.setDeliveryDateFilter(deliveryDate);
  }
);

When(
  "user resets any applied delivery date filter at inbound Receipt list",
  () => {
    receiptListPage.resetDeliveryDate();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Receipt list",
  (deliveryMethod: string) => {
    receiptListPage.setDeliveryMethodFilter(deliveryMethod);
  }
);

When(
  "user clicks {string} status chip at inbound Receipt list",
  (status: string) => {
    receiptListPage.clickStatusChip(status);
  }
);

When(
  "user applies {string} as page amount at inbound Receipt list",
  (value: string) => {
    receiptListPage.setPageAmount(value);
  }
);

When("user clicks the first data on inbound Receipt table", () => {
  receiptListPage.clickFirstReceipt();
});

Then("user should be at inbound Receipt list", () => {
  cy.get(receiptListPage.firstRowAccordionStatus);
  expect(cy.url().should("include", receiptListPage.path));
});

Then(
  "user should able to see {string} snackbar at inbound Receipt list",
  (value: string) => {
    receiptListPage.assertSnackbar(value);
  }
);

Then(
  "query param for {string} {string} should be added to inbound Receipt list URL",
  (val: string, attribute: string) => {
    const target =
      attribute === "keyword" ? "search" : attribute.split(" ").join("_");
    const value =
      attribute === "delivery method" ? val.split(" ").join("_") : val;

    if (attribute === "status") {
      receiptListPage.assertStatusQueryParam(value);
    } else if (attribute === "delivery date") {
      receiptListPage.assertDateQueryParam(target, value);
    } else if (attribute === "delivery method" && val === "Semua Metode") {
      receiptListPage.assertQueryParam(target, "all");
    } else {
      receiptListPage.assertQueryParam(target, value);
    }
  }
);

Then(
  "user should only able to see inbound Receipts with {string} matched {string}",
  (attribute: string, value: string) => {
    receiptListPage.assertReceiptItemsBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see {string} inbound Receipt per page maximum",
  (value: string) => {
    receiptListPage.assertTotalPageAmount(value);
  }
);

Then(
  "user should only able to see inbound Receipt with {string} {string}",
  (value: string, attribute: string) => {
    if (value === "Semua Metode") return;
    else if (attribute === "delivery date") {
      const expectedDeliveryDate = receiptListPage.setExpectedDeliveryDate(
        parseInt(value)
      );
      receiptListPage.assertReceiptItemsBySearchFilter(
        "delivery date",
        expectedDeliveryDate
      );
    } else {
      receiptListPage.assertReceiptItemsBySearchFilter(attribute, value);
    }
  }
);

Then("user should able to see empty inbound Receipts list", () => {
  receiptListPage.assertEmptyList();
});
