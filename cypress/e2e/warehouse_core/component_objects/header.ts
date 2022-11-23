import { ConfigData } from "../common/helper";

export default class Header {
  configData: ConfigData;

  constructor(configData: ConfigData) {
    this.configData = configData;
  }

  storeGlobalFilter = 'input[placeholder="Toko"]';
  warehouseGlobalFilter = 'input[placeholder="Lokasi Gudang"]';
  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";

  dropdownPopOver = 'div.MuiAutocomplete-popper[role="presentation"]';
  firstAutocompleteItem = "[data-option-index='0']";
  secondAutocompleteItem = "[data-option-index='1']";

  setGlobalFilter(warehouse: string) {
    // SET WAREHOUSE GLOBAL FILTER
    cy.get(this.warehouseGlobalFilter).click().type(warehouse);
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.warehouseGlobalFilter)
      .invoke("val")
      .should("contain", warehouse);

    // SET STORE GLOBAL FILTER
    cy.get(this.storeGlobalFilter).click();
    cy.get(this.dropdownPopOver).should("contain", "Semua Toko");
    for (
      let i = 0;
      i < this.configData.warehouseData[warehouse].stores.length;
      i++
    ) {
      cy.get(this.dropdownPopOver).should(
        "contain",
        this.configData.warehouseData[warehouse].stores[i].storeName
      );
    }
    cy.get(this.storeGlobalFilter).type(
      this.configData.warehouseData[warehouse].stores[0].storeName
    );
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.storeGlobalFilter)
      .invoke("val")
      .should(
        "contain",
        this.configData.warehouseData[warehouse].stores[0].storeName
      );
  }

  assertDisabledGlobalFilter() {
    cy.get(this.storeGlobalFilter).should("be.disabled");
    cy.get(this.warehouseGlobalFilter).should("be.disabled");
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
    cy.url().should("contain", "login");
  }
}
