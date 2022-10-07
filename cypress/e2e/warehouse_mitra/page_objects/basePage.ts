import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../common/utils";

export default class BasePage {
  utils = utils;
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  accountData = gadaConfig.warehouseMitra.accounts;

  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";
  inboundMenuButton =
    '//*[@id="__next"]/div/div[2]/div/div/div/nav/div[1]/a[2]/div';
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

  clickMenuOutbound() {
    cy.xpath(this.outboundMenuButton).click();
    cy.url().should("include", "inventory/outbound/request/list");
  }
}
