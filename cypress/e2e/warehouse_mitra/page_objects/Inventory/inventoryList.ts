import BaseListPage from "../baseListPage";

export default class InventoryListPage extends BaseListPage {
  path = "/inventory/list";
  date = "";
  dateFullFormat = "";
  dateFilterButton = 'input[placeholder="Tanggal"]';
  datepickerCell = '[role="gridcell"]';
  searchbox = 'input[placeholder="Cari produk SKU dan nama produk..."]';
  resetSearchbox = 'svg[data-testid="CloseRoundedIcon"]';
  hideZeroQtyToggle = 'input[type="checkbox"]';
  inventoryListXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  inventorySKUXPath = this.inventoryListXPath + "/tr[index]/td[1]";
  inventoryProductNameXPath =
    this.inventoryListXPath + "/tr[index]/td[2]/div[1]";
  inventoryProductSubtextXPath =
    this.inventoryListXPath + "/tr[index]/td[2]/div[2]";
  inventoryWarehouseStoreXPath = this.inventoryListXPath + "/tr[index]/td[3]";
  inventoryProductQtyXPath = this.inventoryListXPath + "/tr[index]/td[4]/div";
  inventoryLastUpdatedXPath =
    this.inventoryListXPath + "/tr[index]/td[5]/div[1]";
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";

  setDeliveryDateFilter(deliveryDate: string) {
    this.date =
      deliveryDate === "today's date"
        ? this.utils.generateDateTime(0, "D")
        : deliveryDate;
    this.dateFullFormat = this.utils.reformatDate(this.date, "D", "D MMM YYYY");
    cy.get(this.dateFilterButton).first().click();
    cy.get(this.datepickerCell).contains(this.date).click();
    cy.get(this.dateFilterButton)
      .invoke("val")
      .should("contain", this.dateFullFormat);
  }

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

  assertInventoryBySearchFilter(target: string, keyword: string) {
    let element = "";
    let expectedHasZeroQty = false;
    cy.xpath(
      this.utils.replaceElementIndex(this.inventoryProductSubtextXPath, 1)
    ).should("be.visible"); //waiting for FE render

    switch (target) {
      case "last updated":
        element = this.inventoryLastUpdatedXPath;
        break;
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
          // waiting for FE render
          cy.get(
            'div[aria-label="Anda dapat menampilkan data produk yang tidak memiliki stok"]'
          ).should("be.visible");
        break;
    }

    cy.xpath(this.inventoryListXPath).then(($list) => {
      for (let index = 1; index < $list.find("tr").length + 1; index++) {
        cy.xpath(this.utils.replaceElementIndex(element, index))
          .invoke("text")
          .then((text) => {
            if (target === "quantity" && expectedHasZeroQty) {
              if (text.split(" ")[0] === "0") {
                cy.log("Found SKU with 0 quantity: " + text);
                expect(text.split(" ")[0]).to.equal("0");
                return;
              }
            } else if (target === "quantity" && !expectedHasZeroQty) {
              expect(text.split(" ")[0]).to.not.equal("0");
            } else if (target === "last updated") {
              expect(text).to.include(this.dateFullFormat);
            } else expect(text.toLowerCase()).to.include(keyword.toLowerCase());
          });
      }
    });
  }

  assertInventoryByGlobalFilter(warehouse: string) {
    cy.xpath(this.inventoryListXPath).then(($list) => {
      for (let index = 1; index < $list.find("tr").length + 1; index++) {
        cy.xpath(
          this.utils.replaceElementIndex(
            this.inventoryWarehouseStoreXPath,
            index
          )
        )
          .invoke("text")
          .then((text) => {
            expect(text.split(" - ")[0]).to.equal(
              this.warehouseData[warehouse].stores[0].storeName
            );
            expect(text.split(" - ")[1]).to.equal(warehouse);
          });
      }
    });
  }
}
