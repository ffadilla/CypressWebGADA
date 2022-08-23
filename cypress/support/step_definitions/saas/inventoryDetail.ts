import { Then, When } from "cypress-cucumber-preprocessor/steps";
import InventoryDetailPage from "../../../e2e/saas/page_objects/InventoryDetailPage";
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();
let uomName: string;
let principalName: string;
let categoryName: string;
let subcategoryName: string;
let brandName: string;
let customUomName: string;

When("SAAS - user clicks on expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
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
  }
);

When("SAAS - user types random brand name on brand searchbar input", () => {
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

When("SAAS - user clicks on add custom brand button", () => {
  inventoryDetailPage.clickAddCustomBrandButton();
});

When("SAAS - user clicks on brand back button", () => {
  inventoryDetailPage.clickBrandBackButton();
});

When("SAAS - user clicks on category and subcategory button", () => {
  inventoryDetailPage.clickCategoryAndSubcategoryButton();
});

When(
  "SAAS - user types random category name on category searchbar input",
  () => {
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
  }
);

When("SAAS - user clicks on add custom category button", () => {
  inventoryDetailPage.clickAddCustomCategoryButton();
});

When(
  "SAAS - user clicks on submit add custom category or subcategory modal button",
  () => {
    inventoryDetailPage.clickCustomCategoryAndSubcategoryModalSubmitButton();
    cy.get(inventoryDetailPage.subcategoryBackButton).should("be.visible");
  }
);

When(
  "SAAS - user types random subcategory name on subcategory searchbar input",
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

When("SAAS - user clicks on add custom subcategory button", () => {
  inventoryDetailPage.clickAddCustomSubcategoryButton();
});

When("SAAS - user clicks on subcategory back button", () => {
  inventoryDetailPage.clickSubcategoryBackButton();
});

When("SAAS - user types {string} on search unit field", (input) => {
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

When(
  "SAAS - user types recently created unit name on search unit field",
  () => {
    inventoryDetailPage.typeUnitSearch(customUomName);
  }
);

When("SAAS - user clicks on first stock unit checkbox", () => {
  cy.wait(1000);
  inventoryDetailPage.clickUnitCheckboxInput();
});

When("SAAS - user clicks on {string} unit checkbox", (uomName) => {
  if (uomName == "recently created") {
    uomName = customUomName;
  }
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
  });
});

When("SAAS - user clicks on add new unit button", () => {
  cy.get(inventoryDetailPage.addNewUnitButton)
    .children(".MuiButton-label")
    .children(".MuiTypography-root")
    .should("have.text", "Webautouom " + uomName);
  inventoryDetailPage.clickAddNewUnitButton();
  cy.wait(1500);
});

When("SAAS - user clicks on choose unit button", () => {
  inventoryDetailPage.clickChooseUnitButton();
});

When("SAAS - user clicks on sort up button of unit {string}", (uomName) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortUpButton(uomId);
  });
});

When("SAAS - user clicks on sort up button of recently created unit", () => {
  utils.retrieveUomId(customUomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortUpButton(uomId);
  });
});

When("SAAS - user clicks on sort down button of unit {string}", (uomName) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickUomConversionSortDownButton(uomId);
  });
});

When("SAAS - user clicks on uom conversion next step button", () => {
  inventoryDetailPage.clickUomConversionNextStepButton();
});

When(
  "SAAS - user types {string} on unit {string} conversion field",
  (input, uomName) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeUomConversion(uomId, input);
    });
  }
);

When(
  "SAAS - user types {string} on recently created unit conversion field",
  (input) => {
    utils.retrieveUomId(customUomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeUomConversion(uomId, input);
    });
  }
);

When("SAAS - user clicks on uom conversion save button", () => {
  inventoryDetailPage.clickUomConversionSaveButton();
});

When(
  "SAAS - user types {string} on {string} unit stock quantity field",
  (input, uomName) => {
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
  "SAAS - user types {string} on {string} unit price field",
  (input, uomName) => {
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

When("SAAS - user clicks on expand selling unit button", () => {
  inventoryDetailPage.clickExpandSellingUnitButton();
});

When(
  "SAAS - user clicks on add unit selling price button of {string} unit",
  (uomName) => {
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

When("SAAS - user clicks on add barcode button of {string} unit", (uomName) => {
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
  "SAAS - new principal is displayed on the principal list",
  (principalName) => {
    cy.contains("p", principalName);
  }
);

Then("SAAS - new brand is displayed on the brand list", (brandName) => {
  cy.contains("p", brandName);
});

Then(
  "SAAS - new category is displayed on the category list",
  (categoryName) => {
    cy.contains("p", categoryName);
  }
);

Then(
  "SAAS - new subcategory is displayed on the subcategory list",
  (subcategoryName) => {
    cy.contains("p", subcategoryName);
  }
);
