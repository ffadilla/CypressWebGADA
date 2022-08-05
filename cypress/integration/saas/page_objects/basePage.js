export default class BasePage {
  baseUrl = Cypress.config().saas.baseUrl;
  snackbar_error = "#snackbar_global_error";

  navigate(path) {
    cy.visit(this.baseUrl + path);
  }

  getPageTitle() {
    return cy.title();
  }
}
