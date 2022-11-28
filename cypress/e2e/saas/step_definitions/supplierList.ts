import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import SupplierListPage from "../page_objects/supplierListPage";
import { generateRandomNumber } from "./utils";

const supplierListPage = new SupplierListPage();

When("user visits supplier list page", () => {
  supplierListPage.navigate(supplierListPage.path);
});

When("user clicks on tambah supplier button", () => {
  supplierListPage.clickTambahSupplierButton();
});

When("user types {string} in Nama Toko field", (input: string) => {
  supplierListPage.typeAddNamaTokoInput(input);
  cy.get(supplierListPage.namaTokoInput).should("have.value", input);
});

When("user types {string} in Nama Sales field", (input: string) => {
  supplierListPage.typeNamaSalesInput(input);
  cy.get(supplierListPage.namaSalesInput).should("have.value", input);
});

When("user types a random phone number in Nomor Handphone field", () => {
  const randPhoneNum = generateRandomNumber();
  supplierListPage.typeNomorHandphoneInput(randPhoneNum);
  cy.get(supplierListPage.nomorHandphoneInput).should(
    "have.value",
    randPhoneNum
  );
});

When("user types {string} on alamat field", (input: string) => {
  supplierListPage.typeAlamatInput(input);
  cy.get(supplierListPage.alamatInput).should("have.value", input);
});

When("user types {string} on catatan field", (input: string) => {
  supplierListPage.typeCatatanInput(input);
  cy.get(supplierListPage.catatanInput).should("have.value", input);
});

When("user click on bank name dropdown", () => {
  supplierListPage.clickNamaBankDropdownButton();
});

When("user select on bank bca syariah on option number three", () => {
  supplierListPage.clickNamaBankOption();
});

When("user types random account number on account number field", () => {
  const randPhoneNum = generateRandomNumber();
  supplierListPage.typeNomorRekeningInput(randPhoneNum);
  cy.get(supplierListPage.nomorRekeningInput).should(
    "have.value",
    randPhoneNum
  );
});

When("user types {string} in account holder name", (input: string) => {
  supplierListPage.typeNamaPemilikRekeningInput(input);
  cy.get(supplierListPage.namaPemilikRekeningInput).should("have.value", input);
});

When("user clicks on supplier modal simpan button", () => {
  supplierListPage.clickSupplierModalSimpanButton();
});

//Assertion

Then("user view supplier berhasil ditambahkan is displayed", () => {
  cy.get("#notistack-snackbar").should(
    "have.text",
    "Supplier berhasil ditambahkan"
  );
});

Then("{string} is displayed in the list", (supplierName: string) => {
  cy.contains("p", supplierName);
});
