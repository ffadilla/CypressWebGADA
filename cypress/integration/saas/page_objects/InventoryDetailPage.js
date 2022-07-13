import BasePage from './BasePage.js'

export default class InventoryDetail extends BasePage {

    path = "inventory/";
    productVariantNameInput = "input[id='input_productVariantName']";
    productDisplayNameInput = "input[id='input_displayName']";
    expandStockUnitButton = "span[id='button_choose_stock_unit']";
    stockUnitSearchInput = "input[id='input_searchbar_product_unit_uom']";
    specificStockUnitCheckbox = ".MuiTypography-root";
    chooseStockUnitButton = "button[id='button_choose_product_unit_and_uom']";
    firstUnitStockQuantityInput = "input[id='buying.0.availableStock']";
    firstUnitPriceInput = "input[id='buying.0.price']";
    submitAddInventoryButton = "button[id='buton_save_inventory_header']";

    // common
    visitInventoryDetail(){
        cy.visit(this.baseUrl+this.path);
    }

    typeProductVariantName(input) {
        cy.get(this.productVariantNameInput).type(input);
    }

    typeProductDisplayName(input) {
        cy.get(this.productDisplayNameInput).type(input);
    }

    clickExpandStockUnitButton() {
        cy.get(this.expandStockUnitButton).click();
    }

    typeStockUnitSearch(input) {
        cy.get(this.stockUnitSearchInput).type(input);
    }

    clickSpecificStockUnitCheckbox(input) {
        cy.get(this.specificStockUnitCheckbox).contains(input).prev().click();
    }

    clickChooseStockUnitButton() {
        cy.get(this.chooseStockUnitButton).click();
    }

    typeFirstUnitStockQuantity(input) {
        cy.get(this.firstUnitStockQuantityInput).type(input);
    }

    typeFirstUnitPrice(input) {
        cy.get(this.firstUnitPriceInput).type(input);
    }

    clickSubmitAddInventoryButton() {
        cy.get(this.submitAddInventoryButton).click();
    }

}