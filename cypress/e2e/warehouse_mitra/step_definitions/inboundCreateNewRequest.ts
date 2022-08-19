import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../e2e/warehouse_mitra/page_objects/loginPage";
import InboundRequestListPage from "../../../e2e/warehouse_mitra/page_objects/inboundRequestListPage";
import InboundRequestFormPage from "../../../e2e/warehouse_mitra/page_objects/inboundRequestFormPage";

const loginPage = new LoginPage();
const inboundRequestListPage = new InboundRequestListPage();
const inboundRequestFormPage = new InboundRequestFormPage();

//PRECONDITION
Given(
  "user {string} already logged in to WMS with {string} as password",
  (email: string, password: string) => {
    loginPage.login(email, password);
  }
);

//STEP
When("user redirects to inbound menu", () => {
  cy.xpath(inboundRequestListPage.xPathinboundMenu).click();
});

When("user clicks create inbound request button", () => {
  cy.xpath(inboundRequestListPage.xPathCreateRequestButton).click();
});

When("user selects new inbound request dropdown", () => {
  cy.contains(inboundRequestListPage.textCreateNewRequestButton).click();
});

When("user clicks submission button", () => {
  cy.xpath(inboundRequestFormPage.xPathSubmitRequestFormButton).click();
});

//ASSERTION
Then("error messages should appear at create new inbound Request form", () => {
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap masukkan nomor referensi")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih tipe barang masuk")
  );
  expect(
    cy
      .get(":nth-child(3) > .css-tzsjye > .MuiFormHelperText-root")
      .should("contain.text", "Harap pilih toko penerima")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(4) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih lokasi gudang penerima")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih nama perusahaan pengirim")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(6) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap masukkan alamat perusahaan pengirim")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih tanggal barang masuk")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(8) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih tanggal pengiriman")
  );
  expect(
    cy
      .get(
        ":nth-child(1) > :nth-child(9) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih metode pengiriman")
  );
  expect(
    cy
      .get(
        ".css-an5v1p > .MuiGrid-container > :nth-child(1) > .css-tzsjye > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap pilih nama produk")
  );
  expect(
    cy
      .get(
        ".css-an5v1p > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root"
      )
      .should("contain.text", "Harap masukkan jumlah produk")
  );
  inboundRequestFormPage.logout();
});
