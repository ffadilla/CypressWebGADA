import BaseCommads from "../../common/baseCommads";

const base = new BaseCommads();

export default class ListAllRequestPage extends BaseCommads {
  path = "purchaseRequest/listAllRequest";
  seletors = {
    purchaseRequestCard: ".MuiCard-root",
  };

  visitListAllRequestPage() {
    base.navigate(this.path);
  }

  clickPurchaseRequestCard(index: number) {
    base.click(this.seletors.purchaseRequestCard, index);
  }
}
