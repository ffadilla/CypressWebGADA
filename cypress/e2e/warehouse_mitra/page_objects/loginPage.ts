import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "login";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errorLoginButton = '//*[@id="__next"]/div/div/div/div[3]/form/div[2]/div[2]';

  clickLoginButton() {
    this.utils.interceptAPI("POST", "/account/login*", "loginAPI");
    cy.get(this.loginButton).click();
    cy.wait("@loginAPI").then(($API) => {
      if ($API.response?.statusCode == 400) {
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
    cy.get(this.emailField).type(this.accountData[role].email);
    cy.get(this.passwordField).type(this.accountData[role].password);
    this.clickLoginButton();
  }
}
