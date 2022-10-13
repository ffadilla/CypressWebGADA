import { replaceElementIndex } from "../../common/utils";
import BasePage from "../basePage";

export default class InventoryListPage extends BasePage {
  path = "/inventory/list";
  searchbox = 'input[placeholder="Cari produk SKU dan nama produk..."]';
  resetSearchbox = 'svg[data-testid="CloseRoundedIcon"]';
  inventoryListXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  inventorySKUXPath = this.inventoryListXPath + "/tr[{{index}}] /td[1]";
  inventoryProductNameXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[1]";
  inventoryProductSubTextXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[2]";

  setSearchKeyword(keyword: string) {
    cy.get(this.searchbox).type(keyword);
    cy.get(this.searchbox).type("{enter}");
  }

  resetSearchKeyword() {
    cy.get(this.resetSearchbox).click();
  }

  assertRequestItemsBySearchFilter(target: string, keyword: string) {
    let element = "";
    cy.xpath(replaceElementIndex(this.inventoryProductSubTextXPath, 1)).should(
      "be.visible"
    ); //waiting for rendering

    switch (target) {
      case "SKU":
        element = this.inventorySKUXPath;
        break;
      case "product name":
        element = this.inventoryProductNameXPath;
        break;
    }

    cy.xpath(this.inventoryListXPath).then(($list) => {
      for (let index = 1; index < $list.find("tr").length + 1; index++) {
        cy.xpath(replaceElementIndex(element, index))
          .invoke("text")
          .then((text) => {
            expect(text.toLowerCase()).to.include(keyword.toLowerCase());
          });
      }
    });
  }
}
