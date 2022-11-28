import BasePage from "./basePage";

export default class SupplierListPage extends BasePage {
  path = "supplier/list";
  addNewSupplierButton = "#button_tambah_supplier";

  // supplier add/edit modal
  supplierModalSimpanButton = "#button_add_custom_supplier_simpan";
  supplierModalCloseButton = "#button_supplier_modal_close";

  namaTokoInput = "#input_add_custom_supplier_nama_toko";
  namaSalesInput = "#input_add_custom_supplier_nama_sales";
  nomorHandphoneInput = "#input_add_custom_supplier_phone_number";

  // optional
  alamatInput = "#input_add_custom_supplier_address";
  catatanInput = "#input_add_custom_supplier_notes";
  namaBankDropdownButton = "#button_add_custom_supplier_bank_name_dropdown"; // [drop down button]
  namaBankClearButton = "#button_add_custom_supplier_bank_name_clear"; // [clear button]
  namaBankOption = "#input_add_custom_supplier_bank_name-option-2"; // [  0 => x ]
  namaBankInput = "#input_add_custom_supplier_bank_name";
  nomorRekeningInput = "#input_add_custom_supplier_account_number";
  namaPemilikRekeningInput = "#input_add_custom_supplier_account_holder_name";

  clickTambahSupplierButton() {
    cy.get(this.addNewSupplierButton).click();
  }

  typeAddNamaTokoInput(input: string) {
    cy.get(this.namaTokoInput).type(input);
  }

  typeNamaSalesInput(input: string) {
    cy.get(this.namaSalesInput).type(input);
  }

  typeNomorHandphoneInput(input: string) {
    cy.get(this.nomorHandphoneInput).type(input);
  }

  typeAlamatInput(input: string) {
    cy.get(this.alamatInput).type(input);
  }

  typeCatatanInput(input: string) {
    cy.get(this.catatanInput).type(input);
  }

  typeNomorRekeningInput(input: string) {
    cy.get(this.nomorRekeningInput).type(input);
  }

  typeNamaPemilikRekeningInput(input: string) {
    cy.get(this.namaPemilikRekeningInput).type(input);
  }

  clickNamaBankDropdownButton() {
    cy.get(this.namaBankDropdownButton).click();
  }

  clickNamaBankOption() {
    cy.get(this.namaBankOption).click();
  }

  clickSupplierModalSimpanButton() {
    cy.get(this.supplierModalSimpanButton).click();
  }
}
