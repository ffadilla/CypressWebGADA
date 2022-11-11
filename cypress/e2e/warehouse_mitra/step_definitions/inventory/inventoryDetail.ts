import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryDetailPage from "../../page_objects/inventory/inventoryDetailPage";

const inventoryDetailPage = new InventoryDetailPage();

When(
  "user applies {string} as page amount of {string} table at inventory detail",
  (value: string, table: string) => {
    switch (table) {
      case "expiry batch":
        inventoryDetailPage.setExpDatePageAmount(value);
        break;
      case "inventory movement":
        inventoryDetailPage.setMovementPageAmount(value);
        break;
    }
  }
);

When(
  "user sorts expiry batch table based on {string} at inventory detail page",
  (value: string) => {
    inventoryDetailPage.interceptExpiryBatchAPI();
    inventoryDetailPage.sortExpiryBatchTable(value);
  }
);

When(
  "user applies {string} to find related inventory movement at inventory detail page",
  (value: string) => {
    inventoryDetailPage.setMovementKeyword(value);
    inventoryDetailPage.interceptInventoryMovementAPI();
    inventoryDetailPage.waitMovementTableRender();
  }
);

When(
  "user resets any applied keyword filter on movement table at inventory detail page",
  () => {
    inventoryDetailPage.resetMovementKeyword();
  }
);

Then("user should be at inventory detail page", () => {
  inventoryDetailPage.assertInventoryDetail();
});

Then(
  "user should see similar SKU data between detail page and inventory list",
  () => {
    inventoryDetailPage.assertSKUDataByInventoryList();
  }
);

Then(
  "query param for {string} {string} should be added to inventory detail URL",
  (keyword: string, attribute: string) => {
    inventoryDetailPage.assertQueryParam(attribute, keyword);
  }
);

Then(
  "user should be able to see {string} sort with {string} ascending added to inventory batch detail API",
  (sortValue: string, ascendingValue: string) => {
    inventoryDetailPage.assertExpiryBatchAPI(sortValue, ascendingValue);
  }
);

Then(
  "user should only able to see inventory movement with {string} matched {string} at inventory detail page",
  (attribute: string, keyword: string) => {
    inventoryDetailPage.assertMovementTableByKeyword(attribute, keyword);
  }
);
