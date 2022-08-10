export default class BasePage {
  baseUrl = Cypress.config().warehouseMitra.baseUrl;
  accountDropdown = '.css-m17ii0 > [data-testid="ExpandMoreRoundedIcon"]';
  logoutDropdownItem = '.css-1k5yatp';

  navigate(path) {
    cy.visit(this.baseUrl + path);
  }

  logout() {
    cy.get(this.accountDropdown).click();
    cy.get(this.logoutDropdownItem).click();
  }
}
