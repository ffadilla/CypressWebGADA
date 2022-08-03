import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryDetailPage from "../../../integration/saas/page_objects/InventoryDetailPage"
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();

When('SAAS - user clicks on expand stock unit button',() => {
    inventoryDetailPage.clickExpandStockUnitButton();
});

When('SAAS - user types search unit field with {string}', (input) => {
    inventoryDetailPage.typeUnitSearch(input);
});

When('SAAS - user clicks on first stock unit checkbox', () => {
    cy.wait(1000);
   inventoryDetailPage.clickUnitCheckboxInput();
});
When('SAAS - user clicks on {string} unit checkbox', (uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
});

When('SAAS - user clicks on choose unit button', (input) => {
    inventoryDetailPage.clickChooseUnitButton();
});

When('SAAS - user clicks on sort up button of unit {string}', (uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickUomConversionSortUpButton(uomId);
});

When('SAAS - user clicks on sort down button of unit {string}', (uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickUomConversionSortDownButton(uomId);
});

When('SAAS - user clicks on uom conversion next step button', () => {
    inventoryDetailPage.clickUomConversionNextStepButton();
});

When('SAAS - user types {string} on unit {string} conversion field', (input, uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.typeUomConversion(uomId,input);
});

When('SAAS - user clicks on uom conversion save button', () => {
    inventoryDetailPage.clickUomConversionSaveButton();
});

When('SAAS - user types {string} on {string} unit stock quantity field', (input, uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.typeUnitStockQuantity(uomId,input);
});

When('SAAS - user types {string} on {string} unit price field', (input, uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.typeUnitPrice(uomId, input);
});

When('SAAS - user clicks on expand selling unit button', () => {
    inventoryDetailPage.clickExpandSellingUnitButton();
});

When('SAAS - user clicks on add unit selling price button of unit {string}', (uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId);
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