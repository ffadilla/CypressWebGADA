import BasePage from "./basePage";

export default class EmployeePage extends BasePage {
  path = "user/employee-access";

  //Create Employee Object
  employeeAddModalButton = "#button_open_add_employee_modal";
  employeeInputName = "#input_employee_name";
  employeeInputPhoneNumber = "#input_employee_phone_number";
  employeeInputJob = "#input_tipe_pekerjaan";
  employeeInputJobOptionKasir = "#input_tipe_pekerjaan-option-0";
  employeeInputJobOptionSales = "#input_tipe_pekerjaan-option-1";
  employeeInputJobOptionGudang = "#input_tipe_pekerjaan-option-2";
  employeeInputJobOptionAdmin = "#input_tipe_pekerjaan-option-3";
  employeeInputJobOptionCourier = "#input_tipe_pekerjaan-option-4";
  employeeSimpanButton = "#button_update_employee";
  employeeClosedButton = "#button_close_employee_modal";

  clickEmployeeAddModalButton() {
    cy.get(this.employeeAddModalButton).click();
  }

  typeEmployeeInputName(input: string) {
    cy.get(this.employeeInputName).type(input);
  }

  typeEmployeeInputPhoneNumber(input: string) {
    cy.get(this.employeeInputPhoneNumber).type(input);
  }

  clickEmployeeInputJob() {
    cy.get(this.employeeInputJob).click();
  }

  clickEmployeeInputJobOptionKasir() {
    cy.get(this.employeeInputJobOptionKasir).click();
  }

  clickEmployeeInputJobOptionSales() {
    cy.get(this.employeeInputJobOptionSales).click();
  }

  clickEmployeeInputJobOptionGudang() {
    cy.get(this.employeeInputJobOptionGudang).click();
  }

  clickEmployeeInputJobOptionAdmin() {
    cy.get(this.employeeInputJobOptionAdmin).click();
  }

  clickEmployeeInputJobOptionCourier() {
    cy.get(this.employeeInputJobOptionCourier).click();
  }

  clickEmployeeSimpanButton() {
    cy.get(this.employeeSimpanButton).click();
  }

  clickEmployeeClosedButton() {
    cy.get(this.employeeClosedButton).click();
  }

  //Sales Employee Access
  employeePermissionParentSalesDiskonCheckbox =
    "#checkbox_permission_catat_penjualan__kelola_diskon";
  employeeChildSalesCheckbox = "#checkbox_child_catat_penjualan";
  employeeChildDiskonCheckbox = "#checkbox_child_kelola_diskon";
  employeeChildRefundProcessCheckbox =
    "#checkbox_child_memproses_retur_penjualan";

  clickEmployeePermissionParentSalesDiskonCheckbox() {
    cy.get(this.employeePermissionParentSalesDiskonCheckbox).check({
      force: true,
    });
  }

  clickEmployeeChildSalesCheckbox() {
    cy.get(this.employeeChildSalesCheckbox).check();
  }

  clickEmployeeChildDiskonCheckbox() {
    cy.get(this.employeeChildDiskonCheckbox).check();
  }

  clickEmployeeChildRefundProcessCheckbox() {
    cy.get(this.employeeChildRefundProcessCheckbox).check();
  }

  //Purchasing Employee Access
  employeePermissionParentPurchasingCheckbox =
    "#checkbox_permission_kelola_barang__catat_pembelian";
  employeeChildPurchasingCheckbox = "#checkbox_child_pembelian";
  employeeChildViewProduct = "#checkbox_child_lihat_produk";
  employeeChildAddProduct = "#checkbox_child_tambah_produk";
  employeeChildUpdateProduct = "#checkbox_child_ubah_produk";
  employeeChildDeleteProduct = "#checkbox_child_hapus_produk";

  clickEmployeePermissionParentPurchasingCheckbox() {
    cy.get(this.employeePermissionParentPurchasingCheckbox).check();
  }

  clickEmployeeChildPurchasingCheckbox() {
    cy.get(this.employeeChildPurchasingCheckbox).check();
  }

  clickEmployeeChildViewProduct() {
    cy.get(this.employeeChildViewProduct).check();
  }

  clickEmployeeChildAddProduct() {
    cy.get(this.employeeChildAddProduct).check();
  }

  clickEmployeeChildUpdateProduct() {
    cy.get(this.employeeChildUpdateProduct).check();
  }

  clickEmployeeChildDeleteProduct() {
    cy.get(this.employeeChildDeleteProduct).check();
  }

  //Employee Manage Access
  employeeAccessPermissionParentCheckbox =
    "#checkbox_permission_kelola_karyawan";
  employeeAddChildCheckbox = "#checkbox_child_tambah_karyawan";
  employeeDeleteChildCheckbox = "#checkbox_child_hapus_karyawan";
  employeeViewChildCheckbox = "#checkbox_child_lihat_karyawan";
  employeeEditChildCheckbox = "#checkbox_child_ubah_karyawan";

  clickEmployeeAccessPermissionParentCheckbox() {
    cy.get(this.employeeAccessPermissionParentCheckbox).check();
  }

  clickEmployeeAddChildCheckbox() {
    cy.get(this.employeeAddChildCheckbox).check();
  }

  clickEmployeeDeleteChildCheckbox() {
    cy.get(this.employeeDeleteChildCheckbox).check();
  }

  clickEmployeeViewChildCheckbox() {
    cy.get(this.employeeViewChildCheckbox).check();
  }

  clickEmployeeEditChildCheckbox() {
    cy.get(this.employeeEditChildCheckbox).check();
  }

  //Reporting Manage Access
  employeePermissionManageReportCheckbox =
    "#checkbox_permission_kelola_laporan";

  clickEmployeePermissionManageReportCheckbox() {
    cy.get(this.employeePermissionManageReportCheckbox).check();
  }

  //Employee List & Detail
  employeeListDrawer = "#button_drawer_";
  employeeDetailEditButton = "#button_edit_employee_access";
  employeeDeleteButton = "#button_delete_employee";
  employeeUpdateButton = "#button_update_employee";
  employeeCloseDrawer = "#button_close_employee_drawer";

  clickEmployeeListDrawer(salesId: string) {
    cy.get(this.employeeListDrawer + salesId).click();
  }

  clickEmployeeDetailEditButton() {
    cy.get(this.employeeDetailEditButton).click();
  }

  clickEmployeeDeleteButton() {
    cy.get(this.employeeDeleteButton).click();
  }

  clickEmployeeUpdateButton() {
    cy.get(this.employeeUpdateButton).click();
  }

  clickEmployeeCloseDrawer() {
    cy.get(this.employeeCloseDrawer).click();
  }
}
