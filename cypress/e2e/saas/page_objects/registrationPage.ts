import BasePage from "./basePage";

export default class RegistrationPage extends BasePage {
  path = "registration";
  numberInput = "#input_phone_number";
  otpInput1 = "input[aria-label='Please enter verification code. Character 1']";
  registerLanjutkanButton1 = "#button_submit_step_one";
  registerNameInput = "#input_name";
  registerEmailInput = "#input_email";
  registerLanjutkanButton2 = "#button_submit_step_two";
  registerStoreNameInput = "#input_store_name";
  storeAddressInput = "#input_store_address";
  storeAddressLocationInput = "#input_search_location_name";
  storeAddressCurrentLocationButton = "#button_current_location";
  storeManualAddressButton = "#button_manual_address";
  storeAddressChooseLocationButton = "#button_choose_location";
  submitRegistrationButton = "#button_submit_step_three";
  invalidRegexErrorMessage = "p[id='input_phone_number']";

  typeNumber(number: string) {
    cy.get(this.numberInput).type(number);
  }

  clickRegisterLanjutkan1() {
    cy.get(this.registerLanjutkanButton1).click();
  }

  typeName(name: string) {
    cy.get(this.registerNameInput).type(name);
  }

  typeEmail(email: string) {
    cy.get(this.registerEmailInput).type(email);
  }

  clickRegisterLanjutkan2() {
    cy.get(this.registerLanjutkanButton2).click();
  }

  typeStoreName(storeName: string) {
    cy.get(this.registerStoreNameInput).type(storeName);
  }

  clickStoreAddressInputButton() {
    cy.get(this.storeAddressInput).click();
  }

  typeStoreAddressLocationInput(address: string) {
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

  clickSubmitRegistrationButton() {
    cy.get(this.submitRegistrationButton).click();
  }
}
