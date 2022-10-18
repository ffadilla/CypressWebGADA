import { setHasCompletedRequest } from "../../common/helper";
import BasePage from "../basePage";

export default class RequestDetailPage extends BasePage {
  path = "/inventory/inbound/request/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");
  sourceIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[1]/span[1]';
  headerSubtextContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[2]';
  createdDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[2]/span[1]';
  requestIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[2]/span[2]';
  sourceCTAButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div/div[3]/a/p';
  sourceTypeInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/div/div[2]';
  targetStoreInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[2]/div/div[2]';
  storeName =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[3]/div/div[2]';
  deliveryDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div[2]';
  deliveryMethodInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/div/div[2]';
  warehouseName =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div[2]/div[3]/div/div[2]';
  tableHeaderContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/thead/tr';
  tableBodyContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/tbody';
  requestCTAButtonContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[2]';

  invokeRequestDetail() {
    cy.xpath(this.requestIDInfo).invoke("text").as("requestDetailRequestID");
    cy.xpath(this.sourceIDInfo).invoke("text").as("requestDetailSourceID");
    cy.xpath(this.sourceTypeInfo).invoke("text").as("requestDetailSourceType");
    cy.xpath(this.targetStoreInfo)
      .invoke("text")
      .as("requestDetailTargetStore");
    cy.xpath(this.storeName).invoke("text").as("requestDetailStoreName");
    cy.xpath(this.deliveryDateInfo)
      .invoke("text")
      .as("requestDetailDeliveryDate");
    cy.xpath(this.deliveryMethodInfo)
      .invoke("text")
      .as("requestDetailDeliveryMethod");
    cy.xpath(this.warehouseName)
      .invoke("text")
      .as("requestDetailWarehouseName");
    cy.xpath(this.tableBodyContainer + "/tr[1]/td[1]")
      .invoke("text")
      .as("requestDetailProductName");
    cy.xpath(this.tableBodyContainer + "/tr[1]/td[2]")
      .invoke("text")
      .as("requestDetailProductQty");
    /**
     * TO DO:
     * Invoke allocated product quantity
     */
  }

  clickCreateReceipt() {
    this.invokeRequestDetail();
    cy.xpath(this.requestCTAButtonContainer).contains("Terima Barang").click();
  }

  clickSourceCTA() {
    this.invokeRequestDetail();
    cy.intercept("GET", "/inbound/sources/*/detail").as("sourceDetailAPI");
    cy.xpath(this.sourceCTAButton).click();
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
  }

  assertRequestButtonAndHeaderUI(status: string) {
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

  assertRequestUI(status: string) {
    cy.xpath(this.requestIDInfo); //waiting for element to be rendered
    this.assertRequestButtonAndHeaderUI(status);
    this.assertRequestTableUI(status);
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
    cy.xpath(this.deliveryMethodInfo).then((actualDeliveryMethod) => {
      expect(
        cy
          .get("@requestListDeliveryMethod")
          .should("contain", actualDeliveryMethod.text())
      );
    });
    /**
     * FE still render incorrect format
    cy.xpath(this.sourceTypeInfo).invoke('text').then(($text) => {
        expect(cy.get('@requestListSourceType')
            .should('contain', $text.split(' - ', 1))
        );
      });
    cy.get('@requestListDeliveryDate').then(deliveryDate => {
      expect(cy.xpath(this.deliveryDateInfo).should('contain', deliveryDate));
    });
     */

    cy.get("@requestListStatus").then((status) => {
      expect(cy.xpath(this.headerSubtextContainer).should("contain", status));
    });
  }

  assertRequestDataByInboundForm() {
    cy.get("@inboundFormSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfo).should("contain", sourceID));
    });
    expect(cy.xpath(this.createdDateInfo).should("contain", this.date));
    expect(
      cy.xpath(this.headerSubtextContainer).should("contain", "Belum Selesai")
    );
    cy.xpath(this.targetStoreInfo).then((actualTargetStoreName) => {
      expect(
        cy
          .get("@inboundFormTargetStoreName")
          .should("contain", actualTargetStoreName.text())
      );
    });
    cy.get("@inboundFormStoreName").then((storeName) => {
      expect(cy.xpath(this.storeName).should("contain", storeName));
    });
    /**
     * FE still render incorrect format
    cy.get('@inboundFormSourceType').then((sourceType) => {
      expect(cy.xpath(this.sourceTypeInfo).should('contain', sourceType));
    });
    cy.get('@inboundFormDeliveryDate').then((deliveryDate) => {
      let formattedDeliveryDate =
        this.utils.reformatDate(deliveryDate.toString(), 'YYYY-MM-DD', 'DD MMM YYYY');
      expect(cy.xpath(this.deliveryDateInfo).should('contain', formattedDeliveryDate));
    });
    */
    cy.xpath(this.deliveryMethodInfo).then((actualDeliveryMethod) => {
      expect(
        cy
          .get("@inboundFormDeliveryMethod")
          .should("contain", actualDeliveryMethod.text())
      );
    });
    cy.get("@inboundFormWarehouseName").then((warehouseName) => {
      expect(cy.xpath(this.warehouseName).should("contain", warehouseName));
    });
    cy.xpath(this.tableBodyContainer + "/tr[1]/td[1]").then(
      (actualProductName) => {
        expect(
          cy
            .get("@inboundFormFirstProductName")
            .should("contain", actualProductName.text())
        );
      }
    );
    cy.xpath(this.tableBodyContainer + "/tr[1]/td[2]").then(
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
          .xpath(this.headerSubtextContainer)
          .find("span")
          .eq(2)
          .should("contain", receiptID)
      );
    });
    cy.get("@receiptDetailProductName").then((productName) => {
      expect(
        cy
          .xpath(this.tableBodyContainer)
          .find("td")
          .eq(0)
          .should("contain", productName)
      );
    });
    cy.get("@receiptDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.tableBodyContainer)
          .find("td")
          .eq(1)
          .should("contain", productQty)
      );
    });
    cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
      cy.get("@receiptDetailAllocatedUOM").then((expDate) => {
        expect(
          cy
            .xpath(this.tableBodyContainer)
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
          .xpath(this.tableBodyContainer)
          .find("td")
          .eq(4)
          .should("contain", remarks)
      );
    });
  }
}
