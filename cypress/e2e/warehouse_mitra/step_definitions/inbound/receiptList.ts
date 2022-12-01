import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  assertAPIRequestHeaders,
  assertDateQueryParam,
  assertQueryParam,
} from "../../../warehouse_core/common/assertions";
import { interceptAPI } from "../../../warehouse_core/common/utils";
import ReceiptListPage, {
  getSearchbox,
} from "../../page_objects/inbound/receiptListPage";

const receiptListPage = new ReceiptListPage("mitra", getSearchbox());

When(
  "user applies {string} and its store as global filters at inbound Receipt list",
  (warehouse: string) => {
    interceptAPI("GET", "/inbound/receipts/list/?*", "inboundReceiptListAPI");
    receiptListPage.header.setGlobalFilter(warehouse);
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
    receiptListPage.baseList.setSearchKeyword(keyword);
    receiptListPage.waitSearchRender();
  }
);

When("user resets any applied keyword filter at inbound Receipt list", () => {
  receiptListPage.baseList.resetSearchKeyword();
  receiptListPage.waitSearchRender();
});

When(
  "user applies {string} date, {string} month, {string} year as delivery date filter at inbound Receipt list",
  (deliveryDate: string, deliveryMonth: string, deliveryYear: string) => {
    receiptListPage.baseList.setDeliveryDateFilter(
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
    receiptListPage.baseList.resetDeliveryDate();
    receiptListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Receipt list",
  (deliveryMethod: string) => {
    receiptListPage.baseList.setDeliveryMethodFilter(deliveryMethod);
    receiptListPage.waitSearchRender();
  }
);

When(
  "user clicks {string} status chip at inbound Receipt list",
  (status: string) => {
    receiptListPage.baseList.statusChip.clickStatusChip(status);
    receiptListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as page amount at inbound Receipt list",
  (value: string) => {
    receiptListPage.pagination.setPageAmount(value);
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
    receiptListPage.baseList.assertSnackbar(value);
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
      receiptListPage.baseList.assertStatusQueryParam(value);
    } else if (attribute === "delivery date") {
      assertDateQueryParam(target, value);
    } else if (attribute === "delivery method" && val === "Semua Metode") {
      assertQueryParam(target, "all");
    } else {
      assertQueryParam(target, value);
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
    receiptListPage.pagination.assertTotalPageAmount(value);
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
  receiptListPage.baseList.assertEmptyList();
});

Then(
  "{string} UUID should be added as inbound Receipt list API headers",
  (warehouse: string) => {
    assertAPIRequestHeaders(
      "@inboundReceiptListAPI",
      "warehouse-id",
      receiptListPage.configData.warehouseData[warehouse].warehouseUUID
    );
    assertAPIRequestHeaders(
      "@inboundReceiptListAPI",
      "store-id",
      receiptListPage.configData.warehouseData[warehouse].stores[0].storeUUID
    );
  }
);

Then(
  "user should see {string} applied as warehouse store dropdown on inbound Receipt popup",
  (warehouse: string) => {
    receiptListPage.assertReceiptPopupFilter(
      warehouse,
      receiptListPage.configData.warehouseData[warehouse].stores[0].storeName
    );
  }
);
