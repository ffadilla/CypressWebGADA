import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CustomerPage from "../../../e2e/saas/page_objects/customerPage";
import * as utils from "./utils";

const customerPage = new CustomerPage();

Given("user visits customer page", () => {
  customerPage.navigate(customerPage.path);
});

When("user click tambah pelanggan button", () => {
  customerPage.clickCustomerModalAddButton();
});

When("user types {string} on customer name input", (name: string) => {
  customerPage.typeCustomerModalNameInput(name);
  cy.get(customerPage.customerModalNameInput).should("have.value", name);
});

When("user types phone number on customer phone input", () => {
  let num = utils.generateRandomNumber();
  customerPage.typeCustomerModalPhoneNumberInput(num);
  cy.get(customerPage.customerModalPhoneNumberInput).should("have.value", num);
});

When("user types {string} on customer address input", (address: string) => {
  customerPage.typeCustomerModalAddressInput(address);
  cy.get(customerPage.customerModalAddressInput).should("have.value", address);
});

When("user click on simpan buttons", () => {
  customerPage.clickCustomerModalSubmitButton();
});

When("user click on duration switch", () => {
  customerPage.clickCustomerModalDueDurationSwitch();
});

When("user type {string} on debt duration limit", (duration: string) => {
  customerPage.typeCustomerModalDueDurationInput(duration);
  cy.get(customerPage.customerModalDueDurationInput).should(
    "have.value",
    duration
  );
});

When("user click limit amount switch", () => {
  customerPage.clickCustomerModalLimitAmountSwitch();
});

When("user types {string} amount debt limit", (amount: string) => {
  customerPage.typeCustomerModalLimitAmountInput(amount);
  cy.get(customerPage.customerModalLimitAmountInput).should(
    "have.value",
    "Rp " + utils.numberWithSeparators(amount)
  );
});

//Assertions

Then("pelanggan berhasil ditambahkan is displayed", () => {
  cy.get("#notistack-snackbar").should(
    "have.text",
    "Pelanggan berhasil ditambahkan"
  );
});
