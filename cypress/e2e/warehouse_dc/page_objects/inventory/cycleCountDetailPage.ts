import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class CycleCountDetailPage extends MainPage {
  /**
   * Put the variables below.
   * If the objetcs are commonly used,
   * then move them to the warehouse_core/page_objects.
   */
  path = "/inventory/cycle-count/detail";
  headers = {
    warehouseLocation: "p[data-testid='warehouse_location']",
    store: "p[data-testid='store_name']",
  };
  items = {
    expiryDate: "div[data-testid='items[index].expiry_date']",
    productName: "div[data-testid='items[index].item_name']",
  };

  /**
   * Put the functions below.
   * If the functions are commonly used,
   * then move them to the warehouse_core/component_objects.
   */

  waitForDetailToBeRendered() {
    cy.wait("@cycleCountCreateTaskAPI")
      .its("response")
      .then((res: any) => {
        cy.wrap(res.body.id).as("detailID");
        if (res.statusCode === 200) {
          let firstIndex = this.items.expiryDate.replace("index", "0");
          cy.get(firstIndex).should("be.visible");
        }
      });
  }

  waitAndGetCycleCountDetailAPIResponse() {
    cy.wait("@cycleCountDetailAPI")
      .its("response")
      .as("cycleCountDetailResponse");
  }

  assertUserIsInCycleCountDetailPage() {
    cy.get("@detailID").then((detailID: any) => {
      cy.url().should("include", this.path + "?id=" + detailID);
    });
  }

  assertWarehouseLocationIsCorrect() {
    cy.get("@selectedWarehouseLocation").then(
      (selectedWarehouseLocation: any) => {
        cy.get(this.headers.warehouseLocation).should(
          "have.text",
          selectedWarehouseLocation
        );
      }
    );
  }

  assertStoreIsCorrect() {
    cy.get("@selectedStore").then((selectedStore: any) => {
      cy.get(this.headers.store).should("have.text", selectedStore);
    });
  }

  assertProductNameIsCorrect() {
    cy.get("@cycleCountDetailResponse").then((res: any) => {
      cy.get("@selectedProductVariant").then((selectedProductVariant: any) => {
        for (let i = 0; i < res.body.task_items.length; i++) {
          let index = this.items.productName.replace("index", i.toString());
          cy.get(index).should("have.text", selectedProductVariant);
        }
      });
    });
  }

  assertSingleProductVariantIsCorrect() {
    this.assertWarehouseLocationIsCorrect();
    this.assertStoreIsCorrect();
    this.assertProductNameIsCorrect();
  }
}
