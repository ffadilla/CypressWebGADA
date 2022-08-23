import BasePage from "./basePage";

export default class InventoryDetail extends BasePage {
  path = "inventory/";

  // inventory basic info
  productVariantNameInput = "#input_inventory_detail_product_variant_name";
  productDisplayNameInput = "#nput_displayName";
  productImageInputButton = "#input_inventory_detail_product_image";

  // principal, brand, category, subcategory
  principalAndBrandButton = "#button_choose_principal_and_brand";
  closePrincipalAndBrandModalButton = "#button_principal_or_brand_modal_close";
  principalSearchbarInput = "#input_principal_searchbar";
  brandBackButton = "#button_brand_back";
  brandSearchbarInput = "#input_brand_searchbar";
  principalRadioButton = "[id^=radio_button_principal_";
  addCustomPrincipalButton = "#button_add_custom_principal_modal";
  brandRadioButton = "[id^=radio_button_brand_";
  addCustomBrandButton = "#button_add_custom_brand_modal";
  customPrincipalAndBrandModalInput =
    "#input_custom_principal_or_brand_modal_name";
  customPrincipalAndBrandModalSubmitButton =
    "#button_custom_principal_or_brand_modal_tambah";

  categoryAndSubcategoryButton = "#button_choose_category_and_subcategory";
  closeCategoryAndSubcategoryButton =
    "#button_category_or_subcategory_modal_close";
  categorySearchbarInput = "#input_category_searchbar";
  subcategoryBackButton = "#button_subcategory_back";
  categoryRadioButton = "[id^=radio_button_category_";
  addCustomCategoryButton = "#button_add_custom_category_modal";
  subcategorySearchbarInput = "#input_subcategory_searchbar";
  subcategoryRadioButton = "[id^=radio_button_subcategory_";
  addCustomSubcategoryButton = "#button_add_custom_subcategory_modal";
  customCategoryAndSubcategoryModalInput =
    "#input_custom_category_or_subcategory_modal_name";
  customCategoryAndSubcategoryModalSubmitButton =
    "#button_custom_category_or_subcategory_modal_tambah";

  // consignment
  isConsignedToggleButton = "#button_toggle_is_consigned_product";
  chooseSupplierButton = "#button_choose_supplier";
  supplierSearchModalInput = "#input_supplier_search_modal";
  addCustomSupplierButton = "#button_add_custom_supplier";
  addCustomSupplierNamaTokoInput = "#input_add_custom_supplier_nama_toko";
  addCustomSupplierNamaSalesInput = "#input_add_custom_supplier_nama_sales";
  addCustomSupplierPhoneNumberInput = "#input_add_custom_supplier_phone_number";
  addCustomSupplierAddressInput = "#input_add_custom_supplier_address";
  addCustomSupplierNotesInput = "#input_add_custom_supplier_notes";
  addCustomSupplierBankNameInput = "#input_add_custom_supplier_bank_name";
  addCustomSupplierBankNameOptionInput =
    "[id^=input_add_custom_supplier_bank_name-option-";
  addCustomSupplierAccountNumberInput =
    "#input_add_custom_supplier_account_number";
  addCustomSupplierAccountHolderNameInput =
    "#input_add_custom_supplier_account_holder_name";

  // uom section
  unitSearchInput = "#input_product_unit_uom_input_searchbar";
  expandStockUnitButton = "#button_choose_stock_unit";
  chooseUnitButton = "#button_product_unit_uom_pilih";
  unitCheckboxInput = "#input_checkbox_product_unit_uom_";
  addNewUnitButton = "#button_product_unit_uom_add_custom";

  // uom hierarchy
  uomConversionSortUpButton = "#button_conversion_modal_sort_content_up_";
  uomConversionSortDownButton = "#button_conversion_modal_sort_content_down_";
  uomConversionInput = "#input_conversion_modal_convert_content_uom_";
  uomConversionNextStepButton = "#button_conversion_modal_selanjutnya";
  uomConversionSaveButton = "#button_conversion_modal_simpan";

  // stock uom
  unitStockQuantityInput = "#input_stock_card_available_stock_";
  unitPriceInput = "#input_stock_card_price_";

  // selling uom
  expandSellingUnitButton = "#button_choose_selling_unit";
  addSpecificUnitSellingPriceButton = "#button_selling_card_price_tier_set_";
  enablePriceTierButton = "#button_price_tier_modal_is_multiple";
  unitPriceTierSellingPriceInput = "#input_price_tier_modal_unit_price_";
  unitPriceTierMinimumQuantityInput = "#input_price_tier_modal_min_quantity_";
  unitPriceTierAddMoreRowButton = "#button_price_tier_modal_add_row";
  unitSellingPriceInput = "input[id='priceTiers[0].unitPrice']";
  saveUnitSellingPriceButton = "#button_price_tier_modal_simpan";
  addBarcodeButton = "#button_selling_card_barcode_edit_";
  inputBarcodeManuallyButton = "#button_barcode_modal_manual_input";
  barcodeValueInput = "#input_barcode_modal";
  saveBarcodeButton = "#button_barcode_modal_simpan";

  submitAddInventoryButton = "#button_save_inventory_header";

  visitInventoryDetail() {
    cy.visit(this.baseUrl + this.path);
  }

  // inventory basic info
  typeProductVariantName(input: string) {
    cy.get(this.productVariantNameInput).type(input);
  }

  typeProductDisplayName(input: string) {
    cy.get(this.productDisplayNameInput).type(input);
  }

  clickProductImageInputButton() {
    cy.get(this.productImageInputButton).click();
  }

  // principal, brand, category, subcategory
  clickPrincipalAndBrandButton() {
    cy.get(this.principalAndBrandButton).click();
  }

  clickClosePrincipalAndBrandModalButton() {
    cy.get(this.closePrincipalAndBrandModalButton).click();
  }

  typePrincipalSearchbarInput(input: string) {
    cy.get(this.principalSearchbarInput).type(input);
  }

  clickPrincipalRadioButton(id: string) {
    cy.get(this.principalRadioButton + id + "]").click();
  }

  clickAddCustomPrincipalButton() {
    cy.get(this.addCustomPrincipalButton).click();
  }

  clickBrandBackButton() {
    cy.get(this.brandBackButton).click();
  }

  typeBrandSearchbarInput(input: string) {
    cy.get(this.brandSearchbarInput).type(input);
  }

  clickBrandRadioButton(id: string) {
    cy.get(this.brandRadioButton + id + "]").click();
  }

  clickAddCustomBrandButton() {
    cy.get(this.addCustomBrandButton).click();
  }

  typeCustomPrincipalAndBrandModalInput(input: string) {
    cy.get(this.customPrincipalAndBrandModalInput).clear();
    cy.get(this.customPrincipalAndBrandModalInput).type(input);
  }

  clickCustomPrincipalAndBrandModalSubmitButton() {
    cy.get(this.customPrincipalAndBrandModalSubmitButton).click();
  }

  clickCategoryAndSubcategoryButton() {
    cy.get(this.categoryAndSubcategoryButton).click();
  }

  clickCloseCategoryAndSubcategoryModalButton() {
    cy.get(this.closeCategoryAndSubcategoryButton).click();
  }

  typeCategorySearchbarInput(input: string) {
    cy.get(this.categorySearchbarInput).type(input);
  }

  clickCategoryRadioButton(id: string) {
    cy.get(this.categoryRadioButton + id + "]").click();
  }

  clickAddCustomCategoryButton() {
    cy.get(this.addCustomCategoryButton).click();
  }

  typeSubcategorySearchbarInput(input: string) {
    cy.get(this.subcategorySearchbarInput).type(input);
  }

  clickSubcategoryRadioButton(id: string) {
    cy.get(this.subcategoryRadioButton + id + "]").click();
  }

  clickAddCustomSubcategoryButton() {
    cy.get(this.addCustomSubcategoryButton).click();
  }

  typeCustomCategoryAndSubcategoryModalInput(input: string) {
    cy.get(this.customCategoryAndSubcategoryModalInput).clear();
    cy.get(this.customCategoryAndSubcategoryModalInput).type(input);
  }

  clickCustomCategoryAndSubcategoryModalSubmitButton() {
    cy.get(this.customCategoryAndSubcategoryModalSubmitButton).click();
  }

  clickSubcategoryBackButton() {
    cy.get(this.subcategoryBackButton).click();
  }

  // consignment
  clickIsConsignedToggleButton() {
    cy.get(this.isConsignedToggleButton).click();
  }

  clickChooseSupplierButton() {
    cy.get(this.chooseSupplierButton).click();
  }

  typeSupplierSearchModalInput(input: string) {
    cy.get(this.supplierSearchModalInput).type(input);
  }

  clickAddCustomSupplierButton() {
    cy.get(this.addCustomSupplierButton).click();
  }

  typeAddCustomSupplierNamaTokoInput(input: string) {
    cy.get(this.addCustomSupplierNamaTokoInput).type(input);
  }

  typeAddCustomSupplierNamaSalesInput(input: string) {
    cy.get(this.addCustomSupplierNamaSalesInput).type(input);
  }

  typeAddCustomSupplierPhoneNumberInput(input: string) {
    cy.get(this.addCustomSupplierPhoneNumberInput).type(input);
  }

  typeAddCustomSupplierAddressInput(input: string) {
    cy.get(this.addCustomSupplierAddressInput).type(input);
  }

  typeAddCustomSupplierNotesInput(input: string) {
    cy.get(this.addCustomSupplierNotesInput).type(input);
  }

  typeAddCustomSupplierBankNameInput(input: string) {
    cy.get(this.addCustomSupplierBankNameInput).type(input);
  }

  clickAddCustomSupplierBankNameOptionInput(input: string) {
    cy.get(this.addCustomSupplierBankNameOptionInput + input + "]").click();
  }

  typeAddCustomSupplierAccountNumberInput(input: string) {
    cy.get(this.addCustomSupplierAccountNumberInput).type(input);
  }

  typeAddCustomSupplierAccountHolderNameInput(input: string) {
    cy.get(this.addCustomSupplierAccountHolderNameInput).type(input);
  }

  // uom section
  clickExpandStockUnitButton() {
    cy.get(this.expandStockUnitButton).click();
  }

  typeUnitSearch(input: string) {
    cy.get(this.unitSearchInput).clear();
    cy.get(this.unitSearchInput).type(input);
  }

  clickUnitCheckboxInput() {
    cy.get(this.unitCheckboxInput).first().click();
  }

  clickSpecificUnitCheckbox(id: any) {
    cy.get(this.unitCheckboxInput + id).click();
  }

  clickChooseUnitButton() {
    cy.get(this.chooseUnitButton).click();
  }

  clickAddNewUnitButton() {
    cy.get(this.addNewUnitButton).click();
  }

  // uom hierarchy
  clickUomConversionSortUpButton(id: string) {
    cy.get(this.uomConversionSortUpButton + id).click();
  }

  clickUomConversionSortDownButton(id: string) {
    cy.get(this.uomConversionSortDownButton + id).click();
  }

  clickUomConversionNextStepButton() {
    cy.get(this.uomConversionNextStepButton).click();
  }

  clickUomConversionSaveButton() {
    cy.get(this.uomConversionSaveButton).click();
  }

  typeUomConversion(id: string, input: string) {
    cy.get(this.uomConversionInput + id).type(input);
  }

  // stock uom
  typeUnitStockQuantity(id: string, input: string) {
    cy.get(this.unitStockQuantityInput + id).type(input);
  }

  typeUnitPrice(id: string, input: string) {
    cy.get(this.unitPriceInput + id).type(input);
  }

  // selling uom
  clickExpandSellingUnitButton() {
    cy.get(this.expandSellingUnitButton).click();
  }

  clickEnablePriceTierButton() {
    cy.get(this.enablePriceTierButton).click();
  }

  typeUnitPriceTierSellingPriceInput(id: string, input: string) {
    cy.get(this.unitPriceTierSellingPriceInput + id).type(input);
  }

  typeUnitPriceTierMinimumQuantityInput(id: string, input: string) {
    cy.get(this.unitPriceTierMinimumQuantityInput + id).type(input);
  }

  clickUnitPriceTierAddMoreRowButton() {
    cy.get(this.unitPriceTierAddMoreRowButton).click();
  }

  clickAddSpecificUnitSellingPriceButton(id: string) {
    cy.get(this.addSpecificUnitSellingPriceButton + id).click();
  }

  typeUnitSellingPrice(input: string) {
    cy.get(this.unitSellingPriceInput).type(input);
  }

  clickSaveUnitSellingPriceButton() {
    cy.get(this.saveUnitSellingPriceButton).click();
  }

  clickAddBarcodeButton(id: string) {
    cy.get(this.addBarcodeButton + id).click();
  }

  clickInputBarcodeManuallyButton() {
    cy.get(this.inputBarcodeManuallyButton).click();
  }

  typeBarcodeValue(input: string) {
    cy.get(this.barcodeValueInput).type(input);
  }

  clickSaveBarcodeButton() {
    cy.get(this.saveBarcodeButton).click();
  }

  clickSubmitAddInventoryButton() {
    cy.get(this.submitAddInventoryButton).click();
  }
}
