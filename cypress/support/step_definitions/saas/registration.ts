import { Given, When } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../../../e2e/saas/page_objects/RegistrationPage";
import * as utils from "../saas/utils";

const registrationPage = new RegistrationPage();

Given("SAAS - a user is on registration page", () => {
  cy.clearCookies();
  registrationPage.visitRegistration();
});

When("SAAS - user fills phone number with random phone number", () => {
  let num = utils.generateRandomNumber();
  registrationPage.typeNumber(num);
  cy.get(registrationPage.numberInput).should("have.value", num);
});

When("SAAS - user clicks on lanjutkan button #no. handphone", () => {
  registrationPage.clickRegisterLanjutkan1();
});

When("SAAS - user clicks on lanjutkan button #data diri", () => {
  registrationPage.clickRegisterLanjutkan2();
});

When("SAAS - user fills name field with {string}", (name) => {
  registrationPage.typeName(name);
  cy.get(registrationPage.registerNameInput).should("have.value", name);
});

When("SAAS - user fills email field with {string}", (email) => {
  registrationPage.typeEmail(email);
  cy.get(registrationPage.registerEmailInput).should("have.value", email);
});

When("SAAS - user clicks on daftar button", () => {
  registrationPage.clickSubmitRegistrationButton();
});

When("SAAS - user fills store name field with {string}", (storeName) => {
  registrationPage.typeStoreName(storeName);
  cy.get(registrationPage.registerStoreNameInput).should(
    "have.value",
    storeName
  );
});

When("SAAS - user clicks on input address button", () => {
  registrationPage.clickStoreAddressInputButton();
});

When("SAAS - user fills store address field with {string}", (address) => {
  registrationPage.typeStoreAddressLocationInput(address);
  cy.get(registrationPage.storeAddressLocationInput).should(
    "have.value",
    address
  );
});

When("SAAS - user clicks on current address button", () => {
  registrationPage.clickStoreCurrentLocationButton();
});

When("SAAS - user clicks on manual address button", () => {
  registrationPage.clickStoreManualAddressButton();
});

When("SAAS - user clicks on first store address search result", () => {
  registrationPage.clickFirstAddressResult();
});

When("SAAS - user clicks on choose this location", () => {
  registrationPage.clickChooseStoreLocation();
});

When("SAAS - user clicks on daftar button", () => {
  registrationPage.clickSubmitRegistrationButton();
  cy.wait(2000);
});

// assertions
