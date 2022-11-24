import BasePage from "./basePage";
import { generateDateTime } from "../../warehouse_core/common/utils";
import Datepicker from "../../warehouse_core/component_objects/datepicker";

export default class OutboundPage extends BasePage {
  datepicker = new Datepicker();
  searchInputBox =
    "input[placeholder='No. permintaan barang atau nama produk...']";
  invalidId = "INVALID/00112233";
  defaultFilterDate = "Semua Hari";
  prevArrowButton = "button[title='Go to previous page']";
  nextArrowButton = "button[title='Go to next page']";
  closeSearchButton = "svg[data-testid='CloseRoundedIcon']";
  delivMethodDropdown = "div[id='mui-component-select-delivery_method']";
  selfPickupMethodDD = "li[data-value='SELF_PICKUP']";
  storeCourierMethodDD = "li[data-value='STORE_COURIER']";
  GLOGMethodDD = "li[data-value='GADA_LOGISTIC']";
  defaultMethodDD = "li[data-value='all']";
  deliveryDateDP = "input[placeholder='Tanggal']";
  setCurrentDate = "button[aria-current=date]";
  accordionButton = "svg[data-testid=ExpandMoreIcon]";

  chipsContainer = "#chips-container";
  statusDefault =
    this.chipsContainer + " > div:nth-child(1) > div:nth-child(1)";
  statusIncomplete =
    this.chipsContainer + " > div:nth-child(2) > div:nth-child(1)";
  statusInProgress =
    this.chipsContainer + " > div:nth-child(3) > div:nth-child(1)";
  statusComplete =
    this.chipsContainer + " > div:nth-child(4) > div:nth-child(1)";
  statusCanceled =
    this.chipsContainer + " > div:nth-child(5) > div:nth-child(1)";
  setDatePicker = "[role='gridcell']";

  //XPaths start here
  xpathListParent = "//div/div[3]/div[2]/div/div/div[2]";
  xpathNotFound = "//div[text()='Pencarian Tidak Ditemukan']";
  xpathNotFoundMsg = "Pencarian Tidak Ditemukan";
  xpathDelivMethodFilterButton = "//button[contains(text(), 'Filter Lainnya')]";
  xpathDelivMethodSaveButton = "//button[contains(text(), 'Simpan')]";
  xpathPaginationBox = "//div[contains(@class, 'MuiSelect-select')]";
  xpathDatepickerSetToday = "//button[contains(@class,'MuiPickersDay-today')]";
  xpathOutboundDataCounter =
    "//div/div[3]/div[2]/div/div/div[2]/div[2]/div[2]/div/p[2]/span";
  xpathShipmentDataCounter = "//span[text()='Baris']";
  xpathPageDD = "//ul[@role='listbox']/li[@data-value=";

  xpathResetDP = "//button[text()='Reset']";
  xpathNotificationSnackbar = "//div[@id='notistack-snackbar']";
  snackbarFail = this.xpathNotificationSnackbar + "[text()='Invalid data.']";
  snackbarRequestSuccess =
    this.xpathNotificationSnackbar +
    "[text()='Berhasil membuat permintaan keluar']";
  snackbarShipmentSuccess =
    this.xpathNotificationSnackbar +
    "[text()='Berhasil menyimpan pengiriman barang keluar']";

  //Variables start here
  dateOnly = generateDateTime(0, "DD");
  todayDF1 = generateDateTime(0, "D MMM YYYY");
  todayDF2 = generateDateTime(0, "DD MMM YYYY");

  getCounterStatusOutboundAPI() {
    cy.intercept("GET", "/outbound/requests/status-counter/*").as(
      "counterStatusOutboundAPI"
    );
  }

  getOutbondListPageAPI() {
    cy.intercept("GET", "/outbound/requests/list/*").as("outboundListPageAPI");
  }

  getCounterStatusShipmentAPI() {
    cy.intercept("GET", "/outbound/shipments/status-counter/*").as(
      "counterStatusShipmentAPI"
    );
  }

  getShipmentListPageAPI() {
    cy.intercept("GET", "/outbound/shipments/list/*").as("shipmentListPageAPI");
  }

  getCurrentDataAmountOnPage(value: string) {
    let locator: any;
    switch (value) {
      case "outbound request":
        locator = this.xpathOutboundDataCounter;
        break;
      case "shipment process":
        locator = this.xpathShipmentDataCounter;
        break;
    }
    cy.xpath(locator).invoke("text").as("currentDataAmountOnPagination");
  }

  selectTotalPage(page: number) {
    cy.xpath(this.xpathPaginationBox).click();
    switch (page) {
      case 10:
        cy.xpath(this.xpathPageDD + page + "]").click();
        break;
      default:
        cy.xpath(this.xpathPageDD + page + "]").click();
        cy.location("search").should("include", "&rowsPerPage=");
    }
  }

  waitOutboundListResponseAPI() {
    cy.wait("@outboundListPageAPI").its("response").as("response");
  }

  waitShipmentListResponseAPI() {
    cy.wait("@shipmentListPageAPI").its("response").as("response");
  }

  waitOutboundCreationToSucceed() {
    cy.wait("@bulkCreateAPI").its("response.statusCode").should("eq", 200);
  }

  waitShipmentSubmissionToSucceed() {
    cy.wait("@shipmentSubmissionAPI")
      .its("response.statusCode")
      .should("eq", 200);
  }

  waitForLoadingProductUnitData() {
    cy.wait("@productUnitAccessListAPI")
      .its("response.statusCode")
      .should("eq", 200);
  }

  selectDeliveryMethod(method: string) {
    cy.xpath(this.xpathDelivMethodFilterButton).click();
    cy.get(this.delivMethodDropdown).click();
    switch (method) {
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
    cy.location("search").should(
      "include",
      "&delivery_method=" + method.replace(" ", "_")
    );
  }

  selectStatus(status: string) {
    switch (status) {
      case "Belum Selesai":
        cy.get(this.statusIncomplete).click();
        cy.location("search").should("include", "&status=INCOMPLETE");
        break;
      case "Sedang Diproses":
        cy.get(this.statusInProgress).click();
        cy.location("search").should("include", "&status=IN_PROGRESS");
        break;
      case "Sudah Selesai":
        cy.get(this.statusComplete).click();
        cy.location("search").should("include", "&status=COMPLETE");
        break;
      case "Dibatalkan":
        cy.get(this.statusCanceled).click();
        cy.location("search").should("include", "&status=CANCELLED");
        break;
      case "Semua Status":
        cy.get(this.statusDefault).click();
        break;
    }
  }

  selectDeliveryDate(date: string) {
    this.datepicker.setDateOnly(this.deliveryDateDP, date);
  }

  searchBasedOn(id: string) {
    let temp: any;
    switch (id) {
      case "recently created":
        temp = "@newOutboundId";
        break;
      case "current":
        temp = "@outboundId";
        break;
    }
    cy.get(temp).then((selectedId: any) => {
      cy.get(this.searchInputBox)
        .click()
        .type(selectedId + "{enter}");
      cy.location("search").should(
        "include",
        "&search=" + selectedId.replace("/", "%2F")
      );
    });
  }

  searchInvalidId() {
    cy.get(this.searchInputBox)
      .click()
      .clear()
      .type(this.invalidId + "{enter}");
    cy.location("search").should(
      "include",
      "&search=" + this.invalidId.replace("/", "%2F")
    );
  }

  resetSearchRequest() {
    cy.get(this.closeSearchButton).click();
    cy.location("search").should("include", "&search=");
  }

  resetDeliveryDateFilter() {
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

  clickNextPage() {
    cy.get(this.nextArrowButton).click();
    cy.location("search").should("include", "page=2");
  }

  getCurrentTotalDataPerPage() {
    cy.xpath(this.xpathPaginationBox).invoke("text").as("currentTotalData");
  }

  getCurrentFilterDate() {
    cy.get(this.deliveryDateDP).invoke("val").as("currentFilterDate");
  }

  assertDefaultSearchBar() {
    cy.get(this.searchInputBox).invoke("val").should("be.empty");
  }

  assertCurrentFilterDate() {
    cy.get("@listDate").then((isFound: any) => {
      if (isFound !== this.xpathNotFoundMsg) {
        this.getCurrentFilterDate();
        cy.get("@currentFilterDate").then((currentFilterDate: any) => {
          cy.get("@deliveryDate").then((deliveryDate: any) => {
            currentFilterDate !== this.defaultFilterDate
              ? expect(deliveryDate).to.contain(currentFilterDate)
              : expect(this.defaultFilterDate).to.equal(currentFilterDate);
          });
        });
      }
    });
  }

  assertDefaultFilterDate() {
    this.getCurrentFilterDate();
    cy.get("@currentFilterDate").should("eq", this.defaultFilterDate);
  }

  assertDefaultDeliveryMethodWithArg(method: string) {
    cy.location("search").should("include", "&delivery_method=" + method);
  }

  assertInvalidId(err: string) {
    cy.xpath(this.xpathNotFound).should("contain.text", err);
  }

  assertCurrentRequestId() {
    cy.get("@requestId").then((requestId: any) => {
      cy.xpath(this.xpathListParent).should("contain.text", requestId);
    });
  }

  assertCurrentOutboundId(keyword: string) {
    switch (keyword) {
      case "outbound request":
        cy.get("@outboundId").then((outboundId: any) => {
          cy.xpath(this.xpathListParent).should("contain.text", outboundId);
        });
        break;
      case "shipment process":
        cy.get(this.accordionButton).eq(0).click();
        cy.get("@outboundId").then((outboundId: any) => {
          cy.xpath(this.xpathListParent).should("contain.text", outboundId);
        });
        break;
    }
  }

  assertRecentlySubmittedOutboundId() {
    cy.get(this.accordionButton).eq(0).click();
    cy.get("@outboundIdOnDetail").then((outboundIdOnDetail: any) => {
      cy.xpath(this.xpathListParent).should("contain.text", outboundIdOnDetail);
    });
  }

  assertRecentlyAddedOutboundId() {
    cy.get("@newOutboundId").then((newOutboundId: any) => {
      cy.xpath(this.xpathListParent).should("contain.text", newOutboundId);
    });
  }

  assertRequestSuccessSnackBarExist() {
    cy.xpath(this.snackbarRequestSuccess).should("exist");
  }

  assertShipmentSuccessSnackBarExist() {
    cy.xpath(this.snackbarShipmentSuccess).should("exist");
  }

  assertFailSnackBarExist() {
    cy.xpath(this.snackbarFail).should("exist");
  }

  assertPrevButtonDisable() {
    cy.get(this.prevArrowButton).should("be.disabled");
  }

  assertPrevButtonEnable() {
    cy.get(this.prevArrowButton).should("be.enabled");
  }

  assertNextButtonEnable() {
    cy.get(this.nextArrowButton).should("be.enabled");
  }

  assertListByDate(date: string, locator: string) {
    cy.get("@response").then((resp: any) => {
      switch (date) {
        case "today":
          if (this.dateOnly.slice(0, 1) !== "0") {
            resp.body.total_data !== 0
              ? cy
                  .xpath(locator)
                  .invoke("text")
                  .as("listDate")
                  .should("contain", this.todayDF2)
              : cy
                  .xpath(this.xpathNotFound)
                  .invoke("text")
                  .as("listDate")
                  .should("eq", this.xpathNotFoundMsg);
          } else {
            resp.body.total_data !== 0
              ? cy
                  .xpath(locator)
                  .invoke("text")
                  .as("listDate")
                  .should("contain", this.todayDF1)
              : cy
                  .xpath(this.xpathNotFound)
                  .invoke("text")
                  .as("listDate")
                  .should("eq", this.xpathNotFoundMsg);
          }
          break;
        default:
          let temp = parseInt(this.dateOnly) - parseInt(date);
          if (parseInt(date) < 10) {
            resp.body.total_data !== 0
              ? cy
                  .xpath(locator)
                  .invoke("text")
                  .as("listDate")
                  .should("contain", generateDateTime(-temp, "D MMM YYYY"))
              : cy
                  .xpath(this.xpathNotFound)
                  .invoke("text")
                  .as("listDate")
                  .should("eq", this.xpathNotFoundMsg);
          } else {
            resp.body.total_data !== 0
              ? cy
                  .xpath(locator)
                  .invoke("text")
                  .as("listDate")
                  .should("contain", generateDateTime(-temp, "DD MMM YYYY"))
              : cy
                  .xpath(this.xpathNotFound)
                  .invoke("text")
                  .as("listDate")
                  .should("eq", this.xpathNotFoundMsg);
          }
      }
    });
  }

  assertCurrentDataAmountOnPage(value: string, onpage: string) {
    let temp: number;
    this.getCurrentDataAmountOnPage(value);
    cy.get("@currentDataAmountOnPagination").then((dataAmountOnPage: any) => {
      switch (onpage) {
        case "current page":
          cy.get("@response").then((resp: any) => {
            temp = resp.body.results.length;
            expect(temp).to.equal(parseInt(dataAmountOnPage.slice(8, 10)));
          });
          break;
        case "next page":
          cy.get("@response").then((resp: any) => {
            cy.get("@currentTotalDataOnList").then(
              (currentTotalDataOnList: any) => {
                switch (value) {
                  case "outbound request":
                    temp = resp.body.results.length + currentTotalDataOnList;
                    expect(temp).to.equal(
                      parseInt(dataAmountOnPage.slice(9, 11))
                    );
                    break;
                  case "shipment process":
                    /**
                     * Need to subtract the div by 1 because the footer div is joined with the list divs
                     */
                    temp =
                      resp.body.results.length + (currentTotalDataOnList - 1);
                    expect(temp).to.equal(
                      parseInt(dataAmountOnPage.slice(9, 11))
                    );
                }
              }
            );
          });
      }
    });
  }
}
