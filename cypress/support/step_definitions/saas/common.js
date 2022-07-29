import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../integration/saas/page_objects/LoginPage";
import RegistrationPage from "../../../integration/saas/page_objects/RegistrationPage";
import BasePage from "../../../integration/saas/page_objects/BasePage";
import HomePage from "../../../integration/saas/page_objects/HomePage";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const homePage = new HomePage();
const basePage = new BasePage();

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let otpInput1 = mm.charAt(0);
let otpInput2 = mm.charAt(1);
let otpInput3 = dd.charAt(0);
let otpInput4 = dd.charAt(1);
let randomNumber = Math.floor(100000000 + Math.random() * 900000000);
let randomString = generateRandomString();
function generateRandomNumber(num) {
  return "8" + num + "";
}

function generateRandomString() {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

Given("SAAS - a new user is registered", () => {
  cy.clearCookies();
  registrationPage.visitRegistration();
  registrationPage.typeNumber(generateRandomNumber(randomNumber));
  registrationPage.clickRegisterLanjutkan1();
  loginPage.selectWhatsappOtpType();
  loginPage.clickSendOtp();
  loginPage.inputOtp1(otpInput1);
  loginPage.inputOtp2(otpInput2);
  loginPage.inputOtp3(otpInput3);
  loginPage.inputOtp4(otpInput4);
  loginPage.clickSubmitOtp();
  registrationPage.typeName(randomString);
  registrationPage.typeEmail(randomString + "@gudangada.com");
  registrationPage.clickRegisterLanjutkan2();
  registrationPage.typeStoreName(randomString);
  registrationPage.clickStoreAddressInputButton();
  registrationPage.typeStoreAddressLocationInput("jakarta");
  registrationPage.clickFirstAddressResult();
  registrationPage.clickChooseStoreLocation();
  registrationPage.clickSubmitRegistrationButton();
  homePage.clickCloseTutorialButton();
  homePage.clickConfirmCloseTutorialButton();
});

When("SAAS - user clicks on inventory list side menu button", () => {
  homePage.clickInventorySideMenuButton();
  homePage.clickInventoryListSideMenuButton();
});
