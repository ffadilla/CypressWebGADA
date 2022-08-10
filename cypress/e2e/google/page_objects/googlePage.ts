import BasePage from "./basePage";

export default class googlePage extends BasePage {
  mainTextField = ".gLFyf";

  typeInMainForm(txt: string) {
    cy.get(this.mainTextField).type(txt);
  }
}
