import { Then, When } from "cypress-cucumber-preprocessor/steps";
import InventoryDetailPage from "../../../integration/saas/page_objects/inventoryDetailPage";

const inventoryDetailPage = new InventoryDetailPage();

When("SAAS - user clicks on choose expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
});

When("SAAS - user types search stock unit field with {string}", (input) => {
  inventoryDetailPage.typeStockUnitSearch(input);
});

When("SAAS - user clicks on {string} stock unit checkbox", (input) => {
  inventoryDetailPage.clickSpecificStockUnitCheckbox(input);
});

When("SAAS - user clicks on choose stock unit button", (input) => {
  inventoryDetailPage.clickChooseStockUnitButton();
});

When(
  "SAAS - user types {string} on first unit stock quantity field",
  (input) => {
    inventoryDetailPage.typeFirstUnitStockQuantity(input);
  }
);

When("SAAS - user types {string} on first unit price field", (input) => {
  inventoryDetailPage.typeFirstUnitPrice(input);
});

When("SAAS - user clicks on submit add inventory button", (input) => {
  inventoryDetailPage.clickSubmitAddInventoryButton();
});
// assertions

Then("SAAS - user is redirected to inventory list page", (expected) => {
  cy.url().should("eq", inventoryDetailPage.baseUrl + "inventory/list");
  //TODO: add assertion - check inventory name exist on first row inventory list
});
