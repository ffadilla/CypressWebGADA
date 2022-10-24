import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../common/utils";

export default class BasePage {
  utils = utils;
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  accountData = gadaConfig.warehouseMitra.accounts;

  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";
  sidebarMenuButton = ".MuiListItemButton-root";
  sidebarSubMenuButton = ".MuiCollapse-root";
  outboundMenuButton = "//div[2]/div/div/div/nav/div[1]/a[3]";

  dateQueryBaseFormat = "" + this.utils.generateDateTime(0, "YYYY-MM-");

  datepickerItem = 'button[role="gridcell"]';
  monthpickerItem = "button.PrivatePickersMonth-root";
  yearpickerItem = "button.PrivatePickersYear-yearButton";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
    cy.url().should("contain", "login");
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
