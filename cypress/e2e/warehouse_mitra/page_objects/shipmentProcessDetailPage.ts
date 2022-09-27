import ShipmentProcessListPage from "./shipmentProcessListPage";

export default class ShipmentProcessDetailPage extends ShipmentProcessListPage {
  shipmentDetailPath = "inventory/outbound/shipment/detail";

  // xpath start here
  xpathShipmentIdOnDetail = "//div/div[3]/div[2]/div/div[1]/div[1]/div[1]/p";
  xpathShipmentDeliveryDateOnDetail = "//div/div[1]/div[2]/p[2]";
  xpathShipmentRecipientNameOnDetail = "//div/div[2]/div[1]/p[2]";
  xpathShipmentDeliveryMethodOnDetail = "//div[2]/div/div/div[2]/div[2]/p[2]";
  xpathOutboundRequestTypeOnDetail =
    "//div/div[1]/div[2]/div/div/div[1]/div[1]/p[2]";
  xpathOutboundIdOnDetail = "//div/div[1]/div[1]/div[1]/div/div/p[2]";
  xpathRequestDateOnDetail = "//div/div[1]/div[1]/div[1]/div/div/p[1]";
  xpathShipmentStatusOnDetail = "//div/div[1]/div[1]/div[1]/div/div/span";
  xpathTotalOutboundRequestContainer =
    "//div[@id='__next']/div/div[3]/div[2]/div/div[2]";
  xpathCancelShipmentButton = "//button[text()='Batalkan Pengiriman Barang']";
  xpathSubmitShipmentButton = "//button[text()='Submit']";
  xpathOutboundViewExpiryDateButton = "//button[text()='Lihat Expiry Date']";
  xpathFirstItemConfirmButton = "//table/tbody/tr/td[8]/button";
  xpathTravelDocUpload =
    "//div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[1]/div";
  xpathTravelDocUpload2 = "//div/div[3]/div[2]/div/div[1]/div[1]/div/div/input";
  xpathOutboundListDownloader = "//div/div[3]/div[2]/div/div[1]/div[1]/div[2]";
  xpathFirstItemSubtractButton =
    "//table/tbody/tr/td[3]/div/div[1]/div/div/div[1]/button[1]";
  xpathFirstItemAddButton =
    "//table/tbody/tr/td[3]/div/div[1]/div/div/div[1]/button[2]";
  xpathFirstItemCurrentTotal =
    "//table/tbody/tr/td[3]/div/div[1]/div/div/div[1]/div";
  xpathFirstItemTotal = "//table/tbody/tr/td[2]/div/p";
  xpathPartialShipmentChecklist = "//table/tbody/tr/td/div/label/span[1]";
  xpathAllItemsConfirmButton = "//button[text()='Konfirmasi Semua Barang']";
  xpathFirstItemDiscrepancyTotal = "//table/tbody/tr/td[5]";
  xpathFirstItemDiscrepancyNote = "//table/tbody/tr/td[6]";
  xpathPopUpConfirmButton = "//div/div[2]/button[2]";
  xpathSucceedNotificationSnackbar = "//div[@id='notistack-snackbar']";

  clickExpandShipmentId() {
    cy.xpath(this.xpathFirstAccordionButton).click();
  }

  clickDownloadOutboundList() {
    cy.xpath(this.xpathOutboundListDownloader).click();
  }

  clickFirstItemConfirmation() {
    cy.xpath(this.xpathFirstItemConfirmButton).click();
  }

  clickAllItemsConfirmation() {
    cy.xpath(this.xpathAllItemsConfirmButton).click();
  }

  clickConfirm() {
    cy.xpath(this.xpathPopUpConfirmButton).click();
  }

  clickSubmitShipmentProcess() {
    cy.xpath(this.xpathSubmitShipmentButton).click();
    cy.wait(500);
    cy.xpath(this.xpathPopUpConfirmButton).click();
    cy.xpath(this.xpathSucceedNotificationSnackbar).should("be.visible");
  }

  clickFirstShipmentDetail() {
    cy.xpath(this.xpathFirstShipmentId)
      .invoke("text")
      .then(($shipmentId) => {
        cy.wrap($shipmentId).as("shipmentId");
      });
    cy.xpath(this.xpathFirstOutboundType)
      .invoke("text")
      .then(($outboundType) => {
        cy.wrap($outboundType).as("outboundType");
      });
    cy.xpath(this.xpathFirstRequestDeliveryDate)
      .invoke("text")
      .then(($deliveryDate) => {
        cy.wrap($deliveryDate).as("deliveryDate");
      });
    cy.xpath(this.xpathFirstRecipientName)
      .invoke("text")
      .then(($recipientName) => {
        cy.wrap($recipientName).as("recipientName");
      });
    cy.xpath(this.xpathFirstDeliveryMethod)
      .invoke("text")
      .then(($deliveryMethod) => {
        cy.wrap($deliveryMethod).as("deliveryMethod");
      });
    cy.xpath(this.xpathFirstOutboundId)
      .invoke("text")
      .then(($outboundId) => {
        cy.wrap($outboundId).as("outboundId");
      });
    cy.xpath(this.xpathFirstRequestDate)
      .invoke("text")
      .then(($requestDate) => {
        cy.wrap($requestDate).as("requestDate");
      });
    cy.xpath(this.xpathFirstShipmentStatus)
      .invoke("text")
      .then(($shipmentStatus) => {
        cy.wrap($shipmentStatus).as("shipmentStatus");
      });
    cy.xpath(this.xpathFirstTotalOutboundRequest)
      .invoke("text")
      .then(($totalOutboundReq) => {
        cy.wrap($totalOutboundReq).as("totalOutboundReq");
      });
    cy.xpath(this.xpathFirstShipmentId).click();
  }

  attachTravelDoc() {
    // the file is still hardcoded and will be refactored later
    cy.xpath(this.xpathTravelDocUpload2).selectFile(
      "./cypress/downloads/a1b2-daftar.pdf",
      { force: true }
    );
  }

  assertSuccessSnackBar() {
    cy.xpath(this.xpathSucceedNotificationSnackbar).should("exist");
  }

  assertFirstShipmentId() {
    cy.get("@shipmentId").then((shipmentId: any) => {
      cy.xpath(this.xpathShipmentIdOnDetail).should("contain.text", shipmentId);
    });
  }

  assertFirstOutboundType() {
    cy.get("@outboundType").then((outboundType: any) => {
      let getType = outboundType.split("-");
      cy.xpath(this.xpathOutboundRequestTypeOnDetail).should(
        "contain.text",
        getType[0].slice(0, -1)
      );
    });
  }

  assertFirstShipmentDeliveryDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      let getDate = deliveryDate.slice(8);
      cy.xpath(this.xpathShipmentDeliveryDateOnDetail).should(
        "contain.text",
        getDate
      );
    });
  }

  assertFirstShipmentRecipientName() {
    cy.get("@recipientName").then((recipientName: any) => {
      cy.xpath(this.xpathShipmentRecipientNameOnDetail).should(
        "contain.text",
        recipientName
      );
    });
  }

  assertFirstShipmentDeliveryMethod() {
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathShipmentDeliveryMethodOnDetail).should(
        "contain.text",
        deliveryMethod
      );
    });
  }

  assertFirstShipmentOutboundId() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathOutboundIdOnDetail).should("contain.text", outboundId);
    });
  }

  assertFirstRequestDate() {
    cy.get("@requestDate").then((requestDate: any) => {
      cy.xpath(this.xpathRequestDateOnDetail).should(
        "contain.text",
        requestDate
      );
    });
  }

  assertFirstShipmentStatus() {
    cy.get("@shipmentStatus").then((shipmentStatus: any) => {
      cy.xpath(this.xpathShipmentStatusOnDetail).should(
        "contain.text",
        shipmentStatus
      );
    });
  }

  assertFirstTotalOutboundRequest() {
    cy.get("@totalOutboundReq").then((totalOutboundReq: any) => {
      let getTotal = totalOutboundReq.split(" ");
      // got to add 2 divs, because it is including the header and confirm div
      cy.xpath(this.xpathTotalOutboundRequestContainer)
        .find(">div")
        .its("length")
        .should("eq", parseInt(getTotal[0]) + 2);
    });
  }

  assertOutboundListFileExist() {
    // the file is still hardcoded and will be refactored later
    cy.readFile("./cypress/downloads/a1b2-daftar.pdf");
  }

  assertShipmentCancelationEnable() {
    cy.xpath(this.xpathCancelShipmentButton).should("be.enabled");
  }

  assertShipmentSubmitDisable() {
    cy.xpath(this.xpathSubmitShipmentButton).should("be.disabled");
  }
}
