import { ConfigData } from "../../warehouse_core/common/helper";
import { interceptAPI } from "../../warehouse_core/common/utils";

export default class LoginPage {
  configData = new ConfigData("mitra");
  path = "login";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errorLoginButton = '//*[@id="__next"]/div/div/div/div[3]/form/div[2]/div[2]';

  navigate(path: string) {
    cy.visit(this.configData.baseUrl + path);
  }

  clickLoginButton() {
    interceptAPI("POST", "/account/login*", "loginAPI");
    cy.get(this.loginButton).click();
    cy.wait("@loginAPI").then(($API) => {
      if ($API.response?.statusCode === 400) {
        cy.get(this.loginButton).click();
      }
    });
  }

  login(email: string, password: string) {
    this.navigate(this.path);
    cy.get(this.emailField).type(email);
    cy.get(this.passwordField).type(password);
    this.clickLoginButton();
  }

  loginAs(role: string) {
    this.navigate(this.path);
    cy.get(this.emailField).type(this.configData.accountData[role].email);
    cy.get(this.passwordField).type(this.configData.accountData[role].password);
    this.clickLoginButton();
  }
}
