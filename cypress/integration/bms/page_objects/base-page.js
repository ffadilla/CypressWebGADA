export default class BasePage {

    BASE_URL        =  Cypress.config().bms.baseUrl;
    SNACK_BAR_ALERT = ".SnackbarContent-root"

    navigate(path) {
        cy.visit(this.BASE_URL + path);
    }

    setLocalStorage(userRole) {
        var users = Cypress.config().bms.users;
        var userRole = userRole;
        var user = users[userRole];

        window
            .localStorage
            .setItem("username", user.username);
        window
            .localStorage
            .setItem("userImage", user.userImage);
        window
            .localStorage
            .setItem("userEmail", user.userEmail);
        window
            .localStorage
            .setItem("auth-token", user.authToken);
        window
            .localStorage
            .setItem("user-permissions", JSON.stringify(user.userPermissions));
        window
            .localStorage
            .setItem("user-roles", JSON.stringify(user.userRole));
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