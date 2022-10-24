import InboundBaseListPage from "./inboundBaseListPage";

export default class RequestListPage extends InboundBaseListPage {
  path = "/inventory/inbound/request/list";
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
  requestItemListBody = '//tbody[contains(@class, "MuiTableBody-root")]';
  requestItemSourceIDXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[1]/div[1]";
  requestItemSourceTypeXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[1]/div[2]";
  requestItemRequestIDXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[2]/a/div[1]";
  requestItemSupplierStoreXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[3]/div";
  requestItemDeliveryMethodXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[4]/div";
  requestItemDeliveryDateXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[2]/a/div[2]/span";
  requestItemStatusXPath =
    this.requestItemListBody + "/tr[{{index}}]/td[5]/span/span[2]";
  firstRequestItemSourceID = this.utils.replaceElementIndex(
    this.requestItemSourceIDXPath,
    1
  );
  firstRequestItemSourceType = this.utils.replaceElementIndex(
    this.requestItemSourceTypeXPath,
    1
  );
  firstRequestItemRequestID = this.utils.replaceElementIndex(
    this.requestItemRequestIDXPath,
    1
  );
  firstRequestItemTargetStore = this.utils.replaceElementIndex(
    this.requestItemSupplierStoreXPath,
    1
  );
  firstRequestItemDeliveryMethod = this.utils.replaceElementIndex(
    this.requestItemDeliveryMethodXPath,
    1
  );
  firstRequestItemDeliveryDate = this.utils.replaceElementIndex(
    this.requestItemDeliveryDateXPath,
    1
  );
  firstRequestItemStatus = this.utils.replaceElementIndex(
    this.requestItemStatusXPath,
    1
  );

  waitSearchRender() {
    cy.intercept("GET", "/inbound/requests/list/?*").as(
      "inboundRequestListAPI"
    );
    cy.wait("@inboundRequestListAPI").then((API) => {
      const responseBody = API.response?.body;
      cy.log(
        responseBody.total_data +
          " " +
          responseBody.total_page +
          " " +
          responseBody.page +
          " " +
          responseBody.results.length
      );
      if (responseBody.total_data === 0)
        cy.xpath(this.emptyResultText).should("be.visible");
      else cy.xpath(this.firstRequestItemStatus).should("be.visible");
    });
  }

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
    let element = "";

    switch (target) {
      case "source ID":
        element = this.requestItemSourceIDXPath;
        break;
      case "request ID":
        element = this.requestItemRequestIDXPath;
        break;
      case "supplier store":
        element = this.requestItemSupplierStoreXPath;
        break;
      case "status":
        element = this.requestItemStatusXPath;
        break;
      case "delivery method":
        element = this.requestItemDeliveryMethodXPath;
        break;
      case "delivery date":
        element = this.requestItemDeliveryDateXPath;
        value = this.utils.reformatDate(value, "YYYY-MM-DD", "D MMM YYYY");
        break;
    }

    cy.xpath(this.requestItemListBody).then(($list) => {
      for (let index = 1; index < $list.children().length; index++) {
        const requestItemAttribute = this.utils.replaceElementIndex(
          element,
          index
        );
        expect(cy.xpath(requestItemAttribute).should("contain", value));
      }
    });
  }
}
