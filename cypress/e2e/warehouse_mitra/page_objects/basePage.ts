import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../common/utils";

export default class BasePage {
  utils = utils;
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  accountData = gadaConfig.warehouseMitra.accounts;
  warehouseData = gadaConfig.warehouseMitra.warehouses;
  dateQueryBaseFormat = "" + this.utils.generateDateTime(0, "YYYY-MM-");

  storeGlobalFilter = 'input[placeholder="Toko"]';
  warehouseGlobalFilter = 'input[placeholder="Lokasi Gudang"]';
  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";

  sidebarMenuButton = ".MuiListItemButton-root";
  sidebarSubMenuButton = ".MuiCollapse-root";
  outboundMenuButton = "//div[2]/div/div/div/nav/div[1]/a[3]";

  dropdownPopOver = 'div.MuiAutocomplete-popper[role="presentation"]';
  firstAutocompleteItem = '[data-option-index="0"]';
  datepickerItem = 'button[role="gridcell"]';
  monthpickerItem = "button.PrivatePickersMonth-root";
  yearpickerItem = "button.PrivatePickersYear-yearButton";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

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
    for (let i = 0; i < this.warehouseData[warehouse].stores.length; i++) {
      cy.get(this.dropdownPopOver).should(
        "contain",
        this.warehouseData[warehouse].stores[i].storeName
      );
    }
    cy.get(this.storeGlobalFilter).type(
      this.warehouseData[warehouse].stores[0].storeName
    );
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.storeGlobalFilter)
      .invoke("val")
      .should("contain", this.warehouseData[warehouse].stores[0].storeName);
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
    cy.url().should("contain", "login");
  }

  assertAPIRequestHeaders(APIAlias: string, attribute: string, value: string) {
    cy.wait(APIAlias).then((API) => {
      expect(API.request.headers[attribute]).to.include(value);
    });
  }

  assertQueryParam(query: string, value: string) {
    const queryParam = value === "null" ? "" : query + "=" + value;
    expect(cy.url().should("include", queryParam));
  }

  assertDateQueryParam(query: string, value: string) {
    const queryParam = value === "null" ? "" : query + "=" + value;
    expect(cy.url().should("include", queryParam));
  }

  // TODO: Request test-id for both request and receipt menu
  clickInboundRequestMenu() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (!url.includes(this.baseUrl + "inventory/inbound/")) {
        cy.get(this.sidebarMenuButton)
          .find("span")
          .contains("Barang Masuk")
          .click();
      }
    });
    cy.get(this.sidebarSubMenuButton)
      .find("span")
      .contains("Permintaan Barang")
      .click();
  }

  clickInboundReceiptMenu() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (!url.includes(this.baseUrl + "inventory/inbound/")) {
        cy.get(this.sidebarMenuButton)
          .find("span")
          .contains("Barang Masuk")
          .click();
      }
    });
    cy.get(this.sidebarSubMenuButton)
      .find("span")
      .contains("Penerimaan Barang")
      .click();
  }

  clickMenuOutbound() {
    cy.xpath(this.outboundMenuButton).click();
    cy.url().should("include", "inventory/outbound/request/list");
  }

  clickInventoryMenu() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (
        !url.includes(this.baseUrl + "inventory/list/") ||
        !url.includes(this.baseUrl + "inventory/detail/")
      ) {
        cy.get(this.sidebarMenuButton)
          .find("span")
          .contains("Inventori")
          .click();
      }
    });
    cy.get(this.sidebarSubMenuButton).contains("Daftar Inventori").click();
  }

  setDatepicker(element: string, date: string, month: string, year: string) {
    cy.get(element).click();
    cy.get(this.datepickerItem)
      .eq(parseInt(date) - 1)
      .click();
    cy.get(this.monthpickerItem)
      .eq(parseInt(month) - 1)
      .click();
    cy.get(this.yearpickerItem).contains(year).click();
    /**
     * FE still renders wrong format
    cy.get(element)
      .should('have.value',
      this.utils.reformatDate(
        year+this.utils.padTo2Digits(parseInt(month))+this.utils.padTo2Digits(parseInt(date)),
        "YYYYMMDD",
        "D MMM YYYY"
      )
    );
     *
     */
  }
}
