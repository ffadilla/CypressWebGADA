import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  credentials = gadaConfig.warehouseMitra.credentials;
  xPathAccountDropdown = '//*[@id="__next"]/div/div[3]/div[1]/div[2]';
  logoutDropdownItem = "/html/body/div[4]/div[3]/ul/li[3]";
  inboundMenuButton =
    '//*[@id="__next"]/div/div[2]/div/div/div/nav/div[1]/a[2]/div';

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.xpath(this.xPathAccountDropdown).click();
    cy.xpath(this.logoutDropdownItem).click();
  }
}
