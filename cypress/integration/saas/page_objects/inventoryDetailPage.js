import BasePage from "./BasePage.js";

export default class InventoryDetail extends BasePage {
  path = "inventory/";

  // inventory basic info
  productVariantNameInput =
    "input[id='input_inventory_detail_product_variant_name']";
  productDisplayNameInput = "input[id='input_displayName']";

  // uom section
  unitSearchInput = "input[id='input_product_unit_uom_input_searchbar']";
  expandStockUnitButton = "span[id='button_choose_stock_unit']";
  chooseUnitButton = "button[id='button_product_unit_uom_pilih']";
  unitCheckboxInput = "[id^=input_checkbox_product_unit_uom_";
  addNewUnitButton = "button[id='button_product_unit_uom_add_custom']";

  // uom hierarchy
  uomConversionSortUpButton = "[id^=button_conversion_modal_sort_content_up_";
  uomConversionSortDownButton =
    "[id^=button_conversion_modal_sort_content_down_";
  uomConversionInput = "[id^=input_conversion_modal_convert_content_uom_";
  uomConversionNextStepButton =
    "button[id='button_conversion_modal_selanjutnya']";
  uomConversionSaveButton = "button[id='button_conversion_modal_simpan']";

  // stock uom
  unitStockQuantityInput = "[id^=input_stock_card_available_stock_";
  unitPriceInput = "[id^=input_stock_card_price_";

  // selling uom
  expandSellingUnitButton = "span[id='button_choose_selling_unit']";
  addSpecificUnitSellingPriceButton =
    "[id^=button_selling_card_price_tier_set_";
  enablePriceTierButton = "input[id='button_price_tier_modal_is_multiple']";
  unitPriceTierSellingPriceInput = "[id^=input_price_tier_modal_unit_price_";
  unitPriceTierMinimumQuantityInput =
    "[id^=input_price_tier_modal_min_quantity_";
  unitPriceTierAddMoreRowButton =
    "button[id='button_price_tier_modal_add_row']";
  unitSellingPriceInput = "input[id='priceTiers[0].unitPrice']";
  saveUnitSellingPriceButton = "button[id='button_price_tier_modal_simpan']";

  submitAddInventoryButton = "button[id='button_save_inventory_header']";

  // common
  visitInventoryDetail() {
    cy.visit(this.baseUrl + this.path);
  }

  typeProductVariantName(input) {
    cy.get(this.productVariantNameInput).type(input);
  }

  typeProductDisplayName(input) {
    cy.get(this.productDisplayNameInput).type(input);
  }

  clickExpandStockUnitButton() {
    cy.get(this.expandStockUnitButton).click();
  }

  typeUnitSearch(input) {
    cy.get(this.unitSearchInput).clear();
    cy.get(this.unitSearchInput).type(input);
  }

  clickUnitCheckboxInput() {
    cy.get(this.unitCheckboxInput).first().click();
  }

  clickSpecificUnitCheckbox(id) {
    cy.get(this.unitCheckboxInput + id + "]")
      .first()
      .click();
  }

  clickChooseUnitButton() {
    cy.get(this.chooseUnitButton).click();
  }

  clickAddNewUnitButton() {
    cy.get(this.addNewUnitButton).click();
  }

  clickUomConversionSortUpButton(id) {
    cy.get(this.uomConversionSortUpButton + id + "]").click();
  }

  clickUomConversionSortDownButton(id) {
    cy.get(this.uomConversionSortDownButton + id + "]").click();
  }

  clickUomConversionNextStepButton() {
    cy.get(this.uomConversionNextStepButton).click();
  }

  clickUomConversionSaveButton() {
    cy.get(this.uomConversionSaveButton).click();
  }

  typeUomConversion(id, input) {
    cy.get(this.uomConversionInput + id + "]").type(input);
  }

  typeUnitStockQuantity(id, input) {
    cy.get(this.unitStockQuantityInput + id + "]").type(input);
  }

  typeUnitPrice(id, input) {
    cy.get(this.unitPriceInput + id + "]").type(input);
  }

  clickExpandSellingUnitButton() {
    cy.get(this.expandSellingUnitButton).click();
  }

  clickEnablePriceTierButton() {
    cy.get(this.enablePriceTierButton).click();
  }

  typeUnitPriceTierSellingPriceInput(id, input) {
    cy.get(this.unitPriceTierSellingPriceInput + id + "]").type(input);
  }

  typeUnitPriceTierMinimumQuantityInput(id, input) {
    cy.get(this.unitPriceTierMinimumQuantityInput + id + "]").type(input);
  }

  clickUnitPriceTierAddMoreRowButton() {
    cy.get(this.unitPriceTierAddMoreRowButton).click();
  }

  clickAddSpecificUnitSellingPriceButton(id) {
    cy.get(this.addSpecificUnitSellingPriceButton + id + "]").click();
  }

  typeUnitSellingPrice(input) {
    cy.get(this.unitSellingPriceInput).type(input);
  }

  clickSaveUnitSellingPriceButton() {
    cy.get(this.saveUnitSellingPriceButton).click();
  }

  clickSubmitAddInventoryButton() {
    cy.get(this.submitAddInventoryButton).click();
  }
}
