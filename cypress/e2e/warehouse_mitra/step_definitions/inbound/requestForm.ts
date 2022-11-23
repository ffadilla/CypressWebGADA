import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import RequestFormPage from "../../page_objects/inbound/requestFormPage";

const requestFormPage = new RequestFormPage();

Given(
  "user creates a new inbound Source Request to {string} - {string} from {string} with product {string}",
  (warehouse: string, store: string, targetStore: string, product: string) => {
    requestFormPage.typeSourceID();
    requestFormPage.setWarehouse(warehouse);
    requestFormPage.setSourceType("Retur");
    requestFormPage.setStore(store);
    requestFormPage.setTargetStore(targetStore);
    requestFormPage.setSourceDate("13", "1", "2022");
    requestFormPage.setDeliveryDate("23", "11", "2023");
    requestFormPage.setDeliveryMethod("STORE COURIER");
    requestFormPage.setRequestFirstProductName(product);
    requestFormPage.setRequestFirstProductAmount(10);
    requestFormPage.submitRequestForm();
  }
);

When("user fills inbound Source ID at new inbound request form", () => {
  requestFormPage.typeSourceID();
});

When(
  "user selects {string} as inbound type at new inbound request form",
  (inboundType: string) => {
    requestFormPage.setSourceType(inboundType);
  }
);

When(
  "user selects the first options of {string} on store name dropdown at new inbound request form",
  (storeKeyword: string) => {
    requestFormPage.setStore(storeKeyword);
  }
);

When(
  "user selects the first options of {string} on warehouse name dropdown at new inbound request form",
  (warehouseKeyword: string) => {
    requestFormPage.setWarehouse(warehouseKeyword);
  }
);

When(
  "user selects the first options of {string} on target store name dropdown at new inbound request form",
  (targetStoreKeyword: string) => {
    requestFormPage.setTargetStore(targetStoreKeyword);
  }
);

When(
  "user selects {string} date, {string} month, {string} year, as Source date at new inbound request form",
  (date: string, month: string, year: string) => {
    requestFormPage.setSourceDate(date, month, year);
  }
);

When(
  "user selects {string} date, {string} month, {string} year, as delivery date at new inbound request form",
  (date: string, month: string, year: string) => {
    requestFormPage.setDeliveryDate(date, month, year);
  }
);

When(
  "user selects {string} as delivery method at new inbound request form",
  (deliveryMethod: string) => {
    requestFormPage.setDeliveryMethod(deliveryMethod);
  }
);

When(
  "user selects the first options of {string} as first product name at new inbound request form",
  (productName: string) => {
    requestFormPage.setRequestFirstProductName(productName);
  }
);

When(
  "user inputs {int} as first product amount at new inbound request form",
  (productAmount: number) => {
    requestFormPage.setRequestFirstProductAmount(productAmount);
  }
);

When("user selects second product name at new inbound request form", () => {});

When(
  "user selects second product amount at new inbound request form",
  () => {}
);

When("user clicks new inbound request form submission button", () => {
  requestFormPage.submitRequestForm();
});

When("user should be at inbound Request form", () => {
  expect(cy.get(requestFormPage.sourceIDField).should("be.visible"));
  expect(cy.url().should("contain", requestFormPage.path));
});

Then(
  "empty error messages for single Request should appear at create new inbound Request form",
  () => {
    requestFormPage.assertErrorInboundRequestForm(
      "source ID",
      "Harap masukkan nomor referensi"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "source type",
      "Harap pilih tipe barang masuk"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "store name",
      "Harap pilih toko penerima"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "warehouse name",
      "Harap pilih lokasi gudang penerima"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "store target name",
      "Harap pilih nama perusahaan pengirim"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "store target address",
      "Harap masukkan alamat perusahaan pengirim"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "source date",
      "Harap pilih tanggal barang masuk"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "source delivery date",
      "Harap pilih tanggal pengiriman"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "source delivery method",
      "Harap pilih metode pengiriman"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "request product name",
      "Harap pilih nama produk"
    );
    requestFormPage.assertErrorInboundRequestForm(
      "request product quantity",
      "Harap masukkan jumlah produk"
    );
  }
);

Then(
  "user should see {string} applied as warehouse store dropdown on inbound Request form",
  (warehouse: string) => {
    requestFormPage.assertAppliedWarehouseStore(
      warehouse,
      requestFormPage.configData.warehouseData[warehouse].stores[0].storeName
    );
  }
);
