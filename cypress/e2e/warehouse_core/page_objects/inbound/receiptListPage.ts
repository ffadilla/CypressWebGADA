import { reformatDate, replaceElementIndex } from "../../common/utils";
import Pagination from "../../component_objects/pagination";
import MainPage from "../mainPage";
import InboundBaseListPage from "../../component_objects/inboundBaseList";

export default class ReceiptListPage extends MainPage {
  baseList = new InboundBaseListPage();
  pagination = new Pagination();

  path = "/inventory/inbound/receipt/list";
  createReceiptWarehouseNameDropdown =
    'input[placeholder="Pilih lokasi gudang"]';
  createReceiptStoreNameDropdown = 'input[placeholder="Pilih toko"]';
  createReceiptRequestIDDropdown =
    'input[placeholder="Pilih no. barang keluar"]';
  dropdownOptionsItem = '[role="option"]';
  createReceiptCTAButton = "[type=button]";

  tableBody = '[data-testid="inbound_list"]';
  accordionParent = "#panelindexa-header";
  accordionParentReceiptIDPointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(1) > a > .MuiTypography-root";
  accordionParentCreatedDatePointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(2) > :nth-child(2)";
  accordionParentStatusPointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(2) > :nth-child(5)";

  accordionChild = '[data-testid="inbound_list[index].request_table"]';
  accordionChildSourceIDPointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(1) > :nth-child(1) > .MuiTypography-root";
  accordionChildSourceTypePointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(1) > :nth-child(2) > .MuiTypography-root";
  accordionChildRequestIDPointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(2) > .MuiTypography-root";
  accordionChildDeliveryDatePointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(2) > .MuiBox-root > .MuiTypography-root";
  accordionChildSupplierStorePointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(3)";
  accordionChildDeliveryMethodPointer =
    " > table.MuiTable-root > tbody.MuiTableBody-root > tr.MuiTableRow-root > :nth-child(4)";

  firstRowAccordionParent = replaceElementIndex(this.accordionParent, 0);
  firstRowAccordionReceiptID =
    this.firstRowAccordionParent + this.accordionParentReceiptIDPointer;
  firstRowAccordionCreatedDate =
    this.firstRowAccordionParent + this.accordionParentCreatedDatePointer;
  firstRowAccordionStatus =
    this.firstRowAccordionParent + this.accordionParentStatusPointer;

  firstRowAccordionChild = replaceElementIndex(this.accordionChild, 0);
  firstRowAccordionSourceID =
    this.firstRowAccordionChild + this.accordionChildSourceIDPointer;
  firstRowAccordionSourceType =
    this.firstRowAccordionChild + this.accordionChildSourceTypePointer;
  firstRowAccordionRequestID =
    this.firstRowAccordionChild + this.accordionChildRequestIDPointer;
  firstRowAccordionDeliveryDate =
    this.firstRowAccordionChild + this.accordionChildDeliveryDatePointer;
  firstRowAccordionSupplierStore =
    this.firstRowAccordionChild + this.accordionChildSupplierStorePointer;
  firstRowAccordionDeliveryMethod =
    this.firstRowAccordionChild + this.accordionChildDeliveryMethodPointer;

  waitSearchRender() {
    cy.wait(500);
    /**
     *  This lines still return inconsitent behavior
     *  caused by intermittent behavior (API isn't called when clicking status chip)
    interceptAPI("GET", "/inbound/requests/list/?*", "inboundRequestListAPI");
    cy.wait("@inboundRequestListAPI").then((API) => {
      const responseBody = API.response?.body;
      if (responseBody.total_data === 0)
        cy.get(this.notFoundReceiptText).should("be.visible");
      else cy.get(this.tablePaginationInfoContainer).should('contain', 'dari ' + responseBody.total_data);
    });
     * 
     */
  }

  clickCreateNewReceipt() {
    cy.wait(500); //TODO: Request implement test-id on FE
    cy.get(this.baseList.inboundListButtons)
      .contains("Penerimaan Barang Masuk")
      .click();
  }
  selectWarehouseStoreAtCreatePopup() {
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      cy.get(this.createReceiptWarehouseNameDropdown).click();
      cy.get(this.dropdownOptionsItem).contains(String(warehouseName)).click();
    });
    cy.get("@requestDetailStoreName").then((storeName) => {
      cy.get(this.createReceiptStoreNameDropdown).click();
      cy.get(this.dropdownOptionsItem).contains(String(storeName)).click();
    });
  }

  submitCreateReceiptPopup() {
    cy.get("@requestDetailRequestID").then((requestID) => {
      cy.get(this.createReceiptRequestIDDropdown).click();
      cy.get(this.dropdownOptionsItem)
        .contains(String(requestID).substring(6, 15))
        .click();
    });
    cy.get(this.createReceiptRequestIDDropdown).click();
    cy.get(this.createReceiptCTAButton).contains("Simpan").click();
  }

  clickFirstReceipt() {
    cy.get(this.firstRowAccordionParent).click({ force: true });
    cy.get(this.firstRowAccordionReceiptID)
      .invoke("text")
      .as("receiptListReceiptID");
    cy.get(this.firstRowAccordionCreatedDate)
      .invoke("text")
      .as("receiptListCreatedDate");
    cy.get(this.firstRowAccordionStatus).invoke("text").as("receiptListStatus");
    cy.get(this.firstRowAccordionSourceID)
      .invoke("text")
      .as("receiptListSourceID");
    cy.get(this.firstRowAccordionSourceType)
      .invoke("text")
      .as("receiptListSourceType");
    cy.get(this.firstRowAccordionRequestID)
      .invoke("text")
      .as("receiptListRequestID");
    cy.get(this.firstRowAccordionDeliveryDate)
      .invoke("text")
      .as("receiptListDeliveryDate");
    cy.get(this.firstRowAccordionSupplierStore)
      .invoke("text")
      .as("receiptListTargetStore");
    cy.get(this.firstRowAccordionDeliveryMethod)
      .invoke("text")
      .as("receiptListDeliveryMethod");

    cy.get(this.firstRowAccordionReceiptID).click();
  }

  assertReceiptItemsBySearchFilter(target: string, value: string) {
    let pointer = "";
    cy.get(this.firstRowAccordionReceiptID).should("be.visible");

    switch (target) {
      case "status":
        pointer = this.accordionParent + this.accordionParentStatusPointer;
        break;
      case "receipt ID":
        pointer = this.accordionParent + this.accordionParentReceiptIDPointer;
        break;
      case "supplier store":
        pointer = this.accordionChild + this.accordionChildSupplierStorePointer;
        break;
      case "delivery method":
        pointer =
          this.accordionChild + this.accordionChildDeliveryMethodPointer;
        break;
      case "delivery date":
        value = reformatDate(value, "YYYY-MM-DD", "D MMM YYYY");
        pointer = this.accordionChild + this.accordionChildDeliveryDatePointer;
        break;
    }

    cy.get(this.tableBody).then(($list) => {
      for (let index = 0; index < $list.children().length - 2; index++) {
        let accordionPointer = this.accordionParent
          .split("index")
          .join(index.toString());
        cy.get(accordionPointer).click();

        const receiptAttribute = pointer.split("index").join(index.toString());
        expect(cy.get(receiptAttribute).should("contain", value));
      }
    });
  }

  assertReceiptPopupFilter(warehouseName: string, storeName: string) {
    expect(
      cy
        .get(this.createReceiptWarehouseNameDropdown)
        .invoke("val")
        .should("contain", warehouseName)
    );
    expect(
      cy.get(this.createReceiptWarehouseNameDropdown).should("be.disabled")
    );
    expect(
      cy
        .get(this.createReceiptStoreNameDropdown)
        .invoke("val")
        .should("contain", storeName)
    );
    expect(cy.get(this.createReceiptStoreNameDropdown).should("be.disabled"));
  }
}
