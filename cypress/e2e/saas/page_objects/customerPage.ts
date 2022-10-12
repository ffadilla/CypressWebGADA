import BasePage from "./basePage";

export default class CustomerPage extends BasePage {
  path = "crm";

  // customer modal
  customerModalAddButton = "#button_add_customer";
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
  customerModalSalesText = "#p_customer_modal_select_sales_";
  customerModalSalesResetButton = "#p_reset_customer_modal_sales";
  customerAddSnackbar = "#notistack-snackbar";

  // customer modal
  clickCustomerModalAddButton() {
    cy.get(this.customerModalAddButton).click();
  }

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
    cy.get(this.customerModalSalesText + id).click();
  }

  clickCustomerModalSalesResetButton() {
    cy.get(this.customerModalSalesResetButton).click();
  }
}
