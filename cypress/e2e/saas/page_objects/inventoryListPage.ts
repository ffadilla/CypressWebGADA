import BasePage from "./basePage";

export default class InventoryListPage extends BasePage {
  path = "inventory/list";
  addInventoryButton = "#button_inventory_list_tambah_barang";
  emptyStateAddInventoryButton = "#inventory_list_tambah_barang_button";
  firstTimeAddInventoryButton = "#button_first_time_add_inventory";
  addInventorySearchInput = "#input_tambah_barang_searchbar";
  addCustomInventoryButton = "#button_add_custom_product";
  deleteReasonOtherRadioButton = "input[value='OTHER']";
  deleteReasonMistakeRadioButton = "input[value='MISTAKE']";
  confirmDeleteInventoryButton = ".MuiButton-label";
  searchInventoryInput = "#input_inventory_list_searchbar";
  namaBarangButton = "[id^=button_inventory_list_td_nama_barang_]";
  // common
  visitInventoryList() {
    cy.viewport(1200, 800);
    cy.visit(this.baseUrl + this.path);
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

  typeAddInventorySearchInput(inventoryName: string) {
    cy.get(this.addInventorySearchInput).type(inventoryName);
  }

  clickAddCustomInventoryButton() {
    cy.get(".MuiCircularProgress-keyframes-circular-rotate").should(
      "not.exist",
      { timeout: 5000 }
    );
    cy.get(this.addCustomInventoryButton).click({ force: true });
  }

  clicksAddSpecificInventoryButton(input: string) {
    cy.contains("div", input).next().children("button").click();
  }

  clickSpecificInventoryMoreOptionButton(input: string) {
    cy.contains("td", input).next().next().next().next().next().click();
  }

  clickDeleteInventoryButton() {
    cy.contains("button", "Hapus").click();
  }

  chooseDeleteInventoryOtherReason() {
    cy.get(this.deleteReasonOtherRadioButton).click();
  }

  chooseDeleteInventoryWrongInput() {
    cy.get(this.deleteReasonMistakeRadioButton).click();
  }

  clickConfirmDeleteInventoryButton() {
    cy.get(this.confirmDeleteInventoryButton)
      .contains("Ya, Hapus Barang")
      .click();
  }

  typeSearchInventoryInput(input: string) {
    cy.get(this.searchInventoryInput).type(input);
  }

  clickSpecificNamaBarangButton(input: string) {
    cy.contains("div", input).first().click();
  }
}
