import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as utils from "./utils";
import PosPage from "../page_objects/pos";

const posPage = new PosPage();

When("user visits pos page", () => {
  posPage.navigate(posPage.path);
});

When("user searches for {string} on pos search input", (input: string) => {
  posPage.typeSearchProductInput(input);
  cy.get(posPage.searchProductInput).should("have.value", input);
  cy.wait(500);
});

When(
  "user clicks on inventory list decrement button of {string} unit {string}",
  (productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      posPage.clickDecrementInventoryButton(inventoryId);
    });
  }
);

When(
  "user adds {string} unit {string} to cart",
  (productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      posPage.clickAddInventoryButton(inventoryId);
    });
  }
);

When(
  "user removes {string} unit {string} from cart",
  (productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      posPage.clickDeleteCartItemButton(inventoryId);
    });
  }
);

When(
  "user types {string} on {string} unit {string} quantity input field on pos inventory list",
  (quantityInput: string, productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      posPage.typeInventoryNumberCartItemInput(inventoryId, quantityInput);
    });
  }
);

When(
  "user types {string} on {string} unit {string} quantity input field on pos shopping cart",
  (quantityInput: string, productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      posPage.typeInventoryNumberCartItemInput(inventoryId, quantityInput);
    });
  }
);

When("user clicks on secondary cart button", () => {
  posPage.clickSecondaryCartButton();
});

// transaction discount
When("user clicks on transaction discount flat toggle button", () => {
  posPage.clickTransactionDiscountFlatToggleButton();
});

When("user clicks on transaction discount percentage toggle button", () => {
  posPage.clickTransactionDiscountPercentageToggleButton();
});

When(
  "user types {string} on transaction discount amount input",
  (input: string) => {
    posPage.typeTransactionDiscountAmountInput(input);
  }
);

When(
  "user types {string} on transaction discount name input",
  (input: string) => {
    posPage.typeTransactionDiscountNameInput(input);
  }
);

When("user clicks on transaction discount submit button", () => {
  posPage.clickTransactionDiscountSubmitButton();
  cy.wait(500);
});

When("user clicks on checkout button", () => {
  posPage.clickPrimaryCheckoutButton();
});

// Assertions
Then(
  "{string} is displayed on {string} unit {string} on pos shopping cart",
  (cartQuantity: string, productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      cy.get(posPage.inventoryNumberCartItemInput + inventoryId).should(
        "have.value",
        cartQuantity
      );
    });
  }
);

Then(
  "{string} is displayed on {string} unit {string} on pos inventory list",
  (cartQuantity: string, productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      cy.get(posPage.inventoryNumberInput + inventoryId).should(
        "have.value",
        cartQuantity
      );
    });
  }
);

Then(
  "{string} unit {string} is not displayed on shopping cart",
  (productVariantName: string, productUnit: string) => {
    utils.retrieveInventoryId(productVariantName, productUnit);
    cy.get("@inventoryId").then((inventoryId: any) => {
      cy.get(posPage.inventoryNumberInput + inventoryId).should("not.exist");
    });
  }
);

Then("{string} is displayed", (input: string) => {
  cy.contains(input);
});

Then("{string} transaction discount is displayed", (input: string) => {
  cy.contains("Diskon Transaksi")
    .next()
    .should("contain.text", utils.numberWithSeparators(input));
});

Then("{string} tax excluded is displayed", (input: string) => {
  cy.contains("Pajak")
    .next()
    .should("contain.text", utils.numberWithSeparators(input));
});

Then("{string} total is displayed", (input: string) => {
  cy.contains("Total")
    .next()
    .should("contain.text", utils.numberWithSeparators(input));
});
