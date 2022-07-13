import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryListPage from "../../../integration/saas/page_objects/InventoryListPage"

const inventoryListPage = new InventoryListPage();

When('SAAS - user is on inventory list page', () => {
    cy.clearCookies();
    inventoryListPage.visitInventoryList();
});

When('SAAS - user clicks on add inventory button',() => {
    inventoryListPage.clickAddInventory();
});

When('SAAS - user clicks on first time add inventory button', () => {
    inventoryListPage.clickFirstTimeAddInventoryButton();
});

When('SAAS - user types inventory name field with {string}', (inventoryName) => {
    inventoryListPage.typeInventoryName(inventoryName);
});

When('SAAS - user clicks on add custom inventory button', () => {
    inventoryListPage.clickAddCustomInventoryButton();
});

// assertions

Then('SAAS - {string} is displayed as product variant name', (expected) => {
    expect(cy.get('#input_productVariantName').should("have.value", expected));
});