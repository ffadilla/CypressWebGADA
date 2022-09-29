import OutboundPage from "./outboundPage";
import { generateDateTime } from "../common/utils";

export default class OutboundRequestListPage extends OutboundPage {
  requestListpath = "inventory/outbound/request/list";
  searchInputBox =
    'input[placeholder="No. permintaan barang atau nama produk..."]';
  //xpath start here
  xpathFirstRequestId = "//table/tbody/tr[1]/td[2]/a/div[1]";
  xpathListParent = "//div/div[3]/div[2]/div/div/div[4]";
  xpathNotFound = '//div[text()="Pencarian Tidak Ditemukan"]';
  xpathNotFoundMsg = "Pencarian Tidak Ditemukan";
  xpathReqList = "//table/tbody";
  xpathCounterList = '//span[contains(@class, "MuiTypography-bodyRegular")]';
  xpathCounterStatusIncomplete =
    '//div[contains(text(), "Belum Selesai")]/following-sibling::div[1]';
  xpathCounterStatusInProgress =
    '//div[contains(text(), "Sedang Diproses")]/following-sibling::div[1]';
  xpathCounterStatusComplete =
    '//div[contains(text(), "Sudah Selesai")]/following-sibling::div[1]';
  xpathCounterStatusCanceled =
    '//div[contains(text(), "Dibatalkan")]/following-sibling::div[1]';
  xpathPaginationBox = '//div[contains(@class, "MuiSelect-select")]';
  xpathFirstOutboundId = "//table/tbody/tr[1]/td[1]/div[1]";
  xpathFirstRecipientName = "//table/tbody/tr[1]/td[3]/div";
  xpathFirstDeliveryMethod = "//table/tbody/tr[1]/td[4]/div";
  xpathFirstRequestStatus = "//table/tbody/tr[1]/td[5]/span/span[2]";
  xpathFirstDeliveryDate = "//table/tbody/tr[1]/td[2]/a/div[2]/span";
  //variables start here
  todayDate = generateDateTime(0, "YYYY-MM-DD");
  yesterdayDate = generateDateTime(-1, "YYYY-MM-DD");
  dateOnly = generateDateTime(0, "DD");
  todayDF1 = generateDateTime(0, "D MMM YYYY");
  todayDF2 = generateDateTime(0, "DD MMM YYYY");
  yesterdayDF1 = generateDateTime(-1, "D MMM YYYY");
  yesterdayDF2 = generateDateTime(-1, "DD MMM YYYY");

  searchRequest() {
    cy.xpath(this.xpathFirstRequestId)
      .invoke("text")
      .then(($text) => {
        cy.get(this.searchInputBox)
          .click()
          .type($text + "{enter}");
        let modVal = $text.replace("/", "%2F");
        cy.location("search").should("include", "&search=" + modVal);
      });
  }

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
    cy.url().should("include", "inventory/outbound/request/detail");
  }

  assertDeliveryDate(value: string) {
    cy.wait(500);
    switch (value) {
      case "today":
        let dateValToday = this.todayDate.split("-");
        if (dateValToday[2].slice(0, 1) !== "0") {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should("contain.text", this.todayDF2);
            });
        } else {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should("contain.text", this.todayDF1);
            });
        }
        break;
      case "yesterday":
        let dateValYesterday = this.yesterdayDate.split("-");
        if (dateValYesterday[2].slice(0, 1) !== "0") {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should("contain.text", this.yesterdayDF2);
            });
        } else {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should("contain.text", this.yesterdayDF1);
            });
        }
        break;
      default:
        let dateVal = parseInt(value);
        let todayDateVal = parseInt(this.dateOnly);
        let targetDate = todayDateVal - dateVal;
        if (dateVal < 10) {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should(
                      "contain.text",
                      generateDateTime(-targetDate, "D MMM YYYY")
                    );
            });
        } else {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div < 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should(
                      "contain.text",
                      generateDateTime(-targetDate, "DD MMM YYYY")
                    );
            });
        }
    }
  }

  assertSearchResult() {
    cy.get(this.searchInputBox)
      .invoke("val")
      .then(($text) => {
        cy.xpath(this.xpathReqList).should("contain.text", $text);
      });
  }

  assertRequestDefaultList() {
    cy.xpath(this.xpathReqList).should("be.visible");
  }

  assertSearchResultWithArg(value: string) {
    cy.xpath(this.xpathReqList).should("contain.text", value);
  }

  assertResultStatus(value: string) {
    cy.xpath(this.xpathFirstRequestStatus).should("contain.text", value);
  }

  assertTotalData() {
    let counterIncomplete: number;
    let counterInProgress: number;
    let counterComplete: number;
    let counterCanceled: number;
    cy.xpath(this.xpathCounterStatusIncomplete)
      .invoke("text")
      .then(($counter) => {
        counterIncomplete = parseInt($counter);
      });
    cy.xpath(this.xpathCounterStatusInProgress)
      .invoke("text")
      .then(($counter) => {
        counterInProgress = parseInt($counter);
      });
    cy.xpath(this.xpathCounterStatusComplete)
      .invoke("text")
      .then(($counter) => {
        counterComplete = parseInt($counter);
      });
    cy.xpath(this.xpathCounterStatusCanceled)
      .invoke("text")
      .then(($counter) => {
        counterCanceled = parseInt($counter);
      });
    cy.xpath(this.xpathCounterList)
      .invoke("text")
      .then(($counter) => {
        let counterFooter = $counter.split(" ");
        let totalCount =
          counterIncomplete +
          counterInProgress +
          counterComplete +
          counterCanceled;
        expect(parseInt(counterFooter[3])).to.eq(totalCount);
      });
  }

  assertTotalDataPerPage() {
    cy.xpath(this.xpathPaginationBox)
      .invoke("text")
      .then(($page) => {
        cy.xpath(this.xpathReqList)
          .find("tr")
          .its("length")
          .should("eq", parseInt($page));
      });
  }

  assertDelivMethodWithArg(value: string) {
    cy.xpath(this.xpathReqList).should("contain.text", value);
  }
}
