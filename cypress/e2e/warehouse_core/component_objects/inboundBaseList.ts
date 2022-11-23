import { assertQueryParam } from "../common/assertions";
import Datepicker from "./datepicker";

export default class InboundBaseListPage {
  datepicker: Datepicker;

  constructor() {
    this.datepicker = new Datepicker();
  }

  searchbox = 'input[placeholder="No. permintaan barang atau nama produk..."]';
  resetSearchbox = '[data-testid = "CloseRoundedIcon"]';
  deliveryMethodFilterButton = "#filter-modal";
  deliveryMethodDropdown = "#mui-component-select-delivery_method";
  deliveryMethodDropdownItem = 'li[role="option"]';
  deliveryDateFilterButton = 'input[placeholder="Tanggal"]';
  deliveryDateCTAContainer = ".MuiDialogActions-root";
  inboundTabContainer = ".MuiTabs-flexContainer";
  chipContainer = "#chips-container";
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";
  notFoundRequestText = '[data-testid="empty_request_result"]';
  notFoundReceiptText = '[data-testid="empty_receipt_result"]';
  snackbar = "#notistack-snackbar";
  inboundListButtons = ".MuiButtonBase-root";

  setSearchKeyword(keyword: string) {
    cy.get(this.searchbox).type(keyword);
    cy.get(this.searchbox).type("{enter}");
  }

  resetSearchKeyword() {
    cy.get(this.resetSearchbox).click();
  }

  setDeliveryMethodFilter(deliveryMethod: string) {
    cy.get(this.deliveryMethodFilterButton).click();
    cy.get(this.deliveryMethodDropdown).click();
    cy.get(this.deliveryMethodDropdownItem).contains(deliveryMethod).click();
    cy.get(this.inboundListButtons).contains("Simpan").click();
  }

  setDeliveryDateFilter(
    deliveryDate: string,
    deliveryMonth: string,
    deliveryYear: string
  ) {
    this.datepicker.setDatepicker(
      this.deliveryDateFilterButton,
      deliveryDate,
      deliveryMonth,
      deliveryYear
    );
  }

  resetDeliveryDate() {
    cy.get(this.deliveryDateFilterButton).click();
    cy.get(this.deliveryDateCTAContainer).contains("Reset").click();
  }

  clickStatusChip(status: string) {
    cy.get(this.chipContainer).contains(status).click();
  }

  assertStatusQueryParam(value: string) {
    let expectedValue = "";
    switch (value) {
      case "Belum Selesai":
        expectedValue = "INCOMPLETE";
        break;
      case "Sedang Diproses":
        expectedValue = "IN_PROGRESS";
        break;
      case "Sudah Selesai":
        expectedValue = "COMPLETE";
        break;
      case "Dibatalkan":
        expectedValue = "CANCELLED";
        break;
      case "Semua Status":
        expectedValue = "";
    }
    assertQueryParam("status", expectedValue);
  }

  assertEmptyList() {
    cy.url().then((url) => {
      let pointer = "";
      if (url.includes("/inventory/inbound/request/list"))
        pointer = this.notFoundRequestText;
      if (url.includes("/inventory/inbound/receipt/list"))
        pointer = this.notFoundReceiptText;

      expect(cy.get(pointer).should("contain", "Pencarian Tidak Ditemukan"));
      expect(
        cy
          .get(pointer)
          .should(
            "contain",
            "Silakan ganti filter/kata kunci lain yang lebih sesuai."
          )
      );
    });
  }

  assertSnackbar(value: string) {
    let succeededMessage = "";
    if (value === "succeeded Source cancelation")
      succeededMessage = "Berhasil membatalkan barang masuk";
    else if (value === "succeeded Receipt cancelation")
      succeededMessage = "Sukses membatalkan penerimaan barang masuk";
    else if (value === "succeeded Receipt creation")
      succeededMessage = "Berhasil menyimpan penerimaan barang masuk";

    expect(cy.get(this.snackbar).should("contain", succeededMessage));
  }
}
