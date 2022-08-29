import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import * as moment from "moment";
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

Given("user is in Pengajuan Pembelian page", () => {
  // createProposalPage.selectors.visitCreateProposalPage();
});

And("user selects {string} as purchase request channel", (channel: channel) => {
  const channelKey = utils.getEnumKeyByValue(enums.channel, channel);
  createProposalPage.selectChannel(channel);
  cy.wrap(channelKey).as("channel");
});

And(
  "user types search vendor input field with {string}",
  (vendorId: string) => {
    createProposalPage.typeString(
      createProposalPage.selectors.vendorIdInput,
      vendorId
    );
    createProposalPage.selectOption(
      createProposalPage.selectors.vendorIdOption,
      vendorId,
      0
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.selectors.vendorIdInput,
      "vendorId"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.selectors.vendorNameInput,
      "vendorName"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.selectors.vendorAddressInput,
      "vendorAddress"
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.selectors.vendorTaxTypeInput,
      "vendorTaxType"
    );
  }
);

And("user types search buyer input field with {string}", (buyerId: string) => {
  createProposalPage.typeString(
    createProposalPage.selectors.buyerIdInput,
    buyerId
  );
  createProposalPage.selectOption(
    createProposalPage.selectors.buyerIdOption,
    buyerId,
    0
  );
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.selectors.buyerIdInput,
    "buyerId"
  );
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.selectors.buyerNameInput,
    "buyerName"
  );
  createProposalPage.assertValueIsNotEmpty(
    createProposalPage.selectors.buyerAreaInput,
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
    createProposalPage.selectRadioButton(
      createProposalPage.selectors.deliveryMethodInput,
      deliveryMethodKey
    );
    cy.wrap(deliveryMethodKey).as("deliveryMethod");
  }
);

And(
  "user sets delivery request start date {int} days from today",
  (int: number) => {
    createProposalPage.setDeliveryRequestStartDate(
      moment().add(int, "days").format("ll")
    );
  }
);

And(
  "user sets delivery request end date {int} days from today",
  (int: number) => {
    createProposalPage.setDeliveryRequestEndDate(
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
      deliveryFee: createProposalPage.selectors.deliveryFeeInput,
      deliveryFeeDiscount:
        createProposalPage.selectors.deliveryFeeDiscountInput,
      unloadingFee: createProposalPage.selectors.unloadingFeeInput,
      purchaseDiscount: createProposalPage.selectors.purchaseDiscountInput,
    };

    let randomNumber = utils.randomNumber(digits);
    createProposalPage.typeNumber(selector[field], randomNumber);
    cy.wrap(randomNumber).as(field);
  }
);

And(
  "user fills purchase reason input field with {string}",
  (purchaseReason: string) => {
    createProposalPage.typeString(
      createProposalPage.selectors.purchaseReasonInput,
      purchaseReason
    );
    cy.wrap(purchaseReason).as("purchaseReason");
  }
);

And("user clicks on Lanjut button to add item stage", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.nextToAddItemButton
  );
});

And("user clicks on Tambah Item Pembelian button", () => {
  createProposalPage.clickButton(createProposalPage.selectors.addNewItemButton);
});

And(
  "user types search item name input field with {string}",
  (productName: string) => {
    createProposalPage.typeString(
      createProposalPage.selectors.productInput,
      productName
    );
    createProposalPage.selectOption(
      createProposalPage.selectors.productOprion,
      productName,
      0
    );
    createProposalPage.assertValueIsNotEmpty(
      createProposalPage.selectors.taxTypeInput,
      "taxType"
    );
  }
);

And(
  "user fills item quantity input field with {int} digits random",
  (digits: number) => {
    let quantity = utils.randomNumber(digits);
    createProposalPage.typeNumber(
      createProposalPage.selectors.quantityInput,
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

    createProposalPage.typeNumber(createProposalPage.selectors.rateInput, rate);
    cy.wrap(rate).as("rate");
    createProposalPage.checkDppCalculcation(
      dpp,
      formattedDpp,
      rate,
      formattedRate
    );
    createProposalPage.checkVatCalculcation(vat, formattedVat);
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
      internal: createProposalPage.selectors.internalDiscountInput,
      principal: createProposalPage.selectors.principalDiscountInput,
      distributor: createProposalPage.selectors.distributorDiscountInput,
      program: createProposalPage.selectors.programDiscountInput,
    };

    const textSelector = {
      internal: createProposalPage.selectors.internalDiscountText,
      principal: createProposalPage.selectors.principalDiscountText,
      distributor: createProposalPage.selectors.distributorDiscountText,
      program: createProposalPage.selectors.programDiscountText,
    };

    const discountInput = {
      amount: utils.randomNumber(digits),
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
  createProposalPage.calculateRateDiscount();
  createProposalPage.checkTotalAmountCalculation();
  createProposalPage.calculateMinimumSellingPrice();
  createProposalPage.clickButton(createProposalPage.selectors.addItemButton);
});

And("user clicks on Lanjut button to suggested selling price stage", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.nextToSellingPriceButton
  );
});

And(
  "user fills selling estimation days input field with {int} digits random number",
  (digits: number) => {
    let sellingEstimationDays = utils.randomNumber(digits);
    createProposalPage.typeNumber(
      createProposalPage.selectors.sellingEstimationDatsInput,
      sellingEstimationDays
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
    createProposalPage.selectRadioButton(
      createProposalPage.selectors.settingTypeInput,
      settingTypeKey
    );
    cy.wrap(settingTypeKey).as("settingType");
  }
);

And("user clicks on Tambah UOM Penjualan button", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.addSellingUomButton
  );
});

And("user selects {string} as selling UOM", (uom: string) => {
  createProposalPage.selectCheckbox(
    createProposalPage.selectors.uomCheckbox,
    uom
  );
});

And("user clicks on Atur Harga button", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.setSellingPriceButton
  );
});

And(
  "user fills {string} input field with {int} digits random {string} from minimum selling price",
  (
    settingType: settingType,
    digits: number,
    _randomType: "number" | "decimal"
  ) => {
    const selector = {
      margin: createProposalPage.selectors.marginInput,
      price: createProposalPage.selectors.priceInput,
    };
    const input = {
      margin: utils.randomDecimal(digits),
      price: utils.randomNumber(digits),
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
          createProposalPage.typeNumber(selector[settingType], sellingPrice);
          cy.wrap(sellingPrice).as(settingType);
        });
      });
    });
  }
);

And("user clicks on Simpan button to UOM price tier input", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.savePriceTierButton
  );
  cy.get("@settingType").then((settingType: any) => {
    cy.get("@minimumSellingPrice").then((minimumSellingPrice: any) => {
      if (settingType === "PRICE") {
        cy.get("@price").then((price: any) => {
          let priceMargin =
            utils.marginCalculation(price, minimumSellingPrice) + "";
          createProposalPage.assertTextContains(
            basePage.selectors.text,
            priceMargin
          );
        });
      } else {
        cy.get("@margin").then((margin: any) => {
          let price = utils.priceCalculation(margin, minimumSellingPrice);
          let priceNumberFormat = utils.numberFormat(price);
          createProposalPage.assertTextContains(
            basePage.selectors.text,
            priceNumberFormat
          );
        });
      }
    });
  });
});

And("user clicks on Lanjut button to purchase request preview", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.nextToPreviewButton
  );
});

And("user clicks on Simpan button to create purchase request", () => {
  createProposalPage.clickButton(
    createProposalPage.selectors.savePurchaseRequestButton
  );
});

When("user clicks on OK button to confirm purchase request creation", () => {
  createProposalPage.clickButton(createProposalPage.selectors.confimOkButton);
});

Then("purchase request created successfully", () => {
  createProposalPage.assertTextContains(
    basePage.selectors.snackBarAlert,
    "Pembelian berhasil diajukan"
  );
});
