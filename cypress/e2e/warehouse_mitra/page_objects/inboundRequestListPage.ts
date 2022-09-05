import BasePage from "./basePage";
import * as utils from "../common/utils";

export default class InboundRequestListPage extends BasePage {
  path = "/inventory/inbound/request/list";
  createRequestButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[3]/div[2]/span/button';
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
  chipContainer = "#chips-container";
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
  requestItemListBody =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]/div[1]/table/tbody';
  requestItemSourceIDPointer = "/td[1]/div[1]";
  requestItemRequestIDPointer = "/td[2]/a/div[1]";
  requestItemSupplierStorePointer = "/td[3]/div";
  requestItemDeliveryMethodPointer = "/td[4]/div";
  requestItemDeliveryDatePointer = "/td[2]/a/div[2]/span";
  requestItemStatusPointer = "/td[5]/span/span[2]";
  requestItemFirstElementPointer = "/tr[1]";
  firstRequestItemSourceID = this.requestItemListBody.concat(
    "/tr[1]" + this.requestItemSourceIDPointer
  );
  firstRequestItemTargetStore = this.requestItemListBody.concat(
    "/tr[1]" + this.requestItemSupplierStorePointer
  );
  firstRequestItemDeliveryMethod = this.requestItemListBody.concat(
    "/tr[1]" + this.requestItemDeliveryMethodPointer
  );
  firstRequestItemDeliveryDate = this.requestItemListBody.concat(
    "/tr[1]" + this.requestItemDeliveryDatePointer
  );
  firstRequestItemStatus = this.requestItemListBody.concat(
    "/tr[1]" + this.requestItemStatusPointer
  );
  emptyResultText =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]/div/div';

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

  setDeliveryDateFilter(deliveryDate: number) {
    cy.xpath(this.deliveryDateFilterButton).click();
    cy.get(this.deliveryDateCell).contains(deliveryDate).click();
  }

  setExpectedDeliveryDate(deliveryDate: number): string {
    return "Dikirim " + deliveryDate + utils.generateDateTime(0, " MMM YYYY");
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
    this.assertQueryParam("status=", expectedValue);
  }

  assertFirtRequestItem(
    expectedSourceID: string,
    expectedTargetStoreName: string,
    expectedDeliveryMethod: string,
    deliveryDate: number
  ) {
    const expectedDeliveryDate = this.setExpectedDeliveryDate(deliveryDate);

    expect(
      cy
        .xpath(this.firstRequestItemSourceID)
        .should("contain", expectedSourceID)
    );
    expect(
      cy
        .xpath(this.firstRequestItemTargetStore)
        .should("contain", expectedTargetStoreName)
    );
    expect(
      cy
        .xpath(this.firstRequestItemDeliveryMethod)
        .should("contain", expectedDeliveryMethod)
    );
    expect(
      cy
        .xpath(this.firstRequestItemDeliveryDate)
        .should("contain", expectedDeliveryDate)
    );
    expect(
      cy.xpath(this.firstRequestItemStatus).should("contain", "Belum Selesai")
    );
  }

  assertRequestItemsBySearchFilter(target: string, value: string) {
    let pointer = "";
    let firstRequestItemStatus = this.requestItemListBody.concat(
      this.requestItemFirstElementPointer + this.requestItemStatusPointer
    );

    cy.xpath(firstRequestItemStatus).should("be.visible");

    switch (target) {
      case "source ID":
        pointer = this.requestItemSourceIDPointer;
        break;
      case "request ID":
        pointer = this.requestItemRequestIDPointer;
        break;
      case "supplier store":
        pointer = this.requestItemSupplierStorePointer;
        break;
      case "status":
        pointer = this.requestItemStatusPointer;
        break;
      case "delivery method":
        pointer = this.requestItemDeliveryMethodPointer;
        break;
      case "delivery date":
        pointer = this.requestItemDeliveryDatePointer;
        break;
    }

    cy.xpath(this.requestItemListBody).then(($list) => {
      for (let index = 1; index < $list.find("tr").length + 1; index++) {
        const requestItemAttribute = this.requestItemListBody.concat(
          "/tr[" + index + "]" + pointer
        );
        expect(cy.xpath(requestItemAttribute).should("contain", value));
      }
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
}
