import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../../../e2e/saas/page_objects/RegistrationPage";
import * as utils from "./utils";

const registrationPage = new RegistrationPage();

Given("a user is on registration page", () => {
  cy.clearCookies();
  registrationPage.visitRegistration();
});

When("user fills phone number with random phone number", () => {
  let num = utils.generateRandomNumber();
  registrationPage.typeNumber(num);
  cy.get(registrationPage.numberInput).should("have.value", num);
});

When("user clicks on lanjutkan button #no. handphone", () => {
  registrationPage.clickRegisterLanjutkan1();
});

When("user clicks on lanjutkan button #data diri", () => {
  registrationPage.clickRegisterLanjutkan2();
});

When("user fills name field with {string}", (name: string) => {
  registrationPage.typeName(name);
  cy.get(registrationPage.registerNameInput).should("have.value", name);
});

When("user fills email field with {string}", (email: string) => {
  registrationPage.typeEmail(email);
  cy.get(registrationPage.registerEmailInput).should("have.value", email);
});

When("user clicks on daftar button", () => {
  registrationPage.clickSubmitRegistrationButton();
});

When("user fills store name field with {string}", (storeName: string) => {
  registrationPage.typeStoreName(storeName);
  cy.get(registrationPage.registerStoreNameInput).should(
    "have.value",
    storeName
  );
});

When("user clicks on input address button", () => {
  registrationPage.clickStoreAddressInputButton();
});

When("user fills store address field with {string}", (address: string) => {
  registrationPage.typeStoreAddressLocationInput(address);
  cy.get(registrationPage.storeAddressLocationInput).should(
    "have.value",
    address
  );
});

When("user clicks on current address button", () => {
  registrationPage.clickStoreCurrentLocationButton();
});

When("user clicks on manual address button", () => {
  registrationPage.clickStoreManualAddressButton();
});

When("user clicks on first store address search result", () => {
  registrationPage.clickFirstAddressResult();
});

When("user clicks on choose this location", () => {
  registrationPage.clickChooseStoreLocation();
});

// assertions
