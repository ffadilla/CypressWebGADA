import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "login";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errMsg = 'div[class="MuiBox-root css-jao01j"]';

  login(email: string, password: string) {
    this.navigate(this.path);
    cy.get(this.emailField).type(email);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }

  silentLogin() {
    this.navigate(this.path);
    cy.get(this.emailField).type(this.credentials.email);
    cy.get(this.passwordField).type(this.credentials.password);
    cy.get(this.loginButton).click();
  }
}
