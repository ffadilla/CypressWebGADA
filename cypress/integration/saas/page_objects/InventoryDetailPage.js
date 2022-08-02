import BasePage from './BasePage.js'

export default class InventoryDetail extends BasePage {

    path = "inventory/";
    productVariantNameInput             = "input[id='input_productVariantName']";
    productDisplayNameInput             = "input[id='input_displayName']";
    expandStockUnitButton               = "span[id='button_choose_stock_unit']";
    unitSearchInput                     = "input[id='input_product_unit_uom_input_searchbar']";
    specificStockUnitCheckbox           = ".MuiTypography-root";
    chooseUnitButton                    = "button[id='button_product_unit_uom_pilih']";
    firstUnitCheckbox                   = "[id^=input_checkbox_product_unit]";
    firstUnitStockQuantityInput         = "input[id^='input_stock_card_available_stock']";
    firstUnitPriceInput                 = "input[id^='input_stock_card_price']";
    expandSellingUnitButton             = "span[id='button_choose_selling_unit']"
    addSpecificUnitSellingPriceButton   = ".MuiChip-label";
    unitSellingPriceInput               = "input[id='priceTiers\[0\]\.unitPrice']";
    saveUnitSellingPriceButton          = "button[id='button_price_tier_modal_simpan']";
    submitAddInventoryButton            = "button[id='button_save_inventory_header']";

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

    typeUnitSearch(input) {
        cy.get(this.unitSearchInput).clear();
        cy.get(this.unitSearchInput).type(input);
    }

    clickFirstUnitCheckbox() {
        cy.get(this.firstUnitCheckbox).first().click();
    }

    clickSpecificUnitCheckbox(input) {
        cy.get(this.specificStockUnitCheckbox).contains(input).prev().click();
    }

    clickChooseUnitButton() {
        cy.get(this.chooseUnitButton).click();
    }

    typeFirstUnitStockQuantity(input) {
        cy.get(this.firstUnitStockQuantityInput).first().type(input);
    }

    typeFirstUnitPrice(input) {
        cy.get(this.firstUnitPriceInput).first().type(input);
    }

    clickExpandSellingUnitButton () {
        cy.get(this.expandSellingUnitButton).click();
    }

    clickAddSpecificUnitSellingPriceButton (input) {
        cy.get(this.addSpecificUnitSellingPriceButton).contains(input).parent().parent().next().next().children('button').click();
    }

    typeUnitSellingPrice(input) {
        cy.get(this.unitSellingPriceInput).type(input);
    }

    clickSaveUnitSellingPriceButton () {
        cy.get(this.saveUnitSellingPriceButton).click();
    }

    clickSubmitAddInventoryButton() {
        cy.get(this.submitAddInventoryButton).click();
    }

}