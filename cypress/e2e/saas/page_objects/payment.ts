import BasePage from "./basePage";

export default class PaymentPage extends BasePage {
  path = "payment";

  backButton = "#button_icon_back_payment";
  selectCustomerButton = "#div_select_customer_payment";
  selectSalesButton = "#div_select_sales_payment";
  cashPaymentMethodButton = "#li_payment_method_cash";
  bankTransferPaymentMethodButton = "#li_payment_method_bank_transfer";
  giroPaymentMethodButton = "#li_payment_method_giro";
  piutangPaymentMethodButton = "#li_payment_method_piutang";
  cashPaymentInput = "#li_payment_method_piutang";
  submitButton = "#button_submit_payment";
  amountSuggestionOneButton = "#button_amount_suggestion_0";
  amountSuggestionTwoButton = "#button_amount_suggestion_1";
  amountSuggestionThreeButton = "#button_amount_suggestion_2";
  saveTransactionButton = "#li_save_transaction_payment";
  cancelTransactionButton = "#li_cancel_transaction_payment";

  // select customer section
  customerResetButton = "#button_reset_select_customer_payment";
  customerCloseButton = "#button_icon_close_select_customer_payment";
  customerSearchInput = "#input_search_select_customer_payment";
  addNewCustomerButton = "#button_add_new_select_customer_payment";
  customerRadioButton = "#div_select_customer_payment_";
  customerEditButton = "#button_icon_edit_select_customer_payment_";

  // customer modal
  customerModalCloseButton = "#button_icon_close_customer_modal";
  customerModalNameInput = "#input_name_customer_modal";
  customerModalPhoneNumberInput = "#input_phone_no_customer_modal";
  customerModalAddressInput = "#input_address_customer_modal";
  customerModalDueDurationSwitch = "#switch_top_due_duration_customer_modal";
  customerModalDueDurationInput = "#input_top_due_duration_customer_modal";
  customerModalLimitAmountSwitch = "#switch_top_limit_amount_customer_modal";
  customerModalLimitAmountInput = "#input_top_limit_amount_customer_modal";
  customerModalSelectSales = "#input_autocomplete_select_sales_customer_modal";
  customerModalDeleteButton = "#button_secondary_customer_modal";
  customerModalSubmitButton = "#button_primary_customer_modal";
  customerModalSalesDiv = "#div_customer_modal_select_sales_";
  customerModalSalesResetButton = "#div_reset_customer_modal_sales";

  // bank transfer section
  bankAccountRadioButton = "#label_bank_account_";
  bankAccountAddNewButton = "#button_add_new_bank_account";
  submitPaymentButton = "#button_submit_payment";

  // giro section
  giroPaymentAmountInput = "#input_number_amount_giro_payment";
  giroNomorBilyetGiroInput = "#input_reference_no_giro_payment";

  // piutang section
  piutangDueDateInput = "#input_number_amount_due_date";
  piutangDownPaymentSwitch = "#switch_down_payment_amount";

  // cancel order section
  cancelCartBatalButton = "#button_secondary_cancel_cart_modal";
  cancelCartSubmitButton = "#button_primary_cancel_cart_modal";

  clickBackButton() {
    cy.get(this.backButton).click();
  }

  clickSelectCustomerButton() {
    cy.get(this.selectCustomerButton).click();
  }

  clickSelectSalesButton() {
    cy.get(this.selectSalesButton).click();
  }

  clickCashPaymentMethodButton() {
    cy.get(this.cashPaymentMethodButton).click();
  }

  clickBankTransferPaymentMethodButton() {
    cy.get(this.bankTransferPaymentMethodButton).click();
  }

  clickGiroPaymentMethodButton() {
    cy.get(this.giroPaymentMethodButton).click();
  }

  clickPiutangPaymentMethodButton() {
    cy.get(this.piutangPaymentMethodButton).click();
  }

  typeCashPaymentInput(input: string) {
    cy.get(this.cashPaymentInput).type(input);
  }

  clickSubmitButton() {
    cy.get(this.submitButton).click();
  }

  clickAmountSuggestionOneButton() {
    cy.get(this.amountSuggestionOneButton).click();
  }

  clickAmountSuggestionTwoButton() {
    cy.get(this.amountSuggestionTwoButton).click();
  }

  clickAmountSuggestionThreeButton() {
    cy.get(this.amountSuggestionThreeButton).click();
  }

  clickSaveTransactionButton() {
    cy.get(this.saveTransactionButton).click();
  }

  clickCancelTransactionButton() {
    cy.get(this.cancelTransactionButton).click();
  }

  // select customer section
  clickCustomerResetButton() {
    cy.get(this.customerResetButton).click();
  }

  clickCustomerCloseButton() {
    cy.get(this.customerCloseButton).click();
  }

  typeCustomerSearchInput(input: string) {
    cy.get(this.customerSearchInput).type(input);
  }

  clickAddNewCustomerButton() {
    cy.get(this.addNewCustomerButton).click();
  }

  clickCustomerRadioButton(id: string) {
    cy.get(this.customerRadioButton + id).click();
  }

  clickCustomerEditButton(id: string) {
    cy.get(this.customerEditButton + id).click();
  }

  // customer modal
  clickCustomerModalCloseButton() {
    cy.get(this.customerModalCloseButton).click();
  }

  typeCustomerModalNameInput(input: string) {
    cy.get(this.customerModalNameInput).type(input);
  }

  typeCustomerModalPhoneNumberInput(input: string) {
    cy.get(this.customerModalPhoneNumberInput).type(input);
  }

  typeCustomerModalAddressInput(input: string) {
    cy.get(this.customerModalAddressInput).type(input);
  }

  clickCustomerModalDueDurationSwitch() {
    cy.get(this.customerModalDueDurationSwitch).click();
  }

  typeCustomerModalDueDurationInput(input: string) {
    cy.get(this.customerModalDueDurationInput).type(input);
  }

  clickCustomerModalLimitAmountSwitch() {
    cy.get(this.customerModalLimitAmountSwitch).click();
  }

  typeCustomerModalLimitAmountInput(input: string) {
    cy.get(this.customerModalLimitAmountInput).type(input);
  }

  clickCustomerModalSelectSalesButton() {
    cy.get(this.customerModalSelectSales).click();
  }

  clickCustomerModalDeleteButton() {
    cy.get(this.customerModalDeleteButton).click();
  }

  clickCustomerModalSubmitButton() {
    cy.get(this.customerModalSubmitButton).click();
  }

  clickCustomerModalSalesDiv(id: string) {
    cy.get(this.customerModalSalesDiv + id).click();
  }

  clickCustomerModalSalesResetButton() {
    cy.get(this.customerModalSalesResetButton).click();
  }

  // bank transfer section
  clickBankAccountRadioButton(id: string) {
    cy.get(this.bankAccountRadioButton + id).click();
  }

  clickBankAccountAddNewButton() {
    cy.get(this.bankAccountAddNewButton).click();
  }

  clickSubmitPaymentButton() {
    cy.get(this.submitPaymentButton).click();
  }

  // giro section
  typeGiroPaymentAmountInput(input: string) {
    cy.get(this.giroPaymentAmountInput).type(input);
  }

  typeGiroPaymentNomorBilyetGiroInput(input: string) {
    cy.get(this.giroNomorBilyetGiroInput).type(input);
  }

  // piutang section
  typePiutangDueDateInput(input: string) {
    cy.get(this.piutangDueDateInput).type(input);
  }

  typePiutangDownPaymentSwitch() {
    cy.get(this.piutangDownPaymentSwitch).click();
  }

  // cancel order section
  clickCartBatalButton() {
    cy.get(this.cancelCartBatalButton).click();
  }

  clickCancelCartSubmitButton() {
    cy.get(this.cancelCartSubmitButton).click();
  }
}
