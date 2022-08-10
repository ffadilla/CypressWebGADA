import { When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryListPage from "../../../e2e/saas/page_objects/InventoryListPage";
import InventoryDetail from "../../../e2e/saas/page_objects/InventoryDetailPage";

const inventoryListPage = new InventoryListPage();
const inventoryDetailPage = new InventoryDetail();

When("SAAS - user is on inventory list page", () => {
  cy.clearCookies();
  inventoryListPage.visitInventoryList();
});

When("SAAS - user clicks on add inventory button", () => {
  inventoryListPage.clickAddInventory();
});

When("SAAS - user clicks on first time add inventory button", () => {
  inventoryListPage.clickFirstTimeAddInventoryButton();
});

When(
  "SAAS - user types search inventory input field with {string}",
  (input) => {
    inventoryListPage.typeSearchInput(input);
    cy.get(inventoryListPage.addInventorySearchInput).should(
      "have.value",
      input
    );
  }
);

When("SAAS - user clicks on add custom inventory button", () => {
  inventoryListPage.clickAddCustomInventoryButton();
});

When(
  "SAAS - user clicks add inventory button of inventory {string}",
  (input) => {
    inventoryListPage.clicksAddSpecificInventoryButton(input);
  }
);

When(
  "SAAS - user deletes inventory {string} with delete reason = wrong input",
  (input) => {
    inventoryListPage.clickSpecificInventoryMoreOptionButton(input);
    inventoryListPage.clickDeleteInventoryButton();
    inventoryListPage.chooseDeleteInventoryWrongInput();
    inventoryListPage.clickConfirmDeleteInventoryButton();
  }
);

// assertions

Then("SAAS - {string} is displayed as product variant name", (expected) => {
  expect(
    cy
      .get(inventoryDetailPage.productVariantNameInput)
      .should("have.value", expected)
  );
});
