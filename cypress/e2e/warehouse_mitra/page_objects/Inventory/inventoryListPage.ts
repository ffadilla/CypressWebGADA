import {
  generateDateTime,
  getRandomIntInclusive,
  interceptAPI,
  reformatDate,
  replaceElementIndex,
} from "../../../warehouse_core/common/utils";
import Datepicker from "../../../warehouse_core/component_objects/datepicker";
import Pagination from "../../../warehouse_core/component_objects/pagination";
import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class InventoryListPage extends MainPage {
  datepicker = new Datepicker();
  pagination = new Pagination();
  path = "/inventory/list";
  date = "";
  dateFullFormat = "";
  dateFilterButton = 'input[placeholder="Tanggal"]';
  datepickerCell = '[role="gridcell"]';
  datepickerCTAContainer = "div.MuiDialogActions-root";
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
  inventoryLastUpdatedTimeXPath =
    this.inventoryListXPath + "/tr[index]/td[5]/div[1]";
  inventoryLastUpdatedByXPath =
    this.inventoryListXPath + "/tr[index]/td[5]/div[2]";
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";
  tableEmptyInfoXpath = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[3]';

  interceptListAPI() {
    interceptAPI("GET", "/inventory/inventory-list/?*", "inventoryListAPI");
  }

  waitSearchRender() {
    cy.wait("@inventoryListAPI").then((API) => {
      const responseBody = API.response?.body;
      if (responseBody.total_data === 0)
        cy.xpath(this.tableEmptyInfoXpath).should("be.visible");
      else
        cy.xpath(
          replaceElementIndex(this.inventoryProductSubtextXPath, 1)
        ).should("be.visible");

      expect(API.response?.statusCode).to.eq(200);
    });
  }

  setTodayAsDeliveryDateFilter() {
    this.date = generateDateTime(0, "D");
    let month = generateDateTime(0, "M");
    let year = generateDateTime(0, "YYYY");
    this.dateFullFormat = reformatDate(this.date, "D", "D MMM YYYY");
    this.datepicker.setDatepicker(
      this.dateFilterButton,
      this.date,
      month,
      year
    );
    cy.get(this.dateFilterButton)
      .invoke("val")
      .should("contain", this.dateFullFormat);
  }

  setSearchKeyword(keyword: string) {
    cy.get(this.searchbox).type(keyword);
    cy.get(this.searchbox).type("{enter}");
    cy.url().should("contain", "search=" + keyword.split(" ").join("+"));
  }

  resetSearchKeyword() {
    cy.get(this.resetSearchbox).click();
  }

  clickHideZeroQty() {
    cy.get(this.hideZeroQtyToggle).click();
  }

  clickAnySKURow() {
    cy.xpath(replaceElementIndex(this.inventoryProductSubtextXPath, 1)); //waiting for FE render

    cy.xpath(this.inventoryListXPath).then(($list) => {
      const index = getRandomIntInclusive(1, $list.find("tr").length);
      this.invokeSKUData(index);
      cy.xpath(
        replaceElementIndex(this.inventoryProductNameXPath, index)
      ).click();
    });
  }

  invokeSKUData(index: number) {
    cy.xpath(replaceElementIndex(this.inventorySKUXPath, index))
      .invoke("text")
      .as("inventoryListSKUID");
    cy.xpath(replaceElementIndex(this.inventoryProductNameXPath, index))
      .invoke("text")
      .as("inventoryListProductName");
    cy.xpath(replaceElementIndex(this.inventoryProductSubtextXPath, index))
      .invoke("text")
      .as("inventoryListOwnership");
    cy.xpath(replaceElementIndex(this.inventoryProductNameXPath, index))
      .invoke("text")
      .as("inventoryListProductName");
    cy.xpath(replaceElementIndex(this.inventoryWarehouseStoreXPath, index))
      .invoke("text")
      .as("inventoryListWarehouseStore");
    cy.xpath(replaceElementIndex(this.inventoryProductQtyXPath, index))
      .invoke("text")
      .as("inventoryListProductQty");
    cy.xpath(replaceElementIndex(this.inventoryLastUpdatedTimeXPath, index))
      .invoke("text")
      .as("inventoryListLastUpdatedTime");
    cy.xpath(replaceElementIndex(this.inventoryLastUpdatedByXPath, index))
      .invoke("text")
      .as("inventoryListLastUpdatedBy");
  }

  assertInventoryBySearchFilter(target: string, keyword: string) {
    let element = "";
    let expectedHasZeroQty = false;
    cy.xpath(replaceElementIndex(this.inventoryProductSubtextXPath, 1)).should(
      "be.visible"
    ); //waiting for FE render

    switch (target) {
      case "last updated":
        element = this.inventoryLastUpdatedTimeXPath;
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
        cy.xpath(replaceElementIndex(element, index))
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
        cy.xpath(replaceElementIndex(this.inventoryWarehouseStoreXPath, index))
          .invoke("text")
          .then((text) => {
            expect(text.split(" - ")[0]).to.equal(
              this.configData.warehouseData[warehouse].stores[0].storeName
            );
            expect(text.split(" - ")[1]).to.equal(warehouse);
          });
      }
    });
  }
}
