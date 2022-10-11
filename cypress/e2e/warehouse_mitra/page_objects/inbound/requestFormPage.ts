import BasePage from "../basePage";

export default class RequestFormPage extends BasePage {
  path = "/inventory/inbound/request/create";
  submitRequestFormButton =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[2]/div/div/button[2]';

  sourceIDField = 'input[name="source_data.reference_id"]';
  errorSourceID =
    ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";

  sourceTypeField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[2]/div/div';
  sourceTypeDropdown = '[id="menu-source_data.source_type"]';
  errorSourceType =
    ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";

  storeNameField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[3]/div/div/div/div/input';
  errorStoreName =
    ":nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root";

  warehouseNameField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[4]/div/div/div/div/input';
  errorWarehouseName =
    ":nth-child(1) > :nth-child(4) > .MuiFormControl-root > .MuiFormHelperText-root";

  targetStoreNameField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[5]/div/div/div/div/input';
  errorStoreTargetName =
    ":nth-child(1) > :nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root";

  targetStoreAddressField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[6]/div/div/input';
  errorStoreTargetAddress =
    ":nth-child(1) > :nth-child(6) > .MuiFormControl-root > .MuiFormHelperText-root";

  sourceDateField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[7]/div/div/div/input';
  errorSourceDate =
    ":nth-child(1) > :nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root";

  deliveryDateField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[8]/div/div/div/input';
  errorSourceDeliveryDate =
    ":nth-child(1) > :nth-child(8) > .MuiFormControl-root > .MuiFormHelperText-root";

  deliveryMethodField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[1]/div[9]/div/div';
  deliveryMethodDropdown = 'id=["menu-inbound_requests[0].delivery_method"]';
  errorSourceDeliveryMethod =
    ":nth-child(1) > :nth-child(9) > .MuiFormControl-root > .MuiFormHelperText-root";

  requestProductNameField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[4]/div[2]/div[1]/div/div/div/div/input';
  errorRequestProductName =
    ":nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";
  requestProductQuantityField =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[1]/div/div[2]/div[4]/div[2]/div[2]/div/div/input';
  errorRequestProductQuantity =
    ":nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";

  firstAutocompleteItem = '[data-option-index="0"]';
  dropdownOptionsList = '[role="listbox"]';
  datepickerItem = '[role="gridcell"]';

  typeSourceID() {
    let sourceID = "Cyp-" + this.utils.generateDateTime(0, "YYMMDD_HHmmss");
    cy.get(this.sourceIDField).type(sourceID);
    cy.get(this.sourceIDField).invoke("val").as("inboundFormSourceID");
  }

  setSourceType(keyword: string) {
    cy.xpath(this.sourceTypeField).click();
    cy.get(this.dropdownOptionsList).contains(keyword).click();
    cy.xpath(this.sourceTypeField).invoke("text").as("inboundFormSourceType");
  }

  setStore(keyword: string) {
    cy.xpath(this.storeNameField).click();
    cy.xpath(this.storeNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.xpath(this.storeNameField).invoke("val").as("inboundFormStoreName");
  }

  setWarehouse(keyword: string) {
    cy.xpath(this.warehouseNameField).click();
    cy.xpath(this.warehouseNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.xpath(this.warehouseNameField)
      .invoke("val")
      .as("inboundFormWarehouseName");
  }

  setTargetStore(keyword: string) {
    cy.xpath(this.targetStoreNameField).click();
    cy.intercept(
      "GET",
      "/store/store-list/?search=" + keyword + "&suggest_by=inbound&store_id=**"
    ).as("storeListAPI");
    cy.xpath(this.targetStoreNameField).type(keyword);
    cy.wait("@storeListAPI"); //waiting for dropdown autocomplete
    cy.get(this.firstAutocompleteItem).click();
    cy.xpath(this.targetStoreNameField)
      .invoke("val")
      .as("inboundFormTargetStoreName");
    cy.xpath(this.targetStoreAddressField)
      .invoke("val")
      .as("inboundFormTargetStoreAddress");
  }

  setSourceDate(date: number) {
    cy.xpath(this.sourceDateField).click();
    cy.contains(this.datepickerItem, date).click();
    cy.xpath(this.sourceDateField).invoke("val").as("inboundFormSourceDate");
  }

  setDeliveryDate(date: number) {
    cy.xpath(this.deliveryDateField).click();
    cy.contains(this.datepickerItem, date).click();
    cy.xpath(this.deliveryDateField)
      .invoke("val")
      .as("inboundFormDeliveryDate");
  }

  setDeliveryMethod(keyword: string) {
    cy.xpath(this.deliveryMethodField).click();
    cy.get(this.dropdownOptionsList).contains(keyword).click();
    cy.xpath(this.deliveryMethodField)
      .invoke("text")
      .as("inboundFormDeliveryMethod");
  }

  setRequestFirstProductName(keyword: string) {
    cy.xpath(this.requestProductNameField).click();
    cy.xpath(this.requestProductNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
    cy.xpath(this.requestProductNameField)
      .invoke("val")
      .as("inboundFormFirstProductName");
  }

  setRequestFirstProductAmount(input: number) {
    cy.xpath(this.requestProductQuantityField).click();
    cy.xpath(this.requestProductQuantityField).type(input.toString());
    cy.xpath(this.requestProductQuantityField)
      .invoke("val")
      .as("inboundFormFirstProductQty");
  }

  submitRequestForm() {
    cy.xpath(this.submitRequestFormButton).click();
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
}
