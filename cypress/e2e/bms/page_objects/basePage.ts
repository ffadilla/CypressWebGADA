import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseURL = gadaConfig.bms.baseUrl;
  snackBarAlert = ".SnackbarContent-root";

  navigate(path: string) {
    cy.visit(this.baseURL + path);
  }

  setLocalStorage(userRole: string) {
    let users = gadaConfig.bms.users;
    let user = users[userRole];

    window.localStorage.setItem("username", user.username);
    window.localStorage.setItem("userImage", user.userImage);
    window.localStorage.setItem("userEmail", user.userEmail);
    window.localStorage.setItem("auth-token", user.authToken);
    window.localStorage.setItem(
      "user-permissions",
      JSON.stringify(user.userPermissions)
    );
    window.localStorage.setItem("user-roles", JSON.stringify(user.userRole));
  }

  getPageTitle() {
    return cy.title();
  }

  checkSnackBar(message: string) {
    cy.get(this.snackBarAlert + `:contains('${message}')`).should("be.visible");
  }
}
