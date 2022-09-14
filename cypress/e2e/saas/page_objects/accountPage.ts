import BasePage from "./basePage";

export default class AccountPage extends BasePage {
  path = "user/account";

  userAccountButton = "#menu_username";
  storeSettingsButton = "#menu_";
  // user profile

  // store info
  storeInfoUbahButton = "#button_edit_store_info";
  storeNameInput = "#input_store_name";
  storeAddressInput = "#input_store_address";
  storeAddressLocationInput = "#input_search_location_name";
  storeAddressCurrentLocationButton = "#button_current_location";
  storeManualAddressButton = "#button_manual_address";
  storeAddressChooseLocationButton = "#button_choose_location";
  submitStoreInfoButton = "#button_submit_store_info";

  // online selling
  linkStoreButton = "#button_link_store";
  linkStoreRadioButton = "#radio_";
  linkStoreSubmitButton = "#button_submit_link_store";
  unlinkMoreOptionsButton = "#button_options";
  unlinkButton = "#menu_unlink_store";
  stopSellingOnlineButton = "#button_stop_selling_online";
  stopSellingOnlineWarningButton = "#button_stop_selling_online_warning";

  // bank account
  showBankAccountsSwitch = "#switch_show_bank_accounts";
  tambahRekeningBaruButton = "#button_add_bank_account";
  bankNameInput = "#dropdown_bank_name";
  bankNameInputDropdownButton = "#button_dropdown_bank_name";
  bankNameOptions = "[id^=dropdown_bank_name-option]";
  bankAccountNumberInput = "#input_bank_account_number";
  bankAccountOwnerNameInput = "#input_bank_account_owner_name";
  bankAccountModalSimpanButton = "#button_submit_bank_account";
  bankAccountModalCloseButton = "#button_close_bank_account_modal";
  bankAccountEditButton = "#button_edit_bank_account_";

  // store tax
  taxSwitch = "#switch_tax";
  editTaxButton = "#button_edit_tax";
  taxPercentageAmountInput = "#taxPercentageAmount";
  taxInSellingRadioButton = "#radio_tax_in_selling input[value=";
  taxAfterDiscountRadioButton = "#radio_tax_after_discount";
  taxModalCancelButton = "#button_cancel_tax";
  taxModalSimpanButton = "#button_submit_tax";

  // customer debt
  customerDebtDueEditButton = "#button_edit_due";
  receivablesPerCustomerSwitch = "#switch_receivables_per_customer";
  receivablesPerCustomerEditButton = "#button_edit_receivables_per_customer";
  maximumAmountReceivablesInput = "#maximumAmountReceivable";
  receivablesModalSubmitButton = "#button_submit_receivable";
  receivablesmodalCancelButton = "#button_cancel_receivable";
  multipleDebtPerCustomerSwitch = "#switch_double_bonus";
  tempoPerCustomerButton = "#button_tempo_per_customer";

  // sales refund
  accountRefundSettingsButton = "#button_account_refund_settings";
  refundRangeInput = "#input_refund_range";
  refundRangeSubmitButton = "button_submit_refund_range";
  refundRangeCancelButton = "button_cancel_refund_range";

  visitUserAccount() {
    cy.visit(this.baseUrl + this.path);
  }

  clickUserAccountButton() {
    cy.get(this.userAccountButton).click();
  }

  clickStoreSettingsButton(storeId: string) {
    cy.get(this.storeSettingsButton + storeId).click();
  }

  // store info
  clickStoreInfoUbahButton() {
    cy.get(this.storeInfoUbahButton);
  }

  typeStoreNameInput(input: string) {
    cy.get(this.storeNameInput).type(input);
  }

  clickStoreAddressInput() {
    cy.get(this.storeAddressInput).click();
  }

  typeStoreAddressLocationInput(address: string) {
    cy.get(this.storeAddressLocationInput).type(address);
  }

  clickStoreCurrentLocationButton() {
    cy.get(this.storeAddressCurrentLocationButton).click();
  }

  clickStoreManualAddressButton() {
    cy.get(this.storeManualAddressButton).click();
  }

  clickFirstAddressResult() {
    cy.get(this.storeManualAddressButton).next().click();
  }

  clickChooseStoreLocation() {
    cy.get(this.storeAddressChooseLocationButton).click();
  }

  clickStoreInfoSubmitButton() {
    cy.get(this.submitStoreInfoButton).click();
  }

  // online selling
  clickLinkStoreButton() {
    cy.get(this.linkStoreButton).click();
  }

  clickLinkStoreRadioButton(marketplaceStoreId: string) {
    cy.get(this.linkStoreRadioButton + marketplaceStoreId).click();
  }

  clickLinkStoreSubmitButton() {
    cy.get(this.linkStoreSubmitButton).click();
  }

  clickUnlinkMoreOptionsButton() {
    cy.get(this.unlinkMoreOptionsButton).click();
  }

  clickUnlinkButton() {
    cy.get(this.unlinkButton).click();
  }

  clickStopSellingOnlineButton() {
    cy.get(this.stopSellingOnlineButton).click();
  }

  clickStopSellingOnlineWarningButton() {
    cy.get(this.stopSellingOnlineWarningButton).click();
  }

  // bank account
  clickShowBankAccountsSwitch() {
    cy.get(this.showBankAccountsSwitch).click();
  }

  clickTambahRekeningBaruButton() {
    cy.get(this.tambahRekeningBaruButton).click();
  }

  typeBankNameInput(input: string) {
    cy.get(this.bankNameInput).type(input);
  }

  clickBankNameInputDropdownButton() {
    cy.get(this.bankNameInputDropdownButton).click();
  }

  clickBankNameOption() {
    cy.get(this.bankNameOptions).first().click();
  }

  typeBankAccountNumberInput(input: string) {
    cy.get(this.bankAccountNumberInput).type(input);
  }

  typeBankAccountOwnerNameInput(input: string) {
    cy.get(this.bankAccountOwnerNameInput).type(input);
  }

  clickBankAccountModalSimpanButton() {
    cy.get(this.bankAccountModalSimpanButton).click();
  }

  clickBankAccountModalCloseButton() {
    cy.get(this.bankAccountModalCloseButton).click();
  }

  clickBankAccountEditButton(bankAccountId: string) {
    cy.get(this.bankAccountEditButton + bankAccountId).click();
  }

  // store tax
  clickTaxSwitch() {
    cy.get(this.taxSwitch).click();
  }

  clickEditTaxButton() {
    cy.get(this.editTaxButton).click();
  }

  typeTaxPercentageAmountInput(input: string) {
    cy.get(this.taxPercentageAmountInput).type(input);
  }

  selectTaxInSellingRadioButton(input: taxInSellingEnum) {
    cy.get(this.taxInSellingRadioButton + input + "]").click();
  }

  selectTaxAfterDiscountRadioButton(input: taxAfterDiscountEnum) {
    cy.get(this.taxAfterDiscountRadioButton + input + "]").click();
  }

  clickTaxModalCancelButton() {
    cy.get(this.taxModalCancelButton).click();
  }

  clickTaxModalSimpanButton() {
    cy.get(this.taxModalSimpanButton).click();
  }

  // customer debt
  clickCustomerDebtDueEditButton() {
    cy.get(this.customerDebtDueEditButton).click();
  }

  clickReceivablesPerCustomerSwitch() {
    cy.get(this.receivablesPerCustomerSwitch).click();
  }

  clickReceivablesPerCustomerEditButton() {
    cy.get(this.receivablesPerCustomerEditButton).click();
  }

  typeMaximumAmountReceivablesInput(input: string) {
    cy.get(this.maximumAmountReceivablesInput).type(input);
  }

  clickReceivablesModalSubmitButton() {
    cy.get(this.receivablesModalSubmitButton).click();
  }

  clickReceivablesModalCancelButton() {
    cy.get(this.receivablesmodalCancelButton).click();
  }

  clickMultipleDebtPerCustomerSwitch() {
    cy.get(this.multipleDebtPerCustomerSwitch).click();
  }

  // sales refund
  clickAccountRefundSettingsButton() {
    cy.get(this.accountRefundSettingsButton).click();
  }

  typeRefundRangeInput(input: string) {
    cy.get(this.refundRangeInput).type(input);
  }

  clickRefundRangeSubmitButton() {
    cy.get(this.refundRangeSubmitButton).click();
  }

  clickRefundRangeCancelButton() {
    cy.get(this.refundRangeCancelButton).click();
  }
}

enum taxInSellingEnum {
  EXCLUDED = "EXCLUDED",
  INCLUDED = "INCLUDED",
}

enum taxAfterDiscountEnum {
  AFTER_DIS = "AFTER_DIS",
  BEFORE_DIS = "BEFORE_DIS",
}

// enum bankEnum {
//   BANK_AGRIS_JAKARTA = "Bank Agris Jakarta",
//   BANK_ARTHA_GRAHA = "BANK ARTHA GRAHA",
//   BANK_BCA_SYARIAH = "BANK BCA SYARIAH",
//   BANK_BJB = "BANK BJB",
//   BANK_BNI_SYARIAH = "BANK BNI SYARIAH",
//   BANK_BUKOPIN = "BANK BUKOPIN",
//   BANK_CENTRAL_ASIA = "BANK CENTRAL ASIA",
//   BANK_DANAMON = "BANK DANAMON",
//   BANK_DBS_SINGAPORE = "BANK DBS SINGAPORE",
//   BANK_DKI = "BANK DKI",
//   BANK_INDEX_SELINDO = "BANK INDEX SELINDO",
//   BANK_JATENG = "BANK JATENG",
//   BANK_JATIM = "BANK JATIM",
//   BANK_KALBAR = "BANK KALBAR",
//   BANK_KALSEL = "BANK KALSEL",
//   BANK_KALTIM = "BANK KALTIM",
//   BANK_MANDIRI = "BANK MANDIRI",
//   BANK_MASPION = "BANK MASPION",
//   BANK_MAYAPADA = "BANK MAYAPADA",
//   BANK_MAYBANK = "BANK MAYBANK",
//   BANK_MAYORA = "BANK MAYORA",
//   BANK_MEGA = "BANK MEGA",
//   BANK_MESTIKA = "BANK MESTIKA",
//   BANK_MUAMALAT_INDONESIA = "BANK MUAMALAT INDONESIA",
//   BANK_MULTI_ARTA_SENTOSAZ = "Bank Multi Arta Sentosaz",
//   BANK_NAGARI = "BANK NAGARI",
//   BANK_NEGARA_INDONESIA = "BANK NEGARA INDONESIA",
//   BANK_NOBU = "BANK NOBU",
//   BANK_OF_MATTHEW_CLAY_AND_WALTERS = "Bank of Matthews, Clay and Walters",
//   BANK_OF_NICHOLS_MCGUIRE_AND_WAGNER = "Bank of Nichols, Mcguire and Wagner",
//   BANK_OF_SANCHEZ_TAYLOR = "Bank of Sanchez-Taylor",
//   BANK_OF_THOMPSON_AND_SONS = "Bank of Thompson and Sons",
//   BANK_OF_TURNER_INC = "Bank of Turner Inc",
//   BANK_OF_WINTERS_GROUP = "Bank of Winters Group",
//   BANK_PERMATA = "BANK PERMATA",
//   BANK_PERMATA_SYARIAH = "BANK PERMATA SYARIAH",
//   BANK_RAKYAT_INDONESIA = "BANK RAKYAT INDONESIA",
//   BANK_RAKYAT_INDONESIA_SYARIAH = "BANK RAKYAT INDONESIA SYARIAH",
//   BANK_RIAU_KEPRI = "BANK RIAU KEPRI",
//   BANK_SINARMAS = "Bank Sinarmas",
//   BANK_SUMSEL_BABEL = "BANK SUMSEL BABEL",
//   BANK_SYARIAH_INDONESIA = "BANK SYARIAH INDONESIA",
//   BANK_SYARIAH_MANDIRI = "BANK SYARIAH MANDIRI",
//   BANK_TABUNGAN_NEGARA = "BANK TABUNGAN NEGARA",
//   BANK_UOB = "BANK UOB",
//   BANK_VICTORIA = "BANK VICTORIA",
//   BTPN = "BTPN",
//   CHINA_CONSTRUCTION_BANK_INDONESIA = "China Construction Bank Indonesia",
//   CIMB_NIAGA = "CIMB NIAGA",
//   PANIN_BANK = "PANIN BANK",
//   PT_BANK_HSBC_INDONESIA = "PT Bank HSBC Indonesia",
//   PT_BANK_OCBC_NISP = "PT BANK OCBC NISP",
//   PT_BANK_SHINHAN_INDONESIA = "PT. BANK SHINHAN INDONESIA"
// }
