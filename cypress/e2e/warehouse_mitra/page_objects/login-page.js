import BasePage from './base-page.js';

export default class LoginPage extends BasePage {
  path = 'login';
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';

  login(email, password){
    this.navigate(this.path);
    cy.get(this.emailField).type(email);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }
}
