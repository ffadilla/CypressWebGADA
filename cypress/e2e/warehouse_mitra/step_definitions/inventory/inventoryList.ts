import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryListPage from "../../page_objects/inventory/inventoryList";

const inventoryListPage = new InventoryListPage();

When("user applies {string} to find related inventory", (value: string) => {
  inventoryListPage.setSearchKeyword(value);
});

When("user resets any applied keyword filter at inventory list", () => {
  inventoryListPage.resetSearchKeyword();
});

When(
  "user applies {string} as page amount at inventory list",
  (value: string) => {
    inventoryListPage.setPageAmount(value);
  }
);

Then(
  "query param for {string} {string} should be added to inventory list URL",
  (keyword: string, query: string) => {
    inventoryListPage.assertQueryParam(query, keyword);
  }
);

Then(
  "user should only able to see inventory with {string} matched {string}",
  (target: string, keyword: string) => {
    inventoryListPage.assertRequestItemsBySearchFilter(target, keyword);
  }
);

Then(
  "user should only able to see {string} inventory per page maximum",
  (value: string) => {
    inventoryListPage.assertTotalPageAmount(value);
  }
);
