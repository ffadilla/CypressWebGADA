import OutboundPage from "./outboundPage";

export default class ShipmentProcessListPage extends OutboundPage {
  path = "inventory/outbound/shipment/list";

  //XPaths start here
  xpathShipmentProcessList = "//div[3]/div[2]/div/div/div[2]";
  xpathFirstShipmentId = "//div[@id='panel0a-header']//a/span";
  xpathAddShipmentProcessButton = "//div/div[2]/span/button";

  firsthipmentCointainer =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr[1]";
  xpathFirstOutboundType = this.firsthipmentCointainer + "/td[1]/div[2]/span";
  xpathFirstOutboundId = this.firsthipmentCointainer + "/td[1]/div[1]/div";
  xpathFirstRequestId = this.firsthipmentCointainer + "/td[2]/div[1]";
  xpathFirstDeliveryDate = this.firsthipmentCointainer + "/td[2]/div[2]/span";
  xpathFirstRecipientName = this.firsthipmentCointainer + "/td[3]/div";
  xpathFirstDeliveryMethod = this.firsthipmentCointainer + "/td[4]/div";

  shipmentHeader = "//div[@id='panel0a-header']/div[1]/div/div[2]";
  xpathFirstRequestDate = this.shipmentHeader + "/span[1]";
  xpathFirstShipmentStatus = this.shipmentHeader + "/span[3]";
  xpathFirstTotalOutboundRequest = this.shipmentHeader + "/span[2]";

  /**
   * this is for the next PR
   * searchRecentlyCompletedShipmentProcess() {
    cy.get("@newOutboundId").then((newOutboundId: any) => {
      cy.get(this.searchInputBox)
        .click()
        .type(newOutboundId + "{enter}");
      cy.location("search").should(
        "include",
        "&search=" + newOutboundId.replace("/", "%2F")
      );
    });
  }

  searchRecentlySubmittedOutboundId() {
    cy.get("@outboundIdOnDetail").then((outboundIdOnDetail: any) => {
      cy.get(this.searchInputBox)
        .click()
        .type(outboundIdOnDetail + "{enter}");
      cy.location("search").should(
        "include",
        "&search=" + outboundIdOnDetail.replace("/", "%2F")
      );
    });
  }
   */

  waitListToRender() {
    cy.get("@response").then((resp: any) => {
      expect(resp.statusCode).to.equal(200);
    });
  }

  clickExpandCurrentShipment() {
    cy.get(this.accordionButton).eq(0).click();
  }

  clickCurrentShipmentProcess() {
    // this.getCurrentOutboundId();
    // this.getCurrentRequestId();
    // this.getCurrentRecipientName();
    // this.getCurrentDeliveryMethod();
    // this.getCurrentDeliveryDate();
    cy.xpath(this.xpathFirstShipmentId).click();
  }

  clickOutboundShipment() {
    cy.xpath(this.xpathAddShipmentProcessButton).click();
  }

  getCurrentShipmentId() {
    cy.xpath(this.xpathFirstShipmentId).invoke("text").as("shipmentId");
  }

  getCurrentOutboundType() {
    cy.xpath(this.xpathFirstOutboundType).invoke("text").as("outboundType");
  }

  getCurrentDeliveryDate() {
    cy.get("@listDate").then((listDate: any) => {
      if (listDate !== this.xpathNotFoundMsg) {
        cy.xpath(this.xpathFirstDeliveryDate).invoke("text").as("deliveryDate");
      }
    });
  }

  getDefaultDeliveryDate() {
    cy.xpath(this.xpathFirstDeliveryDate).invoke("text").as("deliveryDate");
  }

  getCurrentRecipientName() {
    cy.xpath(this.xpathFirstRecipientName).invoke("text").as("recipientName");
  }

  getCurrentDeliveryMethod() {
    cy.xpath(this.xpathFirstDeliveryMethod).invoke("text").as("deliveryMethod");
  }

  getCurrentOutboundId() {
    cy.xpath(this.xpathFirstOutboundId).invoke("text").as("outboundId");
  }

  getCurrentRequestId() {
    cy.xpath(this.xpathFirstRequestId).invoke("text").as("requestId");
  }

  getCurrentRequestDate() {
    cy.xpath(this.xpathFirstRequestDate).invoke("text").as("requestDate");
  }

  getCurrentShipmentStatus() {
    cy.xpath(this.xpathFirstShipmentStatus).invoke("text").as("shipmentStatus");
  }

  getCurrentTotalOutboundRequest() {
    cy.xpath(this.xpathFirstTotalOutboundRequest)
      .invoke("text")
      .as("totalOutboundRequest");
  }

  getCurrentData() {
    this.getCurrentShipmentId();
    this.getCurrentOutboundId();
    this.getCurrentRequestId();
    this.getCurrentRequestDate();
    this.getDefaultDeliveryDate();
    this.getCurrentDeliveryMethod();
    this.getCurrentOutboundType();
    this.getCurrentRecipientName();
    this.getCurrentShipmentStatus();
    this.getCurrentTotalOutboundRequest();
  }

  getCurrentTotalDataOnList() {
    cy.xpath(this.xpathShipmentProcessList)
      .should("be.visible")
      .find(">div")
      .its("length")
      .as("currentTotalDataOnList");
  }

  getShipmentDetailAPI() {
    cy.intercept("GET", "/outbound/shipments/*/detail/").as(
      "shipmentDetailAPI"
    );
  }

  assertShipmentListByDate(date: string) {
    this.assertListByDate(date, this.xpathFirstDeliveryDate);
  }

  assertShipmentListDefault() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathShipmentProcessList).should(
        "contain.text",
        outboundId
      );
    });
  }

  /**
   * this is for the next PR
   * assertShipmentListDefaultByDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      cy.xpath(this.xpathFirstDeliveryDate).should("have.text", deliveryDate);
    });
  }

  assertShipmentListDefaultByMethod() {
    this.getCurrentDeliveryMethod();
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathFirstDeliveryMethod).should(
        "have.text",
        deliveryMethod
      );
    });
  }
  assertShipmentSearchResultWithArg(shipmentId: string) {
    cy.xpath(this.xpathShipmentProcessList).should("contain.text", shipmentId);
  }
   */

  assertShipmentStatus(status: string) {
    this.getCurrentShipmentStatus();
    cy.get("@shipmentStatus").should("eq", status);
  }

  assertTotalDataPerPage() {
    this.getCurrentTotalDataPerPage();
    this.getCurrentTotalDataOnList();
    cy.get("@currentTotalDataOnList").then((currentTotalDataOnList: any) => {
      cy.get("@currentTotalData").should(
        "eq",
        (currentTotalDataOnList - 1).toString()
      );
    });
  }

  assertAddShipmentButtonEnabled() {
    cy.xpath(this.xpathAddShipmentProcessButton).should("be.enabled");
  }

  assertShipmentListByMethod(method: string) {
    this.getCurrentDeliveryMethod();
    cy.get("@deliveryMethod").should("eq", method);
  }

  assertInShipmentListPage() {
    cy.url().should("include", this.path);
  }
}
