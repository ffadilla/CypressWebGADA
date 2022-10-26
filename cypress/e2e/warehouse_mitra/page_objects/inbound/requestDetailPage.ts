import { setHasCompletedRequest } from "../../common/helper";
import BasePage from "../basePage";

export default class RequestDetailPage extends BasePage {
  path = "/inventory/inbound/request/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");

  requestHeaderXPath = '//div[contains(@class, "cardHeader")]';
  sourceIDInfoXPath = this.requestHeaderXPath + "/div/div[1]/span[1]";
  headerSubtextContainerXPath = this.requestHeaderXPath + "/div/div[2]";
  createdDateInfoXPath = this.requestHeaderXPath + "/div/div[2]/span[1]";
  requestIDInfoXPath = this.requestHeaderXPath + "/div/div[2]/span[2]";
  sourceCTAButtonXPath = this.requestHeaderXPath + "/div/div[3]/a/p";

  requestInfoXPath = '//div[contains(@class, "infoItems")]';
  sourceTypeInfoXPath = this.requestInfoXPath + "/div[1]/div[1]/div/div[2]";
  targetStoreInfoXPath = this.requestInfoXPath + "/div[1]/div[2]/div/div[2]";
  storeNameXPath = this.requestInfoXPath + "/div[1]/div[3]/div/div[2]";
  deliveryDateInfoXPath = this.requestInfoXPath + "/div[2]/div[1]/div/div[2]";
  deliveryMethodInfoXPath = this.requestInfoXPath + "/div[2]/div[2]/div/div[2]";
  warehouseNameXPath = this.requestInfoXPath + "/div[2]/div[3]/div/div[2]";

  tableHeaderContainerXPath = '//thead[contains(@class, "MuiTableHead-root")]';
  tableBodyContainerXPath = '//tbody[contains(@class, "MuiTableBody-root")]';
  productNameXPath = this.tableBodyContainerXPath + "/tr[index]/td[1]";
  productQtyXPath = this.tableBodyContainerXPath + "/tr[index]/td[2]";
  requestCTAButtonContainerXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[2]';

  invokeRequestDetail() {
    cy.xpath(this.requestIDInfoXPath)
      .invoke("text")
      .as("requestDetailRequestID");
    cy.xpath(this.sourceIDInfoXPath).invoke("text").as("requestDetailSourceID");
    cy.xpath(this.sourceTypeInfoXPath)
      .invoke("text")
      .as("requestDetailSourceType");
    cy.xpath(this.targetStoreInfoXPath)
      .invoke("text")
      .as("requestDetailTargetStore");
    cy.xpath(this.storeNameXPath).invoke("text").as("requestDetailStoreName");
    cy.xpath(this.deliveryDateInfoXPath)
      .invoke("text")
      .as("requestDetailDeliveryDate");
    cy.xpath(this.deliveryMethodInfoXPath)
      .invoke("text")
      .as("requestDetailDeliveryMethod");
    cy.xpath(this.warehouseNameXPath)
      .invoke("text")
      .as("requestDetailWarehouseName");
    cy.xpath(this.utils.replaceElementIndex(this.productNameXPath, 1))
      .invoke("text")
      .as("requestDetailProductName");
    cy.xpath(this.utils.replaceElementIndex(this.productQtyXPath, 1))
      .invoke("text")
      .as("requestDetailProductQty");
    /**
     * TO DO:
     * Invoke allocated product quantity
     */
  }

  clickCreateReceipt() {
    this.invokeRequestDetail();
    cy.xpath(this.requestCTAButtonContainerXPath)
      .contains("Terima Barang")
      .click();
  }

  clickSourceCTA() {
    this.invokeRequestDetail();
    cy.intercept("GET", "/inbound/sources/*/detail").as("sourceDetailAPI");
    cy.xpath(this.sourceCTAButtonXPath).click();
    cy.wait("@sourceDetailAPI").then(($API) => {
      for (let i = 0; i < $API.response?.body.inbound_requests.length; i++) {
        if ($API.response?.body.inbound_requests[i].status === true)
          setHasCompletedRequest(true);
      }
    });
  }

  assertRequestTableUI(status: string) {
    if (status === "Sudah Selesai") {
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .find("th")
          .should("have.length", 5)
      );
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .should("contain", "Nama Produk")
      );
      expect(
        cy.xpath(this.tableHeaderContainerXPath).should("contain", "Total Item")
      );
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .should("contain", "Barang yang Diterima")
      );
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .should("contain", "Total Perbedaan")
      );
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .should("contain", "Keterangan Perbedaan")
      );
    } else {
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .find("th")
          .should("have.length", 2)
      );
      expect(
        cy
          .xpath(this.tableHeaderContainerXPath)
          .should("contain", "Nama Produk")
      );
      expect(
        cy.xpath(this.tableHeaderContainerXPath).should("contain", "Total Item")
      );
    }
  }

  assertRequestButtonAndHeaderUI(status: string) {
    if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.headerSubtextContainerXPath)
          .find("span")
          .should("have.length", 3)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .find(".MuiButton-root")
          .should("have.length", 2)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .should("contain", "Kembali")
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .should("contain", "Terima Barang")
      );
    } else if (status === "Sedang Diproses" || status === "Sudah Selesai") {
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .should("contain", "Lihat Detail Penerimaan Barang")
      );
      expect(
        cy
          .xpath(this.headerSubtextContainerXPath)
          .find("span")
          .should("have.length", 4)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .find(".MuiButton-root")
          .should("have.length", 1)
      );
    } else if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.headerSubtextContainerXPath)
          .find("span")
          .should("have.length", 3)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .find(".MuiButton-root")
          .should("have.length", 1)
      );
      expect(
        cy
          .xpath(this.requestCTAButtonContainerXPath)
          .should("contain", "Kembali")
      );
    }
  }

  assertRequestUI(status: string) {
    cy.xpath(this.requestIDInfoXPath); //waiting for element to be rendered
    this.assertRequestButtonAndHeaderUI(status);
    this.assertRequestTableUI(status);
  }

  assertRequestDataByRequestList() {
    cy.get("@requestListSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfoXPath).should("contain", sourceID));
    });
    cy.get("@requestListRequestID").then((requestID) => {
      expect(cy.xpath(this.requestIDInfoXPath).should("contain", requestID));
    });
    cy.get("@requestListTargetStore").then((targetStore) => {
      expect(
        cy.xpath(this.targetStoreInfoXPath).should("contain", targetStore)
      );
    });
    cy.xpath(this.deliveryMethodInfoXPath).then((actualDeliveryMethod) => {
      expect(
        cy
          .get("@requestListDeliveryMethod")
          .should("contain", actualDeliveryMethod.text())
      );
    });
    /**
     * FE still render incorrect format
    cy.xpath(this.sourceTypeInfoXPath).invoke('text').then(($text) => {
        expect(cy.get('@requestListSourceType')
            .should('contain', $text.split(' - ', 1))
        );
      });
    cy.get('@requestListDeliveryDate').then(deliveryDate => {
      expect(cy.xpath(this.deliveryDateInfoXPath).should('contain', deliveryDate));
    });
     */

    cy.get("@requestListStatus").then((status) => {
      expect(
        cy.xpath(this.headerSubtextContainerXPath).should("contain", status)
      );
    });
  }

  assertRequestDataByInboundForm() {
    cy.get("@inboundFormSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfoXPath).should("contain", sourceID));
    });
    expect(cy.xpath(this.createdDateInfoXPath).should("contain", this.date));
    expect(
      cy
        .xpath(this.headerSubtextContainerXPath)
        .should("contain", "Belum Selesai")
    );
    cy.xpath(this.targetStoreInfoXPath).then((actualTargetStoreName) => {
      expect(
        cy
          .get("@inboundFormTargetStoreName")
          .should("contain", actualTargetStoreName.text())
      );
    });
    cy.get("@inboundFormStoreName").then((storeNameXPath) => {
      expect(cy.xpath(this.storeNameXPath).should("contain", storeNameXPath));
    });
    /**
     * FE still render incorrect format
    cy.get('@inboundFormSourceType').then((sourceType) => {
      expect(cy.xpath(this.sourceTypeInfoXPath).should('contain', sourceType));
    });
    cy.get('@inboundFormDeliveryDate').then((deliveryDate) => {
      let formattedDeliveryDate =
        this.utils.reformatDate(deliveryDate.toString(), 'YYYY-MM-DD', 'DD MMM YYYY');
      expect(cy.xpath(this.deliveryDateInfoXPath).should('contain', formattedDeliveryDate));
    });
    */
    cy.xpath(this.deliveryMethodInfoXPath).then((actualDeliveryMethod) => {
      expect(
        cy
          .get("@inboundFormDeliveryMethod")
          .should("contain", actualDeliveryMethod.text())
      );
    });
    cy.get("@inboundFormWarehouseName").then((warehouseNameXPath) => {
      expect(
        cy.xpath(this.warehouseNameXPath).should("contain", warehouseNameXPath)
      );
    });
    cy.xpath(this.utils.replaceElementIndex(this.productNameXPath, 1)).then(
      (actualProductName) => {
        expect(
          cy
            .get("@inboundFormFirstProductName")
            .should("contain", actualProductName.text())
        );
      }
    );
    cy.xpath(this.utils.replaceElementIndex(this.productQtyXPath, 1)).then(
      (actualProductQty) => {
        const strings = actualProductQty.text().split(" ");
        expect(
          cy.get("@inboundFormFirstProductName").should("contain", strings[1])
        );
        expect(
          cy.get("@inboundFormFirstProductQty").should("contain", strings[0])
        );
      }
    );
  }

  assertRequestDataByReceiptSubmission() {
    cy.get("@receiptDetailReceiptID").then((receiptID) => {
      expect(
        cy
          .xpath(this.headerSubtextContainerXPath)
          .find("span")
          .eq(2)
          .should("contain", receiptID)
      );
    });
    cy.get("@receiptDetailProductName").then((productNameXPath) => {
      expect(
        cy
          .xpath(this.tableBodyContainerXPath)
          .find("td")
          .eq(0)
          .should("contain", productNameXPath)
      );
    });
    cy.get("@receiptDetailProductQty").then((productQtyXPath) => {
      expect(
        cy
          .xpath(this.tableBodyContainerXPath)
          .find("td")
          .eq(1)
          .should("contain", productQtyXPath)
      );
    });
    cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
      cy.get("@receiptDetailAllocatedUOM").then((expDate) => {
        expect(
          cy
            .xpath(this.tableBodyContainerXPath)
            .find("td")
            .eq(2)
            .find("li")
            .should("contain", allocatedQty + " " + expDate)
        );
      });
    });
    cy.get("@receiptDetailDiscrepancyRemarks").then((remarks) => {
      expect(
        cy
          .xpath(this.tableBodyContainerXPath)
          .find("td")
          .eq(4)
          .should("contain", remarks)
      );
    });
  }
}
