import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseURL = gadaConfig.google.baseUrl;

  navigate(path: string) {
    cy.visit(this.baseURL + path);
  }

  getPageTitle() {
    return cy.title();
  }
}
