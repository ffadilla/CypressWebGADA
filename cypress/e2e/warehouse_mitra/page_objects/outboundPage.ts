import BasePage from "./basePage";
import { generateDateTime } from "../common/utils";

export default class OutboundPage extends BasePage {
  searchInputBox =
    'input[placeholder="No. permintaan barang atau nama produk..."]';
  prevArrowButton = 'button[title="Go to previous page"]';
  nextArrowButton = 'button[title="Go to next page"]';
  closeSearchButton = 'svg[data-testid="CloseRoundedIcon"]';
  delivMethodDropdown = 'div[id="mui-component-select-delivery_method"]';
  selfPickupMethodDD = 'li[data-value="SELF_PICKUP"]';
  storeCourierMethodDD = 'li[data-value="STORE_COURIER"]';
  GLOGMethodDD = 'li[data-value="GADA_LOGISTIC"]';
  defaultMethodDD = 'li[data-value="all"]';
  deliveryDateDP = 'input[placeholder="Tanggal"]';
  tabsContainer = "#chips-container";
  tabDefault = " > div:nth-child(1) > div:nth-child(1)";
  tabIncomplete = " > div:nth-child(2) > div:nth-child(1)";
  tabInProgress = " > div:nth-child(3) > div:nth-child(1)";
  tabComplete = " > div:nth-child(4) > div:nth-child(1)";
  tabCanceled = " > div:nth-child(5) > div:nth-child(1)";
  //xpath start here
  xpathDelivMethodFilterButton = '//button[contains(text(), "Filter Lainnya")]';
  xpathDelivMethodSaveButton = '//button[contains(text(), "Simpan")]';
  xpathPaginationBox = '//div[contains(@class, "MuiSelect-select")]';
  xpathDatepickerSetToday = '//button[contains(@class,"MuiPickersDay-today")]';
  xpathCounterList = '//span[contains(@class, "MuiTypography-bodyRegular")]';
  xpathPageDD = '//ul[@role="listbox"]/li[@data-value=';
  xpathResetDP = '//button[text()="Reset"]';
  xpathNotFound = '//div[text()="Pencarian Tidak Ditemukan"]';
  xpathCounterStatusOpen = "//div[contains(text(), ";
  xpathCounterStatusClose = ")]/following::div[1]";
  xpathDatePicker = "//button[text()=";
  //variables start here
  todayDate = generateDateTime(0, "YYYY-MM-DD");
  yesterdayDate = generateDateTime(-1, "YYYY-MM-DD");
  dateOnly = generateDateTime(0, "DD");

  assertPrevButtonDisable() {
    cy.get(this.prevArrowButton).should("be.disabled");
  }

  assertPrevButtonEnable() {
    cy.get(this.prevArrowButton).should("be.enabled");
  }

  assertNextButtonEnable() {
    cy.get(this.nextArrowButton).should("be.enabled");
  }

  resetSearchRequest() {
    cy.get(this.closeSearchButton).click();
    cy.location("search").should("include", "&search=");
  }

  resetDelivDateFilter() {
    cy.get(this.deliveryDateDP).click();
    cy.xpath(this.xpathResetDP).click();
    cy.location("search").should("include", "delivery_date=");
  }

  resetDeliveryMethod() {
    cy.xpath(this.xpathDelivMethodFilterButton).click();
    cy.get(this.delivMethodDropdown).click();
    cy.get(this.defaultMethodDD).click();
    cy.xpath(this.xpathDelivMethodSaveButton).click();
    cy.location("search").should("include", "&delivery_method=all");
  }

  assertDefaultDelivMethodFilterWithArg(value: string) {
    cy.location("search").should("include", "&delivery_method=" + value);
  }

  checkSecondPage() {
    cy.get(this.nextArrowButton).click();
    cy.location("search").should("include", "page=2");
  }

  selectTotalPage(value: number) {
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

  inputRequestWithArg(value: string) {
    cy.get(this.searchInputBox)
      .click()
      .type(value + "{enter}");
    let modVal = value.replace("/", "%2F");
    cy.location("search").should("include", "&search=" + modVal);
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
        cy.xpath(this.xpathDatepickerSetToday)
          .invoke("text")
          .then(($todayDate) => {
            cy.xpath(
              this.xpathDatePicker + (parseInt($todayDate) - 1) + "]"
            ).click();
          });
        cy.get(this.deliveryDateDP).should("contain.value", this.yesterdayDate);
        cy.location("search").should(
          "include",
          "delivery_date=" + this.yesterdayDate
        );
        break;
      default:
        cy.xpath(this.xpathDatePicker + value + "]").click();
        let dateVal = parseInt(value);
        let todayDateVal = parseInt(this.dateOnly);
        let resDate = todayDateVal - dateVal;
        let targetDate = generateDateTime(-resDate, "YYYY-MM-DD");
        cy.get(this.deliveryDateDP).should("contain.value", targetDate);
        cy.location("search").should("include", "delivery_date=" + targetDate);
    }
  }

  assertInvalidSearchResult(value: string) {
    cy.xpath(this.xpathNotFound).should("contain.text", value);
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

  assertDefaultDelivDateFilterWithArg(value: string) {
    cy.get(this.deliveryDateDP).should("contain.value", value);
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
}
