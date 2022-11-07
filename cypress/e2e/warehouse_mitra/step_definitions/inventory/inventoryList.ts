import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryListPage from "../../page_objects/Inventory/inventoryList";

const inventoryListPage = new InventoryListPage();

When("user applies today's date as filter date at inventory list", () => {
  inventoryListPage.interceptListAPI();
  inventoryListPage.setTodayAsDeliveryDateFilter();
  inventoryListPage.waitSearchRender();
});

When("user applies {string} to find related inventory", (value: string) => {
  inventoryListPage.interceptListAPI();
  inventoryListPage.setSearchKeyword(value);
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
    inventoryListPage.setPageAmount(value);
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
      inventoryListPage.assertDateQueryParam(attribute, inventoryListPage.date);
    else if (attribute === "updated_at")
      inventoryListPage.assertDateQueryParam(attribute, keyword);
    else inventoryListPage.assertQueryParam(attribute, keyword);
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
    inventoryListPage.assertTotalPageAmount(value);
  }
);

Then(
  "user should only able to see SKU with {string} and its store",
  (warehouse: string) => {
    inventoryListPage.assertInventoryByGlobalFilter(warehouse);
  }
);
