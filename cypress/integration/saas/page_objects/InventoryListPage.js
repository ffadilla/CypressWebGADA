import BasePage from './BasePage.js'

export default class InventoryListPage extends BasePage {

    path = "inventory/list";
    addInventoryButton = "button[id='button_inventory_list_tambah_barang']";
    emptyStateAddInventoryButton = "button[id='inventory_list_tambah_barang_button']"
    firstTimeAddInventoryButton = "button[id='button_first_time_add_inventory']";
    addInventorySearchInput = "input[id='input_tambah_barang_searchbar']";
    addCustomInventoryButton = "span[id='button_add_custom_product']";
    deleteReasonOtherRadioButton = "input[value='OTHER']";
    deleteReasonMistakeRadioButton = "input[value='MISTAKE']";
    confirmDeleteInventoryButton = ".MuiButton-label";

    // common
    visitInventoryList(){
        cy.visit(this.baseUrl+this.path);
    }

    clickAddInventory() {
        cy.get(this.addInventoryButton).click();
    }

    clickEmptyStateAddInventory() {
        cy.get(this.emptyStateAddInventoryButton).click();
    }

    clickFirstTimeAddInventoryButton() {
        cy.get(this.firstTimeAddInventoryButton).click();
    }

    typeInventoryName(inventoryName) {
        cy.get(this.addInventorySearchInput).type(inventoryName);
    }

    clickAddCustomInventoryButton() {
        cy.get(this.addCustomInventoryButton).click();
    }

    clicksAddSpecificInventoryButton(input) {
        cy.contains("div",input).next().children("button").click();
    }

    clickSpecificInventoryMoreOptionButton(input) {
        cy.contains("td", input).next().next().next().next().next().click();
    }

    clickDeleteInventoryButton(){
        cy.contains("button", "Hapus").click();
    }

    chooseDeleteInventoryOtherReason() {
        cy.get(this.deleteReasonOtherRadioButton).click();
    }

    chooseDeleteInventoryWrongInput() {
        cy.get(this.deleteReasonMistakeRadioButton).click();
    }

    clickConfirmDeleteInventoryButton() {
        cy.get(this.confirmDeleteInventoryButton).contains("Ya, Hapus Barang").click();
    }
}