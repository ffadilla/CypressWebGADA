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

  cliclBulkAddInputUomCheckBoxSelling(uomId: string) {
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
}
