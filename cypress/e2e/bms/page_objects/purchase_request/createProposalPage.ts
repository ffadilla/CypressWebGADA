import BasePage from "../basePage";
import * as utils from "../../common/utils";

const basePage = new BasePage();

export default class CreateProposalPage extends BasePage {
  path = "purchaseRequest/createProposal";
  channelInput = "#field-channel .MuiSelect-select";
  channelOption = ".MuiMenuItem-root";
  vendorIdInput = "#field-vendorId .MuiOutlinedInput-root #combo-box-demo";
  vendorIdOption = ".MuiAutocomplete-option";
  vendorNameInput = "#field-nama-penjual .MuiInput-input";
  vendorAddressInput = "#field-alamat-penjual textarea[class*='_textArea__']";
  vendorTaxTypeInput = "#field-tipe-perpajakan .MuiInput-input";
  buyerIdInput = "#field-buyer-id .MuiOutlinedInput-root #combo-box-demo";
  buyerIdOption = ".MuiAutocomplete-option";
  buyerNameInput = "#field-buyer-name .MuiInput-input";
  buyerAreaInput = "#field-buyer-area .MuiInput-input";
  deliveryMethodInput = "#field-metode-pengiriman input[type='radio']";
  deliveryRequestDateButton =
    "#field-permintaan-pengiriman .MuiButtonBase-root";
  nextMonthCalendarButton = "button[aria-label='Next month']";
  deliveryFeeInput = "#field-deliveryFee .MuiInput-input";
  deliveryFeeDiscountInput = "#field-deliveryFeeDiscount .MuiInput-input";
  unloadingFeeInput = "#field-unloadingFee .MuiInput-input";
  purchaseDiscountInput = "#field-purchaseDiscount .MuiInput-input";
  purchaseReasonInput = "#field-purchaseReason .MuiGrid-grid-md-9";
  nextToAddItemButton = ".MuiButton-root:contains('Lanjut')";
  addNewItemButton =
    ".MuiCollapse-wrapperInner .MuiButton-root:contains(' Tambah Item Pembelian')";
  productInput = "#field-product .MuiOutlinedInput-root";
  productOption = ".MuiAutocomplete-option";
  taxTypeInput = "#field-taxType .Mui-checked input[type='radio']";
  quantityInput = "#field-quantity .MuiInput-input";
  rateInput = "#field-rate .MuiInput-input";
  dppInput = "#field-dpp .MuiInput-input";
  vatInput = "#field-dpp .MuiInput-input";
  rateDiscountInput = "#field-discountPerQty .MuiInput-input";
  internalDiscountTypeSelect = "#field-internalDiscount .MuiSelect-select";
  principalDiscountTypeSelect = "#field-principalDiscount .MuiSelect-select";
  distributorDiscountTypeSelect =
    "#field-distributorDiscount .MuiSelect-select";
  programDiscountTypeSelect = "#field-programDiscount .MuiSelect-select";
  internalDiscountInput = "#field-internalDiscount .MuiInput-input";
  principalDiscountInput = "#field-principalDiscount .MuiInput-input";
  distributorDiscountInput = "#field-distributorDiscount .MuiInput-input";
  programDiscountInput = "#field-programDiscount .MuiInput-input";
  internalDiscountText = "#field-internalDiscount .MuiTypography-root";
  principalDiscountText = "#field-principalDiscount .MuiTypography-root";
  distributorDiscountText = "#field-distributorDiscount .MuiTypography-root";
  programDiscountText = "#field-programDiscount .MuiTypography-root";
  totalAmountInput =
    ":nth-child(2) > .css-8atqhb > .MuiGrid-container > .MuiGrid-grid-md-9 > .MuiInput-root > .MuiInput-input";
  addItemButton = ".style_ModalFooter__3jP-z .MuiButton-root";
  nextToSellingPriceButton = ".MuiGrid-root .MuiButton-root:contains('Lanjut')";
  purchaseItemVariantCard = ".MuiPaper-root .MuiCardContent-root";
  sellingEstimationDateInput = "#field-quantity .MuiInput-input";
  settingTypeInput = "#field-settingType input[type='radio']";
  addSellingUomButton =
    ".MuiTypography-root:contains('+ Tambah UOM Penjualan')";
  uomCheckbox = ".MuiFormControlLabel-root .MuiTypography-root";
  setSellingPriceButton = ".MuiTypography-root:contains('Atur Harga')";
  deleteSellingPriceButton = ".MuiTypography-root:contains('Hapus Strata')";
  minimumQuantityInput = "#field-minQuantity .MuiInput-input";
  marginInput = "#field-margin .MuiInput-input";
  priceInput = "#field-price .MuiInput-input";
  addNewPriceTierButton = ".MuiTypography-root:contains('+ Tambah Harga')";
  savePriceTierButton = ".MuiButton-root:contains('Simpan')";
  sellingPriceText = ".style_rowDivider__1M-29 .MuiTypography-root";
  roundedSellingPriceText = "tbody .MuiTypography-root";
  nextToPreviewButton = ".MuiButton-root:contains('Lanjut')";
  savePurchaseRequestButton = ".MuiButton-root:contains('Simpan')";
  confirmOkButton = ".MuiButton-root:contains('OK')";

  setDeliveryRequestStartDate(date: string) {
    cy.get(this.deliveryRequestDateButton).eq(0).click();
    cy.get(`button[aria-label='${date}']`).eq(0).click();
  }

  setDeliveryRequestEndDate(date: string) {
    cy.get(this.deliveryRequestDateButton).eq(1).click();
    if (Cypress.$(`[aria-label='${date}']`).length > 0) {
      cy.get(`button[aria-label='${date}']`).then((element) => {
        if (element.length > 1) {
          cy.get(`button[aria-label='${date}']`).eq(1).click();
        } else {
          cy.get(`button[aria-label='${date}']`).eq(0).click();
        }
      });
    } else {
      cy.get(this.nextMonthCalendarButton).then((element) => {
        if (element.length > 1) {
          cy.get(this.nextMonthCalendarButton).eq(1).click();
        } else {
          cy.get(this.nextMonthCalendarButton).eq(0).click();
        }
      });
      cy.get(`button[aria-label='${date}']`).eq(0).click();
    }
  }

  typeDiscount(selector: string, _discountType: string, discount: number) {
    // Todo= discount improvement project
    // base.click(selector);
    // base.click(`li[class*='MuiMenuItem-root'][data-value='${discountType}']`);
    // base.typeNumber(selector, discount, 1);
    cy.get(selector).type(discount + "");
  }

  checkDppCalculation(
    dpp: number,
    formattedDpp: string,
    rate: number,
    formattedRate: string
  ) {
    cy.get("@taxType").then((taxType: any) => {
      if (taxType === "VAT") {
        basePage.assertValueEqualTo(this.dppInput, formattedDpp);
        cy.wrap(dpp).as("dpp");
      } else {
        basePage.assertValueEqualTo(this.dppInput, 0 + formattedRate);
        cy.wrap(rate).as("dpp");
      }
    });
  }

  checkVatCalculation(vat: number, formattedVat: string) {
    cy.get("@taxType").then((taxType: any) => {
      if (taxType === "VAT") {
        basePage.assertValueEqualTo(this.vatInput, formattedVat, 1);
        cy.wrap(vat).as("vat");
      } else {
        basePage.assertValueEqualTo(this.vatInput, 0, 1);
        cy.wrap(0).as("vat");
      }
    });
  }

  calculateRateDiscount() {
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
            cy.wrap(rateDiscount).as("rateDiscount");
          });
        });
      });
    });
  }

  checkTotalAmountCalculation() {
    cy.get("@quantity").then((quantity: any) => {
      cy.get("@rate").then((rate: any) => {
        cy.get("@rateDiscount").then((rateDiscount: any) => {
          let totalAmount = utils.totalAmount(quantity, rate, rateDiscount);
          let totalAmountNumberFormat = utils.numberFormat(totalAmount);
          basePage.assertValueEqualTo(
            this.totalAmountInput,
            totalAmountNumberFormat
          );
          cy.wrap(totalAmount).as("totalAmount");
        });
      });
    });
  }

  calculateMinimumSellingPrice() {
    cy.get("@quantity").then((quantity: any) => {
      cy.get("@rate").then((rate: any) => {
        cy.get("@rateDiscount").then((rateDiscount: any) => {
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
  }
}
