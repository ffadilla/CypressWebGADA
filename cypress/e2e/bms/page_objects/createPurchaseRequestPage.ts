import BasePage from "./basePage";

const basePage = new BasePage();

export default class CreatePurchaseRequestPage extends BasePage {
  path = "purchaseRequest/createProposal";
  channelInput = "#field-channel .MuiSelect-select";
  vendorIdInput = "#field-vendorId .MuiOutlinedInput-root #combo-box-demo";
  vendorNameInput = "#field-nama-penjual .MuiInput-input";
  vendorAddressInput = "#field-alamat-penjual textarea[class*='_textArea__']";
  vendorTaxTypeInput = "#field-tipe-perpajakan .MuiInput-input";
  buyerIdInput = "#field-buyer-id .MuiOutlinedInput-root #combo-box-demo";
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
  taxTypeInput = "#field-taxType .Mui-checked input[type='radio']";
  quantityInput = "#field-quantity .MuiInput-input";
  rateInput = "#field-rate .MuiInput-input";
  dppInput = "#field-dpp .MuiInput-input";
  vatInput = "#field-dpp .MuiInput-input";
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
  sellingEstimationDatsInput = "#field-quantity .MuiInput-input";
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
  confimOkButton = ".MuiButton-root:contains('OK')";

  visitCreatePurchaseRequestPage() {
    basePage.navigate(this.path);
  }

  expandChannelList() {
    cy.get(this.channelInput).click();
  }

  selectChannel(channel: string) {
    cy.get(`li[class*='MuiMenuItem-root'][data-value='${channel}']`).click();
  }

  typeVendorId(vendorId: string) {
    cy.get(this.vendorIdInput).type(vendorId);
  }

  typeBuyerId(buyerId: string) {
    cy.get(this.buyerIdInput).type(buyerId);
  }

  selectOption(index: number) {
    cy.get(`li[id="combo-box-demo-option-${index}"]`).click();
  }

  selectDeliveryMethod(deliveryMethod: string) {
    cy.get(this.deliveryMethodInput + `[value='${deliveryMethod}']`).click();
  }

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
          cy.get(`button[aria-label='${date}']`).click();
        }
      });
    } else {
      cy.get(this.nextMonthCalendarButton).then((element) => {
        if (element.length > 1) {
          cy.get(this.nextMonthCalendarButton).eq(1).click();
        } else {
          cy.get(this.nextMonthCalendarButton).click();
        }
      });
      cy.get(`button[aria-label='${date}']`).click();
    }
  }

  typeDeliveryFee(deliveryFee: number) {
    cy.get(this.deliveryFeeInput).type(deliveryFee + "");
  }

  typeDeliveryFeeDiscount(deliveryFeeDiscount: number) {
    cy.get(this.deliveryFeeDiscountInput).type(deliveryFeeDiscount + "");
  }

  typeUnloadingFee(unloadingFee: number) {
    cy.get(this.unloadingFeeInput).type(unloadingFee + "");
  }

  typePurchaseDiscount(purchaseDiscount: number) {
    cy.get(this.purchaseDiscountInput).type(purchaseDiscount + "");
  }

  typePurchaseReason(purchaseReason: string) {
    cy.get(this.purchaseReasonInput).type(purchaseReason);
  }

  clickNextToAddItem() {
    cy.get(this.nextToAddItemButton).click();
  }

  clickAddNewItem() {
    cy.get(this.addNewItemButton).click();
  }

  typeProduct(product: string) {
    cy.get(this.productInput).type(product);
  }

  typeQuantity(quantity: number) {
    cy.get(this.quantityInput).type(quantity + "");
  }

  typeRate(rate: number) {
    cy.get(this.rateInput).type(rate + "");
  }

  typeInternalDiscount(internalDisctoutType: string, internalDisctout: number) {
    cy.get(this.internalDiscountTypeSelect).click();
    cy.get(
      `li[class*='MuiMenuItem-root'][data-value='${internalDisctoutType}']`
    ).click();
    cy.get(this.internalDiscountInput)
      .eq(1)
      .type(internalDisctout + "");
  }

  typePrincipalDiscount(
    principalDiscountType: string,
    principalDiscount: number
  ) {
    cy.get(this.principalDiscountTypeSelect).click();
    cy.get(
      `li[class*='MuiMenuItem-root'][data-value='${principalDiscountType}']`
    ).click();
    cy.get(this.principalDiscountInput)
      .eq(1)
      .type(principalDiscount + "");
  }

  typeDistributorDiscount(
    distributorDisctoutType: string,
    distributorDisctout: number
  ) {
    cy.get(this.distributorDiscountTypeSelect).click();
    cy.get(
      `li[class*='MuiMenuItem-root'][data-value='${distributorDisctoutType}']`
    ).click();
    cy.get(this.distributorDiscountInput)
      .eq(1)
      .type(distributorDisctout + "");
  }

  typeProgramDiscount(programDisctoutType: string, programDisctout: number) {
    cy.get(this.programDiscountTypeSelect).click();
    cy.get(
      `li[class*='MuiMenuItem-root'][data-value='${programDisctoutType}']`
    ).click();
    cy.get(this.programDiscountInput)
      .eq(1)
      .type(programDisctout + "");
  }

  checkInternalDiscountCalculation(calculatedDiscount: string) {
    cy.get(
      this.internalDiscountText + `:contains('${calculatedDiscount}')`
    ).should("be.visible");
  }

  checkPrincipalDiscountCalculation(calculatedDiscount: string) {
    cy.get(
      this.principalDiscountText + `:contains('${calculatedDiscount}')`
    ).should("be.visible");
  }

  checkDistributorDiscountCalculation(calculatedDiscount: string) {
    cy.get(
      this.distributorDiscountText + `:contains('${calculatedDiscount}')`
    ).should("be.visible");
  }

  checkProgramDiscountCalculation(calculatedDiscount: string) {
    cy.get(
      this.programDiscountText + `:contains('${calculatedDiscount}')`
    ).should("be.visible");
  }

  clickAddItem() {
    cy.get(this.addItemButton).click();
  }

  clickNextToSuggestedSellingPrice() {
    cy.get(this.nextToSellingPriceButton).click();
  }

  typeSellingEstimationDays(sellingEstimationDays: number) {
    cy.get(this.sellingEstimationDatsInput).type(sellingEstimationDays + "");
  }

  selectSettingType(settingType: string) {
    cy.get(this.settingTypeInput + `[value='${settingType}']`).click();
  }

  clickAddSellingUom() {
    cy.get(this.addSellingUomButton).click();
  }

  selectSpecificUom(uom: string) {
    cy.get(this.uomCheckbox + `:contains('${uom}')`).click();
  }

  clickSetSellingPrice() {
    cy.get(this.setSellingPriceButton).click({ force: true });
  }

  typeMinimumQuantity(minimumQuantity: number) {
    cy.get(this.minimumQuantityInput).type(minimumQuantity + "");
  }

  typePrice(price: number) {
    cy.get(this.priceInput).type(price + "");
  }

  typeMargin(margin: number) {
    cy.get(this.marginInput).type(margin + "");
  }

  clickSavePriceTier() {
    cy.get(this.savePriceTierButton).click();
  }

  checkSellingPriceCalculation(beforeRounded: string, afterRounded: string) {
    cy.get(this.sellingPriceText + `:contains('${beforeRounded}')`).should(
      "be.visible"
    );
    cy.get(
      this.roundedSellingPriceText + `:contains('${afterRounded}')`
    ).should("be.visible");
  }

  clickNextToPreview() {
    cy.get(this.nextToPreviewButton).click({ force: true });
  }

  clickSavePurchaseRequest() {
    cy.get(this.savePurchaseRequestButton).click();
  }

  clickConfirmOk() {
    cy.get(this.confimOkButton).click();
  }
}
