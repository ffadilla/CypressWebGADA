import {
  generateDateTime,
  reformatDate,
  replaceElementIndex,
} from "../../common/utils";
import InboundBaseListPage from "../../component_objects/inboundBaseList";
import MainPage from "../mainPage";
import Pagination from "../../component_objects/pagination";
import { wmsType } from "../../../utils/gadaConfig";

export default class RequestListPage extends MainPage {
  baseList: InboundBaseListPage;
  pagination: Pagination;

  constructor(type: wmsType, searchbox: string) {
    super(type);
    this.baseList = new InboundBaseListPage(searchbox);
    this.pagination = new Pagination();
  }

  path = "/inventory/inbound/request/list";
  createNewRequestButtonOption = "Buat Barang Masuk Baru";
  requestItemListBodyXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  requestItemSourceIDXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[1]/div[1]";
  requestItemSourceTypeXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[1]/div[2]";
  requestItemRequestIDXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[2]/a/div[1]";
  requestItemSupplierStoreXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[3]/div";
  requestItemDeliveryMethodXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[4]/div";
  requestItemDeliveryDate = '[data-testid="inbound_list[index].delivery_date"]';
  requestItemReceiptID = '[data-testid="inbound_list[index].receipt_id"]';
  requestItemStatusXPath =
    this.requestItemListBodyXPath + "/tr[index]/td[5]/span/span[2]";
  requestItemLastUpdated =
    '[data-testid="inbound_list[index].last_updated_time"]';

  firstRequestItemSourceID = replaceElementIndex(
    this.requestItemSourceIDXPath,
    1
  );
  firstRequestItemSourceType = replaceElementIndex(
    this.requestItemSourceTypeXPath,
    1
  );
  firstRequestItemRequestID = replaceElementIndex(
    this.requestItemRequestIDXPath,
    1
  );
  firstRequestItemTargetStore = replaceElementIndex(
    this.requestItemSupplierStoreXPath,
    1
  );
  firstRequestItemDeliveryMethod = replaceElementIndex(
    this.requestItemDeliveryMethodXPath,
    1
  );
  firstRequestItemDeliveryDate = replaceElementIndex(
    this.requestItemDeliveryDate,
    0
  );
  firstRequestItemStatus = replaceElementIndex(this.requestItemStatusXPath, 1);

  waitSearchRender() {
    cy.wait(500);
    /**
     * This lines still return inconsitent behavior
     * 
    interceptAPI("GET", "/inbound/requests/list/?*", "inboundRequestListAPI");
    cy.wait("@inboundRequestListAPI").then((API) => {
      const responseBody = API.response?.body;
      if (responseBody.total_data === 0)
        cy.get(this.notFoundRequestText).should("be.visible");
      else cy.xpath(this.firstRequestItemStatus).should("be.visible");
    });
     *
     */
  }

  clickCreateNewRequest() {
    cy.wait(500); //TODO: Request implement test-id on FE
    cy.get(this.baseList.inboundListButtons)
      .contains("Permintaan Barang Masuk")
      .click();
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
    cy.get(this.firstRequestItemDeliveryDate)
      .invoke("text")
      .as("requestListDeliveryDate");
    cy.xpath(this.firstRequestItemStatus)
      .invoke("text")
      .as("requestListStatus");

    cy.xpath(this.firstRequestItemSourceID).click();
  }

  assertCreatedRequestItem() {
    let requestPrefix = "REQIN/" + generateDateTime(0, "MMYY") + "000";
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
      let formattedDeliveryDate = reformatDate(
        deliveryDate.toString(),
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
      expect(
        cy
          .get(this.firstRequestItemDeliveryDate)
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
        element = this.requestItemDeliveryDate;
        value = reformatDate(value, "YYYY-MM-DD", "D MMM YYYY");
        break;
    }

    cy.xpath(this.requestItemListBodyXPath).then(($list) => {
      for (let index = 1; index < $list.children().length; index++) {
        const requestItemAttribute = replaceElementIndex(element, index);
        if (target === "delivery date")
          expect(cy.get(requestItemAttribute).should("contain", value));
        else expect(cy.xpath(requestItemAttribute).should("contain", value));
      }
    });
  }
}
