import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CustomerPage from "../../../e2e/saas/page_objects/customerPage";
import * as utils from "./utils";

const customerPage = new CustomerPage();
let customerName;

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

When(
  "user click customer name {string} on customer list",
  (customerName: string) => {
    utils.retrieveCustomerId(customerName);
    cy.get("@customerId").then((customerId: any) => {
      customerPage.clickCustomerListPage(customerId);
    });
  }
);

When("user click ubah text button", () => {
  customerPage.clickEditCustomerTextButton();
});

When("user type new customer name", () => {
  cy.get("#input_name_customer_modal").clear();
  customerName = utils.generateRandomString(7);
  customerPage.typeCustomerModalNameInput(
    "Update Pelanggan Automation " + customerName
  );

  cy.get(customerPage.customerModalNameInput).should(
    "have.value",
    "Update Pelanggan Automation " +
      customerName.charAt(0).toLowerCase() +
      customerName.slice(1)
  );
});

When("user type new customer phone number", () => {
  cy.get("#input_phone_no_customer_modal").clear();
  let num = utils.generateRandomNumber();
  customerPage.typeCustomerModalPhoneNumberInput(num);
  cy.get(customerPage.customerModalPhoneNumberInput).should("have.value", num);
});

When("user type customer new address", () => {
  cy.get("#input_address_customer_modal").clear();
  customerName = utils.generateRandomString(7);
  customerPage.typeCustomerModalAddressInput(
    "Jalan New Customer " + customerName
  );

  cy.get(customerPage.customerModalAddressInput).should(
    "have.value",
    "Jalan New Customer " +
      customerName.charAt(0).toLowerCase() +
      customerName.slice(1)
  );
});

When("user click hapus button on edit customer modal", () => {
  customerPage.clickCustomerModalDeleteButton();
});

When("user click yes button on confirmation modal", () => {
  cy.wait(5000);
  customerPage.clickYesButtonOnConfirmation();
});

//Assertions

Then("pelanggan berhasil ditambahkan is displayed", () => {
  cy.get("#notistack-snackbar").should(
    "have.text",
    "Pelanggan berhasil ditambahkan"
  );
});

Then("data pelanggan berhasil diubah is displayed", () => {
  cy.get("#notistack-snackbar").should(
    "have.text",
    "Informasi pelanggan berhasil diubah"
  );
});

Then("data pelanggan berhasil dihapus is displayed", () => {
  cy.get("#notistack-snackbar").should(
    "have.text",
    "Pelanggan berhasil dihapus"
  );
});
