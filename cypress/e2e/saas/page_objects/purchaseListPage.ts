import BasePage from "./basePage";

export default class PurchaseListPage extends BasePage {
  path = "purchase/list";

  /**
   *
   * Header
   *
   */

  headerSemuaPembelianTabButton = "#button_tab_all_purchases";
  headerBelumDibayarTabButton = "#button_tab_unpaid";
  headerSudahDibayarTabButton = "#button_tab_paid";

  headerSearchBarInput = "#input_search_purchase";
  headerDownloadButton = "#button_download_laporan";
  headerAddPurchaseButton = "#button_tambah_data_pembelian";

  clickHeaderSemuaPembelianTabButton() {
    cy.get(this.headerSemuaPembelianTabButton).click();
  }

  clickHeaderBelumDibayarTabButton() {
    cy.get(this.headerBelumDibayarTabButton).click();
  }

  clickHeaderSudahDibayarTabButton() {
    cy.get(this.headerSudahDibayarTabButton).click();
  }

  typeHeaderSearchBarInput(input: string) {
    cy.get(this.headerSearchBarInput).clear().type(input);
  }

  clickHeaderDownloadButton() {
    cy.get(this.headerDownloadButton).click();
  }

  clickHeaderAddPurchaseButton() {
    cy.get(this.headerAddPurchaseButton).click();
  }

  /**
   *
   * Table Row
   *
   */

  purchaseDetailButton = "#button_purchase_list_detail_"; // purchase_id

  clickPurchaseDetailButton(id: string) {
    cy.get(this.purchaseDetailButton + id).click();
  }

  /**
   *
   * Purchase Detail Drawer
   *
   */

  catatPembayaranButton = "#button_catat_pembayaran";
  purchaseDrawerHeaderText = "#text_purchase_drawer_header";

  clickCatatPembayaranButton() {
    cy.get(this.catatPembayaranButton).click();
  }

  /**
   *
   * Pay off Supplier Modal
   *
   */

  payOffModalInput = "#input_pay_off_modal";
  payOffModalPaymentOptions = "#input_pay_off_modal_payment_options";
  payOffModalSimpanButton = "#button_pay_off_modal_payment_simpan";
  payOffModalBatalButton = "#button_pay_off_modal_payment_batal";
  payOffModalCloseButton = "#button_pay_off_modal_payment_close";

  typePayOffModalInput(input: string) {
    cy.get(this.payOffModalInput).clear().type(input);
  }

  clickPayOffModalSimpanButton() {
    cy.get(this.payOffModalSimpanButton).click();
  }

  clickPayOffModalBatalButton() {
    cy.get(this.payOffModalBatalButton).click();
  }

  clickPayOffModalCloseButton() {
    cy.get(this.payOffModalCloseButton).click();
  }
}
