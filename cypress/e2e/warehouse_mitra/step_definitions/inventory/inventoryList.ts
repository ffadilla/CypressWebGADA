import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  assertDateQueryParam,
  assertQueryParam,
} from "../../../warehouse_core/common/assertions";
import InventoryListPage from "../../page_objects/inventory/inventoryListPage";

const inventoryListPage = new InventoryListPage("mitra");

When("user applies today's date as filter date at inventory list", () => {
  inventoryListPage.interceptListAPI();
  inventoryListPage.setTodayAsDeliveryDateFilter();
  inventoryListPage.waitSearchRender();
});

When("user applies {string} to find related inventory", (value: string) => {
  inventoryListPage.setSearchKeyword(value);
  inventoryListPage.interceptListAPI();
  inventoryListPage.waitSearchRender();
});

When("user resets any applied keyword filter at inventory list", () => {
  inventoryListPage.interceptListAPI();
  inventoryListPage.resetSearchKeyword();
  inventoryListPage.waitSearchRender();
});

When("user clicks hide zero quantity toggle at inventory list", () => {
  inventoryListPage.interceptListAPI();
  inventoryListPage.clickHideZeroQty();
  inventoryListPage.waitSearchRender();
});

When(
  "user applies {string} as page amount at inventory list",
  (value: string) => {
    inventoryListPage.interceptListAPI();
    inventoryListPage.pagination.setPageAmount(value);
    inventoryListPage.waitSearchRender();
  }
);

When("user clicks any data on inventory list table", () => {
  inventoryListPage.clickAnySKURow();
});

Then(
  "query param for {string} {string} should be added to inventory list URL",
  (keyword: string, attribute: string) => {
    if (attribute === "updated_at" && keyword == "input")
      assertDateQueryParam(attribute, inventoryListPage.date);
    else if (attribute === "updated_at")
      assertDateQueryParam(attribute, keyword);
    else assertQueryParam(attribute, keyword);
  }
);

Then(
  "user should only able to see SKU with {string} matched {string}",
  (attribute: string, keyword: string) => {
    inventoryListPage.assertInventoryBySearchFilter(attribute, keyword);
  }
);

Then(
  "user should only able to see SKU with {string} {string}",
  (keyword: string, attribute: string) => {
    inventoryListPage.assertInventoryBySearchFilter(attribute, keyword);
  }
);

Then(
  "user should only able to see {string} SKU per page maximum",
  (value: string) => {
    inventoryListPage.pagination.assertTotalPageAmount(value);
  }
);

Then(
  "user should only able to see SKU with {string} and its store",
  (warehouse: string) => {
    inventoryListPage.assertInventoryByGlobalFilter(warehouse);
  }
);
