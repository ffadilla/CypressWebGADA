import BasePage from "./basePage";

export default class DashboardPage extends BasePage {
  path = "dashboard";

  visitDashboard() {
    this.navigate(this.path);
  }
}
