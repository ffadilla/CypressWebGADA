import { ConfigData } from "../../warehouse_core/common/helper";

export default class LoginPage {
  configData = new ConfigData("dc");

  path = "login";
  loginFormXPath = "//form";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errorLoginInfoXPath = this.loginFormXPath + "/div[2]";

  navigate(path: string) {
    cy.visit(this.configData.baseUrl + path);
  }

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
    cy.get(this.emailField).type(this.configData.accountData[role].email);
    cy.get(this.passwordField).type(this.configData.accountData[role].password);
    this.clickLoginButton();
  }
}
