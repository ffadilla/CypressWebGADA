import BasePage from "./basePage";
import * as utils from "../common/utils";

export default class InboundRequestFormPage extends BasePage {
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
  datepickerItem = '[role="cell"]';

  sourceID = "Cyp-" + utils.generateDateTime(0, "YYMMDD_HHmm");

  typeSourceID() {
    cy.get(this.sourceIDField).type(this.sourceID);
  }

  setSourceType(keyword: string) {
    cy.xpath(this.sourceTypeField).click();
    cy.contains(this.dropdownOptionsList, keyword).click();
  }

  setStore(keyword: string) {
    cy.xpath(this.storeNameField).click();
    cy.xpath(this.storeNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
  }

  setWarehouse(keyword: string) {
    cy.xpath(this.warehouseNameField).click();
    cy.xpath(this.warehouseNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
  }

  setTargetStore(keyword: string) {
    cy.xpath(this.targetStoreNameField).click();
    cy.xpath(this.targetStoreNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
  }

  setSourceDate(date: number) {
    cy.xpath(this.sourceDateField).click();
    cy.contains(this.datepickerItem, date).click();
  }

  setDeliveryDate(date: number) {
    cy.xpath(this.deliveryDateField).click();
    cy.contains(this.datepickerItem, date).click();
  }

  setDeliveryMethod(keyword: string) {
    cy.xpath(this.deliveryMethodField).click();
    cy.contains(this.dropdownOptionsList, keyword).click();
  }

  setRequestFirstProductName(keyword: string) {
    cy.xpath(this.requestProductNameField).click();
    cy.xpath(this.requestProductNameField).type(keyword);
    cy.get(this.firstAutocompleteItem).click();
  }

  setRequestFirstProductAmount(input: string) {
    cy.xpath(this.requestProductQuantityField).click();
    cy.xpath(this.requestProductQuantityField).type(input);
  }

  assertErrorSourceID(err: string) {
    expect(cy.get(this.errorSourceID).should("contain.text", err));
  }

  assertErrorSourceType(err: string) {
    expect(cy.get(this.errorSourceType).should("contain.text", err));
  }

  assertErrorStoreName(err: string) {
    expect(cy.get(this.errorStoreName).should("contain.text", err));
  }

  assertErrorWarehouseName(err: string) {
    expect(cy.get(this.errorWarehouseName).should("contain.text", err));
  }

  assertErrorStoreTargetName(err: string) {
    expect(cy.get(this.errorStoreTargetName).should("contain.text", err));
  }

  assertErrorStoreTargetAddress(err: string) {
    expect(cy.get(this.errorStoreTargetAddress).should("contain.text", err));
  }

  assertErrorSourceDate(err: string) {
    expect(cy.get(this.errorSourceDate).should("contain.text", err));
  }

  assertErrorSourceDeliveryDate(err: string) {
    expect(cy.get(this.errorSourceDeliveryDate).should("contain.text", err));
  }

  assertErrorSourceDeliveryMethod(err: string) {
    expect(cy.get(this.errorSourceDeliveryMethod).should("contain.text", err));
  }

  assertErrorRequestProductName(err: string) {
    expect(cy.get(this.errorRequestProductName).should("contain.text", err));
  }

  assertErrorRequestProductQuantity(err: string) {
    expect(
      cy.get(this.errorRequestProductQuantity).should("contain.text", err)
    );
  }
}
