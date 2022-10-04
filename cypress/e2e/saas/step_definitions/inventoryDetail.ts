import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryDetailPage from "../../../e2e/saas/page_objects/InventoryDetailPage";
import * as utils from "./utils";

const inventoryDetailPage = new InventoryDetailPage();
let uomName: string;
let principalName: string;
let categoryName: string;
let subcategoryName: string;
let customUomName: string;

When("user clicks on expand stock unit button", () => {
  inventoryDetailPage.clickExpandStockUnitButton();
});

When("user types search unit field with {string}", (input: string) => {
  uomName = input;
  inventoryDetailPage.typeUnitSearch(uomName);
  cy.get(inventoryDetailPage.unitSearchInput).should("have.value", uomName);
});

When("user clicks on change product category and brand button", () => {
  inventoryDetailPage.clickChangeProductBrandAndCategoryButton();
});

When("user clicks on principal and brand button", () => {
  inventoryDetailPage.clickPrincipalAndBrandButton();
});

When("user types random principal name on principal searchbar input", () => {
  principalName = utils.generateRandomString(5);
  inventoryDetailPage.typePrincipalSearchbarInput(
    "Web Automation Principal " + principalName
  );

  cy.get(inventoryDetailPage.principalSearchbarInput).should(
    "have.value",
    "Web Automation Principal " +
      principalName.charAt(0).toUpperCase() +
      principalName.slice(1)
  );
  cy.get(
    inventoryDetailPage.addCustomPrincipalButton +
      " > .MuiButton-label > .MuiTypography-root"
  ).should(
    "include.text",
    "Web Automation Principal " +
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
  let brandName = utils.generateRandomString(5);
  inventoryDetailPage.typeBrandSearchbarInput(
    "Web Automation Brand " + brandName
  );

  cy.get(inventoryDetailPage.brandSearchbarInput).should(
    "have.value",
    "Web Automation Brand " +
      brandName.charAt(0).toUpperCase() +
      brandName.slice(1)
  );
  cy.get(
    inventoryDetailPage.addCustomBrandButton +
      " > .MuiButton-label > .MuiTypography-root"
  ).should(
    "include.text",
    "Web Automation Brand " +
      brandName.charAt(0).toUpperCase() +
      brandName.slice(1)
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
  inventoryDetailPage.typeCategorySearchbarInput(
    "Web Automation Category " + categoryName
  );

  cy.get(inventoryDetailPage.categorySearchbarInput).should(
    "have.value",
    "Web Automation Category " +
      categoryName.charAt(0).toUpperCase() +
      categoryName.slice(1)
  );
  cy.get(
    inventoryDetailPage.addCustomCategoryButton +
      " > .MuiButton-label > .MuiTypography-root"
  ).should(
    "include.text",
    "Web Automation Category " +
      categoryName.charAt(0).toUpperCase() +
      categoryName.slice(1)
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
      "Web Automation Subcategory " + subcategoryName
    );

    cy.get(inventoryDetailPage.subcategorySearchbarInput).should(
      "have.value",
      "Web Automation Subcategory " +
        subcategoryName.charAt(0).toUpperCase() +
        subcategoryName.slice(1)
    );
    cy.get(
      inventoryDetailPage.addCustomSubcategoryButton +
        " > .MuiButton-label > .MuiTypography-root"
    ).should(
      "include.text",
      "Web Automation Subcategory " +
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
  if (input.toLowerCase() === "random") {
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
    cy.get(inventoryDetailPage.unitSearchInput).should("have.value", uomName);
  }
  cy.get(inventoryDetailPage.clearUomSearchButton).should("be.visible");
});

When("user types recently created unit name on search unit field", () => {
  inventoryDetailPage.typeUnitSearch(customUomName);
  cy.get(inventoryDetailPage.unitSearchInput).should(
    "have.value",
    customUomName
  );
  cy.get(inventoryDetailPage.clearUomSearchButton).should("be.visible");
});

When("user clicks on update stock card ubah button", () => {
  inventoryDetailPage.clickInventoryEditStockCardUbahButton();
});

When("user clicks on tambah stok baru button", () => {
  cy.wait(1000);
  inventoryDetailPage.clickTambahStokBaruButton();
});

When("user clicks on tambah stok baru uom popover button", () => {
  inventoryDetailPage.clickTambahStokBaruUomPopoverButton();
});

When(
  "user types {string} on tambah stok baru stok masuk input field of unit {string}",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeTambahStokBaruStokMasukInput(uomId, input);
      cy.get(inventoryDetailPage.tambahStokBaruStokMasukInput + uomId).should(
        "have.value",
        utils.numberWithSeparators(input)
      );
    });
  }
);

When(
  "user types {string} on tambah stok baru cogs input field of unit {string}",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeTambahStokBaruCogsInput(uomId, input);
      cy.get(inventoryDetailPage.tambahStokBaruCogsInput + uomId).should(
        "have.value",
        "Rp " + utils.numberWithSeparators(input)
      );
    });
  }
);

When("user clicks on tambah stok baru submit button", () => {
  inventoryDetailPage.clickTambahStokBaruSubmitButton();
  cy.wait(1000);
});

When("user clicks on tambah stok baru close modal button", () => {
  inventoryDetailPage.clickTambahStokBaruCloseModalButton();
});

When("user clicks on hitung ulang stok button", () => {
  inventoryDetailPage.clickHitungUlangStokButton();
});

When(
  "user types {string} on good stock input field of unit {string}",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeGoodStockInput(uomId, input);
    });
  }
);

When(
  "user types {string} on bad stock kadaluwarsa input field of unit {string}",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeBadStockKadaluwarsaInput(uomId, input);
    });
  }
);

When(
  "user types {string} on bad stock rusak input field of unit {string}",
  (input: string, uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeBadStockRusakInput(uomId, input);
    });
  }
);

When("user clicks on hitung ulang stok submit button", () => {
  inventoryDetailPage.clickHitungUlangStokSubmitButton();
  cy.wait(600);
});

When("user clicks on first stock unit checkbox", () => {
  cy.wait(1000);
  inventoryDetailPage.clickUnitCheckboxInput();
});

When("user clicks on {string} unit checkbox", (uomName: string) => {
  if (uomName === "recently created") {
    uomName = customUomName;
  }
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    inventoryDetailPage.clickSpecificUnitCheckbox(uomId);
  });
});

When("user clicks on add new unit button", () => {
  cy.wait(1500);
  cy.get(inventoryDetailPage.addNewUnitButton)
    .children(".MuiButton-label")
    .children(".MuiTypography-root")
    .should("have.text", "Webautouom " + uomName);
  inventoryDetailPage.clickAddNewUnitButton();
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
      cy.get(inventoryDetailPage.uomConversionInput + uomId).should(
        "have.value",
        input
      );
    });
  }
);

When(
  "user types {string} on recently created unit conversion field",
  (input: string) => {
    utils.retrieveUomId(customUomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.typeUomConversion(uomId, input);
      cy.get(inventoryDetailPage.uomConversionInput + uomId).should(
        "have.value",
        input
      );
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
          cy.get(inventoryDetailPage.unitStockQuantityInput + uomId).should(
            "have.value",
            input
          );
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitStockQuantity(uomId, input);
          cy.get(inventoryDetailPage.unitStockQuantityInput + uomId).should(
            "have.value",
            input
          );
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
          cy.get(inventoryDetailPage.unitPriceInput + uomId).should(
            "have.value",
            "Rp " + utils.numberWithSeparators(input)
          );
        });
        break;
      default:
        utils.retrieveUomId(uomName);
        cy.get("@uomId").then((uomId: any) => {
          inventoryDetailPage.typeUnitPrice(uomId, input);
          cy.get(inventoryDetailPage.unitPriceInput + uomId).should(
            "have.value",
            "Rp " + utils.numberWithSeparators(input)
          );
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
  cy.get(inventoryDetailPage.unitSellingPriceInput).should(
    "have.value",
    "Rp " + utils.numberWithSeparators(input)
  );
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
    cy.get(
      inventoryDetailPage.unitPriceTierMinimumQuantityInput +
        utils.convertOrdinalToCardinalNumber(order)
    ).should("have.value", input);
  }
);

When(
  "user types {string} on {string} price tier unit price field",
  (input: string, order: string) => {
    inventoryDetailPage.typeUnitPriceTierSellingPriceInput(
      utils.convertOrdinalToCardinalNumber(order),
      input
    );
    cy.get(
      inventoryDetailPage.unitPriceTierSellingPriceInput +
        utils.convertOrdinalToCardinalNumber(order)
    ).should("have.value", "Rp " + utils.numberWithSeparators(input));
  }
);

When("user clicks on add more price tier button", () => {
  inventoryDetailPage.clickUnitPriceTierAddMoreRowButton();
});

When("user clicks on save unit selling price button", () => {
  inventoryDetailPage.clickSaveUnitSellingPriceButton();
  cy.wait(500);
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

When(
  "user clicks on edit selling price button of unit {string}",
  (uomName: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      inventoryDetailPage.clickEditSellingPriceButton(uomId);
    });
  }
);

When("user clicks on is consign toggle button", () => {
  inventoryDetailPage.clickIsConsignedToggleButton();
});

When("user clicks on choose supplier button", () => {
  inventoryDetailPage.clickChooseSupplierButton();
});

When("user types {string} on input supplier search modal", (input: string) => {
  inventoryDetailPage.typeSupplierSearchModalInput(input);
});

When("user clicks on {string} supplier checkbox", (supplierName: string) => {
  utils.retrieveSupplierId(supplierName);
  cy.get("@supplierId").then((supplierId: any) => {
    cy.get("input[value='" + supplierId + "']").click();
  });
});

When("user clicks on supplier modal close button", () => {
  inventoryDetailPage.clickSupplierModalCloseButton();
});

When("user clicks on submit add inventory button", () => {
  inventoryDetailPage.clickSubmitAddInventoryButton();
});

When("user clicks on delete inventory button", () => {
  inventoryDetailPage.clickDeleteInventoryButton();
});

When("user clicks on delete reason = {string}", (input: string) => {
  switch (input) {
    case "wrong input":
      cy.get("input[value='MISTAKE']").click();
      break;
    case "other":
      cy.get("input[value='OTHER']").click();
      break;
  }
});

When("user clicks on confirm delete inventory button", () => {
  cy.get(
    ".MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label"
  ).click();
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

Then("cogs of unit {string} is {string}", (uomName: string, input: string) => {
  utils.retrieveUomId(uomName);
  cy.get("@uomId").then((uomId: any) => {
    cy.get("#p_stock_card_harga_modal_rata_rata_per_unit_" + uomId).should(
      "contain",
      utils.numberWithSeparators(input)
    );
  });
});

Then(
  "selling price of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      expect(
        cy
          .get("#p_selling_card_price_tier_price_unit_price_" + uomId + "_0")
          .contains("Rp " + utils.numberWithSeparators(input))
      );
      // cy.get("#p_selling_card_price_tier_price_unit_price_"+uomId+"_0").should('text',"Rp " + utils.numberWithSeparators(input));
    });
  }
);

Then(
  "bisa dijual of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get("#td_selling_card_bisa_dijual_" + uomId).should(
        "have.text",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then(
  "good stock of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(inventoryDetailPage.goodStockText + uomId).should(
        "have.text",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then(
  "bad stock of unit {string} is updated to {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(inventoryDetailPage.badStockText + uomId).should(
        "have.text",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then(
  "total stok fisik of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(inventoryDetailPage.totalStokFisikText + uomId).should(
        "have.text",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then("total good stock of the product is {string}", (input: string) => {
  cy.get(inventoryDetailPage.totalGoodStockText).should("have.text", input);
});

Then(
  "total good stock yang sedang dipesan of the product is {string}",
  (input: string) => {
    cy.get(inventoryDetailPage.totalGoodStockYangSedangDipesanText).should(
      "have.text",
      input
    );
  }
);

Then(
  "total good stock yang bisa dijual of the product is {string}",
  (input: string) => {
    cy.get(inventoryDetailPage.totalGoodStockYangBisaDijualText).should(
      "have.text",
      input
    );
  }
);

Then("lainnya text is not displayed", () => {
  cy.get("#text_lainnya").should("not.exist");
});

Then("is consign toggle button is not displayed", () => {
  cy.get(inventoryDetailPage.isConsignedToggleButton).should("not.exist");
});

Then("is consign toggle button is displayed", () => {
  cy.get(inventoryDetailPage.isConsignedToggleButton).should("exist");
  cy.get(inventoryDetailPage.isConsignedToggleButton).should("be.disabled");
});

Then("delete inventory options are not displayed", () => {
  cy.get("input[value='MISTAKE']").should("not.exist");
  cy.get("input[value='OTHER']").should("not.exist");
});

Then(
  "current good stock of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(inventoryDetailPage.currentGoodStockInput + uomId).should(
        "have.value",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then(
  "current bad stock kadaluwarsa of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(
        inventoryDetailPage.currentBadStockKadaluwarsaInput + uomId
      ).should("have.value", utils.numberWithSeparators(input));
    });
  }
);

Then(
  "current bad stock rusak of unit {string} is {string}",
  (uomName: string, input: string) => {
    utils.retrieveUomId(uomName);
    cy.get("@uomId").then((uomId: any) => {
      cy.get(inventoryDetailPage.currentBadStockRusakInput + uomId).should(
        "have.value",
        utils.numberWithSeparators(input)
      );
    });
  }
);

Then("user is redirected to create purchase transaction page", () => {
  cy.url().should("eq", inventoryDetailPage.baseUrl + "purchase/add");
});

Then("restock button text is {string}", (input: string) => {
  cy.get(inventoryDetailPage.tambahStokBaruButton).should("contain", input);
});
