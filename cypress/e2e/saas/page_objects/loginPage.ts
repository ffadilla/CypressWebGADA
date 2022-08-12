import BasePage from "./basePage";

export default class LoginPage extends BasePage {
  path = "login";
  loginButton = "#button_masuk";
  startRegisterButton = "#button_register";
  numberInput = "#input_phone_number";
  whatsappOtpTypeInput = "input[value='WHATSAPP";
  smsOtpTypeInput = "input[value='SMS";
  sendOtpButton = "#button_send_otp";
  otpInput1 = "input[data-testid='input_otp-0']";
  otpInput2 = "input[data-testid='input_otp-1']";
  otpInput3 = "input[data-testid='input_otp-2']";
  otpInput4 = "input[data-testid='input_otp-3']";
  submitOtpButton = "#button_otp_submit";

  visitLogin() {
    cy.visit(this.baseUrl + this.path);
  }

  clickStartRegisterButton() {
    cy.get(this.startRegisterButton).click();
  }

  typeNumber(number: string) {
    cy.get(this.numberInput).type(number);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  selectWhatsappOtpType() {
    cy.get(this.whatsappOtpTypeInput).click();
  }

  selectSmsOtpType() {
    cy.get(this.smsOtpTypeInput).click();
  }

  clickSendOtp() {
    cy.get(this.sendOtpButton).click();
  }

  inputOtp1(otp: string) {
    cy.get(this.otpInput1).type(otp);
  }

  inputOtp2(otp: string) {
    cy.get(this.otpInput2).type(otp);
  }

  inputOtp3(otp: string) {
    cy.get(this.otpInput3).type(otp);
  }

  inputOtp4(otp: string) {
    cy.get(this.otpInput4).type(otp);
  }

  clickSubmitOtp() {
    cy.get(this.submitOtpButton).click();
  }
}
