import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../common/utils";

export default class BasePage {
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  accountData = gadaConfig.warehouseMitra.accounts;

  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";
  inboundMenuButton =
    '//*[@id="__next"]/div/div[2]/div/div/div/nav/div[1]/a[2]/div';

  dateQueryBaseFormat = "" + utils.generateDateTime(0, "YYYY-MM-");

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
    cy.url().should("contain", "login");
  }

  assertQueryParam(query: string, value: string) {
    const queryParam = query + value;
    expect(cy.url().should("include", queryParam));
  }

  assertDateQueryParam(query: string, value: number) {
    const queryParam =
      query + this.dateQueryBaseFormat + utils.padTo2Digits(value);
    expect(cy.url().should("include", queryParam));
  }
}
