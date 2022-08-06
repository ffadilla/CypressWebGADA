import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../../integration/saas/page_objects/LoginPage';
import RegistrationPage from '../../../integration/saas/page_objects/RegistrationPage';
import HomePage from "../../../integration/saas/page_objects/HomePage";
import * as utils from "../saas/utils";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const homePage = new HomePage();

let otp = utils.generateCurrentDateOTP();

Given('SAAS - a new user is registered', () => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.reload(true);
    registrationPage.visitRegistration();
    registrationPage.typeNumber(utils.generateRandomNumber());
    registrationPage.clickRegisterLanjutkan1();
    loginPage.selectWhatsappOtpType();
    loginPage.clickSendOtp();
    loginPage.inputOtp1(otp.charAt(0));
    loginPage.inputOtp2(otp.charAt(1));
    loginPage.inputOtp3(otp.charAt(2));
    loginPage.inputOtp4(otp.charAt(3));
    loginPage.clickSubmitOtp();
    registrationPage.typeName(utils.generateRandomString(5));
    registrationPage.typeEmail(utils.generateRandomString(5)+"@gudangada.com");
    registrationPage.clickRegisterLanjutkan2();
    registrationPage.typeStoreName(utils.generateRandomString(5));
    registrationPage.clickStoreAddressInputButton();
    registrationPage.typeStoreAddressLocationInput("jakarta");
    registrationPage.clickFirstAddressResult();
    registrationPage.clickChooseStoreLocation();
    registrationPage.clickSubmitRegistrationButton();
    homePage.clickCloseTutorialButton();
    homePage.clickConfirmCloseTutorialButton();
});

Given('SAAS - user {string} is logged in', (number) => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.reload(true);
    loginPage.visitLogin();
    loginPage.typeNumber(number);
    loginPage.clickLogin();
    loginPage.selectWhatsappOtpType();
    loginPage.clickSendOtp();
    loginPage.inputOtp1(otp.charAt(0));
    loginPage.inputOtp2(otp.charAt(1));
    loginPage.inputOtp3(otp.charAt(2));
    loginPage.inputOtp4(otp.charAt(3));
    loginPage.clickSubmitOtp();
});

When('SAAS - user clicks on inventory list side menu button', () => {
    homePage.clickInventorySideMenuButton();
    homePage.clickInventoryListSideMenuButton();
});
