import BasePage from "./basePage";

export default class PosPage extends BasePage {
  path = "pos";

  // inventory list section
  searchProductInput = "#input_search_product";
  moreOptionsButton = "#button_icon_more_";
  addInventoryButton = "#button_add_inventory_";
  showMoreInventoryButton = "#button_show_more_inventory_";
  showLessInventoryButton = "#button_show_less_inventory_";
  decrementInventoryButton = "#button_decrement_inventory_";
  inventoryNumberInput = "#input_number_inventory_";
  incrementInventoryButton = "#button_increment_inventory_";

  // input manual section
  calculatorIconButton = "#button_icon_calculator";
  customItemNameInput = "#input_custom_item_name";
  closeCalculatorIconButton = "#button_icon_close_calculator";
  numpadButton = "#numpad_button_";
  numpadThousandButton = "#numpad_button_thousand";
  numpadRemoveButton = "#numpad_button_remove";
  addCustomItemButton = "#button_add_custom_item";

  // barcode section
  barcodeIconButton = "#button_icon_barcode";
  closeBarcodeIconButton = "#button_icon_close_barcode";

  // saved cart section
  saveIconButton = "#button_icon_save";
  closeSavedCartsButton = "#button_icon_close_saved_carts";
  deleteAllSavedCartsButton = "#button_delete_all_saved_carts";
  loadSavedCartButton = "#button_icon_load_saved_cart_";
  deleteSavedCartButton = "#button_delete_saved_cart_";
  bulkDeleteBackButton = "#button_icon_back_bulk_delete";
  selectSavedCartCheckbox = "#div_select_saved_cart_";
  selectAllSavedCartsCheckbox = "#div_select_all_saved_carts";
  submitBulkDeleteButton = "#button_submit_bulk_delete";

  // open saved carts popup
  savedCartConfirmationCloseButton =
    "#button_icon_close_saved_carts_confirmation";
  savedCartConfirmationHapusButton =
    "#button_secondary_saved_carts_confirmation";
  savedCartConfirmationSimpanButton =
    "#button_primary_saved_carts_confirmation";

  // shopping cart section
  decrementCartItemButton = "#button_decrement_cart_item_";
  inventoryNumberCartItemInput = "#input_number_cart_item_";
  incrementCartItemButton = "#button_increment_cart_item_";
  itemDiscountButton = "#button_icon_discount_item_";
  deleteCartItemButton = "#button_icon_delete_cart_item_";
  deleteItemDiscountButton = "#button_icon_delete_discount_item_";
  secondaryCartButton = "#button_secondary_cart";
  primaryCheckoutButton = "#button_primary_checkout_cart";

  // save cart section
  saveCartButton = "#button_save_cart";
  clearCartButton = "#button_clear_cart";
  saveCartSearchCustomerInput = "#input_search_customer_save_cart";
  saveCartAddNewCustomerButton = "#button_add_new_customer_save_cart";
  saveCartSelectCustomerRadioButton = "#div_select_customer_save_cart_";
  saveCartEditCustomerButton = "#button_icon_edit_customer_save_cart_";

  // clear cart confirmation popup
  clearCartConfirmationCloseButton =
    "#button_icon_close_clear_cart_confirmation";
  clearCartConfirmationTidakButton =
    "#button_secondary_clear_cart_confirmation";
  clearCartConfirmationHapusButton = "#button_primary_clear_cart_confirmation";

  // item discount
  itemDiscountCloseButton = "#button_icon_close_discount_item";
  itemDiscountFlatDiscountRadioButton = "#label_radio_discount_flat";
  itemDiscountFreeItemRadioButton = "#label_radio_discount_free";
  itemDiscountFlatDiscountToggleButton = "#toggle_button_discount_flat";
  itemDiscountPercentageDiscountToggleButton =
    "#toggle_button_discount_percentage";
  itemDiscountAmountInput = "#input_number_discount_item_amount";
  itemDiscountNameInput = "#input_discount_item_name";
  itemDiscountHapusButton = "#button_secondary_discount_item";
  itemDiscountSubmitButton = "#button_primary_discount_item";
  itemDiscountFreeItemDecrementButton = "#button_decrement_discount_item";
  itemDiscountFreeItemNumberInput = "#input_number_free_discount_item";
  itemDiscountFreeItemIncrementButton = "#button_increment_discount_item";

  visitPos() {
    cy.visit(this.baseUrl + this.path);
  }

  // inventory list section
  typeSearchProductInput(input: string) {
    cy.get(this.searchProductInput).type(input);
  }

  clickMoreOptionsButton(productVariantId: string) {
    cy.get(this.moreOptionsButton + productVariantId).click();
  }

  clickAddInventoryButton(inventoryId: string) {
    cy.get(this.addInventoryButton + inventoryId).click();
  }

  clickShowMoreInventoryButton(productVariantId: string) {
    cy.get(this.showMoreInventoryButton + productVariantId).click();
  }

  clickShowLessInventoryButton(productVariantId: string) {
    cy.get(this.showLessInventoryButton + productVariantId).click();
  }

  clickDecrementInventoryButton(inventoryId: string) {
    cy.get(this.decrementInventoryButton + inventoryId).click();
  }

  typeInventoryNumberInput(inventoryId: string, input: string) {
    cy.get(this.inventoryNumberInput + inventoryId).type(input);
  }

  clickIncrementInventoryButton(inventoryId: string) {
    cy.get(this.incrementInventoryButton + inventoryId).click();
  }

  // input manual section
  clickCalculatorIconButton() {
    cy.get(this.calculatorIconButton).click();
  }

  typeCustomItemNameInput(input: string) {
    cy.get(this.customItemNameInput).type(input);
  }

  clickCloseCalculatorIconButton() {
    cy.get(this.closeCalculatorIconButton).click();
  }

  clickNumpadButton(number: string) {
    cy.get(this.numpadButton + number).click();
  }

  clickNumpadThousandButton() {
    cy.get(this.numpadThousandButton).click();
  }

  clickNumpadRemoveButton() {
    cy.get(this.numpadRemoveButton).click();
  }

  clickAddCustomItemButton() {
    cy.get(this.addCustomItemButton).click();
  }

  // barcode section
  clickBarcodeIconButton() {
    cy.get(this.barcodeIconButton).click();
  }

  clickCloseBarcodeIconButton() {
    cy.get(this.closeBarcodeIconButton).click();
  }

  // saved cart section
  clickSaveIconButton() {
    cy.get(this.saveIconButton).click();
  }

  clickCloseSavedCartsButton() {
    cy.get(this.closeSavedCartsButton).click();
  }

  clickDeleteAllSavedCartsButton() {
    cy.get(this.deleteAllSavedCartsButton).click();
  }

  clickLoadSavedCartButton(index: string) {
    cy.get(this.loadSavedCartButton + index).click();
  }

  clickDeleteSavedCartButton(index: string) {
    cy.get(this.deleteSavedCartButton + index).click();
  }

  clickBulkDeleteBackButton() {
    cy.get(this.bulkDeleteBackButton).click();
  }

  clickSelectSavedCartCheckbox(index: string) {
    cy.get(this.selectSavedCartCheckbox + index).click();
  }

  clickSelectAllSavedCartsCheckbox() {
    cy.get(this.selectAllSavedCartsCheckbox).click();
  }

  clickSubmitBulkDeleteButton() {
    cy.get(this.submitBulkDeleteButton).click();
  }

  // open saved carts popup
  clickSavedCartConfirmationCloseButton() {
    cy.get(this.savedCartConfirmationCloseButton).click();
  }

  clickSavedCartConfirmationHapusButton() {
    cy.get(this.savedCartConfirmationHapusButton).click();
  }

  clickSavedCartConfirmationSimpanButton() {
    cy.get(this.savedCartConfirmationSimpanButton).click();
  }

  //shopping cart section
  clickDecrementCartItemButton(inventoryId: string) {
    cy.get(this.decrementCartItemButton + inventoryId).click();
  }

  typeInventoryNumberCartItemInput(inventoryId: string, input: string) {
    cy.get(this.inventoryNumberCartItemInput + inventoryId).type(input);
  }

  clickInventoryCartItemButton(inventoryId: string) {
    cy.get(this.incrementCartItemButton + inventoryId).click();
  }

  clickItemDiscountButton(inventoryId: string) {
    cy.get(this.itemDiscountButton + inventoryId).click();
  }

  clickDeleteCartItemButton(inventoryId: string) {
    cy.get(this.deleteCartItemButton + inventoryId).click();
  }

  clickDeleteItemDiscountButton(inventoryId: string) {
    cy.get(this.deleteItemDiscountButton + inventoryId).click();
  }

  clickSecondaryCartButton() {
    cy.get(this.secondaryCartButton).click();
  }

  clickPrimaryCheckoutButton() {
    cy.get(this.primaryCheckoutButton).click();
  }

  //save cart section
  clickSaveCartButton() {
    cy.get(this.saveCartButton).click();
  }

  clickClearCartButton() {
    cy.get(this.clearCartButton).click();
  }

  typeSaveCartSearchCustomerInput(input: string) {
    cy.get(this.saveCartSearchCustomerInput).type(input);
  }

  clickSaveCartAddNewCustomerButton() {
    cy.get(this.saveCartAddNewCustomerButton).click();
  }

  clickSaveCartSelectCustomerRadioButton(customerId: string) {
    cy.get(this.saveCartSelectCustomerRadioButton + customerId).click();
  }

  clickSaveCartEditCustomerButton(customerId: string) {
    cy.get(this.saveCartEditCustomerButton + customerId).click();
  }

  // clear cart confirmation popup
  clickClearCartConfirmationCloseButton() {
    cy.get(this.clearCartConfirmationCloseButton).click();
  }

  clickClearCartConfirmationTidakButton() {
    cy.get(this.clearCartConfirmationTidakButton).click();
  }

  clickClearCartConfirmationHapusButton() {
    cy.get(this.clearCartConfirmationHapusButton).click();
  }

  // item discount
  clickItemDiscountCloseButton() {
    cy.get(this.itemDiscountCloseButton).click();
  }

  clickItemDiscountFlatDiscountRadioButton() {
    cy.get(this.itemDiscountFlatDiscountRadioButton).click();
  }

  clickItemDiscountFreeItemRadioButton() {
    cy.get(this.itemDiscountFreeItemRadioButton).click();
  }

  clickItemDiscountFlatDiscountToggleButton() {
    cy.get(this.itemDiscountFlatDiscountToggleButton).click();
  }

  clickItemDiscountPercentageDiscountToggleButton() {
    cy.get(this.itemDiscountPercentageDiscountToggleButton).click();
  }

  typeItemDiscountAmountInput(input: string) {
    cy.get(this.itemDiscountAmountInput).type(input);
  }

  typeItemDiscountNameInput(input: string) {
    cy.get(this.itemDiscountNameInput).type(input);
  }

  clickItemDiscountHapusButton() {
    cy.get(this.itemDiscountHapusButton).click();
  }

  clickItemDiscountSubmitButton() {
    cy.get(this.itemDiscountSubmitButton).click();
  }

  clickItemDiscountFreeItemDecrementButton() {
    cy.get(this.itemDiscountFreeItemDecrementButton).click();
  }

  typeItemDiscountFreeItemNumberInput(input: string) {
    cy.get(this.itemDiscountFreeItemNumberInput).type(input);
  }

  clickItemDiscountFreeItemIncrementButton() {
    cy.get(this.itemDiscountFreeItemIncrementButton).click();
  }
}
