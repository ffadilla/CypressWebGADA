import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryListPage from "../../../integration/saas/page_objects/InventoryListPage"

const inventoryListPage = new InventoryListPage();

let random = Math.floor(100000000 + Math.random() * 900000000);
function generateRandomNumber(num) {
    return "8"+num+"";
}

When('SAAS - user is on inventory list page', () => {
    cy.clearCookies();
    inventoryListPage.visitInventoryList();
});

When('SAAS - user clicks add inventory button',() => {
    inventoryListPage.clickAddInventory();
});

When('SAAS - user clicks first time add inventory button', () => {
    inventoryListPage.clickFirstTimeAddInventoryButton();
});

When('SAAS - user types inventory name field with {string}', (inventoryName) => {
    inventoryListPage.typeInventoryName(inventoryName);
});

When('SAAS - user clicks add custom inventory button', () => {
    inventoryListPage.clickAddCustomInventoryButton();
});

// assertions

Then('SAAS - {string} is displayed as product variant name', (expected) => {
    expect(cy.get('#input_productVariantName').should("have.value", expected));
});