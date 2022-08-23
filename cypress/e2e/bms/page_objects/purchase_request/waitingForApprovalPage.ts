import BasePage from "../basePage";

const basePage = new BasePage();

export default class WaitingForApprovalPage extends BasePage {
  path = "purchaseRequest/waitingForApproval";

  visitWaitingForApprovalPage() {
    basePage.navigate(this.path);
  }
}
