import MainPage from "../../warehouse_core/page_objects/mainPage";

export default class OutboundRequestDetailPage extends MainPage {
  path = "inventory/outbound/request/detail";

  //XPaths start here
  xpathOutboundIdOnDetail = "//div/div[1]/div[1]/div/div[1]/span[1]";
  xpathRequestIdOnDetail = "//div/div[2]/span[2]";
  xpathCreateDateOnDetail = "//div/div[1]/div[1]/div/div[2]/span[1]";
  xpathOutboundTypeOnDetail =
    "//div/div[1]/div[2]/div/div[1]/div[1]/div/div[2]";
  xpathRecipientOnDetail = "//div[1]/div[2]/div/div[1]/div[2]/div/div[2]";
  xpathShipperOnDetail = "//div[1]/div[2]/div/div[1]/div[3]/div/div[2]";
  xpathShipperWarehouseLocation =
    "//div[1]/div[2]/div/div[2]/div[3]/div/div[2]";
  xpathDeliveryMethodOnDetail = "//div[1]/div[2]/div/div[2]/div[2]/div/div[2]";
  xpathStatusOnDetail = "//div/div[2]/span[3]";
  xpathDeliveryDateOnDetail = "//div[1]/div[2]/div/div[2]/div[1]/div/div[2]";
  xpathProductList = "//table/body";
  xpathFirstProductName = "//table/tbody/tr/td[1]/div";
  xpathFirstTotalItem = "//table/tbody/tr/td[2]/div/p";
  xpathBackButtonOnDetail = "//a[text()='Kembali']";
  xpathSendButtonOnDetail = "//button[text()='Kirim Barang']";
  xpathUOMTooltip = "//div[@role='tooltip']/div/div";

  clickBack() {
    cy.xpath(this.xpathBackButtonOnDetail).click();
  }

  clickSubmitOutbound() {
    cy.xpath(this.xpathSendButtonOnDetail).click();
    cy.url().should("include", "inventory/outbound/shipment/detail");
  }

  getShipmentCreateAPI() {
    cy.intercept("POST", "/outbound/shipments/create/").as("shipmentCreateAPI");
  }

  getDetailPageAPI() {
    cy.intercept("GET", "/outbound/shipments/*/detail/").as("detailPageAPI");
  }

  waitShipmentCreationToSucceed() {
    cy.wait("@shipmentCreateAPI").its("response.statusCode").should("eq", 200);
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

  getCreateDateOnDetail() {
    cy.xpath(this.xpathCreateDateOnDetail)
      .invoke("text")
      .as("createDateOnDetail");
  }

  getStatusOnDetail() {
    cy.xpath(this.xpathStatusOnDetail).invoke("text").as("statusOnDetail");
  }

  getOutboundTypeOnDetail() {
    cy.xpath(this.xpathOutboundTypeOnDetail)
      .invoke("text")
      .as("outboundTypeOnDetail");
  }

  getRecipientOnDetail() {
    cy.xpath(this.xpathRecipientOnDetail)
      .invoke("text")
      .as("recipientOnDetail");
  }

  getShipperOnDetail() {
    cy.xpath(this.xpathShipperOnDetail).invoke("text").as("shipperOnDetail");
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
    cy.xpath(this.xpathShipperWarehouseLocation)
      .invoke("text")
      .as("shipperWarehouseLocationOnDetail");
  }

  getFirstProductName() {
    cy.xpath(this.xpathFirstProductName).invoke("text").as("firstProductName");
  }

  getFirstTotalItem() {
    cy.xpath(this.xpathFirstTotalItem).invoke("text").as("firstTotalItem");
  }

  assertInOutboundDetailPage() {
    cy.url().should("include", this.path);
  }

  assertCurrentOutboundId() {
    cy.get("@outboundId").then((outboundId: any) => {
      cy.xpath(this.xpathOutboundIdOnDetail).should("have.text", outboundId);
    });
  }

  assertCurrentRequestId() {
    cy.get("@requestId").then((requestId: any) => {
      cy.xpath(this.xpathRequestIdOnDetail).should("contain.text", requestId);
    });
  }

  assertCurrentRecipientName() {
    cy.get("@recipientName").then((recipientName: any) => {
      cy.xpath(this.xpathRecipientOnDetail).should("have.text", recipientName);
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

  assertCurrentRequestStatus() {
    cy.get("@requestStatus").then((requestStatus: any) => {
      cy.xpath(this.xpathStatusOnDetail).should("have.text", requestStatus);
    });
  }

  assertCurrentShipmentDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      let getDate = deliveryDate.slice(8);
      cy.xpath(this.xpathDeliveryDateOnDetail).should("have.text", getDate);
    });
  }

  assertSendOutboundButtonEnable() {
    cy.xpath(this.xpathSendButtonOnDetail).should("be.enabled");
  }

  assertBackButtonEnable() {
    cy.xpath(this.xpathBackButtonOnDetail).should("be.visible");
  }
}
