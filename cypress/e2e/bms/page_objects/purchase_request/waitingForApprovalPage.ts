import BaseCommands from "../../common/baseCommands";

const base = new BaseCommands();

export default class WaitingForApprovalPage extends BaseCommands {
  path = "purchaseRequest/waitingForApproval";

  visitWaitingForApprovalPage() {
    base.navigate(this.path);
  }
}
