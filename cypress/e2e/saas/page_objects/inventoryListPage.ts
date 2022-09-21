import BasePage from "./basePage";

export default class InventoryListPage extends BasePage {
  path = "inventory/list";
  addInventoryButton = "#button_inventory_list_tambah_barang";
  addSingleInventoryButton = "#button_inventory_list_tambah_barang_single";
  emptyStateAddInventoryButton = "#inventory_list_tambah_barang_button";
  firstTimeAddInventoryButton = "#button_first_time_add_inventory";
  addInventorySearchInput = "#input_tambah_barang_searchbar";
  addCustomInventoryButton = "#button_add_custom_product";
  deleteReasonOtherRadioButton = "input[value='OTHER']";
  deleteReasonMistakeRadioButton = "input[value='MISTAKE']";
  confirmDeleteInventoryButton = ".MuiButton-label";
  searchInventoryInput = "#input_inventory_list_searchbar";
  namaBarangButton = "#button_inventory_list_td_nama_barang_";
  stockEditButton = "#button_stock_edit_";
  sellingPriceEditButton = "#button_selling_uom_edit_popover_";
  isConsignLabel = "div[property='is_consigned_";
  moreOptionsButton = "#button_inventory_list_extra_options_popover_";

  // common
  visitInventoryList() {
    cy.viewport(1200, 800);
    cy.visit(this.baseUrl + this.path);
  }

  clickAddInventoryButton() {
    cy.get(this.addInventoryButton).click();
  }

  clickAddSingleInventoryButton() {
    cy.get(this.addSingleInventoryButton).click();
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

  clickDeleteInventoryOtherReason() {
    cy.get(this.deleteReasonOtherRadioButton).click();
  }

  clickDeleteInventoryWrongInput() {
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

  clickStockEditButton(id: string) {
    cy.get(this.stockEditButton + id).click();
  }

  clickSellingPriceEditButton(id: string) {
    cy.get(this.sellingPriceEditButton + id).click();
  }

  clickMoreOptionsButton(id: string) {
    cy.get(this.moreOptionsButton + id).click();
  }
}
