import BasePage from "./BasePage.js";

export default class RegistrationPage extends BasePage {
  path = "registration";
  numberInput = "input[id='input_phone_number']";
  otpInput1 = "input[aria-label='Please enter verification code. Character 1']";
  registerLanjutkanButton1 = "button[id='button_submit_step_one']";
  registerNameInput = "input[id='field_name']";
  registerEmailInput = "input[id='field_email']";
  registerLanjutkanButton2 = "button[id='button_submit_step_two']";
  registerStoreNameInput = "input[id='input_store_name']";
  //TODO: UPDATE ID
  storeAddressInput = "input[id='input_store_address']";
  storeAddressLocationInput = "input[id='input_search_location_name']";
  storeAddressCurrentLocationButton = "input[id='button_current_location']";
  storeManualAddressButton = "button[id='button_manual_address']";
  storeAddressChooseLocationButton = "button[id='button_choose_location']";
  //TODO: UPDATE ID
  submitRegistrationButton = "button";

  // common
  visitRegistration() {
    cy.visit(this.baseUrl + this.path);
  }

  typeNumber(number) {
    cy.get(this.numberInput).type(number);
  }

  clickRegister() {
    cy.get(this.startRegisterButton).click();
  }

  clickRegisterLanjutkan1() {
    cy.get(this.registerLanjutkanButton1).click();
  }

  typeName(name) {
    cy.get(this.registerNameInput).type(name);
  }

  typeEmail(email) {
    cy.get(this.registerEmailInput).type(email);
  }

  clickRegisterLanjutkan2() {
    cy.get(this.registerLanjutkanButton2).click();
  }

  typeStoreName(storeName) {
    cy.get(this.registerStoreNameInput).type(storeName);
  }

  //TODO: UPDATE
  clickStoreAddressInputButton() {
    cy.get(this.storeAddressInput).prev().click();
  }

  typeStoreAddressLocationInput(address) {
    cy.get(this.storeAddressLocationInput).type(address);
  }

  clickStoreCurrentLocationButton() {
    cy.get(this.storeAddressCurrentLocationButton).click();
  }

  clickStoreManualAddressButton() {
    cy.get(this.storeManualAddressButton).click();
  }

  clickFirstAddressResult() {
    cy.get(this.storeManualAddressButton).next().click();
  }

  clickChooseStoreLocation() {
    cy.get(this.storeAddressChooseLocationButton).click();
  }

  // TODO: UPDATE
  clickSubmitRegistrationButton() {
    cy.get(this.submitRegistrationButton).contains("Daftar").click();
  }
}
