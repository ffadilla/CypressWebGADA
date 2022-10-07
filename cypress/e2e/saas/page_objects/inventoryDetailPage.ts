import BasePage from "./basePage";

export default class InventoryDetail extends BasePage {
  path = "inventory/";

  // inventory basic info
  productVariantNameInput = "#input_inventory_detail_product_variant_name";
  productDisplayNameInput = "#nput_displayName";
  productImageInputButton = "#input_inventory_detail_product_image";
  inventoryEditNameUbahButton = "#button_inventory_edit_name_ubah";

  // principal, brand, category, subcategory
  changeProductBrandAndCategoryButton =
    "#button_change_product_brand_category_info";
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
  supplierModalCloseButton = "#button_supplier_modal_close";
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
  clearUomSearchButton = "#button_search_clear";

  // uom hierarchy
  uomConversionSortUpButton = "#button_conversion_modal_sort_content_up_";
  uomConversionSortDownButton = "#button_conversion_modal_sort_content_down_";
  uomConversionInput = "#input_conversion_modal_convert_content_uom_";
  uomConversionNextStepButton = "#button_conversion_modal_selanjutnya";
  uomConversionSaveButton = "#button_conversion_modal_simpan";

  // stock uom
  unitStockQuantityInput = "#input_stock_card_available_stock_";
  unitPriceInput = "#input_stock_card_price_";
  inventoryEditStockCardUbahButton =
    "#button_inventory_edit_ubah_stock_card_popover";
  tambahStokBaruButton = "[id^=button_topup_stock_]";
  tambahStokBaruUomPopoverButton = "#button_topup_product_unit_uom_popover";
  tambahStokBaruStokMasukInput = "#input_topup_new_stock_";
  tambahStokBaruCogsInput = "#input_topup_unit_price_";
  tambahStokBaruSubmitButton = "#button_topup_modal_submit";
  tambahStokBaruCloseModalButton = "#button_topup_modal_close";
  hitungUlangStokButton = "[id^=button_restock_]";
  currentGoodStockInput = "#input_restock_current_good_stock_";
  currentBadStockKadaluwarsaInput = "#input_restock_current_kedaluwarsa_stock_";
  currentBadStockRusakInput = "#input_restock_current_rusak_stock_";
  goodStockInput = "#input_restock_new_good_stock_";
  badStockKadaluwarsaInput = "#input_restock_new_kedaluwarsa_stock_";
  badStockRusakInput = "#input_restock_new_rusak_stock_";
  hitungUlangStokSubmitButton = "#button_restock_modal_submit";
  hitungUlangStokCloseButton = "#button_restock_modal_close";
  ubahStatusButton = "[id^=button_edit_good_stock_]";
  totalStokFisikText = "#p_total_stok_fisik_";
  goodStockText = "#p_good_stock_";
  badStockText = "#p_bad_stock_";
  totalGoodStockText = "#p_total_good_stock";
  totalGoodStockYangSedangDipesanText =
    "#p_total_good_stock_yang_sedang_dipesan";
  totalGoodStockYangBisaDijualText = "#p_total_good_stock_yang_bisa_dijual";

  // selling uom
  expandSellingUnitButton = "#button_choose_selling_unit";
  addSpecificUnitSellingPriceButton = "#button_selling_card_price_tier_set_";
  enablePriceTierButton = "#button_price_tier_modal_is_multiple";
  unitPriceTierSellingPriceInput = "#input_price_tier_modal_unit_price_";
  unitPriceTierMinimumQuantityInput = "#input_price_tier_modal_min_quantity_";
  unitPriceTierAddMoreRowButton = "#button_price_tier_modal_add_row";
  unitSellingPriceInput = "#input_price_tier_modal_unit_price_0";
  saveUnitSellingPriceButton = "#button_price_tier_modal_simpan";
  addBarcodeButton = "#button_selling_card_barcode_edit_";
  inputBarcodeManuallyButton = "#button_barcode_modal_manual_input";
  barcodeValueInput = "#input_barcode_modal";
  saveBarcodeButton = "#button_barcode_modal_simpan";
  editSellingPriceButton = "#button_selling_card_price_tier_edit_";
  barcodeMoreOptionsButton = "#button_selling_card_barcode_more_options_";
  barcodeMoreOptionsUbahButton = "#button_selling_card_barcode_option_ubah_";
  barcodeMoreOptionsHapusButton = "#button_selling_card_barcode_option_hapus_";
  bisaDijualText = "#p_bisa_dijual_";

  submitAddInventoryButton = "#button_save_inventory_header";
  deleteInventoryButton = "#button_inventory_edit_delete";

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

  clickInventoryEditNameUbahButton() {
    cy.get(this.inventoryEditNameUbahButton).click();
  }

  // principal, brand, category, subcategory
  clickChangeProductBrandAndCategoryButton() {
    cy.get(this.changeProductBrandAndCategoryButton).click();
  }

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

  clickSupplierModalCloseButton() {
    cy.get(this.supplierModalCloseButton).click();
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
    cy.get(this.unitPriceInput + id)
      .clear()
      .type(input);
  }

  clickInventoryEditStockCardUbahButton() {
    cy.get(this.inventoryEditStockCardUbahButton).click();
  }

  clickTambahStokBaruButton() {
    cy.get(this.tambahStokBaruButton).click();
  }

  clickTambahStokBaruUomPopoverButton() {
    cy.get(this.tambahStokBaruUomPopoverButton).click();
  }

  typeTambahStokBaruStokMasukInput(id: string, input: string) {
    cy.get(this.tambahStokBaruStokMasukInput + id).type(input);
  }

  typeTambahStokBaruCogsInput(id: string, input: string) {
    cy.get(this.tambahStokBaruCogsInput + id).type(input);
  }

  clickTambahStokBaruSubmitButton() {
    cy.get(this.tambahStokBaruSubmitButton).click();
  }

  clickTambahStokBaruCloseModalButton() {
    cy.get(this.tambahStokBaruCloseModalButton).click();
  }

  clickHitungUlangStokButton() {
    cy.get(this.hitungUlangStokButton).click();
  }

  typeGoodStockInput(id: string, input: string) {
    cy.get(this.goodStockInput + id).type(input);
  }

  typeBadStockKadaluwarsaInput(id: string, input: string) {
    cy.get(this.badStockKadaluwarsaInput + id).type(input);
  }

  typeBadStockRusakInput(id: string, input: string) {
    cy.get(this.badStockRusakInput + id).type(input);
  }

  clickHitungUlangStokSubmitButton() {
    cy.get(this.hitungUlangStokSubmitButton).click();
  }

  clickHitungUlangStokCloseButton() {
    cy.get(this.hitungUlangStokCloseButton).click();
  }

  clickUbahStatusButton() {
    cy.get(this.ubahStatusButton).click();
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
    cy.get(this.unitSellingPriceInput).clear().type(input);
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

  clickEditSellingPriceButton(id: string) {
    cy.get(this.editSellingPriceButton + id).click();
  }

  clickBarcodeMoreOptionsButton() {
    cy.get(this.barcodeMoreOptionsButton).click();
  }

  clickBarcodeMoreOptionsUbahButton() {
    cy.get(this.barcodeMoreOptionsUbahButton).click();
  }

  clickBarcodeMoreOptionsHapusButton() {
    cy.get(this.barcodeMoreOptionsHapusButton).click();
  }

  clickSubmitAddInventoryButton() {
    cy.get(this.submitAddInventoryButton).click();
  }

  clickDeleteInventoryButton() {
    cy.get(this.deleteInventoryButton).click();
  }
}
