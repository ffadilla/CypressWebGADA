import { Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryDetailPage from "../../page_objects/inventory/inventoryDetailPage";

const inventoryDetailPage = new InventoryDetailPage();

Then(
  "user should see similar SKU data between detail page and inventory list",
  () => {
    inventoryDetailPage.assertSKUDataByInventoryList();
  }
);
