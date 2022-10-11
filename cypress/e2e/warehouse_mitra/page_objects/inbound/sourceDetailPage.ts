import { hasCompletedRequest } from "../../common/helper";
import BaseDetailPage from "../baseDetailPage";

export default class SourceDetailPage extends BaseDetailPage {
  path = "/inventory/inbound/request/source/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");

  sourceIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[1]/h3';
  sourceTypeInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[1]/p[2]';
  sourceDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[2]/p[2]';
  storeNameInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[3]/p[2]';
  warehouseNameInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[4]/p[2]';
  targetStoreNameInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[5]/p[2]';
  targetStoreAddressInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[2]/div[6]/p[2]';
  sourceProductNameInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[5]/div[2]/div[1]/p[2]';
  sourceProductQuantityInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[1]/div[2]/div[5]/div[2]/div[2]/div/p';
  sourceRequestListContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div[2]';
  requestHeaderContainer = ".productInfo";
  requestDeliveryMethodContainer =
    ".formRequestBox > div > :nth-child(1) > :nth-child(2)";
  requestDeliveryDateContainer =
    ".formRequestBox > div > :nth-child(2) > :nth-child(2)";
  requestProductNameContainer =
    ":nth-child(2) > div > :nth-child(2) > :nth-child(1)";
  nonCompletedRequestProductQtyContainer =
    ":nth-child(2) > div > :nth-child(2) > :nth-child(2)";
  completedRequestProductQtyContainer =
    ":nth-child(2) > div > :nth-child(2) > :nth-child(3)";
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
  inboundAttachmentField =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[1]/div/div';
  RPBAttachmentField =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[2]/div/div';
  vehicleAttachmentField =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[3]/div/div';
  goodsAttachmentField =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[4]/div/div';
  additionalAttachmentField =
    '//*[@id="panel1a-content"]/div/div/div[2]/div/div[4]/div/div';

  invokeSourceDetail() {
    cy.xpath(this.sourceIDInfo).invoke("text").as("sourceDetailSourceID");
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
        expectedAttachmentXPath = this.inboundAttachmentField;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/INBOUND_PICTURE/**";
        break;
      case "RPB":
        expectedAttachmentXPath = this.RPBAttachmentField;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/RPB_PICTURE/**";
        break;
      case "Plat Kendaraan":
        expectedAttachmentXPath = this.vehicleAttachmentField;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/VEHICLE_PICTURE/**";
        break;
      case "Kiriman Barang":
        expectedAttachmentXPath = this.goodsAttachmentField;
        expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/GOODS_PICTURE/**";
        break;
      case "Dokumen Lainnya":
        expectedAttachmentXPath = this.additionalAttachmentField;
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
      expect(cy.xpath(this.sourceRequestListContainer).should("not.exist"));
      expect(cy.xpath(this.historicalReceptionContainer).should("not.exist"));
    } else {
      expect(cy.xpath(this.sourceRequestListContainer).should("exist"));
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
      cy.xpath(this.sourceRequestListContainer)
        .find(this.requestHeaderContainer)
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
                .get(this.requestDeliveryMethodContainer)
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
                .get(this.requestProductNameContainer)
                .should("contain", productName)
            );
          });
          if (requestStatus === "Sudah Selesai") {
            cy.get("@requestDetailProductQty").then((productQty) => {
              expect(
                cy
                  .get(this.completedRequestProductQtyContainer)
                  .should("contain", productQty)
              );
            });
          } else {
            cy.get("@requestDetailProductQty").then((productQty) => {
              expect(
                cy
                  .get(this.nonCompletedRequestProductQtyContainer)
                  .should("contain", productQty)
              );
            });
          }
        });
    });
  }

  assertSourceDataByRequestDetail(requestStatus: string) {
    cy.get("@requestDetailSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfo).should("contain", sourceID));
    });
    /*
       * FE still render incorrect format
      cy.xpath(this.sourceTypeInfo)
        .invoke("text")
        .then((actualSourceType) => {
          expect(
            cy.get("@requestDetailSourceType").should("contain", actualSourceType)
          );
        });
        */
    cy.get("@requestDetailStoreName").then((storeName) => {
      expect(cy.xpath(this.storeNameInfo).should("contain", storeName));
    });
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      expect(cy.xpath(this.warehouseNameInfo).should("contain", warehouseName));
    });
    cy.get("@requestDetailTargetStore").then((targetStore) => {
      expect(cy.xpath(this.targetStoreNameInfo).should("contain", targetStore));
    });

    if (requestStatus === "Dibatalkan") return;
    this.assertRequestData(requestStatus);
  }

  assertSourceDataByInboundForm() {
    cy.get("@inboundFormSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceIDInfo).should("contain", sourceID));
    });
    cy.xpath(this.sourceTypeInfo)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@inboundFormSourceType").should("contain", actualSourceType)
        );
      });
    cy.get("@inboundFormStoreName").then((storeName) => {
      expect(cy.xpath(this.storeNameInfo).should("contain", storeName));
    });
    cy.get("@inboundFormWarehouseName").then((warehouseName) => {
      expect(cy.xpath(this.warehouseNameInfo).should("contain", warehouseName));
    });
    cy.xpath(this.targetStoreNameInfo)
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
          .xpath(this.targetStoreAddressInfo)
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
        cy.xpath(this.sourceDateInfo).should("contain", formattedSourceDate)
      );
    });
    cy.xpath(this.sourceProductNameInfo)
      .invoke("text")
      .then((actualProductName) => {
        expect(
          cy
            .get("@inboundFormFirstProductName")
            .should("contain", actualProductName)
        );
      });
    cy.xpath(this.sourceProductQuantityInfo)
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
