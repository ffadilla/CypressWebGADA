import InboundListPage from "./inboundListPage";

export default class InboundReceiptListPage extends InboundListPage {
  path = "/inventory/inbound/receipt/list";
  tableBody = '//*[@id="__next"]/div/div[3]/div[2]/div/div/div[4]';
  accordionParent = "#panel[index]a-header";
  accordionParentReceiptIDPointer =
    "> .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(1) > a > .MuiTypography-root";
  accordionParentStatusPointer =
    "> .MuiAccordionSummary-contentGutters > .MuiBox-root > :nth-child(2) > :nth-child(5)";
  accordionChild = "#panel[index]a-content";
  accordionChildSupplierStorePointer =
    "> .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(3)";
  accordionChildDeliveryMethodPointer =
    "> .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(4)";
  accordionChildDeliveryDatePointer =
    "> .MuiAccordionDetails-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > :nth-child(2) > .MuiBox-root > .MuiTypography-root";

  firstRowAccordionParent = this.accordionParent.split("[index]").join("0");
  firstRowAccordionReceiptID = this.firstRowAccordionParent.concat(
    this.accordionParentReceiptIDPointer
  );

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
