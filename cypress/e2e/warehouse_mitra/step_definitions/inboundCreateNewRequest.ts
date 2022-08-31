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
  cy.xpath(inboundRequestListPage.inboundMenuButton).click();
});

When("user clicks create inbound request button", () => {
  cy.xpath(inboundRequestListPage.createRequestButton).click();
});

When("user selects new inbound request dropdown", () => {
  cy.contains(inboundRequestListPage.createNewRequestButtonOption).click();
});

When("user fills inbound Source ID", () => {
  inboundRequestFormPage.typeSourceID();
});

When("user selects {string} as inbound type", (inboundType: string) => {
  inboundRequestFormPage.setSourceType(inboundType);
});

When(
  "user selects the first options of {string} on store name dropdown",
  (storeKeyword: string) => {
    inboundRequestFormPage.setStore(storeKeyword);
  }
);

When(
  "user selects the first options of {string} on warehouse name dropdown",
  (warehouseKeyword: string) => {
    inboundRequestFormPage.setWarehouse(warehouseKeyword);
  }
);

When(
  "user selects the first options of {string} on target store name dropdown",
  (targetStoreKeyword: string) => {
    inboundRequestFormPage.setTargetStore(targetStoreKeyword);
  }
);

When("user selects date {string} as Source date", (sourceDate: number) => {
  inboundRequestFormPage.setSourceDate(sourceDate);
});

When("user selects date {string} as delivery date", (deliveryDate: number) => {
  inboundRequestFormPage.setDeliveryDate(deliveryDate);
});

When("user selects {string} as delivery method", (deliveryMethod: string) => {
  inboundRequestFormPage.setDeliveryMethod(deliveryMethod);
});

When(
  "user selects the first options of {string} as first product name",
  (productName: string) => {
    inboundRequestFormPage.setRequestFirstProductName(productName);
    cy.log(productName);
  }
);

When(
  "user inputs {string} as first product amount",
  (productAmount: string) => {
    inboundRequestFormPage.setRequestFirstProductAmount(productAmount);
    cy.log(productAmount + " ");
  }
);

When("user selects second product name", () => {});

When("user selects second product amount", () => {});

When("user clicks submission button", () => {
  cy.xpath(inboundRequestFormPage.submitRequestFormButton).click();
});

//ASSERTION
Then("error messages should appear at create new inbound Request form", () => {
  expect(
    cy
      .get(inboundRequestFormPage.errorSourceID)
      .should("contain.text", "Harap masukkan nomor referensi")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorSourceType)
      .should("contain.text", "Harap pilih tipe barang masuk")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorStoreName)
      .should("contain.text", "Harap pilih toko penerima")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorWarehouseName)
      .should("contain.text", "Harap pilih lokasi gudang penerima")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorStoreTargetName)
      .should("contain.text", "Harap pilih nama perusahaan pengirim")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorStoreTargetAddress)
      .should("contain.text", "Harap masukkan alamat perusahaan pengirim")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorSourceDate)
      .should("contain.text", "Harap pilih tanggal barang masuk")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorSourceDeliveryDate)
      .should("contain.text", "Harap pilih tanggal pengiriman")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorSourceDeliveryMethod)
      .should("contain.text", "Harap pilih metode pengiriman")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorRequestProductName)
      .should("contain.text", "Harap pilih nama produk")
  );
  expect(
    cy
      .get(inboundRequestFormPage.errorRequestProductQuantity)
      .should("contain.text", "Harap masukkan jumlah produk")
  );
  inboundRequestFormPage.logout();
});
