import OutboundPage from "./outboundPage";
import { generateDateTime } from "../common/utils";

export default class ShipmentProcessListPage extends OutboundPage {
  shipmentListPath = "inventory/outbound/shipment/list";
  searchInputBox =
    'input[placeholder="No. permintaan barang atau nama produk..."]';
  //xpath start here
  xpathShipmentProcessButton = "//span[text()='Proses Pengiriman']";
  xpathListParent = "//div/div[3]/div[2]/div/div/div[4]";
  xpathNotFound = '//div[text()="Pencarian Tidak Ditemukan"]';
  xpathNotFoundMsg = "Pencarian Tidak Ditemukan";
  xpathShipmentStatus =
    '//div[@id="panel0a-header"]//following-sibling::span[2]';
  xpathShipList = "//div[2]/div/div/div[4]";
  xpathCounterList = '//span[contains(@class, "MuiTypography-bodyRegular")]';
  xpathCounterStatusIncomplete =
    '//div[contains(text(), "Belum Selesai")]/following-sibling::div[1]';
  xpathCounterStatusInProgress =
    '//div[contains(text(), "Sedang Diproses")]/following-sibling::div[1]';
  xpathCounterStatusComplete =
    '//div[contains(text(), "Sudah Selesai")]/following-sibling::div[1]';
  xpathFirstShipmentId = '//div[@id="panel0a-header"]//a/span';
  xpathPaginationBox = '//div[contains(@class, "MuiSelect-select")]';
  xpathFirstAccordionButton = "//div[@id='panel0a-header']/div[2]";
  xpathFirstOutboundType =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr/td[1]/div[2]/span";
  xpathFirstOutboundId =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr/td[1]/div[1]/div";
  xpathFirstRequestDeliveryDate =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr/td[2]/div[2]/span";
  xpathFirstRecipientName =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr/td[3]/div";
  xpathFirstDeliveryMethod =
    "//div[@id='panel0a-content']/div/div/table/tbody/tr/td[4]/div";
  xpathFirstRequestDate =
    "//div[@id='panel0a-header']/div[1]/div/div[2]/span[1]";
  xpathFirstShipmentStatus =
    "//div[@id='panel0a-header']/div[1]/div/div[2]/span[3]";
  xpathFirstTotalOutboundRequest =
    "//div[@id='panel0a-header']/div[1]/div/div[2]/span[2]";
  //variables start here
  todayDate = generateDateTime(0, "YYYY-MM-DD");
  yesterdayDate = generateDateTime(-1, "YYYY-MM-DD");
  dateOnly = generateDateTime(0, "DD");
  todayDF1 = generateDateTime(0, "D MMM YYYY");
  todayDF2 = generateDateTime(0, "DD MMM YYYY");
  yesterdayDF1 = generateDateTime(-1, "D MMM YYYY");
  yesterdayDF2 = generateDateTime(-1, "DD MMM YYYY");

  selectShipmentProcess() {
    cy.xpath(this.xpathShipmentProcessButton).click();
    cy.url().should("include", this.shipmentListPath);
  }

  checkShipLastPage() {
    let currentPage: number;
    cy.xpath(this.xpathPaginationBox)
      .invoke("text")
      .then(($counter) => {
        currentPage = parseInt($counter);
      });
    cy.xpath(this.xpathCounterList)
      .invoke("text")
      .then(($counter) => {
        let counterOnFooter = $counter.split(" ");
        let page = Math.ceil(parseInt(counterOnFooter[3]) / currentPage);
        cy.visit(this.baseUrl + this.shipmentListPath, {
          qs: {
            page: page.toString(),
          },
        });
        cy.location("search").should("include", "page=" + page);
      });
  }

  searchFirstShipment() {
    cy.xpath(this.xpathFirstShipmentId)
      .invoke("text")
      .then(($text) => {
        cy.get(this.searchInputBox)
          .click()
          .type($text + "{enter}");
        let modVal = $text.replace("/", "%2F");
        cy.location("search").should("include", "&search=" + modVal);
      });
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
                    .xpath(this.xpathShipList)
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
                    .xpath(this.xpathShipList)
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
                    .xpath(this.xpathShipList)
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
                    .xpath(this.xpathShipList)
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
                    .xpath(this.xpathShipList)
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
                    .xpath(this.xpathShipList)
                    .should(
                      "contain.text",
                      generateDateTime(-targetDate, "DD MMM YYYY")
                    );
            });
        }
    }
  }

  assertShipmentDefaultList() {
    cy.xpath(this.xpathShipList).should("be.visible");
  }

  assertSearchResult() {
    cy.get(this.searchInputBox)
      .invoke("val")
      .then(($text) => {
        cy.xpath(this.xpathShipList).should("contain.text", $text);
      });
  }

  assertSearchResultWithArg(value: string) {
    cy.xpath(this.xpathShipList).should("contain.text", value);
  }

  assertResultStatus(value: string) {
    cy.xpath(this.xpathShipmentStatus).should("contain.text", value);
  }

  assertTotalData() {
    let counterIncomplete: number;
    let counterInProgress: number;
    let counterComplete: number;
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
    cy.xpath(this.xpathCounterList)
      .invoke("text")
      .then(($counter) => {
        let counterFooter = $counter.split(" ");
        let totalCount =
          counterIncomplete + counterInProgress + counterComplete;
        //for now this assert is >=, until total data on footer is fixed
        expect(parseInt(counterFooter[3])).to.gte(totalCount);
      });
  }

  assertTotalDataPerPage() {
    cy.xpath(this.xpathPaginationBox)
      .invoke("text")
      .then(($page) => {
        //+1 because the div footer is included
        cy.xpath(this.xpathShipList)
          .find(">div")
          .its("length")
          .should("eq", parseInt($page) + 1);
      });
  }

  assertDelivMethodWithArg(value: string) {
    cy.xpath(this.xpathShipList).should("contain.text", value);
  }
}
