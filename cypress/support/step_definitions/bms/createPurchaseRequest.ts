import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import * as moment from "moment";
import CreatePurchaseRequestPage from "../../../e2e/bms/page_objects/createPurchaseRequestPage";
import * as utils from "./utils";

const createPurchaseRequestPage = new CreatePurchaseRequestPage();

Given("BMS - user logged in as {string}", (userRole: string) => {
  createPurchaseRequestPage.setLocalStorage(userRole);
});

And("BMS - user is in Pengajuan Pembelian page", () => {
  createPurchaseRequestPage.visitCreatePurchaseRequestPage();
});

And(
  "BMS - user selects {string} as purchase request channel",
  (channel: string) => {
    createPurchaseRequestPage.expandChannelList();
    createPurchaseRequestPage.selectChannel(channel);
    cy.wrap(channel).as("channel");
  }
);

And(
  "BMS - user types search vendor input field with {string} and selects the 1st option",
  (vendorId: string) => {
    createPurchaseRequestPage.typeVendorId(vendorId);
    createPurchaseRequestPage.selectOption(0);
    cy.get(createPurchaseRequestPage.vendorIdInput)
      .invoke("val")
      .then((value: any) => {
        cy.wrap(value).as("vendorId");
      });

    cy.get(createPurchaseRequestPage.vendorNameInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("vendorName");
      });

    cy.get(createPurchaseRequestPage.vendorAddressInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("vendorAddress");
      });

    cy.get(createPurchaseRequestPage.vendorTaxTypeInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("vendorTaxType");
      });
  }
);

And(
  "BMS - user types search buyer input field with {string} and selects the 1st option",
  (buyerId: string) => {
    createPurchaseRequestPage.typeBuyerId(buyerId);
    createPurchaseRequestPage.selectOption(0);
    cy.get(createPurchaseRequestPage.buyerIdInput)
      .invoke("val")
      .then((value: any) => {
        cy.wrap(value).as("buyerId");
      });

    cy.get(createPurchaseRequestPage.buyerNameInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("buyerName");
      });

    cy.get(createPurchaseRequestPage.buyerAreaInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("buyerArea");
      });
  }
);

And(
  "BMS - user selects {string} as purchase request delivery method",
  (deliveryMethodName: string) => {
    let deliveryMethod = utils.deliveryMethod(deliveryMethodName);
    createPurchaseRequestPage.selectDeliveryMethod(deliveryMethod);
    cy.wrap(deliveryMethod).as("deliveryMethod");
  }
);

And(
  "BMS - user sets delivery request start date {int} days from today",
  (int: number) => {
    createPurchaseRequestPage.setDeliveryRequestStartDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "BMS - user sets delivery request end date {int} days from today",
  (int: number) => {
    createPurchaseRequestPage.setDeliveryRequestEndDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "BMS - user fills delivery fee input field with {int} digits random",
  (digits: number) => {
    let deliveryFee = utils.randomNumber(digits);
    createPurchaseRequestPage.typeDeliveryFee(deliveryFee);
    cy.wrap(deliveryFee).as("deliveryFee");
  }
);

And(
  "BMS - user fills delivery fee discount input field with {int} digits random",
  (digits: number) => {
    let deliveryFeeDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typeDeliveryFeeDiscount(deliveryFeeDiscount);
    cy.wrap(deliveryFeeDiscount).as("deliveryFeeDiscount");
  }
);

And(
  "BMS - user fills unloading fee input field with {int} digits random",
  (digits: number) => {
    let unloadingFee = utils.randomNumber(digits);
    createPurchaseRequestPage.typeUnloadingFee(unloadingFee);
    cy.wrap(unloadingFee).as("unloadingFee");
  }
);

And(
  "BMS - user fills purchase discount input field with {int} digits random",
  (digits: number) => {
    let purchaseDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typePurchaseDiscount(purchaseDiscount);
    cy.wrap(purchaseDiscount).as("purchaseDiscount");
  }
);

And(
  "BMS - user fills purchase reason input field with {string}",
  (purchaseReason: string) => {
    createPurchaseRequestPage.typePurchaseReason(purchaseReason);
    cy.wrap(purchaseReason).as("purchaseReason");
  }
);

And("BMS - user clicks on Lanjut button to add item stage", () => {
  createPurchaseRequestPage.clickNextToAddItem();
});

And("BMS - user clicks on Tambah Item Pembelian button", () => {
  createPurchaseRequestPage.clickAddNewItem();
});

And(
  "BMS - user types search item name input field with {string}",
  (productName: string) => {
    createPurchaseRequestPage.typeProduct(productName);
    createPurchaseRequestPage.selectOption(0);
    cy.get(createPurchaseRequestPage.taxTypeInput)
      .invoke("val")
      .should("not.be.empty")
      .then((value: any) => {
        cy.wrap(value).as("taxType");
      });
  }
);

And(
  "BMS - user fills item quantity input field with {int} digits random",
  (digits: number) => {
    let quantity = utils.randomNumber(digits);
    createPurchaseRequestPage.typeQuantity(quantity);
    cy.wrap(quantity).as("quantity");
  }
);

And(
  "BMS - user fills item rate input field with {int} digits random",
  (digits: number) => {
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
          .then((value: any) => {
            cy.wrap(value).as("vat");
          });
      }
    });
  }
);

And(
  "BMS - user fills internal discount amount input field with {int} digits random",
  (digits: number) => {
    let discountType = "amount";
    let internalDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typeInternalDiscount(
      discountType,
      internalDiscount
    );
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        internalDiscount
      );
      createPurchaseRequestPage.checkInternalDiscountCalculation(
        calculatedDiscount + ""
      );
    });
    cy.wrap(internalDiscount).as("internalDiscount");
  }
);

And(
  "BMS - user fills principal discount amount input field with {int} digits random",
  (digits: number) => {
    let discountType = "amount";
    let principalDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typePrincipalDiscount(
      discountType,
      principalDiscount
    );
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        principalDiscount
      );
      createPurchaseRequestPage.checkPrincipalDiscountCalculation(
        calculatedDiscount + ""
      );
    });
    cy.wrap(principalDiscount).as("principalDiscount");
  }
);

And(
  "BMS - user fills distributor discount amount input field with {int} digits random",
  (digits: number) => {
    let discountType = "amount";
    let distributorDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typeDistributorDiscount(
      discountType,
      distributorDiscount
    );
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        distributorDiscount
      );
      createPurchaseRequestPage.checkDistributorDiscountCalculation(
        calculatedDiscount + ""
      );
    });
    cy.wrap(distributorDiscount).as("distributorDiscount");
  }
);

And(
  "BMS - user fills program discount amount input field with {int} digits random",
  (digits: number) => {
    let discountType = "amount";
    let programDiscount = utils.randomNumber(digits);
    createPurchaseRequestPage.typeProgramDiscount(
      discountType,
      programDiscount
    );
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        programDiscount
      );
      createPurchaseRequestPage.checkProgramDiscountCalculation(
        calculatedDiscount + ""
      );
    });
    cy.wrap(programDiscount).as("programDiscount");
  }
);

And(
  "BMS - user fills internal discount percentage input field with {float}",
  (percentage: number) => {
    let discountType = "percentage";
    createPurchaseRequestPage.typeInternalDiscount(discountType, percentage);
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        percentage
      );
      let calculatedDiscountNumberFormat =
        utils.numberFormat(calculatedDiscount);
      createPurchaseRequestPage.checkInternalDiscountCalculation(
        calculatedDiscountNumberFormat
      );
      cy.wrap(calculatedDiscount).as("internalDiscount");
    });
  }
);

And(
  "BMS - user fills principal discount percentage input field with {float}",
  (percentage: number) => {
    let discountType = "percentage";
    createPurchaseRequestPage.typePrincipalDiscount(discountType, percentage);
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        percentage
      );
      let calculatedDiscountNumberFormat =
        utils.numberFormat(calculatedDiscount);
      createPurchaseRequestPage.checkPrincipalDiscountCalculation(
        calculatedDiscountNumberFormat
      );
      cy.wrap(calculatedDiscount).as("principalDiscount");
    });
  }
);

And(
  "BMS - user fills distributor discount percentage input field with {float}",
  (percentage: number) => {
    let discountType = "percentage";
    createPurchaseRequestPage.typeDistributorDiscount(discountType, percentage);
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        percentage
      );
      let calculatedDiscountNumberFormat =
        utils.numberFormat(calculatedDiscount);
      createPurchaseRequestPage.checkDistributorDiscountCalculation(
        calculatedDiscountNumberFormat
      );
      cy.wrap(calculatedDiscount).as("distributorDiscount");
    });
  }
);

And(
  "BMS - user fills program discount percentage input field with {float}",
  (percentage: number) => {
    let discountType = "percentage";
    createPurchaseRequestPage.typeProgramDiscount(discountType, percentage);
    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        percentage
      );
      let calculatedDiscountNumberFormat =
        utils.numberFormat(calculatedDiscount);
      createPurchaseRequestPage.checkProgramDiscountCalculation(
        calculatedDiscountNumberFormat
      );
      cy.wrap(calculatedDiscount).as("programDiscount");
    });
  }
);

And("BMS - user clicks on Tambah button to add item", () => {
  cy.get("@quantity").then((quantity: any) => {
    cy.get("@rate").then((rate: any) => {
      cy.get("@internalDiscount").then((internalDiscount: any) => {
        cy.get("@principalDiscount").then((principalDiscount: any) => {
          cy.get("@distributorDiscount").then((distributorDiscount: any) => {
            cy.get("@programDiscount").then((programDiscount: any) => {
              let rateDiscount = utils.rateDiscount(
                internalDiscount,
                principalDiscount,
                distributorDiscount,
                programDiscount
              );
              let totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
              let totalAmountNumberFormat = utils.numberFormat(totalAmount);
              cy.get(createPurchaseRequestPage.totalAmountInput)
                .invoke("val")
                .should("eq", totalAmountNumberFormat);
              cy.wrap(totalAmount).as("totalAmount");
              cy.get("@deliveryFee").then((deliveryFee: any) => {
                cy.get("@deliveryFeeDiscount").then(
                  (deliveryFeeDiscount: any) => {
                    cy.get("@unloadingFee").then((unloadingFee: any) => {
                      cy.get("@purchaseDiscount").then(
                        (purchaseDiscount: any) => {
                          let minimumSellingPrice = utils.minimumSellingPrice(
                            rate,
                            rateDiscount,
                            quantity,
                            deliveryFee,
                            deliveryFeeDiscount,
                            unloadingFee,
                            purchaseDiscount
                          );
                          cy.wrap(minimumSellingPrice).as(
                            "minimumSellingPrice"
                          );
                        }
                      );
                    });
                  }
                );
              });
            });
          });
        });
      });
    });
  });
  createPurchaseRequestPage.clickAddItem();
});

And(
  "BMS - user clicks on Lanjut button to suggested selling price stage",
  () => {
    createPurchaseRequestPage.clickNextToSuggestedSellingPrice();
  }
);

And(
  "BMS - user fills selling estimation days input field with {int} digits random",
  (digits: number) => {
    let sellingEstimationDays = utils.randomNumber(digits);
    createPurchaseRequestPage.typeSellingEstimationDays(sellingEstimationDays);
    cy.wrap(sellingEstimationDays).as("sellingEstimationDays");
  }
);

And(
  "BMS - user selects {string} as selling price setting type",
  (settingType: string) => {
    createPurchaseRequestPage.selectSettingType(settingType);
    cy.wrap(settingType).as("settingType");
  }
);

And("BMS - user clicks on Tambah UOM Penjualan button", () => {
  createPurchaseRequestPage.clickAddSellingUom();
});

And("BMS - user selects {string} as selling UOM", (uom: string) => {
  createPurchaseRequestPage.selectSpecificUom(uom);
});

And("BMS - user clicks on Atur Harga button", () => {
  createPurchaseRequestPage.clickSetSellingPrice();
});

And(
  "BMS - user fills price input field with {int} + minimum selling price",
  (price: number) => {
    cy.get("@vendorTaxType").then((vendorTaxType: any) => {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
        cy.get("@rate").then((rate: any) => {
          let taxType = utils.taxType(vendorTaxType);
          if (taxType === "PKP") {
            let sellingPrice = minimumSellingPrice + price;
            createPurchaseRequestPage.typePrice(sellingPrice);
            cy.wrap(sellingPrice).as("price");
          } else {
            let sellingPrice = minimumSellingPrice + price + 0.115 * rate;
            createPurchaseRequestPage.typePrice(sellingPrice);
            cy.wrap(sellingPrice).as("price");
          }
        });
      });
    });
  }
);

And(
  "BMS - user fills margin input field with {float} from minimum selling price",
  (margin: number) => {
    cy.get("@vendorTaxType").then((vendorTaxType: any) => {
      let taxType = utils.taxType(vendorTaxType);
      cy.wrap(taxType).as("taxTypetest");
      if (taxType === "PKP") {
        createPurchaseRequestPage.typeMargin(margin);
        cy.wrap(margin).as("margin");
      } else {
        let ptkpMargin = margin + 11.5;
        createPurchaseRequestPage.typeMargin(ptkpMargin);
        cy.wrap(ptkpMargin).as("margin");
      }
    });
  }
);

And("BMS - user clicks on Simpan button to UOM price tier input", () => {
  createPurchaseRequestPage.clickSavePriceTier();
  cy.get("@settingType").then((settingType: any) => {
    if (settingType === "PRICE") {
      cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
        cy.get("@price").then((price: any) => {
          let priceMargin =
            utils.marginCalculation(price, minimumSellingPrice) + "";
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceMargin,
            priceMargin
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

And("BMS - user clicks on Lanjut button to purchase request preview", () => {
  createPurchaseRequestPage.clickNextToPreview();
});

And("BMS - user clicks on Simpan button to create purchase request", () => {
  createPurchaseRequestPage.clickSavePurchaseRequest();
});

When(
  "BMS - user clicks on OK button to confirm purchase request creation",
  () => {
    createPurchaseRequestPage.clickConfirmOk();
  }
);

Then("BMS - purchase request created successfully", () => {
  createPurchaseRequestPage.checkSnackBar("Pembelian berhasil diajukan");
});
