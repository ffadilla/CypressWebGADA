import BasePage from './BasePage.js'

export default class LoginPage extends BasePage {

    path = "https://payment.gudangada.online/";
    loginButton = "button[type='button']";
    emailInput = "input[type='email']";
    passwordInput = "input[type='password']";

    visitLogin(){
        cy.visit(this.path);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }

    typeEmail(email){
        cy.get(this.usernameInput).type(email);
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }

}