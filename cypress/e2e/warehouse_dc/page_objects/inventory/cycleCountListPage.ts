import MainPage from "../../../warehouse_core/page_objects/mainPage";

export default class CycleCountListPage extends MainPage {
  /**
   * Put the variables below.
   * If the objetcs are commonly used,
   * then move them to the warehouse_core/page_objects.
   */
  path = "/inventory/cycle-count";
  addNewTaskButton = "button[data-testid='so_add_new_task']";
  inspectionDate = "p[data-testid='so_list[index].inspection_date']";
  createNewTaskModal = {
    storeTextboxXPath: "//input[@placeholder='Pilih toko']",
    warehouseLocationTextboxXPath:
      "//input[@placeholder='Pilih lokasi gudang']",
    productComboboxXPath: "(//input[@role='combobox'])[5]",
    selectProductDropdown: "li[role=option][data-option-index='{index}']",
    saveButtonXPath: "//button[text()='Simpan']",
  };

  /**
   * Put the functions below.
   * If the functions are commonly used,
   * then move them to the warehouse_core/component_objects.
   */

  getAPIsList() {
    this.getCycleCountTaskListAPI();
    this.getProductVariantListAPI();
    this.getCycleCountCreateTaskAPI();
    this.getCycleCountDetailAPI();
  }

  getCycleCountTaskListAPI() {
    cy.intercept("GET", "/cycle-count-bin/tasks/list/?*").as(
      "cycleCountTaskListAPI"
    );
  }

  waitForListToBeRendered() {
    cy.wait("@cycleCountTaskListAPI")
      .its("response")
      .then((res: any) => {
        expect(res.statusCode).to.equal(200);
        if (res.body.total !== 0) {
          let firstIndex = this.inspectionDate.replace("index", "0");
          cy.get(firstIndex).should("be.visible");
        }
      });
  }

  getProductVariantListAPI() {
    cy.intercept("GET", "/inventory/product-variant-list/?*").as(
      "productVariantListAPI"
    );
  }

  waitAndGetProductVariantListAPIResponse() {
    cy.wait("@productVariantListAPI")
      .its("response")
      .as("productVariantListResponse");
  }

  getCycleCountCreateTaskAPI() {
    cy.intercept("POST", "/cycle-count-bin/tasks/create/").as(
      "cycleCountCreateTaskAPI"
    );
  }

  getCycleCountDetailAPI() {
    cy.intercept("GET", "/cycle-count-bin/tasks/*/detail/").as(
      "cycleCountDetailAPI"
    );
  }

  clickAddNewTask() {
    cy.get(this.addNewTaskButton).click();
  }

  selectWarehouseLocation(value: string) {
    cy.wrap(value).as("selectedWarehouseLocation");
    cy.xpath(this.createNewTaskModal.warehouseLocationTextboxXPath)
      .click()
      .type(value + "{enter}");
  }

  selectStore(value: string) {
    cy.wrap(value).as("selectedStore");
    cy.xpath(this.createNewTaskModal.storeTextboxXPath)
      .click()
      .type(value + "{enter}");
  }

  selectProductVariant(index: number) {
    cy.get("@productVariantListResponse").then((res: any) => {
      let temp = res.body[index].product_variant_name;
      cy.wrap(temp).as("selectedProductVariant");
      cy.xpath(this.createNewTaskModal.productComboboxXPath).click().type(temp);
      let firstIndex = this.createNewTaskModal.selectProductDropdown.replace(
        "{index}",
        "0"
      );
      cy.get(firstIndex).click();
    });
  }

  clickSaveTask() {
    cy.xpath(this.createNewTaskModal.saveButtonXPath).click();
  }

  assertUserIsInCycleCountListPage() {
    cy.url().should("include", this.path);
  }
}
