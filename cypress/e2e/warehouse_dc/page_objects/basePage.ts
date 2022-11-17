import gadaConfig from "../../utils/gadaConfig";
import * as utils from "../../warehouse_core/common/utils";

export default class BasePage {
  utils = utils;
  baseUrl = gadaConfig.warehouse.dc.baseUrl;
  accountData = gadaConfig.warehouse.dc.accounts;
  warehouseData = gadaConfig.warehouse.dc.warehouses;

  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
    cy.url().should("contain", "login");
  }
}
