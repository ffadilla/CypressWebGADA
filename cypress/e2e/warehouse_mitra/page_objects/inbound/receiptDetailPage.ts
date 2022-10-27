import BaseDetailPage from "../baseDetailPage";

export default class ReceiptDetailPage extends BaseDetailPage {
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
  receiptButtons = ".MuiButtonBase-root";
  nonAccessibleInfo = '//*[@id="__next"]/div/div[3]/div[2]/div/p';

  receiptTableXPath = '(//table[contains(@class, "MuiTable-root")])[index]';
  tableHeaderPointerXPath = "/thead/tr[1]";
  tableBodyPointerXPath = "/tbody/tr[index]";
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

    tableBodyContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1),
    productNameBodyContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[1]",
    productQtyBodyContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[2]",
    allocatedInputBodyContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[3]",
    allocatedQtyField:
      '[name="inbound_requests[0].product_variant_request_items[0].active_unit_items[0].allocated_quantity"]',
    substractAllocatedQtyButtonXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[3]/div/div[1]/div/div/div[1]/button[1]",
    addAllocatedQtyButtonXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[3]/div/div[1]/div/div/div[1]/button[2]",
    allocatedUOMDropdown:
      '[id="mui-component-select-inbound_requests[0].product_variant_request_items[0].active_unit_items[0].product_unit_id"]',
    addAllocatedUOMButtonXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[3]/div/div[2]/span/button",
    expDateContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[4]",
    expiryDateDropdownXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[4]/div/div/div/div",
    discrepancyQtyContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[5]",
    discrepancyRemarksContainerXPath:
      this.utils.replaceElementIndex(this.receiptTableXPath, 1) +
      this.utils.replaceElementIndex(this.tableBodyPointerXPath, 1) +
      "/td[6]",
    discrepancyRemarksField:
      '[name="inbound_requests[0].product_variant_request_items[0].rejected_reason"]',
    partialCheckbox: '[name="inbound_requests[0].is_partial"]',
  };

  dropdownOptions = 'li[role="option"]';
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
    cy.get(this.singleRequestInfo.partialCheckbox); //waiting for FE rendering
    cy.xpath(this.receiptIDInfo)
      .invoke("text")
      .then((text) => {
        cy.wrap(text.split(" ")[0]).as("receiptDetailReceiptID");
      });
    cy.xpath(this.requestInfo).invoke("text").as("receiptDetailRequestID");
    cy.xpath(this.singleRequestInfo.deliveryDateInfo)
      .invoke("text")
      .as("receiptDetailDeliveryDate");
    cy.xpath(this.singleRequestInfo.productNameBodyContainerXPath)
      .invoke("text")
      .as("receiptDetailProductName");
    cy.xpath(this.singleRequestInfo.productQtyBodyContainerXPath)
      .invoke("text")
      .as("receiptDetailProductQty");
    cy.get(this.singleRequestInfo.allocatedQtyField)
      .invoke("val")
      .as("receiptDetailAllocatedQty");
    cy.get(this.singleRequestInfo.allocatedUOMDropdown)
      .invoke("text")
      .as("receiptDetailAllocatedUOM");
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainerXPath)
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
    cy.xpath(this.singleRequestInfo.substractAllocatedQtyButtonXPath).click();
  }

  selectExpDate(value: string) {
    /**
     * TO DO
     * Check has expiry date on selected product variant through API
     */
    cy.xpath(this.singleRequestInfo.expiryDateDropdownXPath).click();
    cy.get(this.dropdownOptions).contains(value).click();
  }

  setDiscrepancyRemarks(value: string) {
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainerXPath).type(
      value
    );
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

  downloadReceiptAttachment(value: string) {
    this.switchAttachment(value);
    this.downloadAttachment(
      this.expectedAttachmentXPath,
      this.expectedAttachmentURL
    );
  }

  cancelReceipt() {
    let cancelPopupHeader =
      "Batalkan Data Penerimaan Barang Masuk “{{ReceiptID}}”?";

    this.invokeReceiptDetail();
    cy.get(this.receiptButtons).contains("Batalkan Penerimaan Barang").click();
    cy.get("@receiptDetailReceiptID").then((receiptID) => {
      cy.get(this.popupHeader)
        .find("p")
        .should(
          "contain",
          cancelPopupHeader.split("{{ReceiptID}}").join(String(receiptID))
        );
    });
    cy.get(this.popupCTAContainer).find("button").contains("Batalkan").click();
  }

  submitReceipt() {
    this.invokeReceiptDetail();
    cy.get(this.receiptButtons).contains("Submit").click();
  }

  confirmReceiptSubmission() {
    let submissionPopupHeader = "Submit Proses Penerimaan Stok?";
    let submissionPopupContent =
      "Total stok order yang Anda terima akan disimpan ke dalam inventori gudang dan tidak bisa diubah lagi.";

    cy.get(this.popupHeader).find("p").should("contain", submissionPopupHeader);
    cy.get(this.popupContent)
      .find("p")
      .should("contain", submissionPopupContent);
    this.utils.interceptAPI(
      "PUT",
      "/inbound/receipts/**/bulk-submit/",
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
    cy.xpath(this.singleRequestInfo.allocatedInputBodyContainerXPath)
      .find("p")
      .should("contain", emptyErrorMessage);
  }

  assertErrorExpDate() {
    let emptyErrorMessage = "Harap pilih tanggal expired";
    cy.xpath(this.singleRequestInfo.expDateContainerXPath)
      .find("p")
      .should("contain", emptyErrorMessage);
  }

  assertErrorDiscrepancyRemark() {
    let emptyErrorMessage =
      "Harap masukkan keterangan untuk perbedaan jumlah barang";
    cy.xpath(this.singleRequestInfo.discrepancyRemarksContainerXPath)
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
          .xpath(this.singleRequestInfo.productNameBodyContainerXPath)
          .should("contain", productName)
      );
    });
    cy.get("@receiptDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productQtyBodyContainerXPath)
          .should("contain", productQty)
      );
    });
    cy.get("@receiptDetailAllocatedQty").then((allocatedQty) => {
      cy.get("@receiptDetailAllocatedUOM").then((expDate) => {
        expect(
          cy
            .xpath(this.singleRequestInfo.allocatedInputBodyContainerXPath)
            .should("contain", allocatedQty + " " + expDate)
        );
      });
    });
    cy.get("@receiptDetailDiscrepancyRemarks").then((remarks) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.discrepancyRemarksContainerXPath)
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
          .xpath(this.singleRequestInfo.productNameBodyContainerXPath)
          .should("contain", productName)
      );
    });
    cy.get("@requestDetailProductQty").then((productQty) => {
      expect(
        cy
          .xpath(this.singleRequestInfo.productQtyBodyContainerXPath)
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
          .xpath(this.singleRequestInfo.substractAllocatedQtyButtonXPath)
          .should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButtonXPath)
          .should("be.visible")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("be.visible")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButtonXPath)
          .should("be.visible")
      );
      expect(
        cy.xpath(this.singleRequestInfo.expiryDateDropdownXPath).should("exist")
      );
    } else if (status === "Sudah Selesai") {
      expect(
        cy.get(this.singleRequestInfo.allocatedQtyField).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.substractAllocatedQtyButtonXPath)
          .should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedQtyButtonXPath)
          .should("not.exist")
      );
      expect(
        cy.get(this.singleRequestInfo.allocatedUOMDropdown).should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.addAllocatedUOMButtonXPath)
          .should("not.exist")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.expiryDateDropdownXPath)
          .should("not.exist")
      );
    }
  }

  assertReceiptUI(status: string) {
    cy.xpath(this.requestInfo); //waiting for element to be rendered
    this.assertReceiptWithSingleRequestTableUI(status);

    if (status === "Belum Selesai") {
      expect(
        cy
          .get(this.receiptButtons)
          .should("contain", "Batalkan Penerimaan Barang")
      );
      expect(cy.get(this.receiptButtons).should("contain", "Submit"));
    } else if (status === "Sudah Selesai") {
      expect(
        cy
          .get(this.receiptButtons)
          .contains("Batalkan Penerimaan Barang")
          .should("not.exist")
      );
      expect(
        cy.get(this.receiptButtons).contains("Submit").should("not.exist")
      );
    } else if (status === "Dibatalkan") {
      expect(
        cy
          .xpath(this.nonAccessibleInfo)
          .should("contain", "Receipt telah di cancel")
      );
      expect(
        cy
          .xpath(this.singleRequestInfo.tableBodyContainerXPath)
          .should("not.exist")
      );
      expect(
        cy
          .get(this.receiptButtons)
          .contains("Batalkan Penerimaan Barang")
          .should("not.exist")
      );
      expect(
        cy.get(this.receiptButtons).contains("Submit").should("not.exist")
      );
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
