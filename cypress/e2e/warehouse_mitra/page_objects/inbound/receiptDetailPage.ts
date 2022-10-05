import BasePage from "../basePage";

export default class ReceiptDetailPage extends BasePage {
  path = "/inventory/inbound/receipt/detail";
  date = this.utils.generateDateTime(0, "DD MMM YYYY");
  receiptIDPrefix = "IN/" + this.utils.generateDateTime(0, "MMYY") + "00";
  downloadedFileDir = "";
  expectedAttachmentXPath = "";
  expectedAttachmentURL = "";

  receiptIDInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/p';
  createdDateInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[1]';
  sourceInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[2]';
  requestInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/p[3]';
  receiptStatusInfo =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div/div/span';
  printableDocButton =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[1]/div[2]/span/button';
  attachmentContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div';
  inboundAttachmentField =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[1]/div/div';
  RPBAttachmentField =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[2]/div/div';
  vehicleAttachmentField =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[3]/div/div';
  goodsAttachmentField =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[4]/div/div';
  additionalAttachmentField =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[1]/div[5]/div/div';
  receiptCTAButtonContainer =
    '//*[@id="__next"]/div/div[3]/div[2]/div/div[3]/div[2]/div/div[2]';
  nonAccessibleInfo = '//*[@id="__next"]/div/div[3]/div[2]/div/p';

  singleRequestInfo = {
    sourceTypeInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[1]/p[2]',
    targetStoreInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[2]/div[1]/p[2]',
    storeName:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[3]/div[1]/p[2]',
    deliveryDateInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[1]/div[2]/p[2]',
    deliveryMethodInfo:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[2]/div[2]/p[2]',
    warehouseName:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[1]/div[2]/div/div/div[3]/div[2]/p[2]',
    tableHeaderContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/thead/tr',
    tableBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[1]/table/tbody',
    productNameBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[1]',
    productQtyBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[2]',
    allocatedInputBodyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]',
    allocatedQtyField:
      '[name="inbound_requests[0].product_variant_request_items[0].active_unit_items[0].allocated_quantity"]',
    substractAllocatedQtyButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[1]/div/div/div[1]/button[1]',
    addAllocatedQtyButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[1]/div/div/div[1]/button[2]',
    allocatedUOMDropdown:
      '[id="mui-component-select-inbound_requests[0].product_variant_request_items[0].active_unit_items[0].product_unit_id"]',
    addAllocatedUOMButton:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div[2]/span/button',
    expDateContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[4]',
    expiryDateDropdown:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[4]/div/div/div/div',
    discrepancyQtyContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[5]',
    discrepancyRemarksContainer:
      '//*[@id="__next"]/div/div[3]/div[2]/div/div[2]/div[3]/table/tbody/tr[1]/td[6]',
    discrepancyRemarksField:
      '[name="inbound_requests[0].product_variant_request_items[0].rejected_reason"]',
    partialCheckbox: '[name="inbound_requests[0].is_partial"]',
  };

  dropdownOptions = 'li[role="option"]';
  attachmentKebabButton = '[data-testid="MoreVertIcon"]';
  popoverContainer = ".MuiPopover-paper";
  popoverItem = 'li[role="menuitem"]';
  popupHeader = ".MuiDialogTitle-root";
  popupContent = ".MuiDialogContent-root";
  popupCTAContainer = ".MuiDialogActions-root";

  switchAttachment(value: string): string {
    switch (value) {
      case "Surat Jalan":
        this.expectedAttachmentXPath = this.inboundAttachmentField;
        this.expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/INBOUND_PICTURE/**";
        break;
      case "RPB":
        this.expectedAttachmentXPath = this.RPBAttachmentField;
        this.expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/RPB_PICTURE/**";
        break;
      case "Plat Kendaraan":
        this.expectedAttachmentXPath = this.vehicleAttachmentField;
        this.expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/VEHICLE_PICTURE/**";
        break;
      case "Kiriman Barang":
        this.expectedAttachmentXPath = this.goodsAttachmentField;
        this.expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/GOODS_PICTURE/**";
        break;
      case "Dokumen Lainnya":
        this.expectedAttachmentXPath = this.additionalAttachmentField;
        this.expectedAttachmentURL = "/IMAGE_UPLOAD/INBOUND/ADDITIONAL_FILE/**";
        break;
    }
    return "";
  }

  invokeReceiptDetail() {
    cy.xpath(this.receiptCTAButtonContainer); //waiting detail page rendering
    cy.xpath(this.receiptIDInfo).invoke("text").as("receiptDetailReceiptID");
    cy.xpath(this.singleRequestInfo.productNameBodyContainer)
      .invoke("text")
      .as("receiptDetailProductName");
    cy.xpath(this.singleRequestInfo.productQtyBodyContainer)
      .invoke("text")
      .as("receiptDetailProductQty");
    cy.get(this.singleRequestInfo.allocatedQtyField)
      .invoke("val")
      .as("receiptDetailAllocatedQty");
    cy.get(this.singleRequestInfo.allocatedUOMDropdown)
      .invoke("text")
      .as("receiptDetailAllocatedUOM");
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainer)
      .invoke("text")
      .then((text) => {
        if (text === "-") cy.wrap(text).as("receiptDetailDiscrepancyRemarks");
        else
          cy.get(this.singleRequestInfo.discrepancyRemarksField)
            .invoke("val")
            .as("receiptDetailDiscrepancyRemarks");
      });
  }

  downloadPrintableDoc() {
    cy.server()
      .route("GET", "/inbound/receipts/**/download/")
      .as("printableDocAPI");
    cy.xpath(this.printableDocButton)
      .click()
      .wait("@printableDocAPI")
      .then(($API) => {
        cy.wrap($API.response?.body.document_url).as("printableDocURL");
      });

    cy.get("@printableDocURL").then((url) => {
      this.downloadedFileDir =
        "cypress/downloads/" +
        String(url).replace(
          "https://warehouse-uploads-dev.gudangada.com/INBOUND/INBOUND_PICTURE/PDF/",
          ""
        );
      cy.readFile(this.downloadedFileDir, { timeout: 10000 }).should("exist");
    });
  }

  setAllocatedQuantity(value: string) {
    cy.get(this.singleRequestInfo.allocatedQtyField).clear().type(value);
  }

  clickReduceAllocatedQty() {
    cy.xpath(this.singleRequestInfo.substractAllocatedQtyButton).click();
  }

  selectExpDate(value: string) {
    /**
     * TO DO
     * Check has expiry date on selected product variant through API
     */
    cy.xpath(this.singleRequestInfo.expiryDateDropdown).click();
    cy.get(this.dropdownOptions).contains(value).click();
  }

  setDiscrepancyRemarks(value: string) {
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainer).type(value);
  }

  clickPartialChecklist() {
    cy.get(this.singleRequestInfo.partialCheckbox).click();
  }

  setAttachment(value: string) {
    this.switchAttachment(value);

    cy.xpath(this.expectedAttachmentXPath)
      .find("input")
      .selectFile(this.downloadedFileDir, { force: true });
    cy.xpath(this.expectedAttachmentXPath)
      .find("svg")
      .should("have.attr", "data-testid")
      .and("equal", "DescriptionOutlinedIcon");
  }

  downloadAttachment(value: string) {
    this.switchAttachment(value);

    cy.xpath(this.expectedAttachmentXPath)
      .click({ force: true })
      .within(() => {
        cy.get(this.attachmentKebabButton).click();
      });
    cy.intercept("GET", this.expectedAttachmentURL).as("downloadAttachmentAPI");
    cy.get("body")
      .find(this.popoverContainer)
      .last()
      .find(this.popoverItem)
      .contains("Unduh")
      .click()
      .wait("@downloadAttachmentAPI")
      .then((API) => {
        expect(cy.wrap(API.response?.statusCode).should("equal", 200));
      });
  }

  cancelReceipt() {
    let cancelPopupHeader =
      "Batalkan Data Penerimaan Barang Masuk “{{ReceiptID}}”?";

    this.invokeReceiptDetail();
    cy.xpath(this.receiptCTAButtonContainer)
      .contains("Batalkan Penerimaan Barang")
      .click();
    cy.get("@receiptDetailReceiptID").then((receiptID) => {
      let processedReceiptID = String(receiptID).split(
        " (No. Penerimaan Barang)"
      )[0];
      cy.get(this.popupHeader)
        .find("p")
        .should(
          "contain",
          cancelPopupHeader.split("{{ReceiptID}}").join(processedReceiptID)
        );
    });
    cy.get(this.popupCTAContainer).find("button").contains("Batalkan").click();
  }

  submitReceipt() {
    this.invokeReceiptDetail();
    cy.xpath(this.receiptCTAButtonContainer).contains("Submit").click();
  }

  confirmReceiptSubmission() {
    let submissionPopupHeader = "Submit Proses Penerimaan Stok?";
    let submissionPopupContent =
      "Total stok order yang Anda terima akan disimpan ke dalam inventori gudang dan tidak bisa diubah lagi.";

    cy.get(this.popupHeader).find("p").should("contain", submissionPopupHeader);
    cy.get(this.popupContent)
      .find("p")
      .should("contain", submissionPopupContent);
    cy.intercept("PUT", "/inbound/receipts/**/bulk-submit/").as(
      "submitReceiptAPI"
    );
    cy.get(this.popupCTAContainer).find("button").contains("Simpan").click();

    // check auto roll-up popup
    cy.wait("@submitReceiptAPI", { timeout: 10000 }).then((API) => {
      let autoRollUpPopupHeader = "Konfirmasi Penyesuaian Stok Otomatis";
      let autoRollupPopupSubHeader =
        "Terdapat penyesuaian stok secara otomatis terhadap produk-produk di bawah ini. Jika jumlah perhitungannya tidak sesuai, silakan sesuaikan stok secara manual.";

      if (API.response?.body.auto_roll_up[0]) {
        cy.get(this.popupHeader)
          .find("p")
          .should("contain", autoRollUpPopupHeader)
          .should("contain", autoRollupPopupSubHeader);
        cy.get("@receiptDetailProductName").then((productName) => {
          cy.get(this.popupContent)
            .find("td")
            .eq(0)
            .should("contain", productName);
        });
        cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
          cy.get("@receiptDetailAllocatedUOM").then((expDate) => {
            cy.get(this.popupContent)
              .find("td")
              .eq(1)
              .should("contain", allocatedQty + " " + expDate);
          });
        });
        cy.get("@receiptDetailProductQty").then((productQty) => {
          cy.get(this.popupContent)
            .find("td")
            .eq(1)
            .should("contain", "Dari order " + productQty);
        });
        cy.get(this.popupCTAContainer).contains("Konfirmasi Stok").click();
      }
    });
  }

  assertErrorAllocatedQty() {
    let emptyErrorMessage = "Harap masukkan jumlah produk yang diterima";
    cy.xpath(this.singleRequestInfo.allocatedInputBodyContainer)
      .find("p")
      .should("contain", emptyErrorMessage);
  }

  assertErrorExpDate() {
    let emptyErrorMessage = "Harap pilih tanggal expired";
    cy.xpath(this.singleRequestInfo.expDateContainer)
      .find("p")
      .should("contain", emptyErrorMessage);
  }

  assertErrorDiscrepancyRemark() {
    let emptyErrorMessage =
      "Harap masukkan keterangan untuk perbedaan jumlah barang";
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainer)
      .find("p")
      .should("contain", emptyErrorMessage);
  }

  assertErrorAttachments() {
    let emptyErrorMessage = "Harap upload foto Surat Jalan";
    cy.xpath(this.attachmentContainer).should("contain", emptyErrorMessage);
  }

  assertReceiptDataByReceiptList() {
    cy.get("@receiptListReceiptID").then((receiptID) => {
      expect(cy.xpath(this.receiptIDInfo).should("contain", receiptID));
    });
    cy.get("@receiptListCreatedDate").then((createdDate) => {
      expect(cy.xpath(this.createdDateInfo).should("contain", createdDate));
    });
    cy.get("@receiptListSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceInfo).should("contain", sourceID));
    });
    cy.get("@receiptListRequestID").then((requestID) => {
      expect(cy.xpath(this.requestInfo).should("contain", requestID));
    });
    cy.get("@receiptListStatus").then((status) => {
      expect(cy.xpath(this.receiptStatusInfo).should("contain", status));
    });
    cy.xpath(this.singleRequestInfo.sourceTypeInfo)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@receiptListSourceType").should("contain", actualSourceType)
        );
      });
    cy.xpath(this.singleRequestInfo.deliveryDateInfo)
      .invoke("text")
      .then((actualDeliveryDate) => {
        expect(
          cy
            .get("@receiptListDeliveryDate")
            .should("contain", actualDeliveryDate)
        );
      });
    cy.get("@receiptListTargetStore").then((targetStore) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.targetStoreInfo)
          .should("contain", targetStore)
      );
    });
    cy.get("@receiptListDeliveryMethod").then((deliveryMethod) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.deliveryMethodInfo)
          .should("contain", deliveryMethod)
      );
    });
  }

  assertReceiptDataByReceiptSubmission() {
    cy.get("@receiptDetailReceiptID").then((receiptID) => {
      expect(cy.xpath(this.receiptIDInfo).should("contain", receiptID));
    });
    cy.get("@receiptDetailProductName").then((productName) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productNameBodyContainer)
          .should("contain", productName)
      );
    });
    cy.get("@receiptDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productQtyBodyContainer)
          .should("contain", productQty)
      );
    });
    cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
      cy.get("@receiptDetailAllocatedUOM").then((expDate) => {
        expect(
          cy
            .xpath(this.singleRequestInfo.allocatedInputBodyContainer)
            .should("contain", allocatedQty + " " + expDate)
        );
      });
    });
    cy.get("@receiptDetailDiscrepancyRemarks").then((remarks) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.discrepancyRemarksContainer)
          .should("contain", remarks)
      );
    });
  }

  assertReceiptDataByRequestDetail() {
    expect(
      cy.xpath(this.receiptIDInfo).should("contain", this.receiptIDPrefix)
    );
    expect(cy.xpath(this.createdDateInfo).should("contain", this.date));
    cy.get("@requestDetailSourceID").then((sourceID) => {
      expect(cy.xpath(this.sourceInfo).should("contain", sourceID));
    });
    cy.xpath(this.requestInfo)
      .invoke("text")
      .then((actualRequestID) => {
        expect(
          cy.get("@requestDetailRequestID").should("contain", actualRequestID)
        );
      });
    expect(cy.xpath(this.receiptStatusInfo).should("contain", "Belum Selesai"));
    /**
     * FE still render incorrect format
    cy.xpath(this.singleRequestInfo.sourceTypeInfo)
      .invoke("text")
      .then((actualSourceType) => {
        expect(
          cy.get("@requestDetailSourceType").should("contain", actualSourceType)
        );
      });
    cy.xpath(this.singleRequestInfo.deliveryDateInfo)
      .invoke("text")
      .then((actualDeliveryDate) => {
        expect(
          cy
            .get("@requestDetailDeliveryDate")
            .should("contain", actualDeliveryDate)
        );
      });
     */
    cy.get("@requestDetailTargetStore").then((targetStore) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.targetStoreInfo)
          .should("contain", targetStore)
      );
    });
    cy.get("@requestDetailDeliveryMethod").then((deliveryMethod) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.deliveryMethodInfo)
          .should("contain", deliveryMethod)
      );
    });
    cy.get("@requestDetailStoreName").then((storeName) => {
      expect(
        cy.xpath(this.singleRequestInfo.storeName).should("contain", storeName)
      );
    });
    cy.get("@requestDetailWarehouseName").then((warehouseName) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.warehouseName)
          .should("contain", warehouseName)
      );
    });
    cy.get("@requestDetailProductName").then((productName) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productNameBodyContainer)
          .should("contain", productName)
      );
    });
    cy.get("@requestDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productQtyBodyContainer)
          .should("contain", productQty)
      );
    });
  }

  assertReceiptWithSingleRequestTableUI(status: string) {
    if (status === "Belum Selesai") {
      expect(
        cy.get(this.singleRequestInfo.allocatedQtyField).should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.substractAllocatedQtyButton)
          .should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButton)
          .should("be.visible")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButton)
          .should("be.visible")
      );
      expect(
        cy.xpath(this.singleRequestInfo.expiryDateDropdown).should("exist")
      );
    } else if (status === "Sudah Selesai") {
      expect(
        cy.get(this.singleRequestInfo.allocatedQtyField).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.substractAllocatedQtyButton)
          .should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButton)
          .should("not.exist")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButton)
          .should("not.exist")
      );
      expect(
        cy.xpath(this.singleRequestInfo.expiryDateDropdown).should("not.exist")
      );
    }
  }

  assertReceiptUI(status: string) {
    cy.xpath(this.requestInfo); //waiting for element to be rendered
    this.assertReceiptWithSingleRequestTableUI(status);

    if (status === "Belum Selesai") {
      expect(
        cy
          .xpath(this.receiptCTAButtonContainer)
          .should("contain", "Batalkan Penerimaan Barang")
      );
      expect(
        cy.xpath(this.receiptCTAButtonContainer).should("contain", "Submit")
      );
    } else if (status === "Sudah Selesai") {
      expect(cy.xpath(this.receiptCTAButtonContainer).should("not.exist"));
    } else if (status === "Dibatalkan") {
      expect(
        cy
          .xpath(this.nonAccessibleInfo)
          .should("contain", "Receipt telah di cancel")
      );
      expect(
        cy.xpath(this.singleRequestInfo.tableBodyContainer).should("not.exist")
      );
      expect(cy.xpath(this.receiptCTAButtonContainer).should("not.exist"));
    }
  }

  assertPartialCheckbox(value: string) {
    if (value === "checked")
      expect(
        cy
          .get(this.singleRequestInfo.partialCheckbox)
          .invoke("val")
          .should("contain", "true")
      );
    else if (value === "unchecked")
      expect(
        cy.get(this.singleRequestInfo.partialCheckbox).should("not.exist")
      );
  }
}
