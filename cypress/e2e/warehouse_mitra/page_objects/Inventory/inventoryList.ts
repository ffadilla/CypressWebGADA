import { replaceElementIndex } from "../../common/utils";
import BaseListPage from "../baseListPage";

export default class InventoryListPage extends BaseListPage {
  path = "/inventory/list";
  searchbox = 'input[placeholder="Cari produk SKU dan nama produk..."]';
  resetSearchbox = 'svg[data-testid="CloseRoundedIcon"]';
  inventoryListXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  inventorySKUXPath = this.inventoryListXPath + "/tr[{{index}}] /td[1]";
  inventoryProductNameXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[1]";
  inventoryProductSubTextXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[2]";
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";

  setSearchKeyword(keyword: string) {
    cy.get(this.searchbox).type(keyword);
    cy.get(this.searchbox).type("{enter}");
  }

  resetSearchKeyword() {
    cy.get(this.resetSearchbox).click();
  }

  setPageAmount(value: string) {
    cy.get(this.pageAmountDropdown).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
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
