import InboundBaseListPage from "./inboundBaseListPage";

export default class ReceiptListPage extends InboundBaseListPage {
  path = "/inventory/inbound/receipt/list";
  createReceiptWarehouseNameDropdown =
    'input[placeholder="Pilih lokasi gudang"]';
  createReceiptStoreNameDropdown = 'input[placeholder="Pilih toko"]';
  createReceiptRequestIDDropdown = 'input[placeholder="Pilih no. permintaan"]';
  dropdownOptionsItem = '[role="option"]';
  createReceiptCTAButton = "[type=button]";
  tableBody = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[2]';
  accordionParent = "#panel[index]a-header";
  accordionParentReceiptIDPointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(1) > a > .MuiTypography-root";
  accordionParentCreatedDatePointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(2) > :nth-child(2)";
  accordionParentStatusPointer =
    " > .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(2) > :nth-child(5)";
  accordionChild = "#panel[index]a-content";
  accordionChildSourceIDPointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(1) > :nth-child(1) > .MuiTypography-root";
  accordionChildSourceTypePointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(1) > :nth-child(2) > .MuiTypography-root";
  accordionChildRequestIDPointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2) > .MuiTypography-root";
  accordionChildDeliveryDatePointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2) > .MuiBox-root > .MuiTypography-root";
  accordionChildSupplierStorePointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(3)";
  accordionChildDeliveryMethodPointer =
    " > .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(4)";

  firstRowAccordionParent = this.accordionParent.split("[index]").join("0");
  firstRowAccordionReceiptID = this.firstRowAccordionParent.concat(
    this.accordionParentReceiptIDPointer
  );
  firstRowAccordionCreatedDate = this.firstRowAccordionParent.concat(
    this.accordionParentCreatedDatePointer
  );
  firstRowAccordionStatus = this.firstRowAccordionParent.concat(
    this.accordionParentStatusPointer
  );
  firstRowAccordionChild = this.accordionChild.split("[index]").join("0");
  firstRowAccordionSourceID = this.firstRowAccordionChild.concat(
    this.accordionChildSourceIDPointer
  );
  firstRowAccordionSourceType = this.firstRowAccordionChild.concat(
    this.accordionChildSourceTypePointer
  );
  firstRowAccordionRequestID = this.firstRowAccordionChild.concat(
    this.accordionChildRequestIDPointer
  );
  firstRowAccordionDeliveryDate = this.firstRowAccordionChild.concat(
    this.accordionChildDeliveryDatePointer
  );
  firstRowAccordionSupplierStore = this.firstRowAccordionChild.concat(
    this.accordionChildSupplierStorePointer
  );
  firstRowAccordionDeliveryMethod = this.firstRowAccordionChild.concat(
    this.accordionChildDeliveryMethodPointer
  );

  clickCreateNewReceipt() {
    cy.wait(500); //TODO: Request implement test-id on FE
    cy.get(this.inboundListButtons).contains("Penerimaan Barang Masuk").click();
  }

  submitCreateReceiptPopup() {
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      cy.get(this.createReceiptWarehouseNameDropdown).click();
      cy.get(this.dropdownOptionsItem).contains(String(warehouseName)).click();
    });
    cy.get("@requestDetailStoreName").then((storeName) => {
      cy.get(this.createReceiptStoreNameDropdown).click();
      cy.get(this.dropdownOptionsItem).contains(String(storeName)).click();
    });
    cy.get("@requestDetailRequestID").then((requestID) => {
      cy.get(this.createReceiptRequestIDDropdown).click();
      cy.get(this.dropdownOptionsItem)
        .contains(String(requestID).substring(6, 15))
        .click();
    });
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
        pointer = this.accordionChild + this.accordionChildDeliveryDatePointer;
        break;
    }

    cy.xpath(this.tableBody).then(($list) => {
      for (let index = 0; index < $list.children().length - 1; index++) {
        let accordionPointer = this.accordionParent
          .split("[index]")
          .join(index.toString());
        cy.get(accordionPointer).click();

        const receiptAttribute = pointer
          .split("[index]")
          .join(index.toString());
        expect(cy.get(receiptAttribute).should("contain", value));
      }
    });
  }
}
