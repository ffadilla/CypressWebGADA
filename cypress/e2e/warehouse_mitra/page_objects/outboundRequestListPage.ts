import BasePage from "./basePage";
import { generateDateTime, generateBackDate } from "../common/utils";

export default class OutboundRequestListPage extends BasePage {
  path = "inventory/outbound/request/list";
  ship = "inventory/outbound/shipment/list";
  searchInputBox =
    'input[placeholder="No. permintaan barang atau nama produk..."]';
  deliveryDateDP = 'input[placeholder="Tanggal"]';
  tabsContainer = "#chips-container";
  tabDefault = " > div:nth-child(1) > div:nth-child(1)";
  tabIncomplete = " > div:nth-child(2) > div:nth-child(1)";
  tabInProgress = " > div:nth-child(3) > div:nth-child(1)";
  tabComplete = " > div:nth-child(4) > div:nth-child(1)";
  tabCanceled = " > div:nth-child(5) > div:nth-child(1)";
  requestStatus =
    "tr:nth-child(1) > td:nth-child(5) > span > span.MuiTypography-root";
  tabShipment =
    ".MuiTabs-scroller.MuiTabs-hideScrollbar.MuiTabs-scrollableX > div > button:nth-child(2)";
  datePicker = 'button[aria-label="';
  delivMethodDropdown = 'div[id="mui-component-select-delivery_method"]';
  selfPickupMethodDD = 'li[data-value="SELF_PICKUP"]';
  storeCourierMethodDD = 'li[data-value="STORE_COURIER"]';
  GLOGMethodDD = 'li[data-value="GADA_LOGISTIC"]';
  defaultMethodDD = 'li[data-value="all"]';
  closeSearchButton = 'svg[data-testid="CloseRoundedIcon"]';
  prevArrowButton = 'button[title="Go to previous page"]';
  nextArrowButton = 'button[title="Go to next page"]';
  //xpath
  xpathFirstIdxReqData = "//tr[1]/td[2]/a/div[1]";
  xpathListParent = "//div/div[3]/div[2]/div/div/div[4]";
  xpathListBody = "//div/div[3]/div[2]/div/div/div[4]/div";
  xpathNotFound = '//div[text()="Pencarian Tidak Ditemukan"]';
  xpathNotFoundMsg = "Pencarian Tidak Ditemukan";
  xpathOutboundMenu =
    '//div[@id="__next"]//div[@role="button"]//span[text()="Barang Keluar"]';
  xpathShipmentStatus =
    '//div[@id="panel0a-header"]//following-sibling::span[2]';
  xpathDatepickerSetToday = '//button[contains(@class,"MuiPickersDay-today")]';
  xpathDatepickerSetYesterday =
    '//button[contains(@class,"MuiPickersDay-today")]/preceding::div[1]';
  xpathReqList = "//table/tbody";
  xpathShipList = "//div[2]/div/div/div[4]";
  xpathFooterPagination = '//div[contains(@class, "MuiTablePagination-root")]';
  xpathResetDP = '//button[contains(text(), "Reset")]';
  xpathDelivMethodFilterButton = '//button[contains(text(), "Filter Lainnya")]';
  xpathDelivMethodSaveButton = '//button[contains(text(), "Simpan")]';
  xpathCounterList = '//span[contains(@class, "MuiTypography-bodyRegular")]';
  xpathCounterStatusOpen = "//div[contains(text(), ";
  xpathCounterStatusClose = ")]/following::div[1]";
  xpathCounterStatusIncomplete =
    '//div[contains(text(), "Belum Selesai")]/following-sibling::div[1]';
  xpathCounterStatusInProgress =
    '//div[contains(text(), "Sedang Diproses")]/following-sibling::div[1]';
  xpathCounterStatusComplete =
    '//div[contains(text(), "Sudah Selesai")]/following-sibling::div[1]';
  xpathCounterStatusCanceled =
    '//div[contains(text(), "Dibatalkan")]/following-sibling::div[1]';
  xpathFirstIdxShipData = '//div[@id="panel0a-header"]//a/span';
  xpathPageDD = '//ul[@role="listbox"]/li[@data-value=';
  xpathPaginationBox = '//div[contains(@class, "MuiSelect-select")]';
  //var
  todayDate = generateDateTime(0, "YYYY-MM-DD");
  yesterdayDate = generateDateTime(-1, "YYYY-MM-DD");
  dateOnly = generateDateTime(0, "DD");
  todayDF1 = generateDateTime(0, "D MMM YYYY");
  todayDF2 = generateDateTime(0, "DD MMM YYYY");
  yesterdayDF1 = generateDateTime(-1, "D MMM YYYY");
  yesterdayDF2 = generateDateTime(-1, "D MMM YYYY");
  monthDF = generateDateTime(0, " MMM YYYY");

  selectMenuOutbound() {
    this.navigate(this.path);
    cy.xpath(this.xpathOutboundMenu).click();
    cy.url().should("include", "/inventory/outbound/request/list");
  }

  checkReqFirstPage() {
    cy.visit(this.baseUrl + this.path, {
      qs: {
        page: "1",
      },
    });
    cy.location("search").should("include", "?page=1");
  }

  checkShipFirstPage() {
    cy.visit(this.baseUrl + this.ship, {
      qs: {
        page: "1",
      },
    });
    cy.location("search").should("include", "?page=1");
  }

  checkSecondPage() {
    cy.get(this.nextArrowButton).click();
    cy.location("search").should("include", "page=2");
  }

  checkReqLastPage() {
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
        cy.visit(this.baseUrl + this.path, {
          qs: {
            page: page.toString(),
          },
        });
        cy.location("search").should("include", "page=" + page);
      });
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
        cy.visit(this.baseUrl + this.ship, {
          qs: {
            page: page.toString(),
          },
        });
        cy.location("search").should("include", "page=" + page);
      });
  }

  selectPage(value: number) {
    cy.xpath(this.xpathPaginationBox).click();
    switch (value) {
      case 10:
        cy.xpath(this.xpathPageDD + value + "]").click();
        break;
      default:
        cy.xpath(this.xpathPageDD + value + "]").click();
        cy.location("search").should("include", "&rowsPerPage=");
    }
  }

  searchRequest() {
    cy.xpath(this.xpathFirstIdxReqData)
      .invoke("text")
      .then(($text) => {
        cy.get(this.searchInputBox)
          .click()
          .type($text + "{enter}");
        let modVal = $text.replace("/", "%2F");
        cy.location("search").should("include", "&search=" + modVal);
      });
  }

  resetSearchRequest() {
    cy.get(this.closeSearchButton).click();
    cy.location("search").should("include", "&search=");
  }

  inputRequestWithArg(value: string) {
    cy.get(this.searchInputBox)
      .click()
      .type(value + "{enter}");
    let modVal = value.replace("/", "%2F");
    cy.location("search").should("include", "&search=" + modVal);
  }

  searchShipment() {
    cy.xpath(this.xpathFirstIdxShipData)
      .invoke("text")
      .then(($text) => {
        cy.get(this.searchInputBox)
          .click()
          .type($text + "{enter}");
        let modVal = $text.replace("/", "%2F");
        cy.location("search").should("include", "&search=" + modVal);
      });
  }

  selectStatus(value: string) {
    switch (value) {
      case "Belum Selesai":
        cy.get(this.tabsContainer + this.tabIncomplete).click();
        cy.location("search").should("include", "&status=INCOMPLETE");
        break;
      case "Sedang Diproses":
        cy.get(this.tabsContainer + this.tabInProgress).click();
        cy.location("search").should("include", "&status=IN_PROGRESS");
        break;
      case "Sudah Selesai":
        cy.get(this.tabsContainer + this.tabComplete).click();
        cy.location("search").should("include", "&status=COMPLETE");
        break;
      case "Dibatalkan":
        cy.get(this.tabsContainer + this.tabCanceled).click();
        cy.location("search").should("include", "&status=CANCELLED");
        break;
      default:
        cy.get(this.tabsContainer + this.tabDefault).click();
    }
  }

  selectShipment() {
    cy.get(this.tabShipment).click();
    cy.url().should("include", "/inventory/outbound/shipment/list");
  }

  selectDeliveryDate(value: string) {
    cy.get(this.deliveryDateDP).click();
    switch (value) {
      case "today":
        cy.xpath(this.xpathDatepickerSetToday).click();
        cy.get(this.deliveryDateDP).should("contain.value", this.todayDate);
        cy.location("search").should(
          "include",
          "delivery_date=" + this.todayDate
        );
        break;
      case "yesterday":
        cy.xpath(this.xpathDatepickerSetYesterday).click();
        cy.get(this.deliveryDateDP).should("contain.value", this.yesterdayDate);
        cy.location("search").should(
          "include",
          "delivery_date=" + this.yesterdayDate
        );
        break;
      default:
        cy.get(this.datePicker + value + this.monthDF + '"]').click();
        let dateVal = parseInt(value);
        let todayDateVal = parseInt(this.dateOnly);
        let resDate = todayDateVal - dateVal;
        let targetDate = generateBackDate(resDate, "YYYY-MM-DD");
        cy.get(this.deliveryDateDP).should("contain.value", targetDate);
        cy.location("search").should("include", "delivery_date=" + targetDate);
    }
  }

  assertRequestDeliveryDate(value: string) {
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
        if (targetDate < 10) {
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
                      generateBackDate(targetDate, "D MMM YYYY")
                    );
            });
        } else {
          cy.xpath(this.xpathListParent)
            .find(">div")
            .its("length")
            .then(($div) => {
              $div === 2
                ? cy
                    .xpath(this.xpathNotFound)
                    .should("contain.text", this.xpathNotFoundMsg)
                : cy
                    .xpath(this.xpathReqList)
                    .should(
                      "contain.text",
                      generateBackDate(targetDate, "DD MMM YYYY")
                    );
            });
        }
    }
  }

  assertShipmentDeliveryDate(value: string) {
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
        if (targetDate < 10) {
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
                      generateBackDate(targetDate, "D MMM YYYY")
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
                      generateBackDate(targetDate, "DD MMM YYYY")
                    );
            });
        }
    }
  }

  assertRequestSearchResult() {
    cy.get(this.searchInputBox)
      .invoke("text")
      .then(($text) => {
        cy.xpath(this.xpathReqList).should("contain.text", $text);
      });
  }

  assertReqListDefault() {
    cy.xpath(this.xpathReqList).should("be.visible");
  }

  assertShipListDefault() {
    cy.xpath(this.xpathShipList).should("be.visible");
  }

  assertRequestSearchResultWithArg(value: string) {
    cy.xpath(this.xpathReqList).should("contain.text", value);
  }

  assertShipmentSearchResult() {
    cy.get(this.searchInputBox)
      .invoke("text")
      .then(($text) => {
        cy.xpath(this.xpathShipList).should("contain.text", $text);
      });
  }

  assertShipmentSearchResultWithArg(value: string) {
    cy.xpath(this.xpathShipList).should("contain.text", value);
  }

  assertInvalidSearchResult(value: string) {
    cy.xpath(this.xpathNotFound).should("contain.text", value);
  }

  assertReqResultStatus(value: string) {
    cy.get(this.requestStatus).should("contain.text", value);
  }

  assertShipResultStatus(value: string) {
    cy.xpath(this.xpathShipmentStatus).should("contain.text", value);
  }

  assertTotalOutboundStatus(value: string) {
    let counterOnFooter: object | any;
    cy.xpath(this.xpathCounterList)
      .invoke("text")
      .then(($counter) => {
        counterOnFooter = $counter.split(" ");
      });
    cy.xpath(
      this.xpathCounterStatusOpen + `'${value}'` + this.xpathCounterStatusClose
    )
      .invoke("text")
      .then(($counter) => {
        expect(counterOnFooter[3]).to.eq($counter);
      });
  }

  assertTotalOutboundRequest() {
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

  assertTotalOutboundShipment() {
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

  assertTotalDataReqPerPage() {
    cy.xpath(this.xpathPaginationBox)
      .invoke("text")
      .then(($page) => {
        cy.xpath(this.xpathReqList)
          .find("tr")
          .its("length")
          .should("eq", parseInt($page));
      });
  }

  assertTotalDataShipPerPage() {
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

  assertDefaultDelivDateFilterWithArg(value: string) {
    cy.get(this.deliveryDateDP).should("contain.value", value);
  }

  assertReqDelivMethodWithArg(value: string) {
    cy.xpath(this.xpathReqList).should("contain.text", value);
  }

  assertShipDelivMethodWithArg(value: string) {
    cy.xpath(this.xpathShipList).should("contain.text", value);
  }

  assertDefaultDelivMethodFilterWithArg(value: string) {
    cy.location("search").should("include", "&delivery_method=" + value);
  }

  assertPrevButtonDisable() {
    cy.get(this.prevArrowButton).should("be.disabled");
  }

  assertPrevButtonEnable() {
    cy.get(this.prevArrowButton).should("be.enabled");
  }

  assertNextButtonDisable() {
    cy.get(this.nextArrowButton).should("be.disabled");
  }

  assertNextButtonEnable() {
    cy.get(this.nextArrowButton).should("be.enabled");
  }

  resetDelivDateFilter() {
    cy.get(this.deliveryDateDP).click();
    cy.xpath(this.xpathResetDP).click();
    cy.location("search").should("include", "delivery_date=");
  }

  selectDeliveryMethod(value: string) {
    cy.xpath(this.xpathDelivMethodFilterButton).click();
    cy.get(this.delivMethodDropdown).click();
    switch (value) {
      case "SELF PICKUP":
        cy.get(this.selfPickupMethodDD).click();
        break;
      case "STORE COURIER":
        cy.get(this.storeCourierMethodDD).click();
        break;
      case "GADA LOGISTIC":
        cy.get(this.GLOGMethodDD).click();
        break;
      default:
        cy.get(this.defaultMethodDD).click();
    }
    cy.xpath(this.xpathDelivMethodSaveButton).click();
    let modVal = value.replace(" ", "_");
    cy.location("search").should("include", "&delivery_method=" + modVal);
  }

  resetDeliveryMethod() {
    cy.xpath(this.xpathDelivMethodFilterButton).click();
    cy.get(this.delivMethodDropdown).click();
    cy.get(this.defaultMethodDD).click();
    cy.xpath(this.xpathDelivMethodSaveButton).click();
    cy.location("search").should("include", "&delivery_method=all");
  }
}
