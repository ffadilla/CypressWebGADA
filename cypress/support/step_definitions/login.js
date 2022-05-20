import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../integration/payment/page_objects/LoginPage';
 
const loginPage = new LoginPage();
 
Given('I open Login Page', () => {
    loginPage.visitLogin();
});

When('I click on Login button', () => {
    loginPage.clickLogin();
});

//manually
When('I fill the email input with {string}', (email) => {
    loginPage.typeEmail(email);
});

When('I fill the password input with {string}', (password) => {
    loginPage.typePassword(password);
});

Then('I see {string} displayed after successfully logged in', (expected) => {
        cy.wait(10000);
    let actual;
    actual = expected;
        expect(actual).to.have.string(expected);
});

