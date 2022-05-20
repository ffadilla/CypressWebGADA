import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../../../integration/saas/page_objects/RegistrationPage";
import LoginPage from "../../../integration/saas/page_objects/LoginPage";

const registrationPage = new RegistrationPage();

let random = Math.floor(100000000 + Math.random() * 900000000);
function generateRandomNumber(num) {
    return "8"+num+"";
}

Given('a user is on registration page', () => {
    registrationPage.visitRegistration();
});

When('user fills phone number with random phone number',() => {
    registrationPage.typeNumber(generateRandomNumber(random));
});

When('user clicks on lanjutkan button #no. handphone', () => {
    registrationPage.clickRegisterLanjutkan1();
});

When('user clicks on lanjutkan button #data diri', () => {
    registrationPage.clickRegisterLanjutkan2();
});

When('user fills name field with {string}', (name) => {
    registrationPage.typeName(name);
});

When('user fills email field with {string}', (email) => {
    registrationPage.typeEmail(email);
});

When('user clicks on daftar button', () => {
    registrationPage.clickSubmitRegistrationButton();
});

When('user fills store name field with {string}', (storeName) => {
    registrationPage.typeStoreName(storeName);
});

When('user clicks on input address button', () => {
    registrationPage.clickStoreAddressInputButton();
});

When('user fills store address field with {string}', (address) => {
    registrationPage.typeStoreAddressLocationInput(address);
});

When('user clicks on current address button', () => {
    registrationPage.clickStoreCurrentLocationButton();
});

When('user clicks on manual address button', () => {
    registrationPage.clickStoreManualAddressButton();
});

When('user clicks on first store address search result', () => {
    registrationPage.clickFirstAddressResult();
});

When('user clicks on choose this location', () => {
    registrationPage.clickChooseStoreLocation();
});

When('user clicks on submit registration button', () => {
    registrationPage.clickSubmitRegistrationButton();
});

// assertions

