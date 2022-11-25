import OutboundPage from "./outboundPage";

export default class OutboundRequestListPage extends OutboundPage {
  path = "inventory/outbound/request/list";

  //XPaths start here
  xpathOutboundRequestList = "//table/tbody";
  xpathFirstRequestId = this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[1]";
  xpathFirstOutboundId = this.xpathOutboundRequestList + "/tr[1]/td[1]/div[1]";
  xpathFirstRecipientName = this.xpathOutboundRequestList + "/tr[1]/td[3]/div";
  xpathFirstDeliveryMethod = this.xpathOutboundRequestList + "/tr[1]/td[4]/div";
  xpathFirstRequestStatus =
    this.xpathOutboundRequestList + "/tr[1]/td[5]/span/span[2]";
  xpathFirstDeliveryDateDefault =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[2]/span[2]";
  xpathFirstDeliveryDate1 =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[2]/span[1]";
  xpathFirstDeliveryDate2 =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[2]/span[2]";

  xpathAddOutboundRequestButton = "//div/div[2]/span/button";

  xpathAddOutboundRequestOptions = "//html/body/div[5]/div[3]/ul";
  xpathNewOutboundRequestOpt = this.xpathAddOutboundRequestOptions + "/li[1]";
  xpathExistingOutboundRequestOpt =
    this.xpathAddOutboundRequestOptions + "/li[2]";

  waitListToRender() {
    cy.get("@response").then((resp: any) => {
      expect(resp.statusCode).to.equal(200);
    });
  }

  getCurrentRequestId() {
    cy.xpath(this.xpathFirstRequestId).invoke("text").as("requestId");
  }

  getCurrentOutboundId() {
    cy.xpath(this.xpathFirstOutboundId).invoke("text").as("outboundId");
  }

  getCurrentRecipientName() {
    cy.xpath(this.xpathFirstRecipientName).invoke("text").as("recipientName");
  }

  getCurrentDeliveryMethod() {
    cy.xpath(this.xpathFirstDeliveryMethod).invoke("text").as("deliveryMethod");
  }

  getCurrentRequestStatus() {
    cy.xpath(this.xpathFirstRequestStatus).invoke("text").as("requestStatus");
  }

  getCurrentDeliveryDate() {
    cy.get("@listDate").then((listDate: any) => {
      if (listDate !== this.xpathNotFoundMsg) {
        cy.xpath(this.xpathFirstDeliveryDate1)
          .invoke("text")
          .then(($text: string) => {
            let temp = $text.slice(0, 3);
            temp === "Dik"
              ? cy.wrap($text).as("deliveryDate")
              : cy
                  .xpath(this.xpathFirstDeliveryDate2)
                  .invoke("text")
                  .as("deliveryDate");
          });
      }
    });
  }

  getDefaultDeliveryDate() {
    cy.xpath(this.xpathFirstDeliveryDate1)
      .invoke("text")
      .then(($text: string) => {
        let temp = $text.slice(0, 3);
        temp === "Dik"
          ? cy.wrap($text).as("deliveryDate")
          : cy
              .xpath(this.xpathFirstDeliveryDate2)
              .invoke("text")
              .as("deliveryDate");
      });
  }

  getCurrentData() {
    this.getCurrentOutboundId();
    this.getCurrentRequestId();
    this.getCurrentRecipientName();
    this.getCurrentDeliveryMethod();
    this.getDefaultDeliveryDate();
  }

  getCurrentTotalDataOnList() {
    cy.xpath(this.xpathOutboundRequestList)
      .should("be.visible")
      .find("tr")
      .its("length")
      .as("currentTotalDataOnList");
  }

  getOutboundDetailAPI() {
    cy.intercept("GET", "/outbound/requests/*/detail/").as("outboundDetailAPI");
  }

  getProductUnitAccessListAPI() {
    cy.intercept("GET", "/product/product-unit-access-list/").as(
      "productUnitAccessListAPI"
    );
  }

  clickCurrentOutboundRequest() {
    cy.xpath(this.xpathFirstOutboundId).click();
  }

  clickAddOutboundRequest() {
    cy.xpath(this.xpathAddOutboundRequestButton).click();
  }

  clickCreateNewOutbound() {
    cy.xpath(this.xpathNewOutboundRequestOpt).click();
  }

  assertOutboundListByDate(date: string) {
    this.assertListByDate(date, this.xpathFirstDeliveryDate1);
  }

  assertUserIsInTheOutboundListPage() {
    cy.url().should("include", this.path);
  }

  assertOutboundListDefault() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathOutboundRequestList).should(
        "contain.text",
        outboundId
      );
    });
  }

  /**
   * this is for the next PR
   * assertOutboundListDefaultByDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      cy.xpath(this.xpathFirstDeliveryDate).should("have.text", deliveryDate);
    });
  }

  assertOutboundListDefaultByMethod() {
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathFirstDeliveryMethod).should(
        "have.text",
        deliveryMethod
      );
    });
  }
   */

  assertOutboundStatus(status: string) {
    this.getCurrentRequestStatus();
    cy.get("@requestStatus").should("eq", status);
  }

  assertTotalDataPerPage() {
    this.getCurrentTotalDataPerPage();
    this.getCurrentTotalDataOnList();
    cy.get("@currentTotalData").then((currentTotalData: any) => {
      cy.get("@currentTotalDataOnList").should(
        "eq",
        parseInt(currentTotalData)
      );
    });
  }

  assertOutboundListByMethod(method: string) {
    this.getCurrentDeliveryMethod();
    cy.get("@deliveryMethod").should("eq", method);
  }

  assertAddOutboundButtonEnabled() {
    cy.xpath(this.xpathAddOutboundRequestButton).should("be.enabled");
  }
}
