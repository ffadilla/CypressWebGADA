import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../common/utils";

export default class BasePage {
  utils = utils;
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  accountData = gadaConfig.warehouseMitra.accounts;

  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";
  sidebarMenuButton = ".MuiListItemButton-root";
  inventoryMenuButton =
    '//*[@id="__next"]/div/div[2]/div/div/div/nav/div[1]/div[3]';
  sidebarSubMenuButton = ".MuiCollapse-root";
  outboundMenuButton = "//div[2]/div/div/div/nav/div[1]/a[3]";

  dateQueryBaseFormat = "" + this.utils.generateDateTime(0, "YYYY-MM-");

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
    const queryParam =
      value === "null"
        ? ""
        : query +
          "=" +
          this.dateQueryBaseFormat +
          this.utils.padTo2Digits(parseInt(value));
    expect(cy.url().should("include", queryParam));
  }

  // TODO: Request test-id for both request and receipt menu
  clickInboundRequestMenu() {
    cy.wait(1000);
    cy.url().then((url) => {
      if (
        !url.includes("https://warehouse-dev.gudangada.com/inventory/inbound/")
      ) {
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
      if (
        !url.includes("https://warehouse-dev.gudangada.com/inventory/inbound/")
      ) {
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
    cy.xpath(this.inventoryMenuButton)
      .find("svg")
      .last()
      .then((element) => {
        if (element.attr("data-testid") === "ExpandMoreRoundedIcon") {
          cy.xpath(this.inventoryMenuButton).click();
        }
      });
    cy.get(this.sidebarSubMenuButton).contains("Daftar Inventori").click();
  }
}
