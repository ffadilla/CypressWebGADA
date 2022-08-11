import { Then, When } from "cypress-cucumber-preprocessor/steps";
import InventoryDetailPage from "../../../e2e/saas/page_objects/InventoryDetailPage";
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();
let uomName: string;
let principalName: string;

When("SAAS - user clicks on expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
});

When("SAAS - user types {string} on search unit field", (input) => {
  uomName = input;
  inventoryDetailPage.typeUnitSearch(uomName);
});

When("SAAS - user clicks on principal and brand button", () => {
  inventoryDetailPage.clickPrincipalAndBrandButton();
});

When(
  "SAAS - user types random principal name on principal searchbar input",
  () => {
    principalName = utils.generateRandomString(5);
    inventoryDetailPage.typePrincipalSearchbarInput(
      "Principal " + principalName
    );

    cy.get(inventoryDetailPage.principalSearchbarInput).should(
      "have.value",
      "Principal " +
        principalName.charAt(0).toUpperCase() +
        principalName.slice(1)
    );
    cy.get(
      inventoryDetailPage.addCustomPrincipalButton +
        " > .MuiButton-label > .MuiTypography-root"
    ).should(
      "include.text",
      "Principal " +
        principalName.charAt(0).toUpperCase() +
        principalName.slice(1)
    );
  }
);

When("SAAS - user clicks on add custom principal button", () => {
  inventoryDetailPage.clickAddCustomPrincipalButton();
});

When(
  "SAAS - user clicks on submit add custom principal or brand modal button",
  () => {
    inventoryDetailPage.clickCustomPrincipalAndBrandModalSubmitButton();
    cy.get(inventoryDetailPage.brandBackButton).should("be.visible");
    // expect("h2").contain("Isi Nama Brand");
  }
);

When("SAAS - user clicks on brand back button", () => {
  inventoryDetailPage.clickBrandBackButton();
});

When("SAAS - user types random uom name on search unit field", () => {
  uomName = utils.generateRandomString(5);
  inventoryDetailPage.typeUnitSearch("UOM " + uomName);
  cy.get(inventoryDetailPage.unitSearchInput).should(
    "have.value",
    "UOM " + uomName
  );
});

When("SAAS - user clicks on first stock unit checkbox", () => {
  cy.wait(1000);
  inventoryDetailPage.clickUnitCheckboxInput();
});

When("SAAS - user clicks on {string} unit checkbox", (uomName) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickSpecificUnitCheckbox(uomId + "");
});

When("SAAS - user clicks on add new unit button", () => {
  cy.get(inventoryDetailPage.addNewUnitButton)
    .children(".MuiButton-label")
    .children(".MuiTypography-root")
    .should("have.text", "Uom " + uomName);
  inventoryDetailPage.clickAddNewUnitButton();
  cy.wait(1500);
});

When("SAAS - user clicks on choose unit button", () => {
  inventoryDetailPage.clickChooseUnitButton();
});

When("SAAS - user clicks on sort up button of unit {string}", (uomName) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickUomConversionSortUpButton(uomId + "");
});

When("SAAS - user clicks on sort down button of unit {string}", (uomName) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickUomConversionSortDownButton(uomId + "");
});

When("SAAS - user clicks on uom conversion next step button", () => {
  inventoryDetailPage.clickUomConversionNextStepButton();
});

When(
  "SAAS - user types {string} on unit {string} conversion field",
  (input, uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.typeUomConversion(uomId + "", input);
  }
);

When("SAAS - user clicks on uom conversion save button", () => {
  inventoryDetailPage.clickUomConversionSaveButton();
});

When(
  "SAAS - user types {string} on {string} unit stock quantity field",
  (input, uomName) => {
    switch (uomName) {
      case "first":
        cy.get("input[name='buying.0.availableStock']").type(input);
        cy.get("input[name='buying.0.availableStock']").should(
          "have.value",
          input
        );
        break;
      case "second":
        cy.get("input[name='buying.1.availableStock']").type(input);
        cy.get("input[name='buying.1.availableStock']").should(
          "have.value",
          input
        );
        break;
      case "third":
        cy.get("input[name='buying.2.availableStock']").type(input);
        cy.get("input[name='buying.2.availableStock']").should(
          "have.value",
          input
        );
        break;
      case "fourth":
        cy.get("input[name='buying.3.availableStock']").type(input);
        cy.get("input[name='buying.3.availableStock']").should(
          "have.value",
          input
        );
        break;
      case "fifth":
        cy.get("input[name='buying.4.availableStock']").type(input);
        cy.get("input[name='buying.4.availableStock']").should(
          "have.value",
          input
        );
        break;
      default:
        const uomId = utils.retrieveUomId(uomName);
        inventoryDetailPage.typeUnitStockQuantity(uomId + "", input);
    }
  }
);

When(
  "SAAS - user types {string} on {string} unit price field",
  (input, uomName) => {
    switch (uomName) {
      case "first":
        cy.get("input[name='buying.0.price']").type(input);
        cy.get("input[name='buying.0.price']").should(
          "have.value",
          "Rp " + input.charAt(0) + "." + input.slice(1)
        );
        break;
      case "second":
        cy.get("input[name='buying.1.price']").type(input);
        cy.get("input[name='buying.1.price']").should(
          "have.value",
          "Rp " + input.charAt(0) + "." + input.slice(1)
        );
        break;
      case "third":
        cy.get("input[name='buying.2.price']").type(input);
        cy.get("input[name='buying.2.price']").should(
          "have.value",
          "Rp " + input.charAt(0) + "." + input.slice(1)
        );
        break;
      case "fourth":
        cy.get("input[name='buying.3.price']").type(input);
        cy.get("input[name='buying.3.price']").should(
          "have.value",
          "Rp " + input.charAt(0) + "." + input.slice(1)
        );
        break;
      case "fifth":
        cy.get("input[name='buying.4.price']").type(input);
        cy.get("input[name='buying.4.price']").should(
          "have.value",
          "Rp " + input.charAt(0) + "." + input.slice(1)
        );
        break;
      default:
        const uomId = utils.retrieveUomId(uomName);
        inventoryDetailPage.typeUnitPrice(uomId + "", input);
    }
  }
);

When("SAAS - user clicks on expand selling unit button", () => {
  inventoryDetailPage.clickExpandSellingUnitButton();
});

When(
  "SAAS - user clicks on add unit selling price button of unit {string}",
  (uomName) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId + "");
  }
);

When("SAAS - user types {string} on unit selling price field", (input) => {
  inventoryDetailPage.typeUnitSellingPrice(input);
});

When("SAAS - user clicks on enable price tier button", () => {
  inventoryDetailPage.clickEnablePriceTierButton();
});

When(
  "SAAS - user types {string} on {string} price tier minimum quantity field",
  (input, order) => {
    inventoryDetailPage.typeUnitPriceTierMinimumQuantityInput(
      utils.convertOrdinalToCardinalNumber(order),
      input
    );
  }
);

When(
  "SAAS - user types {string} on {string} price tier unit price field",
  (input, order) => {
    inventoryDetailPage.typeUnitPriceTierSellingPriceInput(
      utils.convertOrdinalToCardinalNumber(order),
      input
    );
  }
);

When("SAAS - user clicks on add more price tier button", () => {
  inventoryDetailPage.clickUnitPriceTierAddMoreRowButton();
});

When("SAAS - user clicks on save unit selling price button", () => {
  inventoryDetailPage.clickSaveUnitSellingPriceButton();
});

When("SAAS - user clicks on add barcode button", () => {
  inventoryDetailPage.clickAddBarcodeButton();
});

When("SAAS - user clicks on input barcode manually button", () => {
  inventoryDetailPage.clickInputBarcodeManuallyButton();
});

When("SAAS - user types {string} on barcode modal", (input) => {
  inventoryDetailPage.typeBarcodeValue(input);
  cy.get(inventoryDetailPage.barcodeValueInput).should("have.value", input);
  cy.get(inventoryDetailPage.saveBarcodeButton).should("not.be.disabled");
});

When("SAAS - user clicks on save barcode button", () => {
  inventoryDetailPage.clickSaveBarcodeButton();
});

When("SAAS - user clicks on submit add inventory button", () => {
  inventoryDetailPage.clickSubmitAddInventoryButton();
});

// assertions

Then("SAAS - user is redirected to inventory list page", () => {
  cy.url().should("eq", inventoryDetailPage.baseUrl + "inventory/list");
});

Then(
  "SAAS - correct principal name is displayed on the first principal list",
  (principalName) => {
    cy.contains("p", principalName);
  }
);
