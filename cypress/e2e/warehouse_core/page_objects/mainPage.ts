import { wmsType } from "../../utils/gadaConfig";
import { ConfigData } from "../common/helper";
import Header from "../component_objects/header";
import Sidebar from "../component_objects/sidebar";

export default class MainPage {
  configData: ConfigData;
  sidebar: Sidebar;
  header: Header;

  constructor(type: wmsType) {
    this.configData = new ConfigData(type);
    this.sidebar = new Sidebar(this.configData);
    this.header = new Header(this.configData);
  }

  navigate(path: string) {
    cy.visit(this.configData.baseUrl + path);
  }
}
