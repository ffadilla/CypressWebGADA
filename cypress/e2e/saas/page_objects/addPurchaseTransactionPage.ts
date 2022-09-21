import BasePage from "./basePage";

export default class AddPurchaseTransactionPage extends BasePage {
  path = "purchase/add";

  // common
  visitAddPurchaseTransactionPage() {
    cy.viewport(1200, 800);
    cy.visit(this.baseUrl + this.path);
  }
}
