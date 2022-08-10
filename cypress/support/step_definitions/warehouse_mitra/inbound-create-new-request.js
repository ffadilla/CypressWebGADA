import { Given, When, Then, After } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../integration/warehouse_mitra/page_objects/login-page.js";
import InboundRequestListPage from "../../../integration/warehouse_mitra/page_objects/inbound-request-list-page.js";
import InboundRequestFormPage from "../../../integration/warehouse_mitra/page_objects/inbound-request-form-page.js";

const loginPage = new LoginPage();
const inboundRequestListPage = new InboundRequestListPage();
const inboundRequestFormPage = new InboundRequestFormPage();

//PRECONDITION
Given("Mitra - user {string} already logged in to WMS with {string} as password", (email, password) => {
  loginPage.login(email, password);
});

//STEP
When("Mitra - user redirects to inbound menu", () => {
  cy.xpath(inboundRequestListPage.xPathinboundMenu).click();
});

When("Mitra - user clicks create inbound request button", () => {
  cy.xpath(inboundRequestListPage.xPathCreateRequestButton).click();  
});

When("Mitra - user selects new inbound request dropdown", () => {
  cy.contains(inboundRequestListPage.textCreateNewRequestButton).click();
});

When("Mitra - user fills inbound Source ID", () => {
  const inboundID = 123;
  cy.get(inboundRequestFormPage.inboundIDField).type(inboundID);
});

When("Mitra - user selects {string} inbound type", (inboundType) => {

});

When("Mitra - user search {string} on store name dropdown", (keyword) => {

});

When("Mitra - user search {string} on warehouse name dropdown", (keyword) => {

});

When("Mitra - user search {string} on target store name dropdown", (keyword) => {

});

When("Mitra - user selects Source date", () => {

});

When("Mitra - user selects delivery date", () => {

});

When("Mitra - user selects {string} delivery method", (deliveryMethod) => {

});

When("Mitra - user selects first product name", () => {

});


When("Mitra - user selects first product amount", () => {

});


When("Mitra - user selects second product name", () => {

});


When("Mitra - user selects second product amount", () => {
  inboundRequestFormPage.logout();
});


When("", () => {

});


When("Mitra - user clicks submission button", () => {
  cy.xpath(inboundRequestFormPage.xPathSubmitRequestFormButton).click();
});

//ASSERTION
Then("Mitra - error messages should appear at create new inbound Request form", () => {
  expect(cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap masukkan nomor referensi"));
  expect(cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih tipe barang masuk"));
  expect(cy.get(':nth-child(3) > .css-tzsjye > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih toko penerima"));
  expect(cy.get(':nth-child(1) > :nth-child(4) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih lokasi gudang penerima"));
  expect(cy.get(':nth-child(1) > :nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih nama perusahaan pengirim"));
  expect(cy.get(':nth-child(1) > :nth-child(6) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap masukkan alamat perusahaan pengirim"));
  expect(cy.get(':nth-child(1) > :nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih tanggal barang masuk"));
  expect(cy.get(':nth-child(1) > :nth-child(8) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih tanggal pengiriman"));
  expect(cy.get(':nth-child(1) > :nth-child(9) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih metode pengiriman"));
  expect(cy.get('.css-an5v1p > .MuiGrid-container > :nth-child(1) > .css-tzsjye > .MuiFormHelperText-root')
    .should('contain.text', "Harap pilih nama produk"));
  expect(cy.get('.css-an5v1p > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root')
    .should('contain.text', "Harap masukkan jumlah produk"));
  inboundRequestFormPage.logout();
});

Then("", () => {

});