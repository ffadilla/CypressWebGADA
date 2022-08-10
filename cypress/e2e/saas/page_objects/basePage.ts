import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseUrl = gadaConfig.saas.baseUrl;
  snackbar_error = "#snackbar_global_error";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  getPageTitle() {
    return cy.title();
  }
}
