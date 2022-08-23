import BasePage from "../basePage";

const basePage = new BasePage();

export default class ListAllRequestPage extends BasePage {
  path = "purchaseRequest/listAllRequest";
  purchaseRequestCard = ".MuiCard-root";

  visitListAllRequestPage() {
    basePage.navigate(this.path);
  }

  clickPurchaseRequestCard(index: number) {
    cy.get(this.purchaseRequestCard).eq(index).click();
  }
}
