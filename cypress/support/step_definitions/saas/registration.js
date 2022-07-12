import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../../../integration/saas/page_objects/RegistrationPage";
import LoginPage from "../../../integration/saas/page_objects/LoginPage";


const registrationPage = new RegistrationPage();

let random = Math.floor(100000000 + Math.random() * 900000000);
function generateRandomNumber(num) {
    return "8"+num+"";
}

Given('SAAS - a user is on registration page', () => {
    cy.clearCookies();
    registrationPage.visitRegistration();
});

When('SAAS - user fills phone number with random phone number',() => {
    registrationPage.typeNumber(generateRandomNumber(random));
});

When('SAAS - user clicks on lanjutkan button #no. handphone', () => {
    registrationPage.clickRegisterLanjutkan1();
});

When('SAAS - user clicks on lanjutkan button #data diri', () => {
    registrationPage.clickRegisterLanjutkan2();
});

When('SAAS - user fills name field with {string}', (name) => {
    registrationPage.typeName(name);
});

When('SAAS - user fills email field with {string}', (email) => {
    registrationPage.typeEmail(email);
});

When('SAAS - user clicks on daftar button', () => {
    registrationPage.clickSubmitRegistrationButton();
});

When('SAAS - user fills store name field with {string}', (storeName) => {
    registrationPage.typeStoreName(storeName);
});

When('SAAS - user clicks on input address button', () => {
    registrationPage.clickStoreAddressInputButton();
});

When('SAAS - user fills store address field with {string}', (address) => {
    registrationPage.typeStoreAddressLocationInput(address);
});

When('SAAS - user clicks on current address button', () => {
    registrationPage.clickStoreCurrentLocationButton();
});

When('SAAS - user clicks on manual address button', () => {
    registrationPage.clickStoreManualAddressButton();
});

When('SAAS - user clicks on first store address search result', () => {
    registrationPage.clickFirstAddressResult();
});

When('SAAS - user clicks on choose this location', () => {
    registrationPage.clickChooseStoreLocation();
});

When('SAAS - user clicks on daftar button', () => {
    registrationPage.clickSubmitRegistrationButton();
    cy.wait(2000);
});

// assertions

