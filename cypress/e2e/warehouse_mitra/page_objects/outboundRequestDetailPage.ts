import OutboundRequestListPage from "./outboundRequestListPage";
import { reformatDate } from "../common/utils";

export default class OutboundRequestDetailPage extends OutboundRequestListPage {
  requestDetailPath = "inventory/outbound/request/detail";

  //xpath start here
  xpathOutboundIdOnDetail = "//div/div[1]/span[1]";
  xpathRequestIdOnDetail = "//div/div[2]/span[2]";
  xpathOutboundRecipientOnDetail = "//div[1]/div[2]/div/div[1]/div[2]/div";
  xpathOutboundDeliveryMethodOnDetail = "//div[1]/div[2]/div/div[2]/div[2]/div";
  xpathOutboundStatusOnDetail = "//div/div[2]/span[3]";
  xpathOutboundDeliveryDateOnDetail = "//div[1]/div[2]/div/div[2]/div[1]/div";
  xpathBackButtonOnDetail = "//a[text()='Kembali']";
  xpathSendButtonOnDetail = "//button[text()='Kirim Barang']";

  clickFirstRequestDetail() {
    cy.xpath(this.xpathFirstOutboundId)
      .invoke("text")
      .then(($outboundId) => {
        cy.wrap($outboundId).as("outboundId");
      });
    cy.xpath(this.xpathFirstRequestId)
      .invoke("text")
      .then(($requestId) => {
        cy.wrap($requestId).as("requestId");
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
    cy.xpath(this.xpathFirstRequestStatus)
      .invoke("text")
      .then(($requestStatus) => {
        cy.wrap($requestStatus).as("requestStatus");
      });
    cy.xpath(this.xpathFirstDeliveryDate)
      .invoke("text")
      .then(($deliveryDate) => {
        cy.wrap($deliveryDate).as("deliveryDate");
      });
    cy.xpath(this.xpathFirstRequestId).click();
    cy.url().should("include", this.requestDetailPath);
  }

  clickBackToRequestList() {
    cy.xpath(this.xpathBackButtonOnDetail).click();
    cy.url().should("include", this.requestListpath);
  }

  clickSendRequest() {
    cy.xpath(this.xpathSendButtonOnDetail).click();
    cy.url().should("include", "inventory/outbound/shipment/detail");
  }

  assertFirstOutboundId() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathOutboundIdOnDetail).should("have.text", outboundId);
    });
  }

  assertFirstReqId() {
    cy.get("@requestId").then((requestId: any) => {
      cy.xpath(this.xpathRequestIdOnDetail).should("contain.text", requestId);
    });
  }

  assertFirstRecipientName() {
    cy.get("@recipientName").then((recipientName: any) => {
      cy.xpath(this.xpathOutboundRecipientOnDetail).should(
        "contain.text",
        recipientName
      );
    });
  }

  assertFirstDeliveryMethod() {
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathOutboundDeliveryMethodOnDetail).should(
        "contain.text",
        deliveryMethod
      );
    });
  }

  assertFirstRequestStatus() {
    cy.get("@requestStatus").then((requestStatus: any) => {
      cy.xpath(this.xpathOutboundStatusOnDetail).should(
        "contain.text",
        requestStatus
      );
    });
  }

  assertFirstShipmentDate() {
    cy.get("@deliveryDate").then((deliveryDate: object | any) => {
      let getDate = deliveryDate.slice(8);
      cy.xpath(this.xpathOutboundDeliveryDateOnDetail).should(
        "contain.text",
        reformatDate(getDate, "DD MMM YYYY", "YYYY-MM-DD")
      );
    });
  }
}
