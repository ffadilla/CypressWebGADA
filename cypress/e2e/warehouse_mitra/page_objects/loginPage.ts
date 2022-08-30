import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "login";
  emailField = 'input[id="email"]';
  passwordField = 'input[id="password"]';
  loginButton = 'button[type="submit"]';
  errorLoginButton = '//*[@id="__next"]/div/div/div/div[3]/form/div[2]/div[2]';
  errorMultipleDeviceLoginText =
    "Akun sedang login di suatu perangkat dan telah dikeluarkan. Silakan login kembali.";

  clickLoginButton() {
    cy.get(this.loginButton).click();
    cy.wait(1000);

    cy.url().then(($url) => {
      if ($url.includes(this.path)) {
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

  silentLogin() {
    cy.session([], () => {
      this.navigate(this.path);
      cy.get(this.emailField).type(this.credentials.email);
      cy.get(this.passwordField).type(this.credentials.password);
      cy.get(this.loginButton).click();
      cy.url().should("contain", "dashboard");
    });
  }
}
