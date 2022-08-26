import BasePage from "./basePage";

export default class CreateProposalPage extends BasePage {
  path = "";
  loginWithEmailButton = ".MuiButton-root:contains('Masuk dengan Email')";
  userEmailInput = ".MuiSelect-select";
  userEmailOption = "li[role='option']";
  loginButton = ".MuiButton-root:contains('Login')";

  selectUserEmail(userEmail: string) {
    cy.get(this.userEmailInput).click();
    cy.get(this.userEmailOption + `[data-value='${userEmail}']`).click();
  }
}
