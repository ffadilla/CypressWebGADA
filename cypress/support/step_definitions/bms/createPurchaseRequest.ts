import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import * as moment from "moment";
import CreatePurchaseRequestPage from "../../../e2e/bms/page_objects/createPurchaseRequestPage";
import * as utils from "./utils";

const createPurchaseRequestPage = new CreatePurchaseRequestPage();

Given("BMS - user logged in as {string}", (userRole) => {
  createPurchaseRequestPage.setLocalStorage(userRole);
});

And("BMS - user is in Pengajuan Pembelian page", () => {
  createPurchaseRequestPage.visitCreatePurchaseRequestPage();
});

And("BMS - user selects purchase request channel: {string}", (channel) => {
  createPurchaseRequestPage.expandChannelList();
  createPurchaseRequestPage.selectChannel(channel);
  cy.wrap(channel).as("channel");
});

And("BMS - user search vendor: {string}", (vendorId) => {
  createPurchaseRequestPage.typeVendorId(vendorId);
  createPurchaseRequestPage.selectOption(0);
  cy.get(createPurchaseRequestPage.vendorIdInput)
    .invoke("val")
    .then((value) => {
      cy.wrap(value).as("vendorId");
    });

  cy.get(createPurchaseRequestPage.vendorNameInput)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorName");
    });

  cy.get(createPurchaseRequestPage.vendorAddressInput)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorAddress");
    });

  cy.get(createPurchaseRequestPage.vendorTaxTypeInput)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorTaxType");
    });
});

And("BMS - user search buyer: {string}", (buyerId) => {
  createPurchaseRequestPage.typeBuyerId(buyerId);
  createPurchaseRequestPage.selectOption(0);
  cy.get(createPurchaseRequestPage.buyerIdInput)
    .invoke("val")
    .then((value) => {
      cy.wrap(value).as("buyerId");
    });

  cy.get(createPurchaseRequestPage.buyerNameInput)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("buyerName");
    });

  cy.get(createPurchaseRequestPage.buyerAreaInput)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("buyerArea");
    });
});

And("BMS - user selects delivery method: {string}", (deliveryMethodName) => {
  let deliveryMethod = utils.deliveryMethod(deliveryMethodName);
  createPurchaseRequestPage.selectDeliveryMethod(deliveryMethod);
  cy.wrap(deliveryMethod).as("deliveryMethod");
});

And(
  "BMS - user sets delivery request start date: {int} days from today",
  (int) => {
    createPurchaseRequestPage.setDeliveryRequestStartDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "BMS - user sets delivery request end date: {int} days from today",
  (int) => {
    createPurchaseRequestPage.setDeliveryRequestEndDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And("BMS - user fills delivery fee: {int} digits random", (digits) => {
  let deliveryFee = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(deliveryFee);
  cy.wrap(deliveryFee).as("deliveryFee");
});

And("BMS - user fills delivery fee discount: {int} digits random", (digits) => {
  let deliveryFeeDiscount = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(deliveryFeeDiscount);
  cy.wrap(deliveryFeeDiscount).as("deliveryFeeDiscount");
});

And("BMS - user fills unloading fee: {int} digits random", (digits) => {
  let unloadingFee = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(unloadingFee);
  cy.wrap(unloadingFee).as("unloadingFee");
});

And("BMS - user fills purchase discount: {int} digits random", (digits) => {
  let purchaseDiscount = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(purchaseDiscount);
  cy.wrap(purchaseDiscount).as("purchaseDiscount");
});

And("BMS - user fills purchase reason: {string}", (purchaseReason) => {
  createPurchaseRequestPage.typePurchaseReason(purchaseReason);
  cy.wrap(purchaseReason).as("purchaseReason");
});

And("BMS - user clicks Lanjut button to add item stage", () => {
  createPurchaseRequestPage.clickNextToAddItem();
});

And("BMS - user clicks Tambah Item Pembelian button", () => {
  createPurchaseRequestPage.clickAddNewItem();
});

And("BMS - user search item name: {string}", (productName) => {
  createPurchaseRequestPage.typeProduct(productName);
  createPurchaseRequestPage.selectOption(0);
});

And("BMS - user selects tax type: {string}", (taxTypeName) => {
  let taxType = utils.taxType(taxTypeName);
  createPurchaseRequestPage.selectTaxType(taxType);
  cy.wrap(taxType).as("taxType");
});

And("BMS - user fills item quantity: {int} digits random", (digits) => {
  let quantity = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(quantity);
  cy.wrap(quantity).as("quantity");
});

And("BMS - user fills item rate: {int} digits random", (digits) => {
  let rate = utils.randomNumber(digits);
  let dpp = utils.dppCalculation(rate);
  let rateNumberFormat = utils.numberFormat(rate);
  let dppNumberFormat = utils.numberFormat(dpp);

  createPurchaseRequestPage.typeRate(rate);

  cy.wrap(rate).as("rate");
  cy.wrap(dpp).as("dpp");

  cy.get("@taxType").then((taxType: any) => {
    if (taxType === "VAT") {
      let vat = utils.vatCalculation(rate, dpp);
      let vatNumberFormat = utils.numberFormat(vat);

      cy.get(createPurchaseRequestPage.dppInput)
        .eq(0)
        .invoke("val")
        .should("eq", dppNumberFormat);
      cy.get(createPurchaseRequestPage.vatInput)
        .eq(1)
        .invoke("val")
        .should("eq", vatNumberFormat);
      cy.wrap(vat).as("vat");
    } else {
      cy.get(createPurchaseRequestPage.dppInput)
        .eq(0)
        .invoke("val")
        .should("eq", 0 + rateNumberFormat);
      cy.get(createPurchaseRequestPage.vatInput)
        .eq(1)
        .invoke("val")
        .should("eq", "0")
        .then((value) => {
          cy.wrap(value).as("vat");
        });
    }
  });
});

And("BMS - user fills item rate discount: {int} digits random", (digits) => {
  let rateDiscount = utils.randomNumber(digits);
  createPurchaseRequestPage.typeDeliveryFee(rateDiscount);
  cy.wrap(rateDiscount).as("rateDiscount");
  cy.get("@quantity").then((quantity: any) => {
    cy.get("@rate").then((rate: any) => {
      let totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
      let totalAmountNumberFormat = utils.numberFormat(totalAmount);
      cy.get(createPurchaseRequestPage.totalAmountInput)
        .invoke("val")
        .should("eq", totalAmountNumberFormat);
      cy.wrap(totalAmount).as("totalAmount");
      cy.get("@deliveryFee").then((deliveryFee: any) => {
        cy.get("@deliveryFeeDiscount").then((deliveryFeeDiscount: any) => {
          cy.get("@unloadingFee").then((unloadingFee: any) => {
            cy.get("@purchaseDiscount").then((purchaseDiscount: any) => {
              let minimumSellingPrice = utils.minimumSellingPrice(
                rate,
                rateDiscount,
                quantity,
                deliveryFee,
                deliveryFeeDiscount,
                unloadingFee,
                purchaseDiscount
              );
              cy.wrap(minimumSellingPrice).as("minimumSellingPrice");
            });
          });
        });
      });
    });
  });
});

And("BMS - user clicks Tambah button to add item", () => {
  createPurchaseRequestPage.clickAddItem();
});

And("BMS - user add {int} purchase items with random product", (items) => {
  for (let i = 1; i <= items; i++) {
    createPurchaseRequestPage.clickAddNewItem();

    let productNameList = ["Coklat", "Vanilla", "Kopi"];
    let productName =
      productNameList[Math.floor(Math.random() * productNameList.length)];
    createPurchaseRequestPage.typeProduct(productName);
    createPurchaseRequestPage.selectOption(i);

    let taxTypeList = ["VAT", "NON_VAT"];
    let taxType = taxTypeList[Math.floor(Math.random() * taxTypeList.length)];
    createPurchaseRequestPage.selectTaxType(taxType);
    cy.wrap(taxType).as("taxType " + i);

    let quantity = utils.randomNumber(2);
    createPurchaseRequestPage.typeQuantity(quantity);
    cy.wrap(quantity).as("quantity " + i);

    let rate = utils.randomNumber(5);
    let rateNumberFormat = utils.numberFormat(rate);
    createPurchaseRequestPage.typeRate(rate);
    cy.wrap(rate).as("rate " + i);

    let dpp = utils.dppCalculation(rate);
    let dppNumberFormat = utils.numberFormat(dpp);
    cy.wrap(dpp).as("dpp" + i);

    cy.get(`@taxType ${i}`).then((taxType: any) => {
      if (taxType === "VAT") {
        let vat = utils.vatCalculation(rate, dpp);
        let vatNumberFormat = utils.numberFormat(vat);
        cy.get(createPurchaseRequestPage.dppInput)
          .eq(0)
          .invoke("val")
          .should("eq", dppNumberFormat);
        cy.get(createPurchaseRequestPage.vatInput)
          .eq(1)
          .invoke("val")
          .should("eq", vatNumberFormat);
        cy.wrap(vat).as("vat" + i);
      } else {
        cy.get(createPurchaseRequestPage.dppInput)
          .eq(0)
          .invoke("val")
          .should("eq", 0 + rateNumberFormat);
        cy.get(createPurchaseRequestPage.vatInput)
          .eq(1)
          .invoke("val")
          .should("eq", "0")
          .then((value) => {
            cy.wrap(value).as("vat" + i);
          });
      }
    });

    let rateDiscount = utils.randomNumber(4);
    createPurchaseRequestPage.typeRateDiscount(rateDiscount);
    cy.wrap(rateDiscount).as("rateDiscount " + i);

    cy.get(`@quantity ${i}`).then((quantity: any) => {
      cy.get(`@rate ${i}`).then((rate: any) => {
        cy.get(`@rateDiscount ${i}`).then((rateDiscount: any) => {
          let totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
          let totalAmountNumberFormat = utils.numberFormat(totalAmount);
          cy.get(createPurchaseRequestPage.totalAmountInput)
            .invoke("val")
            .should("eq", totalAmountNumberFormat);
          cy.wrap(totalAmount).as("totalAmount " + i);
        });
      });
    });
    createPurchaseRequestPage.clickAddItem();
  }
});

And("BMS - user clicks Lanjut button to suggested selling price stage", () => {
  createPurchaseRequestPage.clickNextToSuggestedSellingPrice();
});

And(
  "BMS - user fills selling estimation days: {int} digits random",
  (digits) => {
    let sellingEstimationDays = utils.randomNumber(digits);
    createPurchaseRequestPage.typeSellingEstimationDays(sellingEstimationDays);
    cy.wrap(sellingEstimationDays).as("sellingEstimationDays");
  }
);

And("BMS - user selects setting type: {string}", (settingType) => {
  createPurchaseRequestPage.selectSettingType(settingType);
  cy.wrap(settingType).as("settingType");
});

And("BMS - user clicks Tambah UOM Penjualan button", () => {
  createPurchaseRequestPage.clickAddSellingUom();
});

And("BMS - user selects UOM: {string}", (uom) => {
  createPurchaseRequestPage.selectSpecificUom(uom);
});

And("BMS - user clicks Atur Harga button", () => {
  createPurchaseRequestPage.clickSetSellingPrice();
});

And("BMS - user fills price: {int} + minimum selling price", (price) => {
  cy.get("@minimumSellingPrice").then((minimumSellingPrice) => {
    let sellingPrice = minimumSellingPrice + price;
    createPurchaseRequestPage.typePrice(sellingPrice);
    cy.wrap(sellingPrice).as("price");
  });
});

And("BMS - user fills margin: {float} from minimum selling price", (margin) => {
  createPurchaseRequestPage.typeMargin(margin);
  cy.wrap(margin).as("margin");
});

And("BMS - user clicks Simpan button to UOM price tier", () => {
  createPurchaseRequestPage.clickSavePriceTier();
  cy.get("@settingType").then((settingType: any) => {
    if (settingType === "PRICE") {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
        cy.get("@price").then((price: any) => {
          let priceMargin = utils.marginCalculation(price, minimumSellingPrice);
          let priceMarginNumberFormat = utils.numberFormat(priceMargin);
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceMarginNumberFormat,
            priceMarginNumberFormat
          );
        });
      });
    } else {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
        cy.get("@margin").then((margin: any) => {
          let price = utils.priceCalculation(margin, minimumSellingPrice);
          let roundedPrice = utils.roundPrice(price);
          let priceNumberFormat = utils.numberFormat(price);
          let roundedPriceNumberFormat = utils.numberFormat(roundedPrice);
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceNumberFormat,
            roundedPriceNumberFormat
          );
        });
      });
    }
  });
});

And("BMS - user clicks Lanjut button to purchase request preview", () => {
  createPurchaseRequestPage.clickNextToPreview();
});

And("BMS - user clicks Simpan button to create purchase request", () => {
  createPurchaseRequestPage.clickSavePurchaseRequest();
});

When("BMS - user clicks OK button to confirm purchase request creation", () => {
  createPurchaseRequestPage.clickConfirmOk();
});

Then("BMS - purchase request created successfully", () => {
  createPurchaseRequestPage.checkSnackBar("Pembelian berhasil diajukan");
});
