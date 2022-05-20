export default class BasePage {

    baseUrl       = "https://payment.gudangada.online";

    navigate(path) {
        cy.visit(this.baseUrl + path);
    }

    getPageTitle() {
        return cy.title()
    }

}