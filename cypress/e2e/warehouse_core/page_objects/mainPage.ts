import { ConfigData } from "../common/helper";
import Header from "../component_objects/header";
import Sidebar from "../component_objects/sidebar";

export default class MainPage {
  configData = new ConfigData("mitra");
  sidebar = new Sidebar(this.configData);
  header = new Header(this.configData);

  navigate(path: string) {
    cy.visit(this.configData.baseUrl + path);
  }
}
