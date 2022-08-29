import BaseCommads from "../../common/baseCommads";

const base = new BaseCommads();

export default class WaitingForApprovalPage extends BaseCommads {
  path = "purchaseRequest/waitingForApproval";

  visitWaitingForApprovalPage() {
    base.navigate(this.path);
  }
}
