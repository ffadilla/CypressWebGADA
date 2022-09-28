import { reformatDate } from "../common/utils";
import BasePage from "./basePage";

export default class OutboundRequestDetailPage extends BasePage {
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

  clickBackToRequestList() {
    cy.xpath(this.xpathBackButtonOnDetail).click();
    cy.url().should("include", "inventory/outbound/request/list");
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
