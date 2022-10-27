import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ReceiptListPage from "../../page_objects/inbound/receiptListPage";

const receiptListPage = new ReceiptListPage();

When(
  "user applies {string} and its store as global filters at inbound Receipt list",
  (warehouse: string) => {
    receiptListPage.utils.interceptAPI(
      "GET",
      "/inbound/receipts/list/?*",
      "inboundReceiptListAPI"
    );
    receiptListPage.setGlobalFilter(warehouse);
  }
);

When("user clicks create inbound Receipt button", () => {
  receiptListPage.clickCreateNewReceipt();
});

When(
  "user fills create inbound Receipt popup with 1 retrieved Request data",
  () => {
    receiptListPage.selectWarehouseStoreAtCreatePopup();
    receiptListPage.submitCreateReceiptPopup();
  }
);

When(
  "user fills create inbound Receipt popup with 1 retrieved Request data when global filter was applied",
  () => {
    receiptListPage.submitCreateReceiptPopup();
  }
);

When(
  "user applies {string} to find related inbound Receipt",
  (keyword: string) => {
    receiptListPage.setSearchKeyword(keyword);
    receiptListPage.waitSearchRender();
  }
);

When("user resets any applied keyword filter at inbound Receipt list", () => {
  receiptListPage.resetSearchKeyword();
  receiptListPage.waitSearchRender();
});

When(
  "user applies {string} date, {string} month, {string} year as delivery date filter at inbound Receipt list",
  (deliveryDate: string, deliveryMonth: string, deliveryYear: string) => {
    receiptListPage.setDeliveryDateFilter(
      deliveryDate,
      deliveryMonth,
      deliveryYear
    );
    receiptListPage.waitSearchRender();
  }
);

When(
  "user resets any applied delivery date filter at inbound Receipt list",
  () => {
    receiptListPage.resetDeliveryDate();
    receiptListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Receipt list",
  (deliveryMethod: string) => {
    receiptListPage.setDeliveryMethodFilter(deliveryMethod);
    receiptListPage.waitSearchRender();
  }
);

When(
  "user clicks {string} status chip at inbound Receipt list",
  (status: string) => {
    receiptListPage.clickStatusChip(status);
    receiptListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as page amount at inbound Receipt list",
  (value: string) => {
    receiptListPage.setPageAmount(value);
    receiptListPage.waitSearchRender();
  }
);

When("user clicks the first data on inbound Receipt table", () => {
  receiptListPage.clickFirstReceipt();
});

Then("user should be at inbound Receipt list", () => {
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
      receiptListPage.assertReceiptItemsBySearchFilter("delivery date", value);
    } else {
      receiptListPage.assertReceiptItemsBySearchFilter(attribute, value);
    }
  }
);

Then("user should able to see empty inbound Receipts list", () => {
  receiptListPage.assertEmptyList();
});

Then(
  "{string} UUID should be added as inbound Receipt list API headers",
  (warehouse: string) => {
    receiptListPage.assertAPIRequestHeaders(
      "@inboundReceiptListAPI",
      "warehouse-id",
      receiptListPage.warehouseData[warehouse].warehouseUUID
    );
    receiptListPage.assertAPIRequestHeaders(
      "@inboundReceiptListAPI",
      "store-id",
      receiptListPage.warehouseData[warehouse].stores[0].storeUUID
    );
  }
);

Then(
  "user should see {string} applied as warehouse store dropdown on inbound Receipt popup",
  (warehouse: string) => {
    receiptListPage.assertReceiptPopupFilter(
      warehouse,
      receiptListPage.warehouseData[warehouse].stores[0].storeName
    );
  }
);
