import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryListPage from "../../page_objects/Inventory/inventoryList";

const inventoryListPage = new InventoryListPage();

When(
  "user applies {string} as filter date at inventory list",
  (deliveryDate: string) => {
    inventoryListPage.setDeliveryDateFilter(deliveryDate);
  }
);

When("user applies {string} to find related inventory", (value: string) => {
  inventoryListPage.setSearchKeyword(value);
});

When("user resets any applied keyword filter at inventory list", () => {
  inventoryListPage.resetSearchKeyword();
});

When("user clicks hide zero quantity toggle at inventory list", () => {
  inventoryListPage.clickHideZeroQty();
});

When(
  "user applies {string} as page amount at inventory list",
  (value: string) => {
    inventoryListPage.setPageAmount(value);
  }
);

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
