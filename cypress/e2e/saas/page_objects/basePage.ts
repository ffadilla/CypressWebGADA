import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseUrl = gadaConfig.saas.baseUrl;
  snackbarMessage = "#notistack-snackbar";

  navigate(path: string) {
    cy.visit(this.baseUrl + path);
  }

  getPageTitle() {
    return cy.title();
  }

  checkSnackBar(message: string) {
    cy.get(this.snackbarMessage + `:contains('${message}')`).should(
      "be.visible"
    );
  }
}
