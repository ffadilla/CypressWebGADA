import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import BasePage from "../../../e2e/saas/page_objects/basePage";
import LoginPage from "../../../e2e/saas/page_objects/loginPage";
import * as utils from "../saas/utils";

const loginPage = new LoginPage();
const basePage = new BasePage();

Given("SAAS - a user is on log in page", () => {
  cy.clearCookies();
  loginPage.visitLogin();
});

When("SAAS - user clicks on start registration button", () => {
  loginPage.clickStartRegisterButton();
});

When("SAAS - user fills phone number input with {string}", (number) => {
  loginPage.typeNumber(number);
  cy.get(loginPage.numberInput).should("have.value", number);
});

When("SAAS - user selects whatsapp otp type", () => {
  loginPage.selectWhatsappOtpType();
  cy.get(loginPage.whatsappOtpTypeInput).should("be.checked");
});

When("SAAS - user selects sms otp type", () => {
  loginPage.selectSmsOtpType();
  // for now, SMS otp type is disabled that's why radio button stays unchecked
  cy.get(loginPage.smsOtpTypeInput).should("not.be.checked");
});

When("SAAS - user clicks on send otp button", () => {
  loginPage.clickSendOtp();
});

When("SAAS - user clicks on submit otp button", () => {
  loginPage.clickSubmitOtp();
  cy.wait(1500);
});

When("SAAS - user fills the otp input with correct otp", () => {
  let otp = utils.generateCurrentDateOTP();
  loginPage.inputOtp1(otp.charAt(0));
  loginPage.inputOtp2(otp.charAt(1));
  loginPage.inputOtp3(otp.charAt(2));
  loginPage.inputOtp4(otp.charAt(3));
});

When("SAAS - user fills the otp input with wrong otp", () => {
  loginPage.inputOtp1("9");
  loginPage.inputOtp2("9");
  loginPage.inputOtp3("9");
  loginPage.inputOtp4("9");
});

When("SAAS - user clicks on masuk button", () => {
  loginPage.clickLogin();
});

// assertions

Then("SAAS - {string} displayed after successfully logged in", (expected) => {
  expect(cy.get("h2").should("contain.text", expected));
});

Then("SAAS - {string} displayed after submitting otp code", (expected) => {
  expect(cy.get(basePage.snackbarMessage).should("contain.text", expected));
});
