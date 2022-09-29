import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as utils from "./utils";
import PosPage from "../page_objects/pos";

const posPage = new PosPage();

When("user visits pos page", () => {
  posPage.visitPos();
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

Then("stok tidak cukup message displayed", () => {
  cy.contains("Stok Tidak Cukup");
});
