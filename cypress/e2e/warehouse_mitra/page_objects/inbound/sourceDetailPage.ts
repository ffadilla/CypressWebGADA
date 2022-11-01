import { hasCompletedRequest } from "../../common/helper";
import BaseDetailPage from "../baseDetailPage";

export default class SourceDetailPage extends BaseDetailPage {
  path = "/inventory/inbound/request/source/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");

  sourceIDInfoXPath =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/form/div/div/div[2]/div[1]/h3';

  sourceDataContainerXPath =
    '(//div[contains(@class, "MuiGrid-container")])[1]';
  sourceTypeInfoXPath = this.sourceDataContainerXPath + "/div[1]/p[2]";
  sourceDateInfoXPath = this.sourceDataContainerXPath + "/div[2]/p[2]";
  storeNameInfoXPath = this.sourceDataContainerXPath + "/div[3]/p[2]";
  warehouseNameInfoXPath = this.sourceDataContainerXPath + "/div[4]/p[2]";
  targetstoreNameInfoXPath = this.sourceDataContainerXPath + "/div[5]/p[2]";
  targetStoreAddressInfoXPath = this.sourceDataContainerXPath + "/div[6]/p[2]";

  sourceProductContainerXPath =
    '(//div[contains(@class, "MuiGrid-container")])[2]';
  sourceProductNameInfoXPath =
    this.sourceProductContainerXPath + "/div[1]/p[2]";
  sourceProductQuantityInfoXPath =
    this.sourceProductContainerXPath + "/div[2]/div/p";
  requestHeaderContainer = ".productInfo";
  requestDeliveryContainer = ".formRequestBox";
  requestDeliveryMethodInfo =
    this.requestDeliveryContainer + "> div > :nth-child(1) > :nth-child(2)";
  requestDeliveryDateInfo =
    this.requestDeliveryContainer + "> div > :nth-child(2) > :nth-child(2)";

  requestProductDataContainerXPath =
    '(//div[contains(@class, "MuiGrid-container")])[4]';
  requestProductNameInfoXPath =
    this.requestProductDataContainerXPath + "/div[1]/p[2]";
  nonCompletedRequestProductQtyInfoXPath =
    this.requestProductDataContainerXPath + "/div[2]/p[2]";
  completedRequestProductQtyInfoXPath =
    this.requestProductDataContainerXPath + "/div[3]/p[2]";

  sourceButtons = ".MuiButtonBase-root";
  cancelPopupContent = ".MuiDialogContent-root";
  cancelPopupButtonContainer = ".MuiDialogActions-root";
  historicalReceptionContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[2]/div[2]/div';
  historyPopup = '[aria-labelledby="history-modal"]';
  historyAccordionHeader = "#panel1a-header";
  historyAccordionContent = "#panel1a-content";
  historyRequestID =
    this.historyAccordionContent +
    "> div > div > :nth-child(1) >  :nth-child(1) > :nth-child(1) > span";
  historyAccordionSubtitle =
    this.historyAccordionContent +
    "> div > div > :nth-child(1) >  :nth-child(1) > :nth-child(2)";
  historyProductName =
    this.historyAccordionContent +
    "> div > div > :nth-child(1) >  :nth-child(2) > div > :nth-child(2) > div";
  historyProductQty =
    this.historyAccordionContent +
    "> div > div > :nth-child(1) >  :nth-child(2) > div > :nth-child(3) > div > :nth-child(1) > div > div";
  historyAllocatedQty =
    this.historyAccordionContent +
    "> div > div > :nth-child(1) >  :nth-child(2) > div > :nth-child(3) > div > :nth-child(2) > div > div";
  inboundAttachmentFieldXPath =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[1]/div/div';
  RPBAttachmentFieldXPath =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[2]/div/div';
  vehicleAttachmentFieldXPath =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[3]/div/div';
  goodsAttachmentFieldXPath =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[4]/div/div';
  additionalAttachmentFieldXPath =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[4]/div/div';

  invokeSourceDetail() {
    cy.xpath(this.sourceIDInfoXPath).invoke("text").as("sourceDetailSourceID");
  }

  cancelSource() {
    let cancelPopupHeader = "Hapus Data Barang Masuk “{{SourceID}}”?";
    let cancelPopupBody =
      "Dengan menghapus, data permintaan barang masuk yang ada akan otomatis terhapus.";
    this.invokeSourceDetail();

    cy.get(this.sourceButtons).contains("Hapus Barang Masuk").click();
    cy.get("@sourceDetailSourceID").then((sourceID) => {
      cy.get(this.cancelPopupContent)
        .find("p")
        .should(
          "contain",
          cancelPopupHeader.split("{{SourceID}}").join(String(sourceID))
        )
        .should("contain", cancelPopupBody);
    });
    cy.get(this.cancelPopupButtonContainer)
      .find("button")
      .contains("Hapus")
      .click();
  }

  clickHistoryCTA() {
    cy.xpath(this.historicalReceptionContainer)
      .find(this.sourceButtons)
      .contains("Lihat Detail")
      .click();
  }

  downloadSourceAttachment(value: string) {
    let expectedAttachmentXPath = "";
    let expectedAttachmentURL = "";
    switch (value) {
      case "Surat Jalan":
        expectedAttachmentXPath = this.inboundAttachmentFieldXPath;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/INBOUND_PICTURE/**";
        break;
      case "RPB":
        expectedAttachmentXPath = this.RPBAttachmentFieldXPath;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/RPB_PICTURE/**";
        break;
      case "Plat Kendaraan":
        expectedAttachmentXPath = this.vehicleAttachmentFieldXPath;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/VEHICLE_PICTURE/**";
        break;
      case "Kiriman Barang":
        expectedAttachmentXPath = this.goodsAttachmentFieldXPath;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/GOODS_PICTURE/**";
        break;
      case "Dokumen Lainnya":
        expectedAttachmentXPath = this.additionalAttachmentFieldXPath;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/ADDITIONAL_FILE/**";
        break;
    }

    this.downloadAttachment(expectedAttachmentXPath, expectedAttachmentURL);
  }

  closeHistoryPopup() {
    cy.get(this.historyPopup)
      .find(this.sourceButtons)
      .contains("Kembali")
      .click({ force: true });
  }

  assertSourceUI(requestStatus: string) {
    if (requestStatus === "Dibatalkan") {
      expect(cy.get(this.requestHeaderContainer).should("not.exist"));
      expect(cy.xpath(this.historicalReceptionContainer).should("not.exist"));
    } else {
      expect(cy.get(this.requestHeaderContainer).should("exist"));
      if (requestStatus === "Sudah Selesai" || hasCompletedRequest()) {
        expect(cy.xpath(this.historicalReceptionContainer).should("exist"));
      } else {
        expect(cy.xpath(this.historicalReceptionContainer).should("not.exist"));
      }
    }
  }

  assertRequestData(requestStatus: string) {
    cy.get("@requestDetailRequestID").then((requestID) => {
      let processedRequestID = String(requestID).trim().split(" - ")[0];
      cy.get(this.requestHeaderContainer)
        .contains(processedRequestID)
        .parent()
        .parent()
        .parent()
        .parent()
        .within(() => {
          cy.get(this.requestHeaderContainer).should(
            "contain",
            processedRequestID
          );
          cy.get(this.requestHeaderContainer).should("contain", requestStatus);
          cy.get("@requestDetailDeliveryMethod").then((deliveryMethod) => {
            expect(
              cy
                .get(this.requestDeliveryMethodInfo)
                .should("contain", deliveryMethod)
            );
          });
          /**
           * FE still render incorrect format
          cy.get(this.requestDeliveryDateContainer)
            .invoke("text")
            .then((actualDeliveryDate) => {
              expect(
                cy
                  .get("@requestDetailDeliveryDate")
                  .should("contain", actualDeliveryDate)
              );
            });
           */
          cy.get("@requestDetailProductName").then((productName) => {
            expect(
              cy
                .xpath(this.requestProductNameInfoXPath)
                .should("contain", productName)
            );
          });
          if (requestStatus === "Sudah Selesai") {
            cy.get("@requestDetailProductQty").then((productQty) => {
              expect(
                cy
                  .xpath(this.completedRequestProductQtyInfoXPath)
                  .should("contain", String(productQty).split(" ")[0])
              );
            });
          } else {
            cy.get("@requestDetailProductQty").then((productQty) => {
              expect(
                cy
                  .xpath(this.nonCompletedRequestProductQtyInfoXPath)
                  .should("contain", String(productQty).split(" ")[0])
              );
            });
          }
        });
    });
  }

  assertSourceDataByRequestDetail(requestStatus: string) {
    cy.get("@requestDetailSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfoXPath).should("contain", sourceID));
    });
    /*
       * FE still render incorrect format
      cy.xpath(this.sourceTypeInfoXPath)
        .invoke("text")
        .then((actualSourceType) => {
          expect(
            cy.get("@requestDetailSourceType").should("contain", actualSourceType)
          );
        });
        */
    cy.get("@requestDetailStoreName").then((storeName) => {
      expect(cy.xpath(this.storeNameInfoXPath).should("contain", storeName));
    });
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      expect(
        cy.xpath(this.warehouseNameInfoXPath).should("contain", warehouseName)
      );
    });
    cy.get("@requestDetailTargetStore").then((targetStore) => {
      expect(
        cy.xpath(this.targetstoreNameInfoXPath).should("contain", targetStore)
      );
    });

    if (requestStatus === "Dibatalkan") return;
    this.assertRequestData(requestStatus);
  }

  assertSourceDataByInboundForm() {
    cy.get("@inboundFormSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfoXPath).should("contain", sourceID));
    });
    cy.xpath(this.sourceTypeInfoXPath)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@inboundFormSourceType").should("contain", actualSourceType)
        );
      });
    cy.get("@inboundFormStoreName").then((storeName) => {
      expect(cy.xpath(this.storeNameInfoXPath).should("contain", storeName));
    });
    cy.get("@inboundFormWarehouseName").then((warehouseName) => {
      expect(
        cy.xpath(this.warehouseNameInfoXPath).should("contain", warehouseName)
      );
    });
    cy.xpath(this.targetstoreNameInfoXPath)
      .invoke("text")
      .then((actualTargetStoreName) => {
        expect(
          cy
            .get("@inboundFormTargetStoreName")
            .should("contain", actualTargetStoreName)
        );
      });
    cy.get("@inboundFormTargetStoreAddress").then((targetStoreAddress) => {
      expect(
        cy
          .xpath(this.targetStoreAddressInfoXPath)
          .should("contain", targetStoreAddress)
      );
    });
    cy.get("@inboundFormSourceDate").then((sourceDate) => {
      let strSourceDate = String(sourceDate);
      let formattedSourceDate = this.utils.reformatDate(
        strSourceDate,
        "YYYY-MM-DD",
        "DD MMM YYYY"
      );
      expect(
        cy
          .xpath(this.sourceDateInfoXPath)
          .should("contain", formattedSourceDate)
      );
    });
    cy.xpath(this.sourceProductNameInfoXPath)
      .invoke("text")
      .then((actualProductName) => {
        expect(
          cy
            .get("@inboundFormFirstProductName")
            .should("contain", actualProductName)
        );
      });
    cy.xpath(this.sourceProductQuantityInfoXPath)
      .invoke("text")
      .then((actualProductQty) => {
        expect(
          cy
            .get("@inboundFormFirstProductQty")
            .should("contain", actualProductQty)
        );
      });
    this.assertRequestData("Belum Selesai");
  }

  assertHistoryDataByRequestDetail() {
    cy.get("@requestDetailRequestID").then((requestID) => {
      expect(
        cy
          .get(this.historyRequestID)
          .should("contain", String(requestID).trim())
      );
    });
    /**
     * FE still renders incorrect date format
    cy.get('@requestDetailDeliveryDate').then((deliveryDate) => {
      expect(
        cy.get(this.historyAccordionSubtitle)
          .find('span').eq(0)
          .should('contain', deliveryDate)
      );
    }); 
     */
    expect(
      cy
        .get(this.historyAccordionSubtitle)
        .find("span")
        .eq(2)
        .should("contain", "Sudah Selesai")
    );
    cy.get("@requestDetailProductName").then((productName) => {
      expect(cy.get(this.historyProductName).should("contain", productName));
    });
    cy.get("@requestDetailProductQty").then((productQty) => {
      expect(cy.get(this.historyProductQty).should("contain", productQty));
    });
  }

  assertHistoryDataByReceiptSubmission() {
    let processedDate =
      this.date.charAt(0) === "0" ? this.date.substring(1) : this.date;

    cy.get(this.historyAccordionHeader)
      .find("div")
      .contains("Diterima ")
      .invoke("text")
      .should("contain", "Diterima " + processedDate);
    cy.get(this.historyAccordionHeader)
      .find("div")
      .contains("Oleh ")
      .invoke("text")
      .then((accordionSubHeader) => {
        expect(
          cy
            .xpath(this.xPathAccountDropdown)
            .find("p")
            .should("contain", String(accordionSubHeader).replace("Oleh ", ""))
        );
      });
    cy.get("@receiptDetailRequestID").then((requestID) => {
      expect(
        cy
          .get(this.historyRequestID)
          .should("contain", String(requestID).trim())
      );
    });
    cy.get("@receiptDetailDeliveryDate").then((deliveryDate) => {
      expect(
        cy
          .get(this.historyAccordionSubtitle)
          .find("span")
          .eq(0)
          .should("contain", deliveryDate)
      );
    });
    cy.get("@receiptDetailReceiptID").then((receiptID) => {
      expect(
        cy
          .get(this.historyAccordionSubtitle)
          .find("span")
          .eq(1)
          .should("contain", receiptID)
      );
    });
    expect(
      cy
        .get(this.historyAccordionSubtitle)
        .find("span")
        .eq(2)
        .should("contain", "Sudah Selesai")
    );
    cy.get("@receiptDetailProductName").then((productName) => {
      expect(cy.get(this.historyProductName).should("contain", productName));
    });
    cy.get("@receiptDetailProductQty").then((productQty) => {
      expect(cy.get(this.historyProductQty).should("contain", productQty));
    });
    cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
      cy.get("@receiptDetailAllocatedUOM").then((allocatedUOM) => {
        expect(
          cy
            .get(this.historyAllocatedQty)
            .should("contain", allocatedQty + " " + allocatedUOM)
        );
      });
    });
  }
}
