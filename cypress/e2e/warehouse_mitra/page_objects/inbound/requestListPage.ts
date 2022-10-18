import InboundBaseListPage from "./inboundBaseListPage";

export default class RequestListPage extends InboundBaseListPage {
  path = "/inventory/inbound/request/list";
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
  requestItemListBody = '//tbody[contains(@class, "MuiTableBody-root")]';
  requestItemSourceIDPointer = "/td[1]/div[1]";
  requestItemSourceTypePointer = "/td[1]/div[2]";
  requestItemRequestIDPointer = "/td[2]/a/div[1]";
  requestItemSupplierStorePointer = "/td[3]/div";
  requestItemDeliveryMethodPointer = "/td[4]/div";
  requestItemDeliveryDatePointer = "/td[2]/a/div[2]/span";
  requestItemStatusPointer = "/td[5]/span/span[2]";
  requestItemFirstElementPointer = "/tr[1]";
  firstRequestItemSourceID = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemSourceIDPointer
  );
  firstRequestItemSourceType = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemSourceTypePointer
  );
  firstRequestItemRequestID = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemRequestIDPointer
  );
  firstRequestItemTargetStore = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemSupplierStorePointer
  );
  firstRequestItemDeliveryMethod = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemDeliveryMethodPointer
  );
  firstRequestItemDeliveryDate = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemDeliveryDatePointer
  );
  firstRequestItemStatus = this.requestItemListBody.concat(
    this.requestItemFirstElementPointer + this.requestItemStatusPointer
  );

  clickCreateNewRequest() {
    cy.wait(500); //TODO: Request implement test-id on FE
    cy.get(this.inboundListButtons).contains("Permintaan Barang Masuk").click();
    cy.contains(this.createNewRequestButtonOption).click();
  }

  clickFirstRequest() {
    cy.xpath(this.firstRequestItemSourceID)
      .invoke("text")
      .as("requestListSourceID");
    cy.xpath(this.firstRequestItemSourceType)
      .invoke("text")
      .as("requestListSourceType");
    cy.xpath(this.firstRequestItemRequestID)
      .invoke("text")
      .as("requestListRequestID");
    cy.xpath(this.firstRequestItemTargetStore)
      .invoke("text")
      .as("requestListTargetStore");
    cy.xpath(this.firstRequestItemDeliveryMethod)
      .invoke("text")
      .as("requestListDeliveryMethod");
    cy.xpath(this.firstRequestItemDeliveryDate)
      .invoke("text")
      .as("requestListDeliveryDate");
    cy.xpath(this.firstRequestItemStatus)
      .invoke("text")
      .as("requestListStatus");

    cy.xpath(this.firstRequestItemSourceID).click();
  }

  assertCreatedRequestItem() {
    let requestPrefix =
      "REQIN/" + this.utils.generateDateTime(0, "MMYY") + "000";
    cy.get("@inboundFormSourceID").then((sourceID) => {
      expect(
        cy.xpath(this.firstRequestItemSourceID).should("contain", sourceID)
      );
    });
    cy.xpath(this.firstRequestItemSourceType)
      .invoke("text")
      .then(($text) => {
        expect(
          cy
            .get("@inboundFormSourceType")
            .should("contain", $text.split(" - ", 1))
        );
      });
    expect(
      cy.xpath(this.firstRequestItemRequestID).should("contain", requestPrefix)
    );
    cy.xpath(this.firstRequestItemTargetStore).then((actualTargetStoreName) => {
      expect(
        cy
          .get("@inboundFormTargetStoreName")
          .should("contain", actualTargetStoreName.text())
      );
    });
    cy.xpath(this.firstRequestItemDeliveryMethod).then(
      (actualDeliveryMethod) => {
        expect(
          cy
            .get("@inboundFormDeliveryMethod")
            .should("contain", actualDeliveryMethod.text())
        );
      }
    );
    cy.get("@inboundFormDeliveryDate").then((deliveryDate) => {
      let formattedDeliveryDate = this.utils.reformatDate(
        deliveryDate.toString(),
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
      expect(
        cy
          .xpath(this.firstRequestItemDeliveryDate)
          .should("contain", formattedDeliveryDate)
      );
    });
    expect(
      cy.xpath(this.firstRequestItemStatus).should("contain", "Belum Selesai")
    );
  }

  assertCanceledRequestItem() {
    cy.get("@sourceDetailSourceID").then((sourceID) => {
      expect(
        cy.xpath(this.firstRequestItemSourceID).should("contain", sourceID)
      );
    });
    expect(
      cy.xpath(this.firstRequestItemStatus).should("contain", "Dibatalkan")
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
