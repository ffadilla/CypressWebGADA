import BasePage from "../basePage";

export default class ListAllRequestPage extends BasePage {
  path = "purchaseRequest/listAllRequest";
  purchaseRequestCard = ".MuiCard-root";

  clickPurchaseRequestCard(index: number) {
    cy.get(this.purchaseRequestCard).eq(index).click();
  }
}
