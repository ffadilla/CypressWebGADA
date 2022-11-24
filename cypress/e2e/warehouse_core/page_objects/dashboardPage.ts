import MainPage from "../../warehouse_core/page_objects/mainPage";

export default class DashboardPage extends MainPage {
  path = "dashboard";

  visitDashboard() {
    this.navigate(this.path);
  }
}
