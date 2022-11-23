import {
  generateDateTime,
  interceptAPI,
} from "../../../warehouse_core/common/utils";
import Datepicker from "../../../warehouse_core/component_objects/datepicker";
import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class RequestFormPage extends MainPage {
  datepicker = new Datepicker();
  path = "/inventory/inbound/request/create";
  formButtons = ".MuiButtonBase-root";

  sourceIDField = 'input[name="source_data.reference_id"]';
  errorSourceID =
    ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";

  sourceTypeField = '[id="mui-component-select-source_data.source_type"]';
  sourceTypeDropdown = '[id="menu-source_data.source_type"]';
  errorSourceType =
    ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";

  storeNameField = 'input[placeholder="Pilih toko penerima"]';
  errorStoreName =
    ":nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root";

  warehouseNameField = 'input[placeholder="Pilih lokasi gudang penerima"]';
  errorWarehouseName =
    ":nth-child(1) > :nth-child(4) > .MuiFormControl-root > .MuiFormHelperText-root";

  targetStoreNameField = 'input[placeholder="Pilih nama perusahaan pengirim"]';
  errorStoreTargetName =
    ":nth-child(1) > :nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root";

  targetStoreAddressField =
    'input[placeholder="Masukkan alamat perusahaan pengirim"]';
  errorStoreTargetAddress =
    ":nth-child(1) > :nth-child(6) > .MuiFormControl-root > .MuiFormHelperText-root";

  sourceDateField = 'input[placeholder="Pilih tanggal permintaan masuk"]';
  errorSourceDate =
    ":nth-child(1) > :nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root";

  deliveryDateField = 'input[placeholder="Pilih tanggal pengiriman"]';
  errorSourceDeliveryDate =
    ":nth-child(1) > :nth-child(8) > .MuiFormControl-root > .MuiFormHelperText-root";

  deliveryMethodField =
    '[id="mui-component-select-inbound_requests[0].delivery_method"]';
  deliveryMethodDropdown = 'id=["menu-inbound_requests[0].delivery_method"]';
  errorSourceDeliveryMethod =
    ":nth-child(1) > :nth-child(9) > .MuiFormControl-root > .MuiFormHelperText-root";

  requestProductNameField = 'input[placeholder="Pilih nama produk"]';
  errorRequestProductName =
    ":nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";
  requestProductQuantityField = 'input[placeholder="Masukkan jumlah produk"]';
  errorRequestProductQuantity =
    ":nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";

  firstAutocompleteItem = '[data-option-index="0"]';
  dropdownOptionsList = '[role="listbox"]';
  datepickerItem = '[role="gridcell"]';

  typeSourceID() {
    let sourceID = "Cyp-" + generateDateTime(0, "YYMMDD_HHmmss");
    cy.get(this.sourceIDField).type(sourceID);
    cy.get(this.sourceIDField).invoke("val").as("inboundFormSourceID");
  }

  setSourceType(keyword: string) {
    cy.get(this.sourceTypeField)
      .contains("Pilih jenis permintaan masuk")
      .click();
    cy.get(this.dropdownOptionsList).contains(keyword).click();
    cy.get(this.sourceTypeField).invoke("text").as("inboundFormSourceType");
  }

  setStore(keyword: string) {
    cy.get(this.storeNameField).click();
    cy.get(this.storeNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.storeNameField).invoke("val").as("inboundFormStoreName");
  }

  setWarehouse(keyword: string) {
    cy.get(this.warehouseNameField).click();
    cy.get(this.warehouseNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.warehouseNameField)
      .invoke("val")
      .as("inboundFormWarehouseName");
  }

  setTargetStore(keyword: string) {
    cy.get(this.targetStoreNameField).click();
    interceptAPI(
      "GET",
      "/store/store-list/?search=" +
        keyword +
        "&suggest_by=inbound&store_id=**",
      "storeListAPI"
    );
    cy.get(this.targetStoreNameField).type(keyword);
    cy.wait("@storeListAPI"); //waiting for dropdown autocomplete
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.targetStoreNameField)
      .invoke("val")
      .as("inboundFormTargetStoreName");
    cy.get(this.targetStoreAddressField)
      .invoke("val")
      .as("inboundFormTargetStoreAddress");
  }

  setSourceDate(date: string, month: string, year: string) {
    this.datepicker.setDatepicker(this.sourceDateField, date, month, year);
    cy.get(this.sourceDateField).invoke("val").as("inboundFormSourceDate");
  }

  setDeliveryDate(date: string, month: string, year: string) {
    this.datepicker.setDatepicker(this.deliveryDateField, date, month, year);
    cy.get(this.deliveryDateField).invoke("val").as("inboundFormDeliveryDate");
  }

  setDeliveryMethod(keyword: string) {
    cy.get(this.deliveryMethodField)
      .contains("Pilih metode pengiriman")
      .click();
    cy.get(this.dropdownOptionsList).contains(keyword).click();
    cy.get(this.deliveryMethodField)
      .invoke("text")
      .as("inboundFormDeliveryMethod");
  }

  setRequestFirstProductName(keyword: string) {
    cy.get(this.requestProductNameField).click();
    cy.get(this.requestProductNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.get(this.requestProductNameField)
      .invoke("val")
      .as("inboundFormFirstProductName");
  }

  setRequestFirstProductAmount(input: number) {
    cy.get(this.requestProductQuantityField).click();
    cy.get(this.requestProductQuantityField).type(input.toString());
    cy.get(this.requestProductQuantityField)
      .invoke("val")
      .as("inboundFormFirstProductQty");
  }

  submitRequestForm() {
    cy.get(this.formButtons).contains("Submit").click();
  }

  assertErrorInboundRequestForm(field: string, err: string) {
    let pointer = "";
    switch (field) {
      case "source ID":
        pointer = this.errorSourceID;
        break;
      case "source type":
        pointer = this.errorSourceType;
        break;
      case "store name":
        pointer = this.errorStoreName;
        break;
      case "warehouse name":
        pointer = this.errorWarehouseName;
        break;
      case "store target name":
        pointer = this.errorStoreTargetName;
        break;
      case "store target address":
        pointer = this.errorStoreTargetAddress;
        break;
      case "source date":
        pointer = this.errorSourceDate;
        break;
      case "source delivery date":
        pointer = this.errorSourceDeliveryDate;
        break;
      case "source delivery method":
        pointer = this.errorSourceDeliveryMethod;
        break;
      case "request product name":
        pointer = this.errorRequestProductName;
        break;
      case "request product quantity":
        pointer = this.errorRequestProductQuantity;
        break;
    }
    expect(cy.get(pointer).should("contain.text", err));
  }

  assertAppliedWarehouseStore(warehouseName: string, storeName: string) {
    expect(
      cy
        .get(this.warehouseNameField)
        .invoke("val")
        .should("contain", warehouseName)
    );
    expect(cy.get(this.warehouseNameField).should("be.disabled"));
    cy.get(this.warehouseNameField)
      .invoke("val")
      .as("inboundFormWarehouseName");

    expect(
      cy.get(this.storeNameField).invoke("val").should("contain", storeName)
    );
    expect(cy.get(this.storeNameField).should("be.disabled"));
    cy.get(this.storeNameField).invoke("val").as("inboundFormStoreName");
  }
}
