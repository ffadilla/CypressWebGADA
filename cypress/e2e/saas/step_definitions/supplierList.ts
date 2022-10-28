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

When("user clicks on supplier modal simpan button", () => {
  supplierListPage.clickSupplierModalSimpanButton();
});

Then("{string} is displayed in the list", (supplierName: string) => {
  cy.contains("p", supplierName);
});
