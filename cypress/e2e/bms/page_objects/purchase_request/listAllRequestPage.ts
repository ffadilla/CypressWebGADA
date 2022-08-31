import BaseCommands from "../../common/baseCommands";

const base = new BaseCommands();

export default class ListAllRequestPage extends BaseCommands {
  path = "purchaseRequest/listAllRequest";
  selectors = {
    purchaseRequestCard: ".MuiCard-root",
  };

  clickPurchaseRequestCard(index: number) {
    base.click(this.selectors.purchaseRequestCard, index);
  }
}
