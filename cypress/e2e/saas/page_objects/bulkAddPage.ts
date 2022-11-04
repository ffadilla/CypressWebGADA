import BasePage from "./basePage";
import * as utils from "../step_definitions/utils";

export default class BulkAddPage extends BasePage {
  path = "inventory/bulk-add";

  //Bulk Add Form
  bulkAddNewItemPopOver = "#button_bulk_add_add_new_item_popover";
  bulkAddTambahBarangSearchbar = "#input_tambah_barang_searchbar";
  bulkAddTambahBarangInputCheckbox = "#input_checkbox_tambah_barang_option_";
  bulkAddSimpanBarangInventoryPopover =
    "#button_inventory_select_popover_simpan";
  bulkAddOpenUomSelectButton = "#button_open_uom_select_";
  bulkAddInputUomCheckBoxBuying = "#input_uom_popover_checkbox_buying_";
  bulkAddInputUomCheckBoxSelling = "#input_uom_popover_checkbox_selling_";
  bulkAddLanjutButtonSelectUom = "#button_uom_popover_lanjut";
  bulkAddInputJumlahStok = "#input_jumlah_stok_";
  bulkAddInputHargaModalPerUnit = "#input_harga_modal_per_unit_";
  bulkAddInputHargaJualPerUnit = "#input_harga_jual_per_unit_";
  bulkAddSimpanButton = "#button_bulk_add_simpan";
  bulkAddSuccessModalButtonPrimary = "#button_success_modal_primary";
  bulkAddSuccessModalButtonSecondary = "#button_success_modal_secondary";
  bulkAddTambahBarangResult = "#div_tambah_barang_results";
  bulkAddTambahCustomInventoryOption = "#input_add_custom_inventory-option-0";
  bulkAddRemoveRow = "#button_0_0_remove";
  bulkAddDisabledItem = "#div_tambah_barang_results";
  bulkAddIsiManualInventory = "#button_tambah_barang_isi_manual";
  bulkAddInputSearchCustomUomBuying = "#input_search_custom_uom_buying";
  bulkAddInputSearchCustomUomSelling = "#input_search_custom_uom_selling";
  bulkAddButtonCustomUomBuying = "#button_add_custom_uom_buying";
  bulkAddInputAddCustomUomBuyingOption =
    "#input_add_custom_uom_buying-option-0";
  bulkAddInputUomPopoverChecboxSelling = "#input_uom_popover_checkbox_selling_";
  bulkAddInputCheckboxTambahBarangOption =
    "#input_checkbox_tambah_barang_option_";
  bulkAddButtonToggleIsStockReminderActive =
    "#button_toggle_is_stock_reminder_active_";
  bulkAddInputBatasStock = "#input_batas_stock_";
  bulkAddStockReminderSimpan = "#button_stock_reminder_simpan";
  bulkAddButtonToggleOnlineSellingActive =
    "#button_toggle_online_selling_active_";
  bulkAddInputMinimumPesanan = "#input_min_pesanan_";
  bulkAddInputMinumumStock = "#input_min_stock_";
  bulkAddOnlineSellingSimpan = "#button_online_selling_simpan";
  bulkAddToggleConsignedActive = "#button_toggle_consigned_active_";
  bulkAddSupplierPopover = "#button_supplier_popover_";
  bulkAddSupplierOption = "#supplier_option_";

  //Multiple UOM
  bulkAddInputStokMultipleKarton = "#input_jumlah_stok_djarum_coklat_12_2";
  bulkAddInputStokMultipleBal = "#input_jumlah_stok_djarum_coklat_12_7";
  bulkAddInputStokMultipleSlop = "#input_jumlah_stok_djarum_coklat_12_8";
  bulkAddInputStokMultiplePieces = "#input_jumlah_stok_djarum_coklat_12_5";

  bulkAddInputHargaModalKarton =
    "#input_harga_modal_per_unit_djarum_coklat_12_2";
  bulkAddInputHargaModalBal = "#input_harga_modal_per_unit_djarum_coklat_12_7";
  bulkAddInputHargaModalSlop = "#input_harga_modal_per_unit_djarum_coklat_12_8";
  bulkAddInputHargaModalPieces =
    "#input_harga_modal_per_unit_djarum_coklat_12_5";

  bulkAddInputHargaJualKarton = "#input_harga_jual_per_unit_djarum_coklat_12_2";
  bulkAddInputHargaJualBal = "#input_harga_jual_per_unit_djarum_coklat_12_7";
  bulkAddInputHargaJualSlop = "#input_harga_jual_per_unit_djarum_coklat_12_8";
  bulkAddInputHargaJualPieces = "#input_harga_jual_per_unit_djarum_coklat_12_5";

  clickBulkAddNewItemPopOver() {
    cy.get(this.bulkAddNewItemPopOver).click();
  }

  typeBulkAddTambahBarangSearchbar(input: string) {
    cy.get(this.bulkAddTambahBarangSearchbar).type(input);
  }

  clickBulkAddTambahBarangInputCheckbox(inventoryName: string) {
    cy.get(this.bulkAddTambahBarangInputCheckbox + inventoryName).check();
  }

  clickBulkAddOpenUomSelectButton(inventoryName: string, uomId: string) {
    cy.get(
      this.bulkAddOpenUomSelectButton + inventoryName + "_" + uomId
    ).click();
  }

  clickBulkAddSimpanBarangInventoryPopover() {
    cy.get(this.bulkAddSimpanBarangInventoryPopover).click();
  }

  clickBulkAddInputUomCheckboxBuying(uomId: string) {
    cy.get(this.bulkAddInputUomCheckBoxBuying + uomId).check();
  }

  clicklBulkAddInputUomCheckBoxSelling(uomId: string) {
    cy.get(this.bulkAddInputUomCheckBoxSelling + uomId).check();
  }

  clickBulkAddLanjutButtonSelectUom() {
    cy.get(this.bulkAddLanjutButtonSelectUom).click();
  }

  typeBulkAddInputJumlahStok(
    input: string,
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddInputJumlahStok +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).type(input);
  }

  typeBulkAddInputHargaModalPerUnit(
    input: string,
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddInputHargaModalPerUnit +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).type(input);
  }

  typeBulkAddInputHargaJualPerUnit(
    input: string,
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddInputHargaJualPerUnit +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).type(input);
  }

  clickBulkAddSimpanButton() {
    cy.get(this.bulkAddSimpanButton).click();
  }

  clickBulkAddSuccessModalButtonPrimary() {
    cy.get(this.bulkAddSuccessModalButtonPrimary).click();
  }

  clickBulkAddSuccessModalButtonSecondary() {
    cy.get(this.bulkAddSuccessModalButtonSecondary).click();
  }

  clickBulkAddRemoveRow() {
    cy.get(this.bulkAddRemoveRow).click();
  }

  clickBulkAddIsiManualInventory() {
    cy.get(this.bulkAddIsiManualInventory).click();
  }

  clickBulkAddTambahCustomInventoryOption() {
    cy.get(this.bulkAddTambahCustomInventoryOption).click();
  }

  typesBulkAddInputSearchCustomUomBuying(input: string) {
    cy.get(this.bulkAddInputSearchCustomUomBuying).type(input);
  }

  typesBulkAddInputSearchCustomUomSelling(input: string) {
    cy.get(this.bulkAddInputSearchCustomUomSelling).type(input);
  }

  clickBulkAddInputUomPopoverChecboxSelling(uomId: string) {
    cy.get(this.bulkAddInputUomPopoverChecboxSelling + uomId).check();
  }

  clickBulkAddButtonCustomUomBuying() {
    cy.get(this.bulkAddButtonCustomUomBuying).click();
  }

  clickbulkAddInputAddCustomUomBuyingOption() {
    cy.get(this.bulkAddInputAddCustomUomBuyingOption).click();
  }

  uncheckBulkAddInputCheckboxTambahBarangOption(inventoryName: string) {
    cy.get(
      this.bulkAddInputCheckboxTambahBarangOption + inventoryName
    ).uncheck();
  }

  checkBulkAddInputCheckboxTambahBarangOption(inventoryName: string) {
    cy.get(this.bulkAddInputCheckboxTambahBarangOption + inventoryName).check();
  }

  clickBulkAddButtonToggleIsStockReminderActive(inventoryName: string) {
    cy.get(
      this.bulkAddButtonToggleIsStockReminderActive + inventoryName
    ).click();
  }

  typeBulkAddInputBatasStock(input: string, inventoryName: string) {
    cy.get(
      this.bulkAddInputBatasStock + utils.replaceWhiteSpace(inventoryName)
    ).type(input);
  }

  clickBulkAddStockReminderSimpan() {
    cy.get(this.bulkAddStockReminderSimpan).click();
  }

  clickBulkAddButtonToggleOnlineSellingActive(
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddButtonToggleOnlineSellingActive +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).click();
  }

  typeBulkAddInputMinimumPesanan(
    input: string,
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddInputMinimumPesanan +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).type(input);
  }

  typeBulkAddInputMinumumStock(
    input: string,
    inventoryName: string,
    uomId: string
  ) {
    cy.get(
      this.bulkAddInputMinumumStock +
        utils.replaceWhiteSpace(inventoryName) +
        "_" +
        uomId
    ).type(input);
  }

  clickBulkAddOnlineSellingSimpan() {
    cy.get(this.bulkAddOnlineSellingSimpan).click();
  }

  // Multiple UOM

  typebulkAddInputStokMultipleKarton(input: string) {
    cy.get(this.bulkAddInputStokMultipleKarton).type(input);
  }

  typebulkAddInputStokMultipleBal(input: string) {
    cy.get(this.bulkAddInputStokMultipleBal).type(input);
  }

  typebulkAddInputStokMultipleSlop(input: string) {
    cy.get(this.bulkAddInputStokMultipleSlop).type(input);
  }

  typebulkAddInputStokMultiplePieces(input: string) {
    cy.get(this.bulkAddInputStokMultiplePieces).type(input);
  }

  typebulkAddInputHargaModalKarton(input: string) {
    cy.get(this.bulkAddInputHargaModalKarton).type(input);
  }

  typebulkAddInputHargaModalBal(input: string) {
    cy.get(this.bulkAddInputHargaModalBal).type(input);
  }

  typebulkAddInputHargaModalSlop(input: string) {
    cy.get(this.bulkAddInputHargaModalSlop).type(input);
  }

  typebulkAddInputHargaModalPieces(input: string) {
    cy.get(this.bulkAddInputHargaModalPieces).type(input);
  }

  typebulkAddInputHargaJualKarton(input: string) {
    cy.get(this.bulkAddInputHargaJualKarton).type(input);
  }

  typebulkAddInputHargaJualBal(input: string) {
    cy.get(this.bulkAddInputHargaJualBal).type(input);
  }

  typebulkAddInputHargaJualSlop(input: string) {
    cy.get(this.bulkAddInputHargaJualSlop).type(input);
  }

  typebulkAddInputHargaJualPieces(input: string) {
    cy.get(this.bulkAddInputHargaJualPieces).type(input);
  }
}
