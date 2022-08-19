import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryDetailPage from "../../../e2e/saas/page_objects/InventoryDetailPage";
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();
let uomName: string;

When("user clicks on expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
});

When("user types search unit field with {string}", (input: string) => {
  uomName = input;
  inventoryDetailPage.typeUnitSearch(uomName);
});

When("user types search unit field with random uom name", () => {
  uomName = utils.generateRandomString(5);
  inventoryDetailPage.typeUnitSearch("UOM " + uomName);
});

When("user clicks on first stock unit checkbox", () => {
  cy.wait(1000);
  inventoryDetailPage.clickUnitCheckboxInput();
});

When("user clicks on {string} unit checkbox", (uomName: string) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickSpecificUnitCheckbox(uomId + "");
});

When("user clicks on add new unit button", () => {
  cy.get(inventoryDetailPage.addNewUnitButton)
    .children(".MuiButton-label")
    .children(".MuiTypography-root")
    .should("have.text", "Uom " + uomName);
  inventoryDetailPage.clickAddNewUnitButton();
  cy.wait(1500);
});

When("user clicks on choose unit button", (_input) => {
  inventoryDetailPage.clickChooseUnitButton();
});

When("user clicks on sort up button of unit {string}", (uomName: string) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickUomConversionSortUpButton(uomId + "");
});

When("user clicks on sort down button of unit {string}", (uomName: string) => {
  const uomId = utils.retrieveUomId(uomName);
  inventoryDetailPage.clickUomConversionSortDownButton(uomId + "");
});

When("user clicks on uom conversion next step button", () => {
  inventoryDetailPage.clickUomConversionNextStepButton();
});

When(
  "user types {string} on unit {string} conversion field",
  (input: string, uomName: string) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.typeUomConversion(uomId + "", input);
  }
);

When("user clicks on uom conversion save button", () => {
  inventoryDetailPage.clickUomConversionSaveButton();
});

When(
  "user types {string} on {string} unit stock quantity field",
  (input: string, uomName: string) => {
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
  "user types {string} on {string} unit price field",
  (input: string, uomName: string) => {
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

When("user clicks on expand selling unit button", () => {
  inventoryDetailPage.clickExpandSellingUnitButton();
});

When(
  "user clicks on add unit selling price button of unit {string}",
  (uomName: string) => {
    const uomId = utils.retrieveUomId(uomName);
    inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId + "");
  }
);

When("user types {string} on unit selling price field", (input: string) => {
  inventoryDetailPage.typeUnitSellingPrice(input);
});

When("user clicks enable price tier button", () => {
  inventoryDetailPage.clickEnablePriceTierButton();
});

When(
  "user types {string} on {string} price tier minimum quantity field",
  (input: string, order: string) => {
    inventoryDetailPage.typeUnitPriceTierMinimumQuantityInput(
      utils.convertOrdinalToCardinalNumber(order),
      input
    );
  }
);

When(
  "user types {string} on {string} price tier unit price field",
  (input: string, order: string) => {
    inventoryDetailPage.typeUnitPriceTierSellingPriceInput(
      utils.convertOrdinalToCardinalNumber(order),
      input
    );
  }
);

When("user clicks on add more price tier button", () => {
  inventoryDetailPage.clickUnitPriceTierAddMoreRowButton();
});

When("user clicks on save unit selling price button", () => {
  inventoryDetailPage.clickSaveUnitSellingPriceButton();
});

When("user clicks on submit add inventory button", (_input) => {
  inventoryDetailPage.clickSubmitAddInventoryButton();
});
// assertions

Then("user is redirected to inventory list page", (_expected) => {
  cy.wait(2000);
  cy.url().should("eq", inventoryDetailPage.baseUrl + "inventory/list");
});
