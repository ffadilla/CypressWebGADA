import BasePage from "./basePage";

export default class InboundRequestDetailPage extends BasePage {
  path = "https://warehouse-dev.gudangada.com/inventory/inbound/request/detail";
  sourceIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[1]/span[1]';
  headerSubtextContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[2]';
  requestIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[2]/span[2]';
  targetStoreInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[2]/div/div[2]';
  deliveryMethodInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/div/div[2]';
  deliveryDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div[2]';
  tableHeaderContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/thead/tr';
  requestCTAButtonContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[2]';

  assertRequestUI(status: string) {
    cy.xpath(this.requestIDInfo); //waiting for element to be rendered
    if (status === "Sudah Selesai") {
      expect(
        cy.xpath(this.tableHeaderContainer).find("th").should("have.length", 5)
      );
      expect(
        cy.xpath(this.tableHeaderContainer).should("contain", "Nama Produk")
      );
      expect(
        cy.xpath(this.tableHeaderContainer).should("contain", "Total Item")
      );
      expect(
        cy
          .xpath(this.tableHeaderContainer)
          .should("contain", "Barang yang Diterima")
      );
      expect(
        cy.xpath(this.tableHeaderContainer).should("contain", "Total Perbedaan")
      );
      expect(
        cy
          .xpath(this.tableHeaderContainer)
          .should("contain", "Keterangan Perbedaan")
      );
    } else {
      expect(
        cy.xpath(this.tableHeaderContainer).find("th").should("have.length", 2)
      );
      expect(
        cy.xpath(this.tableHeaderContainer).should("contain", "Nama Produk")
      );
      expect(
        cy.xpath(this.tableHeaderContainer).should("contain", "Total Item")
      );
    }

    if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.headerSubtextContainer)
          .find("span")
          .should("have.length", 3)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainer)
          .find(".MuiButton-root")
          .should("have.length", 2)
      );
      expect(
        cy.xpath(this.requestCTAButtonContainer).should("contain", "Kembali")
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainer)
          .should("contain", "Terima Barang")
      );
    } else if (status === "Sedang Diproses" || status === "Sudah Selesai") {
      expect(
        cy
          .xpath(this.headerSubtextContainer)
          .find("span")
          .should("have.length", 4)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainer)
          .find(".MuiButton-root")
          .should("have.length", 1)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainer)
          .should("contain", "Lihat Detail Penerimaan Barang")
      );
    } else if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.headerSubtextContainer)
          .find("span")
          .should("have.length", 3)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainer)
          .find(".MuiButton-root")
          .should("have.length", 1)
      );
      expect(
        cy.xpath(this.requestCTAButtonContainer).should("contain", "Kembali")
      );
    }
  }

  assertRequestDataByRequestList() {
    cy.get("@requestListSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfo).should("contain", sourceID));
    });
    cy.get("@requestListRequestID").then((requestID) => {
      expect(cy.xpath(this.requestIDInfo).should("contain", requestID));
    });
    cy.get("@requestListTargetStore").then((targetStore) => {
      expect(cy.xpath(this.targetStoreInfo).should("contain", targetStore));
    });
    /**
     * FE still render incorrect format
    cy.get('@requestListDeliveryMethod').then(deliveryMethod => {
      expect(cy.xpath(this.deliveryMethodInfo).should("contain", deliveryMethod));
    });
    cy.get('@requestListDeliveryDate').then(deliveryDate => {
      expect(cy.xpath(this.deliveryDateInfo).should("contain", deliveryDate));
    });
     */

    cy.get("@requestListStatus").then((status) => {
      expect(cy.xpath(this.headerSubtextContainer).should("contain", status));
    });
  }
}
