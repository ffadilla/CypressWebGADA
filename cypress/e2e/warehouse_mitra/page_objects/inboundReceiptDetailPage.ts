import BasePage from "./basePage";

export default class InboundReceiptDetailPage extends BasePage {
  path = "https://warehouse-dev.gudangada.com/inventory/inbound/receipt/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");
  receiptIDPrefix = "IN/" + this.utils.generateDateTime(0, "MMYY") + "00";

  receiptIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/p';
  createdDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[1]';
  sourceInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[2]';
  requestInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[3]';
  receiptStatusInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/span';
  receiptCTAButtonContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[2]';

  singleRequestInfo = {
    sourceTypeInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[1]/p[2]',
    targetStoreInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[2]/div[1]/p[2]',
    storeName:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[3]/div[1]/p[2]',
    deliveryDateInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[2]/p[2]',
    deliveryMethodInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[2]/div[2]/p[2]',
    warehouseName:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[3]/div[2]/p[2]',
    tableHeaderContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/thead/tr',
    tableBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/tbody',
    productNameBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[1]',
    productQtyBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[2]',
    allocatedInputBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]',
    allocatedQtyField:
      '[name="inbound_requests[0].product_variant_request_items[0].active_unit_items[0].allocated_quantity"]',
    substractAllocatedQtyButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[1]/div/div/div[1]/button[1]',
    addAllocatedQtyButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[1]/div/div/div[1]/button[2]',
    allocatedUOMDropdown:
      '[id="mui-component-select-inbound_requests[0].product_variant_request_items[0].active_unit_items[0].product_unit_id"]',
    addAllocatedUOMButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[2]/span/button',
    expiryDateDropdown:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[4]/div/div/div/div',
  };

  assertReceiptDataByReceiptList() {
    cy.get("@receiptListReceiptID").then((receiptID) => {
      expect(cy.xpath(this.receiptIDInfo).should("contain", receiptID));
    });
    cy.get("@receiptListCreatedDate").then((createdDate) => {
      expect(cy.xpath(this.createdDateInfo).should("contain", createdDate));
    });
    cy.get("@receiptListSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceInfo).should("contain", sourceID));
    });
    cy.get("@receiptListRequestID").then((requestID) => {
      expect(cy.xpath(this.requestInfo).should("contain", requestID));
    });
    cy.get("@receiptListStatus").then((status) => {
      expect(cy.xpath(this.receiptStatusInfo).should("contain", status));
    });
    cy.xpath(this.singleRequestInfo.sourceTypeInfo)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@receiptListSourceType").should("contain", actualSourceType)
        );
      });
    cy.xpath(this.singleRequestInfo.deliveryDateInfo)
      .invoke("text")
      .then((actualDeliveryDate) => {
        expect(
          cy
            .get("@receiptListDeliveryDate")
            .should("contain", actualDeliveryDate)
        );
      });
    cy.get("@receiptListTargetStore").then((targetStore) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.targetStoreInfo)
          .should("contain", targetStore)
      );
    });
    cy.get("@receiptListDeliveryMethod").then((deliveryMethod) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.deliveryMethodInfo)
          .should("contain", deliveryMethod)
      );
    });
  }

  assertReceiptDataByRequestDetail() {
    expect(
      cy.xpath(this.receiptIDInfo).should("contain", this.receiptIDPrefix)
    );
    expect(cy.xpath(this.createdDateInfo).should("contain", this.date));
    cy.get("@requestDetailSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceInfo).should("contain", sourceID));
    });
    cy.xpath(this.requestInfo)
      .invoke("text")
      .then((actualRequestID) => {
        expect(
          cy.get("@requestDetailRequestID").should("contain", actualRequestID)
        );
      });
    expect(cy.xpath(this.receiptStatusInfo).should("contain", "Belum Selesai"));
    /**
     * FE still render incorrect format
    cy.xpath(this.singleRequestInfo.sourceTypeInfo)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@requestDetailSourceType").should("contain", actualSourceType)
        );
      });
    cy.xpath(this.singleRequestInfo.deliveryDateInfo)
      .invoke("text")
      .then((actualDeliveryDate) => {
        expect(
          cy
            .get("@requestDetailDeliveryDate")
            .should("contain", actualDeliveryDate)
        );
      });
     */
    cy.get("@requestDetailTargetStore").then((targetStore) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.targetStoreInfo)
          .should("contain", targetStore)
      );
    });
    cy.get("@requestDetailDeliveryMethod").then((deliveryMethod) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.deliveryMethodInfo)
          .should("contain", deliveryMethod)
      );
    });
    cy.get("@requestDetailStoreName").then((storeName) => {
      expect(
        cy.xpath(this.singleRequestInfo.storeName).should("contain", storeName)
      );
    });
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.warehouseName)
          .should("contain", warehouseName)
      );
    });
    cy.get("@requestDetailProductName").then((productName) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productNameBodyContainer)
          .should("contain", productName)
      );
    });
    cy.get("@requestDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productQtyBodyContainer)
          .should("contain", productQty)
      );
    });
  }

  assertReceiptWithSingleRequestTableUI(status: string) {
    if (status === "Belum Selesai") {
      expect(
        cy.get(this.singleRequestInfo.allocatedQtyField).should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.substractAllocatedQtyButton)
          .should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButton)
          .should("be.visible")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButton)
          .should("be.visible")
      );
      expect(
        cy.xpath(this.singleRequestInfo.expiryDateDropdown).should("exist")
      );
    } else if (status === "Sudah Selesai") {
      expect(
        cy.get(this.singleRequestInfo.allocatedQtyField).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.substractAllocatedQtyButton)
          .should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButton)
          .should("not.exist")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButton)
          .should("not.exist")
      );
      expect(
        cy.xpath(this.singleRequestInfo.expiryDateDropdown).should("not.exist")
      );
    }
  }

  assertReceiptUI(status: string) {
    cy.xpath(this.requestInfo); //waiting for element to be rendered
    this.assertReceiptWithSingleRequestTableUI(status);

    if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.receiptCTAButtonContainer)
          .should("contain", "Batalkan Penerimaan Barang")
      );
      expect(
        cy.xpath(this.receiptCTAButtonContainer).should("contain", "Submit")
      );
    } else if (status === "Sudah Selesai") {
      expect(cy.xpath(this.receiptCTAButtonContainer).should("not.exist"));
    }
  }
}
