import MainPage from "../../warehouse_core/page_objects/mainPage";

export default class ShipmentProcessDetailPage extends MainPage {
  path = "inventory/outbound/shipment/detail";
  downloadPath = "./cypress/downloads/";
  firstDiscrepancyReason =
    "[name='outbound_requests[0].product_variant_request_items[0].rejected_reason']";
  firstCurrentUOM =
    "[id='mui-component-select-outbound_requests[0].product_variant_request_items[0].active_unit_items[0].product_unit_id']";
  firstCurrentItemAmount =
    "[name='outbound_requests[0].product_variant_request_items[0].active_unit_items[0].allocated_quantity']";
  firstUOMTooltip = "table > tbody > tr > td:nth-child(2) > div > svg";
  firstIsPartial = "[name='outbound_requests[0].is_partial']";

  //XPaths start here
  xpathShipmentIdOnDetail = "//div/div[3]/div[2]/div/div[1]/div[1]/div[1]/p";
  xpathRequestDateOnDetail = "//div/div[1]/div[1]/div[1]/div/div/p[1]";
  xpathOutboundIdOnDetail = "//div/div[1]/div[1]/div[1]/div/div/p[2]";
  xpathRequestIdOnDetail = "//div/div[1]/div[1]/div[1]/div/div/p[3]";
  xpathStatusOnDetail = "//div/div[1]/div[1]/div[1]/div/div/span";

  xpathOutboundTypeOnDetail = "//div/div[1]/div[2]/div/div/div[1]/div[1]/p[2]";
  xpathRecipientNameOnDetail = "//div/div[2]/div[1]/p[2]";
  xpathShipperStoreOnDetail = "//div/div[3]/div[1]/p[2]";
  xpathDeliveryDateOnDetail = "//div/div[1]/div[2]/p[2]";
  xpathDeliveryMethodOnDetail = "//div[2]/div/div/div[2]/div[2]/p[2]";
  xpathShipperWarehouseLocationOnDetail = "//div[2]/div/div/div[3]/div[2]/p[2]";

  xpathRequestTable = "//div[@id='__next']/div/div[3]/div[2]/div/div[2]";
  xpathCancelButton = "//button[text()='Batalkan Pengiriman Barang']";
  xpathSubmitButton = "//button[text()='Submit']";
  xpathViewExpiryDateButton = "//button[text()='Lihat Expiry Date']";

  firstTableContainer = "//table/tbody/tr";
  xpathFirstItemConfirmButton = this.firstTableContainer + "/td[8]/button";
  xpathFirstItemName = this.firstTableContainer + "/td[1]";
  xpathFirstOrderAmount = this.firstTableContainer + "/td[2]/div/p";
  xpathFirstAddItemButton =
    this.firstTableContainer + "/td[3]/div/div[1]/div/div/div[1]/button[2]";
  xpathFisrtSubtractItemButton =
    this.firstTableContainer + "/td[3]/div/div[1]/div/div/div[1]/button[1]";
  xpathFirstDiscrepancyAmount = this.firstTableContainer + "/td[5]";
  xpathFirstDefaultDiscrepancyReason = this.firstTableContainer + "/td[6]";
  xpathFirstAddOtherUOM =
    this.firstTableContainer + "/td[3]/div/div[2]/span/button";
  xpathFirstUOMInfoTooltip = "//div[@role='tooltip']/div/div";

  xpathTravelDocumentDownloadButton =
    "//div/div[3]/div[2]/div/div[3]/div[1]/div[2]/button";
  xpathTravelDocumentUploadButton =
    "//div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[1]/div/div/input";
  xpathOutboundListDownloadButton =
    "//div/div[3]/div[2]/div/div[1]/div[1]/div[2]/span/button";

  xpathAllItemsConfirmButton = "//button[text()='Konfirmasi Semua Barang']";
  xpathPopUpConfirmButton = "//div/div[2]/button[2]";

  clickDownloadOutboundList() {
    cy.xpath(this.xpathOutboundListDownloadButton).click();
  }

  clickDownloadTravelDocument() {
    cy.xpath(this.xpathTravelDocumentDownloadButton).click();
  }

  clickSingleItemConfirmation() {
    cy.xpath(this.xpathFirstItemConfirmButton).click();
  }

  clickAllItemsConfirmation() {
    cy.xpath(this.xpathAllItemsConfirmButton).click();
  }

  clickConfirm() {
    cy.xpath(this.xpathPopUpConfirmButton).should("be.visible").click();
  }

  clickSubmitShipmentProcess() {
    cy.xpath(this.xpathSubmitButton).click();
    this.clickConfirm();
  }

  getShipmentSubmissionAPI() {
    cy.intercept("PUT", "/outbound/shipments/*/bulk-submit/").as(
      "shipmentSubmissionAPI"
    );
  }

  waitElementsToRender() {
    cy.wait("@shipmentDetailAPI").its("response.statusCode").should("eq", 200);
  }

  attachTravelDocument() {
    cy.get("@filename").then((filename: any) => {
      let file = String(filename).split("/");
      cy.xpath(this.xpathTravelDocumentUploadButton).selectFile(
        this.downloadPath + file[6].replace(":", "_"),
        { force: true }
      );
    });
  }

  getFirstCurrentItemAmount() {
    cy.get(this.firstCurrentItemAmount)
      .invoke("val")
      .as("firstCurrentItemAmount");
  }

  getFirstOrderAmount() {
    cy.xpath(this.xpathFirstOrderAmount).invoke("text").as("firstOrderAmount");
  }

  getDownloadOutboundListAPI() {
    cy.intercept("GET", "/outbound/shipments/*/download/pick-list/").as(
      "downloadOutboundListAPI"
    );
  }

  getDownloadOutboundTravelAPI() {
    cy.intercept("GET", "/outbound/shipments/*/download/delivery-order/").as(
      "downloadOutboundTravelAPI"
    );
  }

  getDownloadPDFAPI() {
    cy.intercept("GET", "/OUTBOUND/OUTBOUND_PICTURE/PDF/*").as(
      "downloadPDFAPI"
    );
  }

  getOutboundIdOnDetail() {
    cy.xpath(this.xpathOutboundIdOnDetail)
      .invoke("text")
      .as("outboundIdOnDetail");
  }

  getRequestIdOnDetail() {
    cy.xpath(this.xpathRequestIdOnDetail)
      .invoke("text")
      .as("requestIdOnDetail");
  }

  getShipmentIdOnDetail() {
    cy.xpath(this.xpathShipmentIdOnDetail)
      .invoke("text")
      .as("shipmentIdOnDetail");
  }

  getRequestDateOnDetail() {
    cy.xpath(this.xpathRequestDateOnDetail)
      .invoke("text")
      .as("requestDateOnDetail");
  }

  getStatusOnDetail() {
    cy.xpath(this.xpathStatusOnDetail).invoke("text").as("statusOnDetail");
  }

  getOutboundTypeOnDetail() {
    cy.xpath(this.xpathOutboundTypeOnDetail)
      .invoke("text")
      .as("outboundTypeOnDetail");
  }

  getRecipientNameOnDetail() {
    cy.xpath(this.xpathRecipientNameOnDetail)
      .invoke("text")
      .as("recipientNameOnDetail");
  }

  getShipperStoreOnDetail() {
    cy.xpath(this.xpathShipperStoreOnDetail)
      .invoke("text")
      .as("shipperStoreOnDetail");
  }

  getDeliveryDateOnDetail() {
    cy.xpath(this.xpathDeliveryDateOnDetail)
      .invoke("text")
      .as("deliveryDateOnDetail");
  }

  getDeliveryMethodOnDetail() {
    cy.xpath(this.xpathDeliveryMethodOnDetail)
      .invoke("text")
      .as("deliveryMethodOnDetail");
  }

  getShipperWarehouseLocationOnDetail() {
    cy.xpath(this.xpathShipperWarehouseLocationOnDetail)
      .invoke("text")
      .as("shipperWarehouseLocationOnDetail");
  }

  assertInShipmentDetailPage() {
    cy.url().should("include", this.path);
  }

  assertCurrentShipmentId() {
    cy.get("@shipmentId").then((shipmentId: any) => {
      cy.xpath(this.xpathShipmentIdOnDetail).should("contain.text", shipmentId);
    });
  }

  assertCurrentOutboundType() {
    cy.get("@outboundType").then((outboundType: any) => {
      let temp = String(outboundType).split(" ")[0];
      cy.xpath(this.xpathOutboundTypeOnDetail).should("have.text", temp);
    });
  }

  assertCurrentDeliveryDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      let temp = String(deliveryDate).slice(8);
      cy.xpath(this.xpathDeliveryDateOnDetail).should("have.text", temp);
    });
  }

  assertCurrentRecipientName() {
    cy.get("@recipientName").then((recipientName: any) => {
      cy.xpath(this.xpathRecipientNameOnDetail).should(
        "have.text",
        recipientName
      );
    });
  }

  assertCurrentDeliveryMethod() {
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathDeliveryMethodOnDetail).should(
        "have.text",
        deliveryMethod
      );
    });
  }

  assertCurrentOutboundId() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathOutboundIdOnDetail).should("have.text", outboundId);
    });
  }

  assertCurrentRequestDate() {
    cy.get("@requestDate").then((requestDate: any) => {
      cy.xpath(this.xpathRequestDateOnDetail).should("have.text", requestDate);
    });
  }

  assertCurrentShipmentStatus() {
    cy.get("@shipmentStatus").then((shipmentStatus: any) => {
      cy.xpath(this.xpathStatusOnDetail).should("have.text", shipmentStatus);
    });
  }

  assertCurrentTotalRequest() {
    /**
     * We have to subtract the divs by 2
     * because it is including the header and confirm/footer divs
     */
    cy.xpath(this.xpathRequestTable)
      .find(">div")
      .its("length")
      .then((totalRequestOnDetail: any) => {
        cy.get("@totalOutboundRequest").then((totalOutboundRequest: any) => {
          let temp = totalOutboundRequest.split(" ")[0];
          expect(parseInt(temp)).to.equal(totalRequestOnDetail - 2);
        });
      });
  }

  assertDownloadOutboundListEnable() {
    cy.xpath(this.xpathOutboundListDownloadButton).should("be.enabled");
  }

  /**
   * 
   * this is for the next PR
  // assertOutboundListDownloadSucceed() {
  //   cy.wait("@downloadOutboundListAPI")
  //     .its("response.body.document_url")
  //     .as("filename");
  //   cy.get("@filename").then((filename: any) => {
  //     let file = String(filename).split("/");
  //     cy.readFile(this.downloadPath + file[6].replace(":", "_"));
  //   });
  // }

  // assertTravelDocumentDownloadSucceed() {
  //   cy.wait("@downloadOutboundTravelAPI")
  //     .its("response.body.document_url")
  //     .as("filename");
  //   cy.get("@filename").then((filename: any) => {
  //     let file = String(filename).split("/");
  //     cy.readFile(this.downloadPath + file[6].replace(":", "_"));
  //   });
  // }
   */

  assertDownloadSucceed(doc: string) {
    let temp: any;
    switch (doc) {
      case "outbound list":
        temp = "@downloadOutboundListAPI";
        break;
      case "outbound travel":
        temp = "@downloadOutboundTravelAPI";
        break;
    }
    cy.wait(temp).its("response.body.document_url").as("filename");
    cy.get("@filename").then((filename: any) => {
      let file = String(filename).split("/");
      cy.readFile(this.downloadPath + file[6].replace(":", "_"));
    });
  }

  assertFirstConfirmationEnable() {
    cy.xpath(this.xpathFirstItemConfirmButton).should("be.enabled");
  }

  assertShipmentCancelationEnable() {
    cy.xpath(this.xpathCancelButton).should("be.enabled");
  }

  assertShipmentSubmitDisable() {
    cy.xpath(this.xpathSubmitButton).should("be.disabled");
  }

  assertAllItemsConfirmationDisable() {
    cy.xpath(this.xpathAllItemsConfirmButton).should("be.disabled");
  }

  assertAllItemsConfirmationEnable() {
    cy.xpath(this.xpathAllItemsConfirmButton).should("be.enabled");
  }

  assertSubtractButtonEnable() {
    cy.xpath(this.xpathFisrtSubtractItemButton).should("be.enabled");
  }

  assertSubtractButtonDisable() {
    cy.xpath(this.xpathFisrtSubtractItemButton).should("be.disabled");
  }

  assertAddButtonEnable() {
    cy.xpath(this.xpathFirstAddItemButton).should("be.enabled");
  }

  assertAddButtonDisable() {
    cy.xpath(this.xpathFirstAddItemButton).should("be.disabled");
  }

  assertFirstTotalOrder(value: string) {
    cy.get("@firstOrderAmount").then((firstOrderAmount: any) => {
      let temp = String(firstOrderAmount).split(" ");
      switch (value) {
        case "amount":
          cy.get(this.firstCurrentItemAmount).should("have.value", temp[0]);
          break;
        case "UOM":
          cy.get(this.firstCurrentUOM).should("have.text", temp[1]);
          break;
      }
    });
  }

  assertFirstDiscrepancyAmount() {
    cy.get("@firstOrderAmount").then((firstOrderAmount: any) => {
      let temp = String(firstOrderAmount).split(" ");
      cy.get("@firstCurrentItemAmount").then((firstCurrentItemAmount: any) => {
        let amount = parseInt(temp[0]) - parseInt(firstCurrentItemAmount);
        let total = amount + " " + temp[1];
        cy.xpath(this.xpathFirstDiscrepancyAmount).should("have.text", total);
      });
    });
  }

  assertFirstDiscrepancyReason(reason: string) {
    cy.xpath(this.xpathFirstDefaultDiscrepancyReason).should(
      "have.text",
      reason
    );
  }

  assertFirstAddOtherUOMEnable() {
    cy.xpath(this.xpathFirstAddOtherUOM).should("be.enabled");
  }

  assertDownloadTravelDocumentEnable() {
    cy.xpath(this.xpathTravelDocumentDownloadButton).should("be.enabled");
  }

  assertUploadTravelDocumentEnable() {
    cy.xpath(this.xpathTravelDocumentUploadButton).should("be.enabled");
  }

  assertIsPartialDisable() {
    cy.get(this.firstIsPartial).should("be.disabled");
  }

  assertViewExpiryDate() {
    cy.xpath(this.xpathViewExpiryDateButton).should("be.enabled");
  }

  assertChangeToEdit(value: string) {
    cy.xpath(this.xpathFirstItemConfirmButton).should("have.text", value);
  }

  assertItemAmountDisable() {
    cy.get(this.firstCurrentItemAmount).should("be.disabled");
  }

  assertPDFDownloadSucceed() {
    cy.wait("@downloadPDFAPI")
      .its("response.statusCode")
      .then((statusCode: any) => {
        expect(statusCode).is.eq(200);
      });
  }
}
