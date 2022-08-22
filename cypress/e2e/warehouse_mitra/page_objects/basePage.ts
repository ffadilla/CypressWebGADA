import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseUrl = gadaConfig.warehouseMitra.baseUrl;
  credentials = gadaConfig.warehouseMitra.credentials;
  accountDropdown = '.css-m17ii0 > [data-testid="ExpandMoreRoundedIcon"]';
  logoutDropdownItem = ".css-1k5yatp";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.get(this.accountDropdown).click();
    cy.get(this.logoutDropdownItem).click();
  }
}
