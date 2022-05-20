export default class BasePage {

    baseUrl       = "https://saas.gudangada.online/";
    snackbar_error = "#snackbar_global_error";

    navigate(path) {
        cy.visit(this.baseUrl + path);
    }

    getPageTitle() {
        return cy.title()
    }



}