import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InventoryListPage from "../../../e2e/saas/page_objects/InventoryListPage";
import InventoryDetail from "../../../e2e/saas/page_objects/InventoryDetailPage";

const inventoryListPage = new InventoryListPage();
const inventoryDetailPage = new InventoryDetail();

When("user visits inventory list page", () => {
  inventoryListPage.visitInventoryList();
});

When(
  "user types search inventory input field with {string}",
  (input: string) => {
    inventoryListPage.typeSearchInventoryInput(input);
    cy.get(inventoryListPage.searchInventoryInput).should("have.value", input);
  }
);

When("user clicks on inventory detail button of {string}", (input: string) => {
  inventoryListPage.clickSpecificNamaBarangButton(input);
  cy.wait(2000);
  cy.url().should(
    "contain",
    inventoryDetailPage.baseUrl + inventoryDetailPage.path + "edit"
  );
});

When("user clicks on add inventory button", () => {
  inventoryListPage.clickAddInventory();
});

When("user clicks on first time add inventory button", () => {
  inventoryListPage.clickFirstTimeAddInventoryButton();
});

When(
  "user types add inventory search inventory input field with {string}",
  (input: string) => {
    inventoryListPage.typeAddInventorySearchInput(input);
    cy.get(inventoryListPage.addInventorySearchInput).should(
      "have.value",
      input
    );
  }
);

When("user clicks on add custom inventory button", () => {
  inventoryListPage.clickAddCustomInventoryButton();
});

When(
  "user clicks on add inventory button of inventory {string}",
  (input: string) => {
    inventoryListPage.clicksAddSpecificInventoryButton(input);
  }
);

When(
  "user deletes inventory {string} with delete reason = wrong input",
  (input: string) => {
    inventoryListPage.clickSpecificInventoryMoreOptionButton(input);
    inventoryListPage.clickDeleteInventoryButton();
    inventoryListPage.chooseDeleteInventoryWrongInput();
    inventoryListPage.clickConfirmDeleteInventoryButton();
  }
);

// assertions

Then("{string} is displayed as product variant name", (expected) => {
  expect(
    cy
      .get(inventoryDetailPage.productVariantNameInput)
      .should("have.value", expected)
  );
});
