import BasePage from "../basePage";

export default class LoginPage extends BasePage {
  path = "";
  loginWithEmailButton = ".MuiButton-root:contains('Masuk dengan Email')";
  userEmailInput = ".MuiSelect-select";
  userEmailOption = "li[role='option']";
  loginButton = ".MuiButton-root:contains('Login')";

  selectUserEmail(userEmail: string) {
    cy.get(this.userEmailInput).click();
    cy.contains(this.userEmailOption, userEmail).click();
  }
}
