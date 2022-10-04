import BasePage from "../basePage";

export default class BaseListPage extends BasePage {
  searchbox =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div/div[1]/form/div/div/input';
  resetSearchbox = '[data-testid = "CloseRoundedIcon"]';
  deliveryMethodFilterButton = "#filter-modal";
  deliveryMethodDropdown = "#mui-component-select-delivery_method";
  deliveryMethodDropdownItem = 'li[role="option"]';
  submitDeliveryMethodFilterButton =
    ".MuiDialogActions-root > .MuiBox-root > .MuiButton-contained";
  deliveryDateFilterButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div/div/div/input';
  deliveryDateCell = '[role="gridcell"]';
  deliveryDateCTAContainer = ".MuiDialogActions-root";
  inboundTabContainer = ".MuiTabs-flexContainer";
  chipContainer = "#chips-container";
  pageAmountDropdown = '[aria-haspopup="listbox"]';
  pageAmountDropdownOptions = 'ul[role="listbox"]';
  tablePaginationInfoContainer = ".MuiTablePagination-displayedRows";
  emptyResultText =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]/div/div';
  snackbar = "#notistack-snackbar";

  setSearchKeyword(keyword: string) {
    cy.xpath(this.searchbox).type(keyword);
    cy.xpath(this.searchbox).type("{enter}");
  }

  resetSearchKeyword() {
    cy.get(this.resetSearchbox).click();
  }

  setDeliveryMethodFilter(deliveryMethod: string) {
    cy.get(this.deliveryMethodFilterButton).click();
    cy.get(this.deliveryMethodDropdown).click();
    cy.get(this.deliveryMethodDropdownItem).contains(deliveryMethod).click();
    cy.get(this.submitDeliveryMethodFilterButton).click();
  }

  setDeliveryDateFilter(deliveryDate: string) {
    cy.xpath(this.deliveryDateFilterButton).click();
    cy.get(this.deliveryDateCell).contains(deliveryDate).click();
  }

  resetDeliveryDate() {
    cy.xpath(this.deliveryDateFilterButton).click();
    cy.get(this.deliveryDateCTAContainer).contains("Reset").click();
  }

  setExpectedDeliveryDate(deliveryDate: number): string {
    return (
      "Dikirim " + deliveryDate + this.utils.generateDateTime(0, " MMM YYYY")
    );
  }

  setPageAmount(value: string) {
    cy.get(this.pageAmountDropdown).click();
    cy.get(this.pageAmountDropdownOptions).contains(value).click();
  }

  clickRequestTab() {
    cy.intercept("GET", "/inbound/requests/list/*").as("requestListAPI");
    cy.get(this.inboundTabContainer)
      .contains("Permintaan Barang Masuk")
      .click();
    cy.wait("@requestListAPI");
  }

  clickReceiptTab() {
    cy.intercept("GET", "/inbound/receipts/list/*").as("shipmentListAPI");
    cy.get(this.inboundTabContainer).contains("Proses Penerimaan").click();
    cy.wait("@shipmentListAPI");
  }

  clickStatusChip(status: string) {
    cy.intercept("GET", "/inbound/**").as("inboundListAPI");
    cy.get(this.chipContainer).contains(status).click();
    cy.wait("@inboundListAPI").its("response.statusCode").should("equal", 200);
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
    this.assertQueryParam("status", expectedValue);
  }

  assertTotalPageAmount(value: string) {
    cy.get(this.tablePaginationInfoContainer)
      .invoke("text")
      .then((text) => {
        let dataPerPage = parseInt(text.split(" ")[1].split("-")[1]);
        expect(dataPerPage).to.be.lessThan(parseInt(value) + 1);
      });
  }

  assertEmptyList() {
    expect(
      cy
        .xpath(this.emptyResultText)
        .should("contain", "Pencarian Tidak Ditemukan")
    );
    expect(
      cy
        .xpath(this.emptyResultText)
        .should(
          "contain",
          "Silakan ganti filter/kata kunci lain yang lebih sesuai."
        )
    );
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
