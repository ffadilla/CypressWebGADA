import { Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../page_objects/basePage";
import CreateProposalPage from "../page_objects/purchase_request/createProposalPage";
import * as utils from "../common/utils";
import * as enums from "../common/enums";

const basePage = new BasePage();
const createProposalPage = new CreateProposalPage();

type channel = "marketplace" | "offline";
type deliveryMethod = "Gudang Ada Logistic" | "Dikirim Penjual";
type settingType = "margin" | "price";
type taxType = "Non PKP" | "PKP";

And("user selects {string} as purchase request channel", (channel: channel) => {
  const channelKey = utils.getEnumKeyByValue(enums.channel, channel);
  cy.get(createProposalPage.channelInput).click();
  cy.contains(createProposalPage.channelOption, channel).click();
  cy.wrap(channelKey).as("channel");
});

And(
  "user types search vendor input field with {string}",
  (vendorId: string) => {
    cy.get(createProposalPage.vendorIdInput).type(vendorId);
    cy.contains(createProposalPage.vendorIdOption, vendorId).eq(0).click();
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.vendorIdInput,
      "vendorId"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.vendorNameInput,
      "vendorName"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.vendorAddressInput,
      "vendorAddress"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.vendorTaxTypeInput,
      "vendorTaxType"
    );
  }
);

And("user types search buyer input field with {string}", (buyerId: string) => {
  cy.get(createProposalPage.buyerIdInput).type(buyerId);
  cy.contains(createProposalPage.buyerIdOption, buyerId).eq(0).click();
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.buyerIdInput,
    "buyerId"
  );
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.buyerNameInput,
    "buyerName"
  );
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.buyerAreaInput,
    "buyerArea"
  );
});

And(
  "user selects {string} as purchase request delivery method",
  (deliveryMethod: deliveryMethod) => {
    const deliveryMethodKey = utils.getEnumKeyByValue(
      enums.deliveryMethod,
      deliveryMethod
    );
    cy.get(
      createProposalPage.deliveryMethodInput + `[value='${deliveryMethodKey}']`
    ).click();
    cy.wrap(deliveryMethodKey).as("deliveryMethod");
  }
);

And(
  "user sets delivery request start date {int} days from today",
  (int: number) => {
    createProposalPage.setDeliveryRequestStartDate(utils.getDate(int, "ll"));
  }
);

And(
  "user sets delivery request end date {int} days from today",
  (int: number) => {
    createProposalPage.setDeliveryRequestEndDate(utils.getDate(int, "ll"));
  }
);

And(
  "user fills {string} input field with {int} digits random integer",
  (
    field:
      | "deliveryFee"
      | "deliveryFeeDiscount"
      | "unloadingFee"
      | "purchaseDiscount",
    digits: number
  ) => {
    const selector = {
      deliveryFee: createProposalPage.deliveryFeeInput,
      deliveryFeeDiscount: createProposalPage.deliveryFeeDiscountInput,
      unloadingFee: createProposalPage.unloadingFeeInput,
      purchaseDiscount: createProposalPage.purchaseDiscountInput,
    };

    let randomInt = utils.randomInt(digits);
    cy.get(selector[field]).type(randomInt + "");
    cy.wrap(randomInt).as(field);
  }
);

And(
  "user fills purchase reason input field with {string}",
  (purchaseReason: string) => {
    cy.get(createProposalPage.purchaseReasonInput).type(purchaseReason);
    cy.wrap(purchaseReason).as("purchaseReason");
  }
);

And("user clicks on Lanjut button to add item stage", () => {
  cy.get(createProposalPage.nextToAddItemButton).click();
});

And("user clicks on Tambah Item Pembelian button", () => {
  cy.get(createProposalPage.addNewItemButton).click();
});

And(
  "user types search item name input field with {string}",
  (productName: string) => {
    cy.get(createProposalPage.productInput).type(productName);
    cy.contains(createProposalPage.productOption, productName).eq(0).click();

    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.taxTypeInput,
      "taxType"
    );
  }
);

And(
  "user fills item quantity input field with {int} digits random",
  (digits: number) => {
    let quantity = utils.randomInt(digits);
    cy.get(createProposalPage.quantityInput).type(quantity + "");
    cy.wrap(quantity).as("quantity");
  }
);

And(
  "user fills item rate input field with {int} digits random",
  (digits: number) => {
    let rate = utils.randomInt(digits);
    let dpp = utils.dppCalculation(rate);
    let vat = utils.vatCalculation(rate, dpp);
    let formattedRate = utils.numberFormat(rate);
    let formattedDpp = utils.numberFormat(dpp);
    let formattedVat = utils.numberFormat(vat);

    cy.get(createProposalPage.rateInput).type(rate + "");
    cy.wrap(rate).as("rate");
    createProposalPage.checkDppCalculation(
      dpp,
      formattedDpp,
      rate,
      formattedRate
    );
    createProposalPage.checkVatCalculation(vat, formattedVat);
  }
);

And(
  "user fills rate discount input fields with {int} digits random integer",
  (digits: number) => {
    let rateDiscount = utils.randomInt(digits);
    createProposalPage.typeDiscount(
      createProposalPage.rateDiscountInput,
      "amount",
      rateDiscount
    );
    cy.wrap(rateDiscount).as("rateDiscount");
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
      internal: createProposalPage.internalDiscountInput,
      principal: createProposalPage.principalDiscountInput,
      distributor: createProposalPage.distributorDiscountInput,
      program: createProposalPage.programDiscountInput,
    };

    const textSelector = {
      internal: createProposalPage.internalDiscountText,
      principal: createProposalPage.principalDiscountText,
      distributor: createProposalPage.distributorDiscountText,
      program: createProposalPage.programDiscountText,
    };

    const discountInput = {
      amount: utils.randomInt(digits),
      percentage: utils.randomDecimal(digits),
    };

    createProposalPage.typeDiscount(
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

      createProposalPage.assertTextContains(
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
  // createProposalPage.calculateRateDiscount();
  createProposalPage.checkTotalAmountCalculation();
  createProposalPage.calculateMinimumSellingPrice();
  cy.get(createProposalPage.addItemButton).click();
});

And("user clicks on Lanjut button to suggested selling price stage", () => {
  cy.get(createProposalPage.nextToSellingPriceButton).click();
});

And(
  "user fills selling estimation days input field with {int} digits random integer",
  (digits: number) => {
    let sellingEstimationDays = utils.randomInt(digits);
    cy.get(createProposalPage.sellingEstimationDateInput).type(
      sellingEstimationDays + ""
    );
    cy.wrap(sellingEstimationDays).as("sellingEstimationDays");
  }
);

And(
  "user selects {string} as selling price setting type",
  (settingType: settingType) => {
    const settingTypeKey = utils.getEnumKeyByValue(
      enums.settingType,
      settingType
    );
    cy.get(
      createProposalPage.settingTypeInput + `[value='${settingTypeKey}']`
    ).click();
    cy.wrap(settingTypeKey).as("settingType");
  }
);

And("user clicks on Tambah UOM Penjualan button", () => {
  cy.get(createProposalPage.addSellingUomButton).click();
});

And("user selects {string} as selling UOM", (uom: string) => {
  cy.contains(createProposalPage.uomCheckbox, uom).click();
});

And("user clicks on Atur Harga button", () => {
  cy.get(createProposalPage.setSellingPriceButton).click({ force: true });
});

And(
  "user fills {string} input field with {int} digits random {string} from minimum selling price",
  (
    settingType: settingType,
    digits: number,
    _randomType: "integer" | "decimal"
  ) => {
    const selector = {
      margin: createProposalPage.marginInput,
      price: createProposalPage.priceInput,
    };
    const input = {
      margin: utils.randomDecimal(digits),
      price: utils.randomInt(digits),
    };
    function calculateSellingPrice(
      taxType: string,
      settingType: settingType,
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
    cy.get<taxType>("@vendorTaxType").then((vendorTaxType) => {
      cy.get("@rate").then((rate: any) => {
        cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
          const taxTypeKey = utils.getEnumKeyByValue(
            enums.taxType,
            vendorTaxType
          );
          let taxType = taxTypeKey;
          let sellingPrice = calculateSellingPrice(
            taxType,
            settingType,
            rate,
            minimumSellingPrice,
            input[settingType]
          );
          cy.get(selector[settingType]).type(sellingPrice + "");
          cy.wrap(sellingPrice).as(settingType);
        });
      });
    });
  }
);

And("user clicks on Simpan button to UOM price tier input", () => {
  cy.get(createProposalPage.savePriceTierButton).click();
  cy.get("@settingType").then((settingType: any) => {
    cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
      if (settingType === "PRICE") {
        cy.get("@price").then((price: any) => {
          let priceMargin =
            utils.marginCalculation(price, minimumSellingPrice) + "";
          createProposalPage.assertTextContains(basePage.text, priceMargin);
        });
      } else {
        cy.get("@margin").then((margin: any) => {
          let price = utils.priceCalculation(margin, minimumSellingPrice);
          let priceNumberFormat = utils.numberFormat(price);
          createProposalPage.assertTextContains(
            basePage.text,
            priceNumberFormat
          );
        });
      }
    });
  });
});

And("user clicks on Lanjut button to purchase request preview", () => {
  cy.get(createProposalPage.nextToPreviewButton).click({ force: true });
});

And("user clicks on Simpan button to create purchase request", () => {
  cy.get(createProposalPage.savePurchaseRequestButton).click();
});

When("user clicks on OK button to confirm purchase request creation", () => {
  cy.get(createProposalPage.confirmOkButton).click();
});

Then("purchase request created successfully", () => {
  createProposalPage.assertTextContains(
    basePage.snackBarAlert,
    "Pembelian berhasil diajukan"
  );
});
