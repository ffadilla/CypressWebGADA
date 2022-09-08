import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../e2e/saas/page_objects/LoginPage";
import RegistrationPage from "../../../e2e/saas/page_objects/RegistrationPage";
import HomePage from "../../../e2e/saas/page_objects/HomePage";
import * as utils from "./utils";
import InventoryListPage from "../page_objects/inventoryListPage";
import InventoryDetailPage from "../page_objects/inventoryDetailPage";
import { numberWithSeparators } from "./utils";

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const homePage = new HomePage();
const inventoryListPage = new InventoryListPage();
const inventoryDetailPage = new InventoryDetailPage();

let otp = utils.generateCurrentDateOTP();

Given("a new user is registered", () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.reload(true);
  registrationPage.visitRegistration();
  registrationPage.typeNumber(utils.generateRandomNumber());
  registrationPage.clickRegisterLanjutkan1();
  loginPage.selectWhatsappOtpType();
  loginPage.clickSendOtp();
  loginPage.inputOtp1(otp.charAt(0));
  loginPage.inputOtp2(otp.charAt(1));
  loginPage.inputOtp3(otp.charAt(2));
  loginPage.inputOtp4(otp.charAt(3));
  loginPage.clickSubmitOtp();
  registrationPage.typeName(utils.generateRandomString(5));
  registrationPage.typeEmail(utils.generateRandomString(5) + "@gudangada.com");
  registrationPage.clickRegisterLanjutkan2();
  registrationPage.typeStoreName(utils.generateRandomString(5));
  registrationPage.clickStoreAddressInputButton();
  registrationPage.typeStoreAddressLocationInput("jakarta");
  registrationPage.clickFirstAddressResult();
  registrationPage.clickChooseStoreLocation();
  registrationPage.clickSubmitRegistrationButton();
  cy.wait(2000);
  homePage.clickCloseTutorialButton();
  homePage.clickConfirmCloseTutorialButton();
});

Given("user {string} is logged in", (number: string) => {
  cy.saasLogin(number);
});

When("user clicks on inventory list side menu button", () => {
  homePage.clickInventorySideMenuButton();
  homePage.clickInventoryListSideMenuButton();
});

When("user created custom inventory with stock + selling uom", () => {
  // When user clicks on add inventory button
  inventoryListPage.clickAddInventoryButton();
  // When user clicks on add single inventory button
  inventoryListPage.clickAddSingleInventoryButton();
  // And user clicks on first time add inventory button
  inventoryListPage.clickFirstTimeAddInventoryButton();
  // And user types search inventory input field with "web automation test product"
  inventoryListPage.typeAddInventorySearchInput("web automation test product");
  cy.get(inventoryListPage.addInventorySearchInput).should(
    "have.value",
    "web automation test product"
  );
  // And user clicks on add custom inventory button
  inventoryListPage.clickAddCustomInventoryButton();
  // And user clicks on expand stock unit button
  inventoryDetailPage.clickExpandStockUnitButton();
  // And user types "Pieces" on search unit field
  inventoryDetailPage.typeUnitSearch("Pieces");
  cy.get(inventoryDetailPage.unitSearchInput).should("have.value", "Pieces");
  cy.get(inventoryDetailPage.clearUomSearchButton).should("be.visible");
  // And user clicks on "Pieces" unit checkbox
  utils.retrieveUomId("Pieces");
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
  });
  // And user clicks on choose unit button
  inventoryDetailPage.clickChooseUnitButton();
  // And user types "1" on "Pieces" unit stock quantity field
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.typeUnitStockQuantity(uomId, "1");
    cy.get(inventoryDetailPage.unitStockQuantityInput + uomId).should(
      "have.value",
      "1"
    );
  });
  // And user types "1234" on "Pieces" unit price field
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.typeUnitPrice(uomId, "1");
    cy.get(inventoryDetailPage.unitPriceInput + uomId).should(
      "have.value",
      "Rp " + numberWithSeparators("1")
    );
  });
  // And user clicks on expand selling unit button
  inventoryDetailPage.clickExpandSellingUnitButton();
  // And user types "Pieces" on search unit field
  inventoryDetailPage.typeUnitSearch("Pieces");
  cy.get(inventoryDetailPage.unitSearchInput).should("have.value", "Pieces");
  cy.get(inventoryDetailPage.clearUomSearchButton).should("be.visible");
  // And user clicks on "Pieces" unit checkbox
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
  });
  // And user clicks on choose unit button
  inventoryDetailPage.clickChooseUnitButton();
  // And user clicks on add unit selling price button of "Pieces" unit
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId);
  });
  // And user types "1" on unit selling price field
  inventoryDetailPage.typeUnitSellingPrice("1");
  cy.get(inventoryDetailPage.unitSellingPriceInput).should(
    "have.value",
    "Rp " + utils.numberWithSeparators("1")
  );
  // And user clicks on save unit selling price button
  inventoryDetailPage.clickSaveUnitSellingPriceButton();
  // And user clicks on add barcode button of "Pieces" unit
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickAddBarcodeButton(uomId);
  });
  // And user clicks on input barcode manually button
  inventoryDetailPage.clickInputBarcodeManuallyButton();
  // And user types "843842841" on barcode modal
  inventoryDetailPage.typeBarcodeValue("843842841");
  // And user clicks on save barcode button
  inventoryDetailPage.clickSaveBarcodeButton();
  // And user clicks on submit add inventory button
  inventoryDetailPage.clickSubmitAddInventoryButton();
  // Then user is redirected to inventory list page
  cy.url().should("eq", inventoryDetailPage.baseUrl + "inventory/list");
});
