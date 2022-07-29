import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../integration/saas/page_objects/LoginPage";
import BasePage from "../../../integration/saas/page_objects/BasePage";

beforeEach(() => {
  cy.exec("npm cache clear --force");
});

const loginPage = new LoginPage();
const basePage = new BasePage();

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let otpInput1 = mm.charAt(0);
let otpInput2 = mm.charAt(1);
let otpInput3 = dd.charAt(0);
let otpInput4 = dd.charAt(1);
let random = Math.floor(100000000 + Math.random() * 900000000);
function generateRandomNumber(num) {
  return "8" + num + "";
}

Given("SAAS - a user is on log in page", () => {
  loginPage.visitLogin();
});

When("SAAS - user clicks on start registration button", () => {
  loginPage.clickStartRegisterButton();
});

When("SAAS - user fills phone number input with {string}", (number) => {
  loginPage.typeNumber(number);
});

When("SAAS - user selects whatsapp otp type", () => {
  loginPage.selectWhatsappOtpType();
});

When("SAAS - user selects sms otp type", () => {
  loginPage.selectSmsOtpType();
});

When("SAAS - user clicks on send otp button", () => {
  loginPage.clickSendOtp();
});

When("SAAS - user clicks on submit otp button", () => {
  loginPage.clickSubmitOtp();
  cy.wait(1500);
});

When("SAAS - user fills the otp input with correct otp", () => {
  loginPage.inputOtp1(otpInput1);
  loginPage.inputOtp2(otpInput2);
  loginPage.inputOtp3(otpInput3);
  loginPage.inputOtp4(otpInput4);
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
  expect(cy.get(basePage.snackbar_error).should("contain.text", expected));
});
