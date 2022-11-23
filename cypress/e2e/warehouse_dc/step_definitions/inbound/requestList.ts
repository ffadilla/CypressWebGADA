import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { interceptAPI } from "../../../warehouse_core/common/utils";
import {
  assertQueryParam,
  assertDateQueryParam,
  assertAPIRequestHeaders,
} from "../../../warehouse_core/common/assertions";
import RequestListPage, {
  getSearcbox,
} from "../../page_objects/inbound/requestListPage";

const requestListPage = new RequestListPage("dc", getSearcbox());

When(
  "user applies {string} and its store as global filters at inbound Request list",
  (warehouse: string) => {
    interceptAPI("GET", "/inbound/requests/list/?*", "inboundRequestListAPI");
    requestListPage.header.setGlobalFilter(warehouse);
  }
);

When(
  "user applies {string} to find related inbound Request",
  (keyword: string) => {
    if (keyword === "canceled Source ID") {
      cy.get("@sourceDetailSourceID").then((sourceID) => {
        requestListPage.baseList.setSearchKeyword(String(sourceID));
      });
    } else if (keyword === "created Source ID") {
      cy.get("@inboundFormSourceID").then((sourceID) => {
        requestListPage.baseList.setSearchKeyword(String(sourceID));
      });
    } else requestListPage.baseList.setSearchKeyword(keyword);
    requestListPage.waitSearchRender();
  }
);

When("user resets any applied keyword filter at inbound Request list", () => {
  requestListPage.baseList.resetSearchKeyword();
  requestListPage.waitSearchRender();
});

When(
  "user applies {string} date, {string} month, {string} year as delivery date filter at inbound Request list",
  (deliveryDate: string, deliveryMonth: string, deliveryYear: string) => {
    requestListPage.baseList.setDeliveryDateFilter(
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
    requestListPage.baseList.resetDeliveryDate();
    requestListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as delivery method filter at inbound Request list",
  (deliveryMethod: string) => {
    requestListPage.baseList.setDeliveryMethodFilter(deliveryMethod);
    requestListPage.waitSearchRender();
  }
);

When(
  "user clicks {string} status chip at inbound Request list",
  (status: string) => {
    requestListPage.baseList.clickStatusChip(status);
    requestListPage.waitSearchRender();
  }
);

When(
  "user applies {string} as page amount at inbound Request list",
  (value: string) => {
    requestListPage.pagination.setPageAmount(value);
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
    requestListPage.baseList.assertSnackbar(value);
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
      requestListPage.baseList.assertStatusQueryParam(value);
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
  "user should only able to see inbound Requests with {string} matched {string}",
  (attribute: string, value: string) => {
    requestListPage.assertRequestItemsBySearchFilter(attribute, value);
  }
);

Then(
  "user should only able to see {string} inbound Request per page maximum",
  (value: string) => {
    requestListPage.pagination.assertTotalPageAmount(value);
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
  requestListPage.baseList.assertEmptyList();
});

Then(
  "user should able to see {string} Request at inbound Request list",
  (value: string) => {
    if (value === "created") requestListPage.assertCreatedRequestItem();
    else if (value === "canceled") requestListPage.assertCanceledRequestItem();
  }
);

Then(
  "{string} UUID should be added as inbound Request list API headers",
  (warehouse: string) => {
    assertAPIRequestHeaders(
      "@inboundRequestListAPI",
      "warehouse-id",
      requestListPage.configData.warehouseData[warehouse].warehouseUUID
    );
    assertAPIRequestHeaders(
      "@inboundRequestListAPI",
      "store-id",
      requestListPage.configData.warehouseData[warehouse].stores[0].storeUUID
    );
  }
);
