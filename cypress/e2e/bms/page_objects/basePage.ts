import gadaConfig from "../../utils/gadaConfig";

export default class BasePage {
  baseURL = gadaConfig.bms.baseUrl;
  snackBarAlert = ".SnackbarContent-root";
  text = ".MuiTypography-root";

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

  typeString(selector: string, input: string) {
    cy.get(selector).type(input);
  }

  typeNumber(selector: string, input: number) {
    cy.get(selector).type(input + "");
  }

  typeDecimal(selector: string, input: string) {
    cy.get(selector).type(input + "");
  }

  clickButton(selector: string) {
    cy.get(selector).click({ force: true });
  }

  selectOption(message: string, index: number) {
    cy.get(".MuiAutocomplete-option" + `:contains('${message}')`)
      .eq(index)
      .click();
  }

  selectRadioButton(selector: string, input: string) {
    cy.get(selector + `[value='${input}']`).click();
  }

  selectCheckbox(selector: string, input: string) {
    cy.get(selector + `:contains('${input}')`).click();
  }

  checkInputValueIsNotEmpty(selector: string, field: string) {
    cy.get(selector)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as(field);
      });
  }

  checkSnackBar(message: string) {
    cy.get(this.snackBarAlert + `:contains('${message}')`).should("be.visible");
  }

  checkText(selector: string, message: string) {
    cy.get(selector + `:contains('${message}')`).should("be.visible");
  }
}
