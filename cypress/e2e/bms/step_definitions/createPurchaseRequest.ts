import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import * as moment from "moment";
import CreatePurchaseRequestPage from "../page_objects/createPurchaseRequestPage";
import * as utils from "../common/utils";

const createPurchaseRequestPage = new CreatePurchaseRequestPage();

Given("user logged in as {string}", (userRole: string) => {
  createPurchaseRequestPage.setLocalStorage(userRole);
});

And("user is in Pengajuan Pembelian page", () => {
  createPurchaseRequestPage.visitCreatePurchaseRequestPage();
});

And(
  "user selects {string} as purchase request channel",
  (channel: "marketplace" | "offline") => {
    createPurchaseRequestPage.expandChannelList();
    createPurchaseRequestPage.selectChannel(utils.channelSpec[channel]);
    cy.wrap(utils.channelSpec[channel]).as("channel");
  }
);

And(
  "user types search vendor input field with {string}",
  (vendorId: string) => {
    createPurchaseRequestPage.typeString(
      createPurchaseRequestPage.vendorIdInput,
      vendorId
    );
    createPurchaseRequestPage.selectOption(vendorId, 0);
    createPurchaseRequestPage.checkInputValueIsNotEmpty(
      createPurchaseRequestPage.vendorIdInput,
      "vendorId"
    );
    createPurchaseRequestPage.checkInputValueIsNotEmpty(
      createPurchaseRequestPage.vendorNameInput,
      "vendorName"
    );
    createPurchaseRequestPage.checkInputValueIsNotEmpty(
      createPurchaseRequestPage.vendorAddressInput,
      "vendorAddress"
    );
    createPurchaseRequestPage.checkInputValueIsNotEmpty(
      createPurchaseRequestPage.vendorTaxTypeInput,
      "vendorTaxType"
    );
  }
);

And("user types search buyer input field with {string}", (buyerId: string) => {
  createPurchaseRequestPage.typeString(
    createPurchaseRequestPage.buyerIdInput,
    buyerId
  );
  createPurchaseRequestPage.selectOption(buyerId, 0);
  createPurchaseRequestPage.checkInputValueIsNotEmpty(
    createPurchaseRequestPage.buyerIdInput,
    "buyerId"
  );
  createPurchaseRequestPage.checkInputValueIsNotEmpty(
    createPurchaseRequestPage.buyerNameInput,
    "buyerName"
  );
  createPurchaseRequestPage.checkInputValueIsNotEmpty(
    createPurchaseRequestPage.buyerAreaInput,
    "buyerArea"
  );
});

And(
  "user selects {string} as purchase request delivery method",
  (deliveryMethod: "Gudang Ada Logistic" | "Dikirim Penjual") => {
    createPurchaseRequestPage.selectRadioButton(
      createPurchaseRequestPage.deliveryMethodInput,
      utils.deliveryMethodSpec[deliveryMethod]
    );
    cy.wrap(utils.deliveryMethodSpec[deliveryMethod]).as("deliveryMethod");
  }
);

And(
  "user sets delivery request start date {int} days from today",
  (int: number) => {
    createPurchaseRequestPage.setDeliveryRequestStartDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "user sets delivery request end date {int} days from today",
  (int: number) => {
    createPurchaseRequestPage.setDeliveryRequestEndDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "user fills {string} input field with {int} digits random number",
  (
    field:
      | "deliveryFee"
      | "deliveryFeeDiscount"
      | "unloadingFee"
      | "purchaseDiscount",
    digits: number
  ) => {
    const selector = {
      deliveryFee: createPurchaseRequestPage.deliveryFeeInput,
      deliveryFeeDiscount: createPurchaseRequestPage.deliveryFeeDiscountInput,
      unloadingFee: createPurchaseRequestPage.unloadingFeeInput,
      purchaseDiscount: createPurchaseRequestPage.purchaseDiscountInput,
    };

    let randomNumber = utils.randomNumber(digits);
    createPurchaseRequestPage.typeNumber(selector[field], randomNumber);
    cy.wrap(randomNumber).as(field);
  }
);

And(
  "user fills purchase reason input field with {string}",
  (purchaseReason: string) => {
    createPurchaseRequestPage.typeString(
      createPurchaseRequestPage.purchaseReasonInput,
      purchaseReason
    );
    cy.wrap(purchaseReason).as("purchaseReason");
  }
);

And("user clicks on Lanjut button to add item stage", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.nextToAddItemButton
  );
});

And("user clicks on Tambah Item Pembelian button", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.addNewItemButton
  );
});

And(
  "user types search item name input field with {string}",
  (productName: string) => {
    createPurchaseRequestPage.typeString(
      createPurchaseRequestPage.productInput,
      productName
    );
    createPurchaseRequestPage.selectOption(productName, 0);
    createPurchaseRequestPage.checkInputValueIsNotEmpty(
      createPurchaseRequestPage.taxTypeInput,
      "taxType"
    );
  }
);

And(
  "user fills item quantity input field with {int} digits random",
  (digits: number) => {
    let quantity = utils.randomNumber(digits);
    createPurchaseRequestPage.typeNumber(
      createPurchaseRequestPage.quantityInput,
      quantity
    );
    cy.wrap(quantity).as("quantity");
  }
);

And(
  "user fills item rate input field with {int} digits random",
  (digits: number) => {
    let rate = utils.randomNumber(digits);
    let dpp = utils.dppCalculation(rate);
    let vat = utils.vatCalculation(rate, dpp);
    let formattedRate = utils.numberFormat(rate);
    let formattedDpp = utils.numberFormat(dpp);
    let formattedVat = utils.numberFormat(vat);

    createPurchaseRequestPage.typeNumber(
      createPurchaseRequestPage.rateInput,
      rate
    );
    cy.wrap(rate).as("rate");
    createPurchaseRequestPage.checkDppCalculcation(
      dpp,
      formattedDpp,
      rate,
      formattedRate
    );
    createPurchaseRequestPage.checkVatCalculcation(vat, formattedVat);
  }
);

And(
  "user fills {string} discount {string} input field with {int} digits random {string}",
  (
    field: "internal" | "principal" | "distributor" | "program",
    discountType: "amount" | "percentage",
    digits: number,
    _randomType: "number" | "decimal"
  ) => {
    const inputSelector = {
      internal: createPurchaseRequestPage.internalDiscountInput,
      principal: createPurchaseRequestPage.principalDiscountInput,
      distributor: createPurchaseRequestPage.distributorDiscountInput,
      program: createPurchaseRequestPage.programDiscountInput,
    };

    const textSelector = {
      internal: createPurchaseRequestPage.internalDiscountText,
      principal: createPurchaseRequestPage.principalDiscountText,
      distributor: createPurchaseRequestPage.distributorDiscountText,
      program: createPurchaseRequestPage.programDiscountText,
    };

    const discountInput = {
      amount: utils.randomNumber(digits),
      percentage: utils.randomDecimal(digits),
    };

    createPurchaseRequestPage.typeDiscount(
      inputSelector[field],
      discountType,
      discountInput[discountType]
    );

    cy.get("@rate").then((rate: any) => {
      let calculatedDiscount = utils.discountCalculation(
        rate,
        discountType,
        discountInput[discountType]
      );

      createPurchaseRequestPage.checkDiscountCalculation(
        textSelector[field],
        calculatedDiscount + ""
      );

      if (discountType === "amount") {
        cy.wrap(discountInput[discountType]).as(field + "Discount");
      } else {
        cy.wrap(calculatedDiscount).as(field + "Discount");
      }
    });
  }
);

And("user clicks on Tambah button to add item", () => {
  createPurchaseRequestPage.calculateRateDiscount();
  createPurchaseRequestPage.checkTotalAmountCalculation();
  createPurchaseRequestPage.calculateMinimumSellingPrice();
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.addItemButton
  );
});

And("user clicks on Lanjut button to suggested selling price stage", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.nextToSellingPriceButton
  );
});

And(
  "user fills selling estimation days input field with {int} digits random number",
  (digits: number) => {
    let sellingEstimationDays = utils.randomNumber(digits);
    createPurchaseRequestPage.typeNumber(
      createPurchaseRequestPage.sellingEstimationDatsInput,
      sellingEstimationDays
    );
    cy.wrap(sellingEstimationDays).as("sellingEstimationDays");
  }
);

And(
  "user selects {string} as selling price setting type",
  (settingType: "margin" | "price") => {
    createPurchaseRequestPage.selectRadioButton(
      createPurchaseRequestPage.settingTypeInput,
      utils.settingTypeSpec[settingType]
    );
    cy.wrap(utils.settingTypeSpec[settingType]).as("settingType");
  }
);

And("user clicks on Tambah UOM Penjualan button", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.addSellingUomButton
  );
});

And("user selects {string} as selling UOM", (uom: string) => {
  createPurchaseRequestPage.selectCheckbox(
    createPurchaseRequestPage.uomCheckbox,
    uom
  );
});

And("user clicks on Atur Harga button", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.setSellingPriceButton
  );
});

And(
  "user fills {string} input field with {int} digits random {string} from minimum selling price",
  (
    settingType: "margin" | "price",
    digits: number,
    _randomType: "number" | "decimal"
  ) => {
    const selector = {
      margin: createPurchaseRequestPage.marginInput,
      price: createPurchaseRequestPage.priceInput,
    };
    const input = {
      margin: utils.randomDecimal(digits),
      price: utils.randomNumber(digits),
    };
    function calculateSellingPrice(
      taxType: string,
      settingType: "margin" | "price",
      rate: number,
      minimumSellingPrice: number,
      input: number
    ) {
      if (taxType === "PKP" && settingType === "price") {
        return minimumSellingPrice + input;
      } else if (taxType === "PTKP" && settingType === "price") {
        return minimumSellingPrice + input + 0.115 * rate;
      } else if (taxType === "PKP" && settingType === "margin") {
        return input;
      } else if (taxType === "PTKP" && settingType === "margin") {
        return input + 11.5;
      } else {
        return 0;
      }
    }
    cy.get("@vendorTaxType").then((vendorTaxType: any) => {
      cy.get("@rate").then((rate: any) => {
        cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
          let taxType = utils.taxTypeSpec[vendorTaxType];
          let sellingPrice = calculateSellingPrice(
            taxType,
            settingType,
            rate,
            minimumSellingPrice,
            input[settingType]
          );
          createPurchaseRequestPage.typeNumber(
            selector[settingType],
            sellingPrice
          );
          cy.wrap(sellingPrice).as(settingType);
        });
      });
    });
  }
);

And("user clicks on Simpan button to UOM price tier input", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.savePriceTierButton
  );
  cy.get("@settingType").then((settingType: any) => {
    cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
      if (settingType === "PRICE") {
        cy.get("@price").then((price: any) => {
          let priceMargin =
            utils.marginCalculation(price, minimumSellingPrice) + "";
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceMargin,
            priceMargin
          );
        });
      } else {
        cy.get("@margin").then((margin: any) => {
          let price = utils.priceCalculation(margin, minimumSellingPrice);
          let priceNumberFormat = utils.numberFormat(price);
          createPurchaseRequestPage.checkSellingPriceCalculation(
            priceNumberFormat,
            priceNumberFormat
          );
        });
      }
    });
  });
});

And("user clicks on Lanjut button to purchase request preview", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.nextToPreviewButton
  );
});

And("user clicks on Simpan button to create purchase request", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.savePurchaseRequestButton
  );
});

When("user clicks on OK button to confirm purchase request creation", () => {
  createPurchaseRequestPage.clickButton(
    createPurchaseRequestPage.confimOkButton
  );
});

Then("purchase request created successfully", () => {
  createPurchaseRequestPage.checkSnackBar("Pembelian berhasil diajukan");
});
