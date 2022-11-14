import OutboundPage from "./outboundPage";
import { generateDateTime } from "../common/utils";

export default class OutboundRequestListPage extends OutboundPage {
  path = "inventory/outbound/request/list";

  //XPaths start here
  xpathOutboundRequestList = "//table/tbody";
  xpathCurrentRequestId =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[1]";
  xpathCurrentOutboundId =
    this.xpathOutboundRequestList + "/tr[1]/td[1]/div[1]";
  xpathCurrentRecipientName =
    this.xpathOutboundRequestList + "/tr[1]/td[3]/div";
  xpathCurrentDeliveryMethod =
    this.xpathOutboundRequestList + "/tr[1]/td[4]/div";
  xpathCurrentRequestStatus =
    this.xpathOutboundRequestList + "/tr[1]/td[5]/span/span[2]";
  xpathCurrentDeliveryDateDefault =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[2]/span[2]";
  xpathCurrentDeliveryDate =
    this.xpathOutboundRequestList + "/tr[1]/td[2]/a/div[2]/span";

  xpathAddOutboundRequestButton = "//div/div[2]/span/button";

  xpathAddOutboundRequestOptions = "//html/body/div[5]/div[3]/ul";
  xpathNewOutboundRequestOpt = this.xpathAddOutboundRequestOptions + "/li[1]";
  xpathExistingOutboundRequestOpt =
    this.xpathAddOutboundRequestOptions + "/li[2]";

  searchRecentlySubmittedOutbound() {
    cy.get("@getRequestIdOnDetail").then((getRequestIdOnDetail: any) => {
      cy.get(this.searchInputBox)
        .click()
        .type(getRequestIdOnDetail + "{enter}");
    });
  }

  waitListToRender() {
    cy.get("@response").then((resp: any) => {
      expect(resp.statusCode).to.equal(200);
    });
  }

  getCurrentRequestId() {
    cy.xpath(this.xpathCurrentRequestId).invoke("text").as("requestId");
  }

  getCurrentOutboundId() {
    cy.xpath(this.xpathCurrentOutboundId).invoke("text").as("outboundId");
  }

  getCurrentRecipientName() {
    cy.xpath(this.xpathCurrentRecipientName).invoke("text").as("recipientName");
  }

  getCurrentDeliveryMethod() {
    cy.xpath(this.xpathCurrentDeliveryMethod)
      .invoke("text")
      .as("deliveryMethod");
  }

  getCurrentRequestStatus() {
    cy.xpath(this.xpathCurrentRequestStatus).invoke("text").as("requestStatus");
  }

  getCurrentDeliveryDate() {
    cy.xpath(this.xpathCurrentDeliveryDate).invoke("text").as("deliveryDate");
  }

  getCurrentTotalDataOnList() {
    cy.xpath(this.xpathOutboundRequestList)
      .should("be.visible")
      .find("tr")
      .its("length")
      .as("currentTotalDataOnList");
  }

  getCurrentDataAmountOnPagination() {
    cy.xpath(this.xpathOutboundDataCounter)
      .invoke("text")
      .as("currentDataAmountOnPagination");
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
    cy.xpath(this.xpathCurrentOutboundId).click();
  }

  clickAddOutboundRequest() {
    cy.xpath(this.xpathAddOutboundRequestButton).click();
  }

  clickCreateNewOutbound() {
    cy.xpath(this.xpathNewOutboundRequestOpt).click();
  }

  assertOutboundListByDate(date: string) {
    cy.get("@response").then((resp: any) => {
      switch (date) {
        case "today":
          if (this.dateOnly.slice(0, 1) !== "0") {
            resp.body.total_data !== 0
              ? cy
                  .xpath(this.xpathCurrentDeliveryDate)
                  .should("contain.text", this.todayDF2)
              : cy
                  .xpath(this.xpathNotFound)
                  .should("contain.text", this.xpathNotFoundMsg);
          } else {
            resp.body.total_data !== 0
              ? cy
                  .xpath(this.xpathCurrentDeliveryDate)
                  .should("contain.text", this.todayDF1)
              : cy
                  .xpath(this.xpathNotFound)
                  .should("contain.text", this.xpathNotFoundMsg);
          }
          break;
        default:
          let temp = parseInt(this.dateOnly) - parseInt(date);
          if (parseInt(date) < 10) {
            resp.body.total_data !== 0
              ? cy
                  .xpath(this.xpathCurrentDeliveryDate)
                  .should("contain.text", generateDateTime(-temp, "D MMM YYYY"))
              : cy
                  .xpath(this.xpathNotFound)
                  .should("contain.text", this.xpathNotFoundMsg);
          } else {
            resp.body.total_data !== 0
              ? cy
                  .xpath(this.xpathCurrentDeliveryDate)
                  .should(
                    "contain.text",
                    generateDateTime(-temp, "DD MMM YYYY")
                  )
              : cy
                  .xpath(this.xpathNotFound)
                  .should("contain.text", this.xpathNotFoundMsg);
          }
      }
    });
  }

  assertTotalOutboundRequest() {
    cy.get("@currentDataAmountOnPagination").then((totalDataOnPage: any) => {
      cy.get("@response").then((resp: any) => {
        expect(resp.body.total_data).to.equal(
          parseInt(totalDataOnPage.slice(16))
        );
      });
    });
  }

  assertInOutboundListPage() {
    cy.url().should("include", this.path);
  }

  assertOutboundListDefault() {
    cy.get("@outboundId").then((outboundIdOnDetail: any) => {
      cy.xpath(this.xpathOutboundRequestList).should(
        "contain.text",
        outboundIdOnDetail
      );
    });
  }

  assertOutboundListDefaultByDate() {
    cy.get("@deliveryDate").then((deliveryDate: any) => {
      cy.xpath(this.xpathCurrentDeliveryDate).should("have.text", deliveryDate);
    });
  }

  assertOutboundListDefaultByMethod() {
    cy.get("@deliveryMethod").then((deliveryMethod: any) => {
      cy.xpath(this.xpathCurrentDeliveryMethod).should(
        "have.text",
        deliveryMethod
      );
    });
  }

  assertOutboundStatus(status: string) {
    cy.get("@requestStatus").should("eq", status);
  }

  assertTotalOutboundNextPage() {
    cy.get("@currentDataAmountOnPagination").then(
      (currentDataAmountOnPagination: any) => {
        let data = currentDataAmountOnPagination.split(" ");
        let temp = data[1].split("-");
        cy.get("@currentTotalDataOnList").then(
          (currentTotalDataOnList: any) => {
            let top = parseInt(temp[0]) + currentTotalDataOnList;
            let down = parseInt(temp[1]) + currentTotalDataOnList;
            let totalDataNextPage = String(top) + "-" + String(down);
            cy.xpath(this.xpathOutboundDataCounter).should(
              "include.text",
              totalDataNextPage
            );
          }
        );
      }
    );
  }

  assertTotalDataPerPage() {
    cy.get("@currentTotalData").then((currentTotalData: any) => {
      cy.get("@currentTotalDataOnList").should(
        "eq",
        parseInt(currentTotalData)
      );
    });
  }

  assertOutboundListByMethod(method: string) {
    cy.get("@deliveryMethod").should("eq", method);
  }

  assertAddOutboundButtonEnabled() {
    cy.xpath(this.xpathAddOutboundRequestButton).should("be.enabled");
  }
}
