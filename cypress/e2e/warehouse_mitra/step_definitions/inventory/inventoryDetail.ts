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
