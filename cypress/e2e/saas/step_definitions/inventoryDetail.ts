import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryDetailPage from "../../../e2e/saas/page_objects/InventoryDetailPage";
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();
let uomName: string;
let principalName: string;
let categoryName: string;
let subcategoryName: string;
let brandName: string;
let customUomName: string;

When("user clicks on expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
});

When("user types search unit field with {string}", (input: string) => {
  uomName = input;
  inventoryDetailPage.typeUnitSearch(uomName);
});

When("user clicks on principal and brand button", () => {
  inventoryDetailPage.clickPrincipalAndBrandButton();
});

When("user types random principal name on principal searchbar input", () => {
  principalName = utils.generateRandomString(5);
  inventoryDetailPage.typePrincipalSearchbarInput("Principal " + principalName);

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
});

When("user clicks on add custom principal button", () => {
  inventoryDetailPage.clickAddCustomPrincipalButton();
});

When("user clicks on submit add custom principal or brand modal button", () => {
  inventoryDetailPage.clickCustomPrincipalAndBrandModalSubmitButton();
  cy.get(inventoryDetailPage.brandBackButton).should("be.visible");
});

When("user types random brand name on brand searchbar input", () => {
  brandName = utils.generateRandomString(5);
  inventoryDetailPage.typeBrandSearchbarInput("Brand " + brandName);

  cy.get(inventoryDetailPage.brandSearchbarInput).should(
    "have.value",
    "Brand " + brandName.charAt(0).toUpperCase() + brandName.slice(1)
  );
  cy.get(
    inventoryDetailPage.addCustomBrandButton +
      " > .MuiButton-label > .MuiTypography-root"
  ).should(
    "include.text",
    "Brand " + brandName.charAt(0).toUpperCase() + brandName.slice(1)
  );
});

When("user clicks on add custom brand button", () => {
  inventoryDetailPage.clickAddCustomBrandButton();
});

When("user clicks on brand back button", () => {
  inventoryDetailPage.clickBrandBackButton();
});

When("user clicks on category and subcategory button", () => {
  inventoryDetailPage.clickCategoryAndSubcategoryButton();
});

When("user types random category name on category searchbar input", () => {
  categoryName = utils.generateRandomString(5);
  inventoryDetailPage.typeCategorySearchbarInput("Category " + categoryName);

  cy.get(inventoryDetailPage.categorySearchbarInput).should(
    "have.value",
    "Category " + categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  );
  cy.get(
    inventoryDetailPage.addCustomCategoryButton +
      " > .MuiButton-label > .MuiTypography-root"
  ).should(
    "include.text",
    "Category " + categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
  );
});

When("user clicks on add custom category button", () => {
  inventoryDetailPage.clickAddCustomCategoryButton();
});

When(
  "user clicks on submit add custom category or subcategory modal button",
  () => {
    inventoryDetailPage.clickCustomCategoryAndSubcategoryModalSubmitButton();
    cy.get(inventoryDetailPage.subcategoryBackButton).should("be.visible");
  }
);

When(
  "user types random subcategory name on subcategory searchbar input",
  () => {
    subcategoryName = utils.generateRandomString(5);
    inventoryDetailPage.typeSubcategorySearchbarInput(
      "Subcategory " + subcategoryName
    );

    cy.get(inventoryDetailPage.subcategorySearchbarInput).should(
      "have.value",
      "Subcategory " +
        subcategoryName.charAt(0).toUpperCase() +
        subcategoryName.slice(1)
    );
    cy.get(
      inventoryDetailPage.addCustomSubcategoryButton +
        " > .MuiButton-label > .MuiTypography-root"
    ).should(
      "include.text",
      "Subcategory " +
        subcategoryName.charAt(0).toUpperCase() +
        subcategoryName.slice(1)
    );
  }
);

When("user clicks on add custom subcategory button", () => {
  inventoryDetailPage.clickAddCustomSubcategoryButton();
});

When("user clicks on subcategory back button", () => {
  inventoryDetailPage.clickSubcategoryBackButton();
});

When("user types {string} on search unit field", (input: string) => {
  if (input.toLowerCase() == "random") {
    uomName = utils.generateRandomString(5);
    customUomName = uomName;
    inventoryDetailPage.typeUnitSearch("WebAutoUOM " + uomName);
    cy.get(inventoryDetailPage.unitSearchInput).should(
      "have.value",
      "WebAutoUOM " + uomName
    );
  } else {
    uomName = input;
    inventoryDetailPage.typeUnitSearch(uomName);
  }
});

When("user types recently created unit name on search unit field", () => {
  inventoryDetailPage.typeUnitSearch(customUomName);
});

When("user clicks on first stock unit checkbox", () => {
  cy.wait(1000);
  inventoryDetailPage.clickUnitCheckboxInput();
});

When("user clicks on {string} unit checkbox", (uomName: string) => {
  if (uomName == "recently created") {
    uomName = customUomName;
  }
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
  });
});

When("user clicks on add new unit button", () => {
  cy.get(inventoryDetailPage.addNewUnitButton)
    .children(".MuiButton-label")
    .children(".MuiTypography-root")
    .should("have.text", "Webautouom " + uomName);
  inventoryDetailPage.clickAddNewUnitButton();
  cy.wait(1500);
});

When("user clicks on choose unit button", () => {
  inventoryDetailPage.clickChooseUnitButton();
});

When("user clicks on sort up button of unit {string}", (uomName: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortUpButton(uomId);
  });
});

When("user clicks on sort up button of recently created unit", () => {
  utils.retrieveUomId(customUomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortUpButton(uomId);
  });
});

When("user clicks on sort down button of unit {string}", (uomName: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortDownButton(uomId);
  });
});

When("user clicks on uom conversion next step button", () => {
  inventoryDetailPage.clickUomConversionNextStepButton();
});

When(
  "user types {string} on unit {string} conversion field",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeUomConversion(uomId, input);
    });
  }
);

When(
  "user types {string} on recently created unit conversion field",
  (input: string) => {
    utils.retrieveUomId(customUomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeUomConversion(uomId, input);
    });
  }
);

When("user clicks on uom conversion save button", () => {
  inventoryDetailPage.clickUomConversionSaveButton();
});

When(
  "user types {string} on {string} unit stock quantity field",
  (input: string, uomName: string) => {
    switch (uomName) {
      case "recently created":
        utils.retrieveUomId(customUomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitStockQuantity(uomId, input);
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitStockQuantity(uomId, input);
        });
    }
  }
);

When(
  "user types {string} on {string} unit price field",
  (input: string, uomName: string) => {
    switch (uomName) {
      case "recently created":
        utils.retrieveUomId(customUomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitPrice(uomId, input);
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitPrice(uomId, input);
        });
    }
  }
);

When("user clicks on expand selling unit button", () => {
  inventoryDetailPage.clickExpandSellingUnitButton();
});

When(
  "user clicks on add unit selling price button of {string} unit",
  (uomName: string) => {
    switch (uomName) {
      case "recently created":
        utils.retrieveUomId(customUomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId);
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.clickAddSpecificUnitSellingPriceButton(uomId);
        });
    }
  }
);

When("user types {string} on unit selling price field", (input: string) => {
  inventoryDetailPage.typeUnitSellingPrice(input);
});

When("user clicks on enable price tier button", () => {
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

When(
  "user clicks on add barcode button of {string} unit",
  (uomName: string) => {
    switch (uomName) {
      case "recently created":
        utils.retrieveUomId(customUomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.clickAddBarcodeButton(uomId);
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.clickAddBarcodeButton(uomId);
        });
    }
  }
);

When("user clicks on input barcode manually button", () => {
  inventoryDetailPage.clickInputBarcodeManuallyButton();
});

When("user types {string} on barcode modal", (input: string) => {
  inventoryDetailPage.typeBarcodeValue(input);
  cy.get(inventoryDetailPage.barcodeValueInput).should("have.value", input);
  cy.get(inventoryDetailPage.saveBarcodeButton).should("not.be.disabled");
});

When("user clicks on save barcode button", () => {
  inventoryDetailPage.clickSaveBarcodeButton();
});

When("user clicks on submit add inventory button", () => {
  inventoryDetailPage.clickSubmitAddInventoryButton();
});

// assertions

Then("user is redirected to inventory list page", () => {
  cy.url().should("eq", inventoryDetailPage.baseUrl + "inventory/list");
});

Then(
  "new principal is displayed on the principal list",
  (principalName: string) => {
    cy.contains("p", principalName);
  }
);

Then("new brand is displayed on the brand list", (brandName: string) => {
  cy.contains("p", brandName);
});

Then(
  "new category is displayed on the category list",
  (categoryName: string) => {
    cy.contains("p", categoryName);
  }
);

Then(
  "new subcategory is displayed on the subcategory list",
  (subcategoryName: string) => {
    cy.contains("p", subcategoryName);
  }
);
