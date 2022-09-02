import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import InboundRequestFormPage from "../page_objects/inboundRequestFormPage";

const inboundRequestFormPage = new InboundRequestFormPage();

When("user fills inbound Source ID at new inbound request form", () => {
  inboundRequestFormPage.typeSourceID();
});

When(
  "user selects {string} as inbound type at new inbound request form",
  (inboundType: string) => {
    inboundRequestFormPage.setSourceType(inboundType);
  }
);

When(
  "user selects the first options of {string} on store name dropdown at new inbound request form",
  (storeKeyword: string) => {
    inboundRequestFormPage.setStore(storeKeyword);
  }
);

When(
  "user selects the first options of {string} on warehouse name dropdown at new inbound request form",
  (warehouseKeyword: string) => {
    inboundRequestFormPage.setWarehouse(warehouseKeyword);
  }
);

When(
  "user selects the first options of {string} on target store name dropdown at new inbound request form",
  (targetStoreKeyword: string) => {
    inboundRequestFormPage.setTargetStore(targetStoreKeyword);
  }
);

When(
  "user selects date {string} as Source date at new inbound request form",
  (sourceDate: number) => {
    inboundRequestFormPage.setSourceDate(sourceDate);
  }
);

When(
  "user selects date {string} as delivery date at new inbound request form",
  (deliveryDate: number) => {
    inboundRequestFormPage.setDeliveryDate(deliveryDate);
  }
);

When(
  "user selects {string} as delivery method at new inbound request form",
  (deliveryMethod: string) => {
    inboundRequestFormPage.setDeliveryMethod(deliveryMethod);
  }
);

When(
  "user selects the first options of {string} as first product name at new inbound request form",
  (productName: string) => {
    inboundRequestFormPage.setRequestFirstProductName(productName);
    cy.log(productName);
  }
);

When(
  "user inputs {string} as first product amount at new inbound request form",
  (productAmount: string) => {
    inboundRequestFormPage.setRequestFirstProductAmount(productAmount);
    cy.log(productAmount + " ");
  }
);

When("user selects second product name at new inbound request form", () => {});

When(
  "user selects second product amount at new inbound request form",
  () => {}
);

When("user clicks new inbound request form submission button", () => {
  cy.xpath(inboundRequestFormPage.submitRequestFormButton).click();
});

Then(
  "empty error messages for single Request should appear at create new inbound Request form",
  () => {
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
  }
);
