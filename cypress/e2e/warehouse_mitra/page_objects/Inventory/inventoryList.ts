import { replaceElementIndex } from "../../common/utils";
import BaseListPage from "../baseListPage";

export default class InventoryListPage extends BaseListPage {
  path = "/inventory/list";
  searchbox = 'input[placeholder="Cari produk SKU dan nama produk..."]';
  resetSearchbox = 'svg[data-testid="CloseRoundedIcon"]';
  hideZeroQtyToggle = 'input[type="checkbox"]';
  inventoryListXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  inventorySKUXPath = this.inventoryListXPath + "/tr[{{index}}] /td[1]";
  inventoryProductNameXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[1]";
  inventoryProductSubtextXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[2]/div[2]";
  inventoryProductQtyXPath =
    this.inventoryListXPath + "/tr[{{index}}]/td[4]/div";
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

  clickHideZeroQty() {
    cy.get(this.hideZeroQtyToggle).click();
  }

  setPageAmount(value: string) {
    cy.get(this.pageAmountDropdown).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  assertInventoryBySearchFilter(target: string, keyword: string) {
    let element = "";
    let expectedHasZeroQty = false;
    cy.xpath(replaceElementIndex(this.inventoryProductSubtextXPath, 1)).should(
      "be.visible"
    ); //waiting for FE render

    switch (target) {
      case "SKU":
        element = this.inventorySKUXPath;
        break;
      case "product name":
        element = this.inventoryProductNameXPath;
        break;
      case "quantity":
        element = this.inventoryProductQtyXPath;
        expectedHasZeroQty = keyword === "any" ? true : false;
        if (!expectedHasZeroQty)
          cy.get(
            'div[aria-label="Anda dapat menampilkan data produk yang tidak memiliki stok"]'
          ).should("be.visible");
        break;
    }

    cy.xpath(this.inventoryListXPath).then(($list) => {
      for (let index = 1; index < $list.find("tr").length + 1; index++) {
        cy.xpath(replaceElementIndex(element, index))
          .invoke("text")
          .then((text) => {
            if (target !== "quantity")
              expect(text.toLowerCase()).to.include(keyword.toLowerCase());
            else if (target === "quantity" && expectedHasZeroQty) {
              if (text.split(" ")[0] === "0") {
                cy.log("Found SKU with 0 quantity: " + text);
                expect(text.split(" ")[0]).to.equal("0");
                return;
              }
            } else if (target === "quantity" && !expectedHasZeroQty) {
              expect(text.split(" ")[0]).to.not.equal("0");
            }
          });
      }
    });
  }
}
