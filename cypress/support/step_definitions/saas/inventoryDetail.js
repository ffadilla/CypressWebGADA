import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryDetailPage from "../../../integration/saas/page_objects/InventoryDetailPage"

const inventoryDetailPage = new InventoryDetailPage();

When('SAAS - user clicks on expand stock unit button',() => {
    inventoryDetailPage.clickExpandStockUnitButton();
});

When('SAAS - user types search unit field with {string}', (input) => {
    inventoryDetailPage.typeUnitSearch(input);
});

When('SAAS - user clicks on first stock unit checkbox', () => {
    cy.wait(1000);
   inventoryDetailPage.clickFirstUnitCheckbox();
});
When('SAAS - user clicks on {string} unit checkbox', (input) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(input);
});

When('SAAS - user clicks on choose unit button', (input) => {
    inventoryDetailPage.clickChooseUnitButton();
});

When('SAAS - user types {string} on first unit stock quantity field', (input) => {
    inventoryDetailPage.typeFirstUnitStockQuantity(input);
});

When('SAAS - user types {string} on first unit price field', (input) => {
    inventoryDetailPage.typeFirstUnitPrice(input);
});

When('SAAS - user clicks on expand selling unit button', () => {
    inventoryDetailPage.clickExpandSellingUnitButton();
});

When('SAAS - user clicks on add unit selling price button of unit {string}', (input) => {
    inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(input);
});

When('SAAS - user types {string} on unit selling price field', (input) => {
    inventoryDetailPage.typeUnitSellingPrice(input);
});

When('SAAS - user clicks on save unit selling price button', () => {
    inventoryDetailPage.clickSaveUnitSellingPriceButton();
});

When('SAAS - user clicks on submit add inventory button', (input) => {
    inventoryDetailPage.clickSubmitAddInventoryButton();
});
// assertions

Then('SAAS - user is redirected to inventory list page', (expected) => {
    cy.wait(2000);
    cy.url().should("eq", inventoryDetailPage.baseUrl+"inventory/list")
    //TODO: add assertion - check inventory name exist on first row inventory list
});