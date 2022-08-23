import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../../../e2e/saas/page_objects/basePage";
import LoginPage from "../../../e2e/saas/page_objects/loginPage";
import * as utils from "./utils";

const loginPage = new LoginPage();
const basePage = new BasePage();

Given("a user is on log in page", () => {
  cy.clearCookies();
  loginPage.visitLogin();
});

When("user clicks on start registration button", () => {
  loginPage.clickStartRegisterButton();
});

When("user fills phone number input with {string}", (number: string) => {
  loginPage.typeNumber(number);
  cy.get(loginPage.numberInput).should("have.value", number);
});

When("user selects whatsapp otp type", () => {
  loginPage.selectWhatsappOtpType();
  cy.get(loginPage.whatsappOtpTypeInput).should("be.checked");
});

When("user selects sms otp type", () => {
  loginPage.selectSmsOtpType();
  // for now, SMS otp type is disabled that's why radio button stays unchecked
  cy.get(loginPage.smsOtpTypeInput).should("not.be.checked");
});

When("user clicks on send otp button", () => {
  loginPage.clickSendOtp();
});

When("user clicks on submit otp button", () => {
  loginPage.clickSubmitOtp();
  cy.wait(1500);
});

When("user fills the otp input with correct otp", () => {
  let otp = utils.generateCurrentDateOTP();
  loginPage.inputOtp1(otp.charAt(0));
  loginPage.inputOtp2(otp.charAt(1));
  loginPage.inputOtp3(otp.charAt(2));
  loginPage.inputOtp4(otp.charAt(3));
});

When("user fills the otp input with wrong otp", () => {
  loginPage.inputOtp1("9");
  loginPage.inputOtp2("9");
  loginPage.inputOtp3("9");
  loginPage.inputOtp4("9");
});

When("user clicks on masuk button", () => {
  loginPage.clickLogin();
});

// assertions

Then("{string} displayed after successfully logged in", (expected: string) => {
  expect(cy.get("h2").should("contain.text", expected));
});

Then("{string} displayed after submitting otp code", (expected: string) => {
  basePage.checkSnackBar(expected);
});
