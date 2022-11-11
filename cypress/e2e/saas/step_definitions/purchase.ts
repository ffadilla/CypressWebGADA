import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import gadaConfig from "../../utils/gadaConfig";
import { iGetStorePurchaseListAPIResponse, PaymentStatus } from "../modals";
import PurchaseAddPage from "../page_objects/purchaseAddPage";
import PurchaseListPage from "../page_objects/purchaseListPage";
import {
  createSeedInventory,
  generateInvoiceNumber,
  retrieveUomId,
} from "./utils";

const purchaseAddPage = new PurchaseAddPage();
const purchaseListPage = new PurchaseListPage();

let invoiceNumber = "";
let paymentType = "";

When("user visits purchase add page", () => {
  purchaseAddPage.navigate(purchaseAddPage.path);
});

When("user clicks on header simpan button", () => {
  purchaseAddPage.clickSimpanHeaderButton();
});

When("user clicks select supplier button", () => {
  purchaseAddPage.clickSupplierSelectDropdownButton();
});

// When("user clicks on {string} supplier checkbox", (supplierName: string) => {
//   utils.retrieveSupplierId(supplierName);
//   cy.get("@supplierId").then((supplierId: any) => {
//     cy.get("input[value='" + supplierId + "']").click();
//   });
// });

When("user types random inside invoice number field", () => {
  invoiceNumber = generateInvoiceNumber();
  purchaseAddPage.typeInvoiceNumber(invoiceNumber);
});

When("user selects new curated inventory {string}", (input: string) => {
  purchaseAddPage.typeInventorySearchBar(input);
  purchaseAddPage.clickAddSpecificInventoryButton(input);
});

When("user adds new custom inventory {string}", (input: string) => {
  purchaseAddPage.typeInventorySearchBar(input);
  purchaseAddPage.clickTambahBarangButton();

  purchaseAddPage.clickCustomInventorySimpanButton();
});

When("user adds new test curated inventory", () => {
  createSeedInventory({
    limitCuratedInv: 0,
    limitCustomInv: 1,
  });

  cy.wait(1000);
});

When("user adds existing custom inventory {string}", (input: string) => {
  createSeedInventory({
    limitCuratedInv: 0,
    limitCustomInv: 1,
  });

  cy.wait(2000);

  purchaseAddPage.typeInventorySearchBar(input);
  purchaseAddPage.clickAddSpecificInventoryButton(input);
});

When(
  "user adds uom {string} for inventory {string}, on uom row {string}",
  (uomName: string, productVariantName: string, uomRow: string) => {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      if (uomRow === "initial") {
        purchaseAddPage.clickSelectUomButton(productVariantName, "-1");
        purchaseAddPage.clickUomCheckBox(uomId);
        purchaseAddPage.clickUomPopoverPhilih();
      } else {
        retrieveUomId(uomRow);
        cy.get("@uomId").then((uomRowId: any) => {
          purchaseAddPage.clickSelectUomButton(productVariantName, uomRowId);
          purchaseAddPage.clickUomCheckBox(uomId);
          purchaseAddPage.clickUomPopoverPhilih();
        });
      }
    });
  }
);

When(
  "user adds Jumlah amount {string} for inventory {string}, on uom row {string}",
  (amount: string, productVariantName: string, uomRow: string) => {
    if (uomRow === "initial") {
      purchaseAddPage.typeJumlahInput(productVariantName, "-1", amount);
    } else {
      purchaseAddPage.typeJumlahInput(productVariantName, uomRow, amount);
    }
  }
);

When(
  "user adds Harga Unit amount {string} for inventory {string}, on uom row {string}",
  (amount: string, productVariantName: string, uomRow: string) => {
    if (uomRow === "initial") {
      purchaseAddPage.typeHargaUnitInput(productVariantName, "-1", amount);
    } else {
      purchaseAddPage.typeHargaUnitInput(productVariantName, uomRow, amount);
    }
  }
);

When(
  "user adds Potongan amount {string} for inventory {string}, on uom row {string}",
  (amount: string, productVariantName: string, uomRow: string) => {
    if (uomRow === "initial") {
      purchaseAddPage.typePotonganInput(productVariantName, "-1", amount);
    } else {
      purchaseAddPage.typePotonganInput(productVariantName, uomRow, amount);
    }
  }
);

When(
  "user clicks Harga Jual button for inventory {string}, on uom row {string}",
  (productVariantName: string, uomRow: string) => {
    if (uomRow === "initial") {
      purchaseAddPage.clickHargaJualButton(productVariantName, "-1");
    } else {
      purchaseAddPage.clickHargaJualButton(productVariantName, uomRow);
    }
  }
);

// When(
//   "user clicks on selling price edit button of inventory {string} unit {string}",
//   (inventoryName: string, uomName: string) => {
//     utils.retrieveUomId(uomName);
//     cy.get("@uomId").then((uomId: any) => {
//       const id = inventoryName + "_" + uomId;
//       inventoryListPage.clickSellingPriceEditButton(id);
//     });
//   }
// );

// When("user types {string} on unit selling price field", (input: string) => {
//   inventoryDetailPage.typeUnitSellingPrice(input);
//   cy.get(inventoryDetailPage.unitSellingPriceInput).should(
//     "have.value",
//     "Rp " + numberWithSeparators(input)
//   );
// });

// When("user clicks on save unit selling price button", () => {
//   inventoryDetailPage.clickSaveUnitSellingPriceButton();
//   cy.wait(500);
// });

When("user selects payment status {string}", (option: string) => {
  if (option === "Lunas") {
    purchaseAddPage.clickPaymentInfoRadioLunas();
  } else if (option === "Belum Lunas") {
    purchaseAddPage.clickPaymentInfoRadioBelumLunas();
  }
});

When("user adds paid amount {string}", (amount: string) => {
  purchaseAddPage.typeTotalBayarInput(amount);
});

When("user selects payment option {string}", (option: string) => {
  purchaseAddPage.clickPaymentInfoMethodPopoverButton();
  purchaseAddPage.clickPaymentInfoPopoverOption(option);
});

When("user selects current date for Tanggal Jatuh Tempo", () => {
  purchaseAddPage.selectCurrentDatePaymentInfo();
});

When("user click simpan button", () => {
  purchaseAddPage.clickSimpanHeaderButton();
});

/**
 *
 * Purchase List
 *
 */

When("user visits purchase list page", () => {
  purchaseListPage.navigate(purchaseListPage.path);
});

When("user clicks on first supplier row", () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  cy.request({
    method: "GET",
    failOnStatusCode: false,
    url: gadaConfig.saas.baseApiUrl + "store/purchase?=",
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "PURCHASED_DATE",
      supplier_name: invoiceNumber,
      sort_type: "desc",
      buying_period_start: `${year}-${month}-${day}`,
      buying_period_end: `${year}-${month + 1}-${day}`,
      page: 1,
      page_size: 10,
    },
  }).then((resp: any) => {
    const response: iGetStorePurchaseListAPIResponse = resp.body;

    if (response.total > 0) {
      const purchaseId = response.data[0].id;
      paymentType = response.data[0].payment_status;

      purchaseListPage.clickPurchaseDetailButton(purchaseId);
    }
  });
});

When("user checks if drawer opened correctly", () => {
  cy.get(purchaseListPage.purchaseDrawerHeaderText).should(
    "have.text",
    paymentType === PaymentStatus.PAID
      ? "Detail Pembelian"
      : "Detail Utang Toko"
  );
});

When("user searches for debt supplier row", () => {
  purchaseListPage.typeHeaderSearchBarInput(invoiceNumber);
});

When("user clicks on debt supplier row", () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  cy.request({
    method: "GET",
    failOnStatusCode: false,
    url: gadaConfig.saas.baseApiUrl + "store/purchase?=",
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "PURCHASED_DATE",
      supplier_name: invoiceNumber,
      sort_type: "desc",
      buying_period_start: `${year}-${month}-${day}`,
      buying_period_end: `${year}-${month + 1}-${day}`,
      page: 1,
      page_size: 10,
    },
  }).then((resp: any) => {
    const response: iGetStorePurchaseListAPIResponse = resp.body;

    console.log({ response, invoiceNumber });

    if (response.total > 0) {
      const purchaseId = response.data.find(
        (item) => item.invoice_number === invoiceNumber
      )?.id;

      if (purchaseId) {
        purchaseListPage.clickPurchaseDetailButton(purchaseId);
      }
    }
  });

  cy.wait(2000);
});

Then("check if debt has been paid", () => {
  cy.wait(5000);
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  cy.request({
    method: "GET",
    failOnStatusCode: false,
    url: gadaConfig.saas.baseApiUrl + "store/purchase?=",
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "PURCHASED_DATE",
      supplier_name: invoiceNumber,
      sort_type: "desc",
      buying_period_start: `${year}-${month}-${day}`,
      buying_period_end: `${year}-${month + 1}-${day}`,
      page: 1,
      page_size: 10,
    },
  }).then((resp: any) => {
    const response: iGetStorePurchaseListAPIResponse = resp.body;

    if (response.total > 0) {
      const paymentStatus = response.data.find(
        (item) => item.invoice_number === invoiceNumber
      )?.payment_status;

      expect(paymentStatus).equal(PaymentStatus.PAID);
    }
  });
});

When("user clicks Catat Pembayaran button", () => {
  purchaseListPage.clickCatatPembayaranButton();
});

When("user pays {string} amount of debt", (amount: string) => {
  purchaseListPage.typePayOffModalInput(amount);
  purchaseListPage.clickPayOffModalSimpanButton();
});

When("user pays total amount of debt", () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  cy.request({
    method: "GET",
    failOnStatusCode: false,
    url: gadaConfig.saas.baseApiUrl + "store/purchase?=",
    qs: {
      store_id: gadaConfig.saas.testUserAccount.storeId,
      sort_by: "PURCHASED_DATE",
      supplier_name: invoiceNumber,
      sort_type: "desc",
      buying_period_start: `${year}-${month}-${day}`,
      buying_period_end: `${year}-${month + 1}-${day}`,
      page: 1,
      page_size: 10,
    },
  }).then((resp: any) => {
    const response: iGetStorePurchaseListAPIResponse = resp.body;

    if (response.total > 0) {
      const debt = response.data.find(
        (item) => item.invoice_number === invoiceNumber
      )?.total_debt.amount;

      if (debt) {
        purchaseListPage.typePayOffModalInput(parseInt(debt).toFixed(0));
        purchaseListPage.clickPayOffModalSimpanButton();
      }
    }
  });
});

Then("invoice is displayed in the list", () => {
  cy.contains("td", invoiceNumber);
});
