import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import AccountPage from "../../../e2e/saas/page_objects/accountPage";
import * as utils from "./utils";

const accountPage = new AccountPage();

let bankAccountNumber: string;
let bankAccountOwnerName: string;

When("user visits user account page", () => {
  accountPage.visitUserAccount();
});

When(
  "user clicks on store settings button of store {string}",
  (storeName: string) => {
    utils.retrieveStoreId(storeName);
    cy.get("@storeId").then((storeId: any) => {
      accountPage.clickStoreSettingsButton(storeId);
    });
  }
);

When("user clicks on store settings of store {string}", () => {
  accountPage.clickLinkStoreButton();
});

When("user clicks on link store button", () => {
  accountPage.clickLinkStoreButton();
});

When("user clicks on {string} radio button", (storeName: string) => {
  utils.retrieveMarketplaceStoreId(storeName);
  cy.get("@marketplaceStoreId").then((marketplaceStoreId: any) => {
    accountPage.clickLinkStoreRadioButton(marketplaceStoreId);
  });
});

When("user clicks on pilih & lanjutkan button", () => {
  cy.get(accountPage.linkStoreSubmitButton).should(
    "contain",
    "Pilih & Lanjutkan"
  );
  accountPage.clickLinkStoreSubmitButton();
});

When("user clicks on hubungkan kedua toko button", () => {
  cy.get(accountPage.linkStoreSubmitButton).should(
    "contain",
    "Hubungkan Kedua Toko"
  );
  accountPage.clickLinkStoreSubmitButton();
});

When("user clicks on selesai button", () => {
  cy.get(accountPage.linkStoreSubmitButton).should("contain", "Selesai");
  accountPage.clickLinkStoreSubmitButton();
});

When("user clicks on show bank account switch", () => {
  accountPage.clickShowBankAccountsSwitch();
});

When("user clicks on tambah rekening baru button", () => {
  accountPage.clickTambahRekeningBaruButton();
});

When("user types {string} on bank name input", (bankName: string) => {
  accountPage.typeBankNameInput(bankName);
});

When("user clicks on first bank name option", () => {
  accountPage.clickBankNameOption();
});

When("user types {string} on bank account number input", (input: string) => {
  accountPage.typeBankAccountNumberInput(input);
  bankAccountNumber = input;
});

When(
  "user types {string} on bank account owner name input",
  (input: string) => {
    accountPage.typeBankAccountOwnerNameInput(input);
    bankAccountOwnerName = input;
  }
);

When("user clicks on bank account modal simpan button", () => {
  accountPage.clickBankAccountModalSimpanButton();
});

// assertions
Then("toko berhasil dihubungkan text is displayed", () => {
  cy.contains("Toko Berhasil Dihubungkan");
  cy.contains("Anda sudah bisa berjualan online");
});

Then("store is linked to {string}", (storeName: string) => {
  cy.contains("Terhubung ke toko").contains(storeName);
  cy.contains("di GudangAda");
});

Then("link store button is not displayed", () => {
  cy.get(accountPage.linkStoreButton).should("not.exist");
});

Then("correct bank account number is displayed", () => {
  cy.contains(bankAccountNumber);
});

Then("correct bank account owner name is displayed", () => {
  cy.contains(bankAccountOwnerName);
});
