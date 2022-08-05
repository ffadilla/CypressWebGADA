import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreatePurchaseRequestPage from "../../../integration/bms/page_objects/createPurchaseRequestPage.js";
import * as utils from "./utils.js";

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
  cy.get(createPurchaseRequestPage.VENDOR_ID_INPUT)
    .invoke("val")
    .then((value) => {
      cy.wrap(value).as("vendorId");
    });

  cy.get(createPurchaseRequestPage.VENDOR_NAME_INPUT)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorName");
    });

  cy.get(createPurchaseRequestPage.VENDOR_ADDRESS_INPUT)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorAddress");
    });

  cy.get(createPurchaseRequestPage.VENDOR_TAX_TYPE_INPUT)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("vendorTaxType");
    });
});

And("BMS - user search buyer: {string}", (buyerId) => {
  createPurchaseRequestPage.typeBuyerId(buyerId);
  createPurchaseRequestPage.selectOption(0);
  cy.get(createPurchaseRequestPage.BUYER_ID_INPUT)
    .invoke("val")
    .then((value) => {
      cy.wrap(value).as("buyerId");
    });

  cy.get(createPurchaseRequestPage.BUYER_NAME_INPUT)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("buyerName");
    });

  cy.get(createPurchaseRequestPage.BUYER_AREA_INPUT)
    .invoke("val")
    .should("not.be.empty")
    .then((value) => {
      cy.wrap(value).as("buyerArea");
    });
});

And("BMS - user selects delivery method: {string}", (deliveryMethodName) => {
  var deliveryMethod = utils.deliveryMethod(deliveryMethodName);
  createPurchaseRequestPage.selectDeliveryMethod(deliveryMethod);
  cy.wrap(deliveryMethod).as("deliveryMethod");
});

And(
  "BMS - user sets delivery request start date: {int} days from today",
  (int) => {
    createPurchaseRequestPage.setDeliveryRequestStartDate(
      Cypress.moment().add(int, "days").format("ll")
    );
  }
);

And(
  "BMS - user sets delivery request end date: {int} days from today",
  (int) => {
    createPurchaseRequestPage.setDeliveryRequestEndDate(
      Cypress.moment().add(int, "days").format("ll")
    );
  }
);

And("BMS - user fills delivery fee: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((deliveryFee) => {
    createPurchaseRequestPage.typeDeliveryFee(deliveryFee);
    cy.wrap(deliveryFee).as("deliveryFee");
  });
});

And("BMS - user fills delivery fee discount: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((deliveryFeeDiscount) => {
    createPurchaseRequestPage.typeDeliveryFeeDiscount(deliveryFeeDiscount);
    cy.wrap(deliveryFeeDiscount).as("deliveryFeeDiscount");
  });
});

And("BMS - user fills unloading fee: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((unloadingFee) => {
    createPurchaseRequestPage.typeUnloadingFee(unloadingFee);
    cy.wrap(unloadingFee).as("unloadingFee");
  });
});

And("BMS - user fills purchase discount: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((purchaseDiscount) => {
    createPurchaseRequestPage.typePurchaseDiscount(purchaseDiscount);
    cy.wrap(purchaseDiscount).as("purchaseDiscount");
  });
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
  var taxType = utils.taxType(taxTypeName);
  createPurchaseRequestPage.selectTaxType(taxType);
  cy.wrap(taxType).as("taxType");
});

And("BMS - user fills item quantity: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((quantity) => {
    createPurchaseRequestPage.typeQuantity(quantity);
    cy.wrap(quantity).as("quantity");
  });
});

And("BMS - user fills item rate: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((rate) => {
    createPurchaseRequestPage.typeRate(rate);
    cy.wrap(rate).as("rate");
    cy.get("@taxType").then((taxType) => {
      if (taxType == "VAT") {
        var dpp = utils.dppCalculation(rate);
        var vat = utils.vatCalculation(rate, dpp);
        cy.numberFormat(dpp).then((dpp) => {
          cy.get(createPurchaseRequestPage.DPP_INPUT)
            .eq(0)
            .invoke("val")
            .should("eq", dpp);

          cy.wrap(dpp).as("dpp");
        });
        cy.numberFormat(vat).then((vat) => {
          cy.get(createPurchaseRequestPage.VAT_INPUT)
            .eq(1)
            .invoke("val")
            .should("eq", vat);

          cy.wrap(vat).as("vat");
        });
      } else {
        cy.get("@rate").then((rate) => {
          cy.numberFormat(rate).then((dpp) => {
            cy.get(createPurchaseRequestPage.DPP_INPUT)
              .eq(0)
              .invoke("val")
              .should("eq", 0 + dpp);

            cy.wrap(dpp).as("dpp");
          });
        });
        cy.get(createPurchaseRequestPage.VAT_INPUT)
          .eq(1)
          .invoke("val")
          .should("eq", "0")
          .then((value) => {
            cy.wrap(value).as("vat");
          });
      }
    });
  });
});

And("BMS - user fills item rate discount: {int} digits random", (digits) => {
  cy.randomNumber(digits).then((rateDiscount) => {
    createPurchaseRequestPage.typeRateDiscount(rateDiscount);
    cy.wrap(rateDiscount).as("rateDiscount");
  });
  cy.get("@quantity").then((quantity) => {
    cy.get("@rate").then((rate) => {
      cy.get("@rateDiscount").then((rateDiscount) => {
        cy.numberFormat(utils.totalAmount(quantity, rate, rateDiscount)).then(
          (totalAmount) => {
            cy.get(createPurchaseRequestPage.TOTAL_AMOUNT_INPUT)
              .invoke("val")
              .should("eq", totalAmount);
          }
        );
        var totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
        cy.wrap(totalAmount).as("totalAmount");

        cy.get("@deliveryFee").then((deliveryFee) => {
          cy.get("@deliveryFeeDiscount").then((deliveryFeeDiscount) => {
            cy.get("@unloadingFee").then((unloadingFee) => {
              cy.get("@purchaseDiscount").then((purchaseDiscount) => {
                var minimumSellingPrice = utils.minimumSellingPrice(
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
});

And("BMS - user clicks Tambah button to add item", () => {
  createPurchaseRequestPage.clickAddItem();
});

And("BMS - user add {int} purchase items with random product", (items) => {
  for (let i = 1; i <= items; i++) {
    createPurchaseRequestPage.clickAddNewItem();

    var productNameList = ["Coklat", "Vanilla", "Kopi"];
    var productName =
      productNameList[Math.floor(Math.random() * productNameList.length)];
    createPurchaseRequestPage.typeProduct(productName);
    createPurchaseRequestPage.selectOption(i);

    var taxTypeList = ["VAT", "NON_VAT"];
    var taxType = taxTypeList[Math.floor(Math.random() * taxTypeList.length)];
    createPurchaseRequestPage.selectTaxType(taxType);
    cy.wrap(taxType).as("taxType " + i);

    cy.randomNumber(2).then((quantity) => {
      createPurchaseRequestPage.typeQuantity(quantity);
      cy.wrap(quantity).as("quantity " + i);
    });

    cy.randomNumber(5).then((rate) => {
      createPurchaseRequestPage.typeRate(rate);
      cy.wrap(rate).as("rate " + i);
      cy.get(`@taxType ${i}`).then((taxType) => {
        if (taxType == "VAT") {
          var dpp = utils.dppCalculation(rate);
          var vat = utils.vatCalculation(rate, dpp);
          cy.numberFormat(dpp).then((dpp) => {
            cy.get(createPurchaseRequestPage.DPP_INPUT)
              .eq(0)
              .invoke("val")
              .should("eq", dpp);

            cy.wrap(dpp).as("dpp " + i);
          });
          cy.numberFormat(vat).then((vat) => {
            cy.get(createPurchaseRequestPage.VAT_INPUT)
              .eq(1)
              .invoke("val")
              .should("eq", vat);

            cy.wrap(vat).as("vat " + i);
          });
        } else {
          cy.get(`@rate ${i}`).then((rate) => {
            cy.numberFormat(rate).then((dpp) => {
              cy.get(createPurchaseRequestPage.DPP_INPUT)
                .eq(0)
                .invoke("val")
                .should("eq", 0 + dpp);

              cy.wrap(dpp).as("dpp " + i);
            });
          });
          cy.get(createPurchaseRequestPage.VAT_INPUT)
            .eq(1)
            .invoke("val")
            .should("eq", "0")
            .then((value) => {
              cy.wrap(value).as("vat " + i);
            });
        }
      });
    });
    cy.randomNumber(4).then((rateDiscount) => {
      createPurchaseRequestPage.typeRateDiscount(rateDiscount);
      cy.wrap(rateDiscount).as("rateDiscount " + i);
    });
    cy.get(`@quantity ${i}`).then((quantity) => {
      cy.get(`@rate ${i}`).then((rate) => {
        cy.get(`@rateDiscount ${i}`).then((rateDiscount) => {
          cy.numberFormat(quantity * (rate - rateDiscount)).then(
            (totalAmount) => {
              cy.get(createPurchaseRequestPage.TOTAL_AMOUNT_INPUT)
                .invoke("val")
                .should("eq", totalAmount);
            }
          );
          var totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
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
    cy.randomNumber(digits).then((sellingEstimationDays) => {
      createPurchaseRequestPage.typeSellingEstimationDays(
        sellingEstimationDays
      );
      cy.wrap(sellingEstimationDays).as("sellingEstimationDays");
    });
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
    var sellingPrice = minimumSellingPrice + price;
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
  cy.get("@settingType").then((settingType) => {
    if (settingType == "PRICE") {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice) => {
        cy.get("@price").then((price) => {
          var priceMargin = utils.marginCalculation(price, minimumSellingPrice);
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceMargin,
            priceMargin
          );
        });
      });
    } else {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice) => {
        cy.get("@margin").then((margin) => {
          var price = utils.priceCalculation(margin, minimumSellingPrice);
          var roundedPrice = utils.roundPrice(price);
          cy.numberFormat(price).then((price) => {
            cy.numberFormat(roundedPrice).then((roundedPrice) => {
              createPurchaseRequestPage.checkSellingPriceCalculation(
                price,
                roundedPrice
              );
            });
          });
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
