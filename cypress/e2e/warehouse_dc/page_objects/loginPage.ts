import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "login";
  loginFormXPath = "//form";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errorLoginInfoXPath = this.loginFormXPath + "/div[2]";

  setEmailField(email: string) {
    cy.get(this.emailField).type(email);
    cy.get(this.emailField).invoke("val").should("equal", email);
  }

  setPasswordField(password: string) {
    cy.get(this.passwordField).type(password);
    cy.get(this.passwordField).invoke("val").should("equal", password);
  }

  clickLoginButton() {
    cy.xpath(this.loginFormXPath).click();
    cy.get(this.loginButton).click();
  }

  assertErrorMessage(errorMessage: string) {
    expect(
      cy
        .xpath(this.errorLoginInfoXPath, { timeout: 10000 })
        .should("be.visible")
        .should("contain", errorMessage)
    );
  }

  loginAs(role: string) {
    this.navigate(this.path);
    cy.get(this.emailField).type(this.accountData[role].email);
    cy.get(this.passwordField).type(this.accountData[role].password);
    this.clickLoginButton();
  }
}
