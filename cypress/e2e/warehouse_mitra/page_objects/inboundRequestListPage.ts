import InboundListPage from "./inboundListPage";

export default class InboundRequestListPage extends InboundListPage {
  path = "/inventory/inbound/request/list";
  createRequestButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[3]/div[2]/span/button';
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
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

  clickStatusChip(status: string) {
    cy.get(this.chipContainer).contains(status).click();
  }

  assertFirstRequestItem(
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
}
