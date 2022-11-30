import { And } from "@badeball/cypress-cucumber-preprocessor";
import CycleCountListPage from "../../page_objects/inventory/cycleCountListPage";

const cycleCountListPage = new CycleCountListPage();

And("user clicks add new cycle count task", () => {
  cycleCountListPage.clickAddNewTask();
});

And("user should be redirected to the cycle count list page", () => {
  cycleCountListPage.getAPIsList();
  cycleCountListPage.waitForListToBeRendered();
  cycleCountListPage.assertUserIsInCycleCountListPage();
});

And("user chooses {string} for the store name", (store: string) => {
  cycleCountListPage.selectStore(store);
});

And("user chooses {string} for the warehouse location", (warehouse: string) => {
  cycleCountListPage.selectWarehouseLocation(warehouse);
});

And("user chooses product {int} to be inspected", (index: number) => {
  cycleCountListPage.waitAndGetProductVariantListAPIResponse();
  cycleCountListPage.selectProductVariant(index);
});

And("user submits the new cycle count task", () => {
  cycleCountListPage.clickSaveTask();
});
