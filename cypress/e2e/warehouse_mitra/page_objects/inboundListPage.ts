import BasePage from "./basePage";

export default class InboundBasePage extends BasePage {
  searchbox =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div/div[1]/form/div/div/input';
  deliveryMethodFilterButton = "#filter-modal";
  deliveryMethodDropdown = "#mui-component-select-delivery_method";
  deliveryMethodDropdownItem = 'li[role="option"]';
  submitDeliveryMethodFilterButton =
    ".MuiDialogActions-root > .MuiBox-root > .MuiButton-contained";
  deliveryDateFilterButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div/div/div/input';
  deliveryDateCell = 'div[role="cell"]';
  deliveryDateCTAButton = 'button[class="MuiButtonBase-root"]';
  inboundTabContainer = ".MuiTabs-flexContainer";
  chipContainer = "#chips-container";
  emptyResultText =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]/div/div';

  clickReceiptTab() {
    cy.intercept("GET", "/inbound/receipts/list/*").as("shipmentListAPI");
    cy.get(this.inboundTabContainer).contains("Proses Penerimaan").click();
    cy.wait("@shipmentListAPI");
  }

  setSearchKeyword(keyword: string) {
    cy.xpath(this.searchbox).type(keyword);
    cy.xpath(this.searchbox).type("{enter}");
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

  setExpectedDeliveryDate(deliveryDate: number): string {
    return (
      "Dikirim " + deliveryDate + this.utils.generateDateTime(0, " MMM YYYY")
    );
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
}
