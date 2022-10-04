import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PaymentPage from "../page_objects/payment";
import * as utils from "./utils";

const paymentPage = new PaymentPage();

When("user types {string} on cash payment input", (input: string) => {
  paymentPage.typeCashPaymentInput(input);
});

When("user clicks on terima uang button", () => {
  paymentPage.clickSubmitPaymentButton();
});

When("user clicks on piutang payment method button", () => {
  paymentPage.clickPiutangPaymentMethodButton();
});

When("user clicks on select customer button", () => {
  paymentPage.clickSelectCustomerButton();
});

When(
  "user clicks on customer {string} radio button",
  (customerName: string) => {
    utils.retrieveCustomerId(customerName);
    cy.get("@customerId").then((customerId: any) => {
      paymentPage.clickCustomerRadioButton(customerId);
    });
  }
);

When("user clicks on down payment switch", () => {
  paymentPage.clickDownPaymentSwitch();
});

When("user types {string} on down payment amount input", (input: string) => {
  paymentPage.typeDownPaymentAmountInput(input);
});

When("user clicks on down payment cash radio button", () => {
  paymentPage.clickDownPaymentCashRadioButton();
});

// Assertions
Then("user is redirected to payment page", () => {
  cy.url().should("contain", paymentPage.baseUrl + paymentPage.path);
});

Then("transaksi berhasil message is displayed", () => {
  cy.contains("Transaksi Berhasil!");
});

Then("kembalian is not displayed", () => {
  cy.get("p").contains(new RegExp("^Kembalian$")).should("not.exist");
});

Then("kembalian {string} is displayed", (input: string) => {
  cy.get("p").contains(new RegExp("^Kembalian$")).should("exist");
  cy.contains(new RegExp("^Kembalian$"))
    .next()
    .should("contain.text", utils.numberWithSeparators(input));
});

Then("Sisa piutang {string} is displayed", (input: string) => {
  cy.get("p").contains(new RegExp("^Sisa Piutang$")).should("exist");
  cy.contains(new RegExp("^Sisa Piutang$"))
    .next()
    .should("contain.text", utils.numberWithSeparators(input));
});
