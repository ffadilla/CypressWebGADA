import BasePage from "./basePage.js";

export default class InventoryListPage extends BasePage {
  path = "inventory/list";
  addInventoryButton = "button[id='button_add_inventory']";
  firstTimeAddInventoryButton = "button[id='button_first_time_add_inventory']";
  searchByNameInput = "input[id='input_search_inventory_by_name']";
  addCustomInventoryButton = "span[id='button_add_custom_product']";

  // common
  visitInventoryList() {
    cy.visit(this.baseUrl + this.path);
  }

  clickAddInventory() {
    cy.get(this.addInventoryButton).click();
  }

  clickFirstTimeAddInventoryButton() {
    cy.get(this.firstTimeAddInventoryButton).click();
  }

  typeInventoryName(inventoryName) {
    cy.get(this.searchByNameInput).type(inventoryName);
  }

  clickAddCustomInventoryButton() {
    cy.get(this.addCustomInventoryButton).click();
  }
}
