import { convertNameToId, retrieveUomId } from "../step_definitions/utils";
import BasePage from "./basePage";

export default class PurchaseAddPage extends BasePage {
  path = "purchase/add";

  /**
   *
   * Header & Footer
   *
   */

  backButton = "#button_purchase_add_back";
  simpanHeaderButton = "#button_purchase_add_simpan";
  simpanFooterButton = "#button_purchase_add_simpan_footer";

  clickBackButton() {
    cy.get(this.backButton).click();
  }

  clickSimpanHeaderButton() {
    cy.get(this.simpanHeaderButton).click();
  }

  clickSimpanFooterButton() {
    cy.get(this.simpanFooterButton).click();
  }

  /**
   *
   * Supplier Card
   *
   * Most functions already created inside inventory detail, will use form there
   *
   */

  selectSupplierButton = "#button_purchase_add_supplier_select";

  inputInvoiceNumber = "#input_purchase_add_supplier_invoice_number";

  clickSupplierSelectDropdownButton() {
    cy.get(this.selectSupplierButton).click();
  }

  typeInvoiceNumber(input: string) {
    cy.get(this.inputInvoiceNumber).clear().type(input);
  }

  /**
   *
   * Inventory Table - Search Result
   *
   */

  searchResultContainerDiv = "#div_search_result_container";
  searchResultItemTambahButton = "#button_search_result_item_tambah_";
  searchInventoryInput = "#input_search_purchase_buying_item";
  searchResultTambaBarangButton = "#button_tambah_barang";

  typeInventorySearchBar(input: string) {
    cy.get(this.searchInventoryInput).clear().type(input);
  }

  clickAddSpecificInventoryButton(productVariantName: string) {
    const id =
      this.searchResultItemTambahButton + convertNameToId(productVariantName);
    cy.get(id).click();
  }

  clickTambahBarangButton() {
    cy.get(this.searchResultTambaBarangButton).click();
  }

  /**
   *
   * Inventory Table - Row
   *
   * ${productVariantId}_${uomId}
   *
   */

  selectUomPopoverButton = "#button_buying_item_select_uom_";
  uomPopoverSearchbar = "#input_product_uom_searchbar";
  uomPopoverCheckbox = "#checkbox_uom_";
  uomPopoverPhilih = "#button_uom_pillih";
  uomPopoverTambah = "#button_uom_tambah";

  buyingItemContainer = "#tbody_buying_item_container";
  buyingItemJumlahInput = "#input_buying_item_jumlah_";
  buyingItemHargaUnitInput = "#input_buying_item_harga_unit_";
  buyingItemPotonganInput = "#input_buying_item_potongan_";
  buyingItemHargaJualButton = "#button_buying_item_harga_jual_";
  buyingItemDeleteRowButton = "#button_buying_item_delete_";

  clickSelectUomButton(productVariantName: string, uomId: string) {
    const id =
      this.selectUomPopoverButton +
      convertNameToId(productVariantName) +
      "_" +
      uomId;

    cy.get(id).click();
  }

  typeUomSearchBar(input: string) {
    cy.get(this.uomPopoverSearchbar).clear().type(input);
  }

  clickUomCheckBox(uomId: string) {
    cy.get(this.uomPopoverCheckbox + uomId).click();
  }

  clickUomPopoverPhilih() {
    cy.get(this.uomPopoverPhilih).click();
  }

  clickUomPopoverTambah() {
    cy.get(this.uomPopoverTambah).click();
  }

  typeJumlahInput(productVariantName: string, uomName: string, input: string) {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id =
        this.buyingItemJumlahInput +
        convertNameToId(productVariantName) +
        "_" +
        uomId;
      cy.get(id).clear().type(input);
    });
  }

  typeHargaUnitInput(
    productVariantName: string,
    uomName: string,
    input: string
  ) {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id =
        this.buyingItemHargaUnitInput +
        convertNameToId(productVariantName) +
        "_" +
        uomId;
      cy.get(id).clear().type(input);
    });
  }

  typePotonganInput(
    productVariantName: string,
    uomName: string,
    input: string
  ) {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id =
        this.buyingItemPotonganInput +
        convertNameToId(productVariantName) +
        "_" +
        uomId;
      cy.get(id).clear().type(input);
    });
  }

  clickHargaJualButton(productVariantName: string, uomName: string) {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id =
        this.buyingItemHargaJualButton +
        convertNameToId(productVariantName) +
        "_" +
        uomId;
      cy.get(id).click();
    });
  }

  clickDeleteItemRowButton(productVariantName: string, uomName: string) {
    retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      const id =
        this.buyingItemDeleteRowButton +
        convertNameToId(productVariantName) +
        "_" +
        uomId;
      cy.get(id).click();
    });
  }

  /**
   *
   * Summery Table
   *
   */

  summeryTableSubTotalP = "#p_summery_table_sub_total";

  summeryTableDiscountP = "#p_summery_table_discount";
  summeryTableDiscountEditButton = "button_summery_table_discount_edit";
  summeryTableDiscountEditModalInput = "#input_discount_modal_extra_fee";
  summeryTableDiscountEditModalSimpanButton = "button_discount_modal_simpan";
  summeryTableDiscountEditModalCloseButton = "button_discount_modal_close";

  summeryTableExtraFeeP = "#p_summery_table_extra_fee";
  summeryTableExtraFeeEditButton = "#button_summery_table_extra_fee_edit";
  summeryTableExtraFeeEditModalInput = "#input_extra_fee_modal";
  summeryTableExtraFeeEditModalSimpanButton = "#button_extra_fee_modal_simpan";
  summeryTableExtraFeeEditModalCloseButton = "#button_extra_fee_modal_close";

  summeryTableTaxP = "#p_summery_table_tax";
  summeryTableTaxEditButton = "#button_summery_table_tax_edit";
  summeryTableTaxEditModalInput = "#input_tax_modal";
  summeryTableTaxEditModalExcludeRadioInput = "#radio_tax_exclude";
  summeryTableTaxEditModalIncludeInput = "#radio_tax_include";
  summeryTableTaxEditModalSimpanButton = "#button_tax_modal_simpan";
  summeryTableTaxEditModalCloseButton = "#button_tax_modal_close";

  summeryTableTotalTagihanP = "#p_summery_table_total_tagihan";

  clickSummeryTableDiscountEditButton() {
    cy.get(this.summeryTableDiscountEditButton).click();
  }

  typeSummeryTableDiscountModalInput(input: string) {
    cy.get(this.summeryTableDiscountEditModalInput).clear().type(input);
  }

  clickSummeryTableDiscountModalClose() {
    cy.get(this.summeryTableDiscountEditModalCloseButton).click();
  }

  clickSummeryTableDiscountModalSimpan() {
    cy.get(this.summeryTableDiscountEditModalSimpanButton).click();
  }

  clickSummeryTableExtraFeeEditButton() {
    cy.get(this.summeryTableExtraFeeEditButton).click();
  }

  typeSummeryTableExtraFeeModalInput(input: string) {
    cy.get(this.summeryTableExtraFeeEditModalInput).clear().type(input);
  }

  clickSummeryTableExtraFeeModalClose() {
    cy.get(this.summeryTableExtraFeeEditModalCloseButton).click();
  }

  clickSummeryTableExtraFeeModalSimpan() {
    cy.get(this.summeryTableExtraFeeEditModalSimpanButton).click();
  }

  clickSummeryTableTaxEditButton() {
    cy.get(this.summeryTableTaxEditButton).click();
  }

  typeSummeryTableTaxModalInput(input: string) {
    cy.get(this.summeryTableTaxEditModalInput).clear().type(input);
  }

  clickSummeryTableTaxModalClose() {
    cy.get(this.summeryTableTaxEditModalCloseButton).click();
  }

  clickSummeryTableTaxModalRadioExcludeClick() {
    cy.get(this.summeryTableTaxEditModalExcludeRadioInput).click();
  }

  clickSummeryTableTaxModalRadioIncludeClick() {
    cy.get(this.summeryTableTaxEditModalIncludeInput).click();
  }

  clickSummeryTableTaxModalSimpan() {
    cy.get(this.summeryTableTaxEditModalSimpanButton).click();
  }

  /**
   *
   * Payment Information
   *
   */

  paymentInfoLunasRadioInput = "#radio_payment_info_lunas";
  paymentInfoBelumLunasRadioInput = "#radio_payment_info_belum_lunas";
  paymentInfoPaidAmountInput = "#input_payment_info_paid_amount";
  paymentInfoMetodePembayaranButton = "#button_payment_info_metode_pembayaran";
  paymentInfoPopoverOption = "#div_payment_info_popover_option_"; // {option} Bank Transfer => bank_transfer
  paymentInfoDueDateInput = "#input_payment_info_due_date";

  clickPaymentInfoRadioLunas() {
    cy.get(this.paymentInfoLunasRadioInput).click();
  }

  clickPaymentInfoRadioBelumLunas() {
    cy.get(this.paymentInfoBelumLunasRadioInput).click();
  }

  typeTotalBayarInput(input: string) {
    cy.get(this.paymentInfoPaidAmountInput).clear().clear().type(input);
  }

  clickPaymentInfoMethodPopoverButton() {
    cy.get(this.paymentInfoMetodePembayaranButton).click();
  }

  clickPaymentInfoPopoverOption(option: string) {
    cy.get(this.paymentInfoPopoverOption + convertNameToId(option)).click();
  }

  selectCurrentDatePaymentInfo() {
    cy.get(this.paymentInfoDueDateInput).click();
    cy.get(
      ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-disableElevation"
    )
      .next()
      .click();
  }

  /**
   *
   * Custom Inventory Modal
   *
   */

  customInventoryInput = "#input_custom_inventory_modal";
  customInventorySimpanButton = "#button_custom_inventory_simpan";
  customInventoryCloseButton = "#button_custom_inventory_close";

  typeCustomInventoryNameInput(input: string) {
    cy.get(this.customInventoryInput).clear().clear().type(input);
  }

  clickCustomInventorySimpanButton() {
    cy.get(this.customInventorySimpanButton).click();
  }

  clickCustomInventoryCloseButton() {
    cy.get(this.customInventoryCloseButton).click();
  }
}
