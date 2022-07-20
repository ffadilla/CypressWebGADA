export default class BasePage {

    BASE_URL        =  Cypress.config().bms.baseUrl;
    SNACK_BAR_ALERT = ".SnackbarContent-root"

    navigate(path) {
        cy.visit(this.BASE_URL + path);
    }

    setLocalStorage(user) {
        window
            .localStorage
            .setItem("username", ''); //'Cypress.config.bms.${user}.username'
        window
            .localStorage
            .setItem("userImage", "");
        window
            .localStorage
            .setItem("userEmail", "");
        window
            .localStorage
            .setItem("auth-token", "");
        window
            .localStorage
            .setItem("user-permissions", "");
        window
            .localStorage
            .setItem("user-roles", "");
    }

    getPageTitle() {
        return cy.title()
    }

    checkSnackBar(message){
        cy
            .get(this.SNACK_BAR_ALERT + `:contains('${message}')`)
            .should("be.visible");
    }

}